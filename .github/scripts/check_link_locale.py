import os
import sys
import re
import json
import yaml
import urllib.request
import urllib.error
import urllib.parse

from github import Auth, Github

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_REPOSITORY = os.getenv("GITHUB_REPOSITORY")
GITHUB_EVENT_PATH = os.getenv("GITHUB_EVENT_PATH")
GITHUB_SERVER_URL = os.getenv("GITHUB_SERVER_URL", "https://github.com")
GITHUB_RUN_ID = os.getenv("GITHUB_RUN_ID")

if not (GITHUB_TOKEN and GITHUB_REPOSITORY and GITHUB_EVENT_PATH):
    print("Missing required environment variables.")
    sys.exit(1)

with open(GITHUB_EVENT_PATH, "r") as f:
    event = json.load(f)

pr_number = event.get("pull_request", {}).get("number")
if not pr_number:
    print("Not a pull request event.")
    sys.exit(0)

g = Github(auth=Auth.Token(GITHUB_TOKEN))
repo = g.get_repo(GITHUB_REPOSITORY)
pr = repo.get_pull(pr_number)

ALLOWED_LOCALES = {"pt", "en", "es"}

# navigation.json from the PR's head branch, so links that depend on navigation changes in the PR are checked against them
NAVIGATION_URL = f"https://raw.githubusercontent.com/{GITHUB_REPOSITORY}/refs/heads/{urllib.parse.quote(pr.head.ref, safe='/')}/public/navigation.json"

# Fixed marker used to identify the link locale/slug comment
COMMENT_MARKER = "<!--check-locale-comment -->"


def load_navigation():
    """Fetch navigation JSON from URL, or from local path if NAVIGATION_FILE env is set. Returns dict."""
    local_path = os.getenv("NAVIGATION_FILE")
    if local_path and os.path.isfile(local_path):
        with open(local_path, "r", encoding="utf-8") as f:
            return json.load(f)
    # The token is required because the repo is private; raw.githubusercontent.com returns 404 without it
    request = urllib.request.Request(NAVIGATION_URL, headers={"Authorization": f"token {GITHUB_TOKEN}"})
    try:
        with urllib.request.urlopen(request) as resp:
            return json.load(resp)
    except (urllib.error.URLError, urllib.error.HTTPError) as e:
        print(f"Failed to fetch navigation: {e}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Invalid navigation JSON: {e}")
        sys.exit(1)


def build_slug_to_locale(nav_data: dict) -> dict:
    """Traverse navbar/categories/children; for each node with slug dict, map slug_value -> locale. Returns dict."""
    slug_to_locale = {}

    def visit(obj):
        if not isinstance(obj, dict):
            return
        slug = obj.get("slug")
        if isinstance(slug, dict):
            for locale, slug_value in slug.items():
                if isinstance(slug_value, str) and slug_value not in slug_to_locale:
                    slug_to_locale[slug_value] = []
                if isinstance(slug_value, str) and locale in ALLOWED_LOCALES and locale not in slug_to_locale[slug_value]:
                    slug_to_locale[slug_value].append(locale)
        for key in ("categories", "children"):
            for child in obj.get(key) or []:
                visit(child)

    for item in nav_data.get("navbar") or []:
        visit(item)

    return slug_to_locale


# Match markdown links ](url) where url is relative /locale/... or https://help.vtex.com/.../locale/...
# Captures: locale (group 1, any of "pt", "en", "es"), path after locale (group 2, string between "{locale}/" and ")")
PORTAL_LINK_RE = re.compile(
    r"\]\("
    r"(?:(?:https?)?://help\.vtex\.com)?"
    r"/?(pt|en|es)?/([^)]*)",
    re.IGNORECASE,
)


def extract_portal_links(body: str):
    """Find all portal links in markdown body. Returns list of (display_url, locale, path_after_locale)."""
    results = []
    for m in PORTAL_LINK_RE.finditer(body):
        groups = m.groups()
        if len(groups) < 2:
            continue
        locale = groups[0].lower() if groups[0] != None else ''
        path_raw = (groups[1] or "").split("#")[0].rstrip("/")
        # Normalize display URL (relative form, no fragment)
        display_url = f"/{locale}{'/' if locale else ''}{path_raw}"
        results.append((display_url, locale, path_raw))
    return results


