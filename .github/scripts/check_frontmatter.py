import os
import sys
from github import Github
import yaml
import re
import json

# Get environment variables
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
GITHUB_REPOSITORY = os.getenv('GITHUB_REPOSITORY')
GITHUB_EVENT_PATH = os.getenv('GITHUB_EVENT_PATH')

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

g = Github(GITHUB_TOKEN)
repo = g.get_repo(GITHUB_REPOSITORY)
pr = repo.get_pull(pr_number)

def plural_list(list):
    return 's' if len(list) != 1 else ''

def get_third_level_folder(path):
    # docs/<locale>/<third_level>/...
    parts = path.split('/')
    return parts[2] if len(parts) > 2 else None

def file_exists(repo, ref, path):
    try:
        repo.get_contents(path, ref=ref)
        return True
    except Exception:
        return False

def slug_exists_in_en_same_section(repo, ref, original_file_path, slug):
    section = get_third_level_folder(original_file_path)  # e.g. announcements
    if not section:
        return False

    candidate_md = f"docs/en/{section}/{slug}.md"
    candidate_mdx = f"docs/en/{section}/{slug}.mdx"

    return file_exists(repo, ref, candidate_md) or file_exists(repo, ref, candidate_mdx)


# Get changed Markdown files in the PR 
changed_files = [f for f in pr.get_files() if (
    f.filename.endswith(('.md', '.mdx'))
    and f.filename.startswith('docs/')
)]

print(f"Found {len(changed_files)} markdown file{plural_list(changed_files)} in PR:")

error_found = False
frontmatters = {}
file_errors = {}  # filename -> list of error strings
filename_regex = re.compile(r'^[a-z0-9\/\-\.]+$')

for f in changed_files:
    print(f"- {f.filename}")
    content = repo.get_contents(f.filename, ref=pr.head.ref)
    text = content.decoded_content.decode('utf-8')
    generic_errors = []
    field_errors = []

    if not filename_regex.match(f.filename):
        file_errors[f.filename] = {
            "generic": [
                "Filename contains invalid characters. Use only lowercase letters (a-z), numbers (0-9) and hyphens (-). Accents and special characters are not allowed."
            ],
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
                    generic_errors.append(f"Frontmatter in '{f.filename}' is not a valid YAML dictionary.")
                    error_found = True
                    fm_dict = {}
            except Exception as e:
                generic_errors.append(f"Failed to parse YAML frontmatter: {e}")
                error_found = True
                fm_dict = {}

            print(fm_dict)
            frontmatters[f.filename] = fm_dict
            # Regular expression for ISO 8601 date format (YYYY-MM-DDThh:mm:ss.sssZ)
            iso8601_regex = re.compile(r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$")

            # Validate formatting in present fields
            for key, value in fm_dict.items():
                if key == 'title':
                    if not isinstance(value, str) or not value:
                        field_errors.append({"field": "title", "message": "'title' must be a non-empty string"})
                        error_found = True
                    continue
                if key == 'createdAt':
                    if not (isinstance(value, str) and iso8601_regex.match(value)):
                        field_errors.append({"field": "createdAt", "message": "'createdAt' must be in ISO 8601 format (YYYY-MM-DDThh:mm:ss.sssZ)."})
                        error_found = True
                    continue
                if key == 'updatedAt':
                    if not (isinstance(value, str) and iso8601_regex.match(value)):
                        field_errors.append({"field": "updatedAt", "message": "'updatedAt' must be in ISO 8601 format (YYYY-MM-DDThh:mm:ss.sssZ)."})
                        error_found = True
                    continue
                if key == 'slugEN':
                    if not (isinstance(value, str) and re.fullmatch(r'[a-z0-9\-]+', value)):
                        field_errors.append({"field": "slugEN", "message": "'slugEN' must contain only lowercase letters, numbers, and hyphens"})
                        error_found = True
                    continue

            # slugEN existence check in docs/en/<section>/
            slug_value = fm_dict.get("slugEN")
            if isinstance(slug_value, str) and slug_value:
                if not slug_exists_in_en_same_section(repo, pr.head.ref, f.filename, slug_value):
                    section = get_third_level_folder(f.filename)
                    field_errors.append({
                        "field": "slugEN",
                        "message": f"slugEN '{slug_value}' not found in docs/en/{section}/ as {slug_value}.md or {slug_value}.mdx."
                    })
                    error_found = True

            # Validate mandatory fields for all doc types
            if 'title' not in fm_dict:
                field_errors.append({"field": "title", "message": "Missing required field: 'title'"})
                error_found = True
            if 'slugEN' not in fm_dict:
                field_errors.append({"field": "slugEN", "message": "Missing required field: 'slugEN'"})
                error_found = True
              
            # Validate fields by doc type using folder structure
            def not_present_keys(keys, dict):
                return [key for key in keys if key not in dict]
        else:
            generic_errors.append(f"Frontmatter not closed with '---'.")
            error_found = True
    else:
        generic_errors.append(f"Markdown file does not start with frontmatter block ('---').")
        error_found = True

    if generic_errors or field_errors:
        file_errors[f.filename] = {
            "generic": generic_errors,
            "fields": field_errors,
        }

# Post a comment per file with errors
if file_errors:
    comment_body = f"### 🏷️ Frontmatter errors\n\n"
    for filename, issues in file_errors.items():
        generic = issues["generic"]
        fields = issues["fields"]

        comment_body = comment_body + f"#### `{filename}`\n\n"

        # Lista de erros gerais
        if generic:
            for err in generic:
                comment_body += f"- {err}\n"
            comment_body += "\n"

        # Tabela de erros por campo
        if fields:
            comment_body += "#### Field issues\n\n"
            comment_body += "| Field | Error |\n"
            comment_body += "|-------|--------|\n"
            for err in fields:
                field = err.get("field", "") or ""
                message = err.get("message", "")
                comment_body += f"| `{field}` | {message} |\n"

        pr.create_issue_comment(comment_body)
    print(' \n')
    print("Frontmatter errors found. Failing the action.")
    sys.exit(1)
