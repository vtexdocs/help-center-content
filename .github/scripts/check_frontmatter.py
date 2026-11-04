import os
import sys
from github import Auth, Github
import yaml
import re
import json

# Get environment variables
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
GITHUB_REPOSITORY = os.getenv('GITHUB_REPOSITORY')
GITHUB_EVENT_PATH = os.getenv('GITHUB_EVENT_PATH')
GITHUB_SERVER_URL = os.getenv('GITHUB_SERVER_URL', 'https://github.com')
GITHUB_RUN_ID = os.getenv('GITHUB_RUN_ID')

if not (GITHUB_TOKEN and GITHUB_REPOSITORY and GITHUB_EVENT_PATH):
    print('Missing required environment variables.')
    sys.exit(1)

# Load event data
event = {}
with open(GITHUB_EVENT_PATH, 'r') as f:
    event = json.load(f)

pr_number = event.get('pull_request', {}).get('number')
if not pr_number:
    print('Not a pull request event.')
    sys.exit(0)

g = Github(auth=Auth.Token(GITHUB_TOKEN))
repo = g.get_repo(GITHUB_REPOSITORY)
pr = repo.get_pull(pr_number)

# Fixed marker used to identify the frontmatter review comment
COMMENT_MARKER = "<!-- frontmatter-review-comment -->"

# Commit being reviewed
head_sha = pr.head.sha

def plural_list(list):
    return 's' if len(list) != 1 else ''

def get_third_level_folder(path):
    # docs/<locale>/<third_level>/...
    parts = path.split('/')
    return parts[2] if len(parts) > 2 else None

# Get changed Markdown files in the PR (only in 'docs/pt', 'docs/en', and 'docs/es' folders)
# Skip files deleted in the PR: they don't exist at head_sha, so get_contents would raise a 404
changed_files = [f for f in pr.get_files() if (
    f.status != 'removed'
    and f.filename.endswith(('.md', '.mdx'))
    and f.filename.startswith(('docs/pt/', 'docs/en/', 'docs/es/'))
)]

print(f"Found {len(changed_files)} markdown file{plural_list(changed_files)} in PR:")

tree = repo.get_git_tree(head_sha, recursive=True).tree

en_section_slugs = {}
for item in tree:
    if item.type != "blob":
        continue
    path = item.path
    if not path.startswith("docs/en/"):
        continue
    if not (path.endswith(".md") or path.endswith(".mdx")):
        continue

    parts = path.split("/")
    if len(parts) < 4:
        continue

    section = parts[2]
    slug = os.path.splitext(os.path.basename(path))[0]
    en_section_slugs.setdefault(section, set()).add(slug)

error_found = False
warning_found = False
frontmatters = {}
file_issues = {}  # filename -> {"generic": [...], "fields": [...]}
filename_regex = re.compile(r'^[a-z0-9\-]+\.(md|mdx)$')