def path_to_slug(path_after_locale: str) -> str:
    """Get the last path segment (page slug) before optional --id for navigation lookup."""
    # Strip fragment if any (path_after_locale may contain # in rare cases; we don't allow space so # would end the match)
    path_after_locale = path_after_locale.split("#")[0]
    # Remove --id suffix
    if "--" in path_after_locale:
        path_after_locale = path_after_locale.split("--")[0]
    # Remove query params after ?
    if "?" in path_after_locale:
        path_after_locale = path_after_locale.split("?")[0]
    parts = path_after_locale.split("/")
    return parts[-1] if parts else path_after_locale


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
        print("Updating existing link locale comment...")
        existing_comment.edit(body)
    else:
        print("Creating new link locale comment...")
        pr.create_issue_comment(body)


# Get changed markdown files in the PR (under docs/ folder)
# Deleted files are skipped: they don't exist on the PR branch, so get_contents would 404
changed_files = [
    f
    for f in pr.get_files()
    if f.status != "removed"
    and f.filename.endswith((".md", ".mdx"))
    and f.filename.startswith(("docs/pt/", "docs/en/", "docs/es/"))
]

file_errors = {}  # filename -> {link_display: {"slug": "⚠️"/"❌", "locale": "❌"}}
slug_to_locale = build_slug_to_locale(load_navigation())

for f in changed_files:
    content = repo.get_contents(f.filename, ref=pr.head.ref)
    text = content.decoded_content.decode("utf-8")

    file_locale = f.filename.split("/")[1]
    if not file_locale or file_locale not in ALLOWED_LOCALES:
        continue

    # Extract body from text, removing frontmatter
    body_start = text.find("\n---") + 4 if text.startswith("---") else 0
    body = text[body_start:]
    links = extract_portal_links(body)
    if not links:
        continue

    errors = {}
    for display_url, link_locale, path_after_locale in links:
        if link_locale not in ALLOWED_LOCALES:
            if display_url not in errors:
                errors[display_url] = {}
            errors[display_url]['locale'] = "❌"
        elif link_locale != file_locale:
            if display_url not in errors:
                errors[display_url] = {}
            errors[display_url]['locale'] = "❌"
        slug = path_to_slug(path_after_locale)
        slug_locale = slug_to_locale.get(slug)
        if not slug_locale:
            if display_url not in errors:
                errors[display_url] = {}
            errors[display_url]['slug'] = "⚠️"
        elif file_locale not in slug_locale:
            if display_url not in errors:
                errors[display_url] = {}
            errors[display_url]['slug'] = "❌"

    if errors:
        file_errors[f.filename] = errors

# No errors: create or update the success comment
run_url = (
    f"{GITHUB_SERVER_URL}/{GITHUB_REPOSITORY}/actions/runs/{GITHUB_RUN_ID}"
    if GITHUB_RUN_ID
    else None
)
footer = f"Review made on commit {pr.head.sha or '(unknown)'}"
if run_url:
    footer += f"\nGenerated by [check-link-locale workflow]({run_url})"

if file_errors:
    comment_body = f"{COMMENT_MARKER}\n## ⚠️ Link errors\n\n"
    comment_body += f"| Link | Slug matches expected locale? | URL locale is correct? |\n"
    comment_body += f"| - | :-: | :-: |\n"
    warn = False
    for filename, errors in file_errors.items():
        for link_display, err_dict in errors.items():
            comment_body += f"| `{link_display}` | {err_dict.get('slug', "✅")} | {err_dict.get('locale', "✅")} |\n"
            if err_dict.get('slug') == "⚠️":
                warn = True
    if warn:
        comment_body += "\n*⚠️ - Slug not found in `navigation.json`. Please check whether a redirect exists for this link."

    comment_body += f"\n\n{footer}"
    upsert_pr_comment(comment_body)
    print("Link locale/slug errors found. Failing the action.")
    sys.exit(1)

comment_body = (
    f"{COMMENT_MARKER}\n"
    "## ✅ Link check passed\n\n"
    "No link locale or slug errors were found in the modified files.\n\n"
    f"{footer}"
)
upsert_pr_comment(comment_body)

print("No link locale or slug errors found.")