for f in changed_files:
    print(f"- {f.filename}")
    content = repo.get_contents(f.filename, ref=head_sha)
    text = content.decoded_content.decode('utf-8')
    generic_errors = []
    field_errors = []

    basename = os.path.basename(f.filename)

    if not filename_regex.match(basename):
        file_issues[f.filename] = {
            "generic": [{
                "severity": "error",
                "message": "Filename contains invalid characters. Use only lowercase letters (a-z), numbers (0-9) and hyphens (-). Accents and special characters are not allowed."
            }],
            "fields": [],
        }
        error_found = True
        continue

    # Extract frontmatter
    if text.startswith('---'):
        end = text.find('\n---', 3)
        if end != -1:
            frontmatter = text[3:end+1].strip()
            try:
                fm_dict = yaml.safe_load(frontmatter)
                if not isinstance(fm_dict, dict):
                    generic_errors.append({"severity": "error", "message": f"Frontmatter in '{f.filename}' is not a valid YAML dictionary."})
                    error_found = True
                    fm_dict = {}
            except Exception as e:
                generic_errors.append({"severity": "error", "message": f"Failed to parse YAML frontmatter: {e}"})
                error_found = True
                fm_dict = {}

            print(fm_dict)
            frontmatters[f.filename] = fm_dict

            # Announcements use a locale-specific synopsis field (docs/<locale>/announcements/...)
            locale = f.filename.split('/')[1]
            is_announcement = get_third_level_folder(f.filename) == 'announcements'
            synopsis_field = f"announcementSynopsis{locale.upper()}"

            # Validate formatting in present fields
            for key, value in fm_dict.items():
                if key == 'title':
                    if not isinstance(value, str) or not value:
                        field_errors.append({"field": "title", "severity": "error", "message": "'title' must be a non-empty string"})
                        error_found = True
                    continue
                if key == 'excerpt':
                    if not isinstance(value, str):
                        field_errors.append({"field": "excerpt", "severity": "error", "message": "'excerpt' must be a string"})
                        error_found = True
                    continue
                if is_announcement and key == synopsis_field:
                    if not isinstance(value, str) or not value:
                        field_errors.append({"field": synopsis_field, "severity": "error", "message": f"'{synopsis_field}' must be a non-empty string"})
                        error_found = True
                    continue
                if key == 'slugEN':
                    if not (isinstance(value, str) and re.fullmatch(r'[a-z0-9\-]+', value)):
                        field_errors.append({"field": "slugEN", "severity": "error", "message": "'slugEN' must contain only lowercase letters, numbers, and hyphens"})
                        error_found = True
                        continue

                    # If the modified file is already under docs/en/, slugEN must match the filename
                    if f.filename.startswith("docs/en/"):
                        filename_no_ext = os.path.splitext(basename)[0]
                        if value != filename_no_ext:
                            field_errors.append({
                                "field": "slugEN",
                                "severity": "error",
                                "message": f"On `docs/en/`, `slugEN` must match the filename. Expected `{filename_no_ext}`, got `{value}`."
                            })
                            error_found = True
                        continue

                    section = get_third_level_folder(f.filename)
                    if not section or value not in en_section_slugs.get(section, set()):
                        field_errors.append({
                            "field": "slugEN",
                            "severity": "error",
                            "message": f"`{value}` was not found in `docs/en/{section}/`"
                        })
                        error_found = True

                    continue

            # Validate mandatory fields for all doc types
            if 'title' not in fm_dict:
                field_errors.append({"field": "title", "severity": "error", "message": "Missing required field: 'title'"})
                error_found = True
            if 'slugEN' not in fm_dict:
                field_errors.append({"field": "slugEN", "severity": "error", "message": "Missing required field: 'slugEN'"})
                error_found = True

            if is_announcement:
                if synopsis_field not in fm_dict:
                    field_errors.append({"field": synopsis_field, "severity": "error", "message": f"Missing required field: '{synopsis_field}'"})
                    error_found = True
        else:
            generic_errors.append({"severity": "error", "message": "Frontmatter not closed with '---'."})
            error_found = True
    else:
        generic_errors.append({"severity": "error", "message": "Markdown file does not start with frontmatter block ('---')."})
        error_found = True

    if generic_errors or field_errors:
        file_issues[f.filename] = {
            "generic": generic_errors,
            "fields": field_errors,
        }

def find_existing_comment():
    """Find the PR comment previously created by this script (identified by the marker)."""
    # Only look at issue comments of the PR (not line-level review comments)
    for comment in pr.get_issue_comments():
        if COMMENT_MARKER in comment.body:
            return comment
    return None

def upsert_pr_comment(body):
    """Edit the existing marker comment if there is one; otherwise create a new one."""
    existing_comment = find_existing_comment()
    if existing_comment:
        print("Updating existing frontmatter review comment...")
        existing_comment.edit(body)
    else:
        print("Creating new frontmatter review comment...")
        pr.create_issue_comment(body)

SEVERITY_LABELS = {
    "error": "❌ Error",
    "warning": "⚠️ Warning",
}

run_url = (
    f"{GITHUB_SERVER_URL}/{GITHUB_REPOSITORY}/actions/runs/{GITHUB_RUN_ID}"
    if GITHUB_RUN_ID
    else None
)
footer = f"Review made on commit {head_sha or '(unknown)'}"
if run_url:
    footer += f"\nGenerated by [check-frontmatter workflow]({run_url})"

# Build and post a single comment with the review results
if file_issues:
    heading = "### 🏷️ Frontmatter issues"
    comment_body = f"{COMMENT_MARKER}\n{heading}\n\n"
    for filename, issues in file_issues.items():
        generic = issues["generic"]
        fields = issues["fields"]

        comment_body += f"#### `{filename}`\n\n"

        # General issues list
        if generic:
            for item in generic:
                severity_label = SEVERITY_LABELS.get(item.get("severity", "error"), "❌ Error")
                comment_body += f"- **{severity_label}:** {item['message']}\n"
            comment_body += "\n"

        # Per-field issues table
        if fields:
            comment_body += "#### Field issues\n\n"
            comment_body += "| Field | Severity | Issue |\n"
            comment_body += "|-------|----------|-------|\n"
            for item in fields:
                field = item.get("field", "") or ""
                severity_label = SEVERITY_LABELS.get(item.get("severity", "error"), "❌ Error")
                message = item.get("message", "")
                comment_body += f"| `{field}` | {severity_label} | {message} |\n"
            comment_body += "\n"

    comment_body += f"\n{footer}"
    upsert_pr_comment(comment_body)

    if error_found:
        print(' \n')
        print("Frontmatter errors found. Failing the action.")
        sys.exit(1)
    else:
        print("⚠️ Frontmatter warnings found. Passing the action.")
else:
    comment_body = (
        f"{COMMENT_MARKER}\n"
        "### ✅ Frontmatter check passed\n\n"
        "No frontmatter issues were found in the modified files.\n\n"
        f"{footer}"
    )
    upsert_pr_comment(comment_body)
    print("✅ No frontmatter issues found.")
