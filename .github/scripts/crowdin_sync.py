#!/usr/bin/env python3
"""
Upload PR-touched markdown files to Crowdin and update Jira descriptions
with Crowdin metadata (word count, editor links).

Partial uploads require equivalent EN and/or ES files on main (matched by slugEN
in frontmatter) plus block/word-count tiers on the PR diff. Rename-aware diffs follow
git rename detection; numstat rename paths are normalized before processing.
When multiple locale files share a slugEN, paths that already exist on main
are preferred over PR-only additions. Duplicate slugEN values on main trigger
a warning comment on the parent Jira task.

Commands:
  crowdin_sync.py              Upload touched files to Crowdin
  crowdin_sync.py word-count   Merge word count into a Jira description (CURRENT, COUNT)
  crowdin_sync.py crowdin-links  Merge editor links into a Jira description (CURRENT, LINKS)
"""

from __future__ import annotations

import base64
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Literal

CROWDIN_API_BASE_DEFAULT = "https://api.crowdin.com/api/v2"
CROWDIN_WEB_BASE_DEFAULT = "https://crowdin.com"

# Crowdin language IDs (Spanish is always es-MX, not generic es).
LANGUAGE_ENV_DEFAULTS: dict[str, str] = {
    "CROWDIN_EN_LANGUAGE": "en",
    "CROWDIN_ES_LANGUAGE": "es-MX",
    "CROWDIN_PT_LANGUAGE": "pt-BR",
}

LANGUAGE_ENV_TO_REPO_LOCALE: dict[str, str] = {
    "CROWDIN_EN_LANGUAGE": "en",
    "CROWDIN_ES_LANGUAGE": "es",
    "CROWDIN_PT_LANGUAGE": "pt",
}

SLUG_EN_PATTERN = re.compile(r"^slugEN:\s*(.+?)\s*$", re.MULTILINE)
RENAME_PATH_PATTERN = re.compile(r"\{[^ ]+ => ([^}]+)\}")
RENAME_STATUS_PATTERN = re.compile(r"^R\d+\t(.+)\t(.+)$")

_current_source_path: str | None = None
_rename_map: dict[str, str] = {}
_slug_en_duplicate_keys: set[tuple[str, str, tuple[str, ...]]] = set()
_slug_en_duplicate_warnings: list[dict[str, object]] = []


def env(name: str, default: str = "") -> str:
    return os.environ.get(name, default).strip()


def crowdin_language_id(language_env: str, group_name: str) -> str:
    language_id = env(language_env, LANGUAGE_ENV_DEFAULTS.get(language_env, ""))
    if not language_id:
        raise RuntimeError(
            f"{language_env} is required for {group_name} Crowdin uploads"
        )
    return language_id


def normalize_language_id(language_id: str) -> str:
    return language_id.replace("_", "-").lower()


def normalize_editor_code(code: str) -> str:
    """Crowdin editor URL segments drop separators (en-US -> enus, pt-BR -> ptbr)."""
    return code.replace("_", "").replace("-", "").lower()


def resolve_project_language_id(project_data: dict, language_id: str) -> str:
    """Return the Crowdin project's canonical language ID for language_id."""
    target = normalize_language_id(language_id)
    source = project_data.get("sourceLanguage") or {}
    if normalize_language_id(str(source.get("id", ""))) == target:
        return str(source["id"])
    for language in project_data.get("targetLanguages") or []:
        if normalize_language_id(str(language.get("id", ""))) == target:
            return str(language["id"])
    return language_id


def crowdin_api_base() -> str:
    organization = env("LOC_CROWDIN_ORGANIZATION")
    if organization:
        return f"https://{organization}.api.crowdin.com/api/v2"
    return CROWDIN_API_BASE_DEFAULT


def crowdin_web_base() -> str:
    organization = env("LOC_CROWDIN_ORGANIZATION")
    if organization:
        return f"https://{organization}.crowdin.com"
    return CROWDIN_WEB_BASE_DEFAULT


def crowdin_config_help(project_id: str) -> str:
    hints = [
        "Check LOC_CROWDIN_PROJECT_ID is the numeric project ID "
        "(Crowdin project Settings → API, not the project slug).",
        "Confirm LOC_CROWDIN_API_TOKEN has access to this project "
        "(project.source.file scope).",
    ]
    if not env("LOC_CROWDIN_ORGANIZATION"):
        hints.append(
            "If this is Crowdin Enterprise, set LOC_CROWDIN_ORGANIZATION "
            "to your organization subdomain (the hostname before .crowdin.com)."
        )
    else:
        hints.append(
            f"Using Enterprise API host {crowdin_api_base()} "
            f"for organization {env('LOC_CROWDIN_ORGANIZATION')!r}."
        )
    return " ".join(hints)


def crowdin_request(
    method: str,
    path: str,
    *,
    data: dict | list | bytes | None = None,
    content_type: str = "application/json",
    extra_headers: dict | None = None,
) -> dict:
    token = env("LOC_CROWDIN_API_TOKEN")
    if not token:
        raise RuntimeError("LOC_CROWDIN_API_TOKEN is not set")

    url = f"{crowdin_api_base()}{path}"
    headers = {"Authorization": f"Bearer {token}"}
    if extra_headers:
        headers.update(extra_headers)
    body = None
    if isinstance(data, (dict, list)):
        body = json.dumps(data).encode("utf-8")
        headers["Content-Type"] = content_type
    elif isinstance(data, bytes):
        body = data
        headers["Content-Type"] = content_type

    request = urllib.request.Request(url, data=body, method=method, headers=headers)
    try:
        with urllib.request.urlopen(request) as response:
            raw = response.read().decode("utf-8")
            if not raw:
                return {}
            return json.loads(raw)
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"Crowdin API {method} {path} failed (HTTP {error.code}): {detail}"
        ) from error


def upload_storage_bytes(payload: bytes, file_name: str) -> int:
    encoded_name = urllib.parse.quote(file_name, safe="")
    response = crowdin_request(
        "POST",
        "/storages",
        data=payload,
        content_type="application/octet-stream",
        extra_headers={"Crowdin-API-FileName": encoded_name},
    )
    return int(response["data"]["id"])


def fetch_project_data(project_id: str) -> dict:
    """Return Crowdin project metadata used for editor links."""
    try:
        response = crowdin_request("GET", f"/projects/{project_id}")
    except RuntimeError as error:
        if "HTTP 404" in str(error):
            raise RuntimeError(
                f"Crowdin project {project_id!r} was not found at "
                f"{crowdin_api_base()}. {crowdin_config_help(project_id)}"
            ) from error
        raise
    return response["data"]


def language_editor_code(project_data: dict, language_id: str) -> str:
    target = normalize_language_id(language_id)
    for language in project_data.get("targetLanguages") or []:
        if normalize_language_id(str(language.get("id", ""))) == target:
            return normalize_editor_code(str(language["editorCode"]))
    source = project_data.get("sourceLanguage") or {}
    if normalize_language_id(str(source.get("id", ""))) == target:
        return normalize_editor_code(str(source["editorCode"]))
    return normalize_editor_code(language_id)


def editor_url(
    project_identifier: str,
    file_id: int,
    source_editor_code: str,
    target_editor_code: str,
) -> str:
    language_pair = (
        f"{normalize_editor_code(source_editor_code)}-"
        f"{normalize_editor_code(target_editor_code)}"
    )
    return f"{crowdin_web_base()}/editor/{project_identifier}/{file_id}/{language_pair}"


def find_file(project_id: str, file_name: str) -> int | None:
    query = urllib.parse.urlencode({"filter": file_name, "limit": 500})
    response = crowdin_request("GET", f"/projects/{project_id}/files?{query}")
    for item in response.get("data", []):
        if item["data"]["name"] == file_name:
            return int(item["data"]["id"])
    return None


def create_or_update_file(
    project_id: str,
    storage_id: int,
    file_name: str,
    file_type: str,
    *,
    file_context: str | None = None,
) -> int:
    existing_id = find_file(project_id, file_name)
    if existing_id is None:
        payload: dict = {
            "storageId": storage_id,
            "name": file_name,
            "type": file_type,
        }
        if file_context:
            payload["context"] = file_context
        created = crowdin_request(
            "POST",
            f"/projects/{project_id}/files",
            data=payload,
        )
        file_id = int(created["data"]["id"])
    else:
        crowdin_request(
            "PUT",
            f"/projects/{project_id}/files/{existing_id}",
            data={"storageId": storage_id},
        )
        file_id = existing_id
        if file_context:
            crowdin_request(
                "PATCH",
                f"/projects/{project_id}/files/{file_id}",
                data=[{"op": "replace", "path": "/context", "value": file_context}],
            )
    return file_id


def get_file_word_count(project_id: str, file_id: int) -> int:
    path = f"/projects/{project_id}/files/{file_id}/languages/progress"
    for attempt in range(6):
        try:
            response = crowdin_request("GET", path)
        except RuntimeError as error:
            if "HTTP 403" in str(error):
                print(
                    "Crowdin word count unavailable: enable Translation status "
                    "(read) on the API token; using 0",
                    file=sys.stderr,
                )
                return 0
            raise
        items = response.get("data", [])
        if items:
            return int(items[0]["data"]["words"]["total"])
        time.sleep(2 * (attempt + 1))
    return 0


def crowdin_basename(relative_path: str) -> str:
    return Path(relative_path.replace("\\", "/")).name


def build_crowdin_file_name(
    task_key: str,
    source_file_name: str,
    mode: Literal["full", "partial"],
) -> str:
    if mode == "partial":
        return f"{task_key}_PARTIAL_{source_file_name}"
    return f"{task_key}_{source_file_name}"


PT_SOURCE_PATH_PREFIXES = ("docs/pt/", "localization/")
EN_SOURCE_PATH_PREFIXES = ("docs/en/",)


def is_eligible_path(relative_path: str) -> bool:
    path = relative_path.replace("\\", "/")
    return path.startswith(PT_SOURCE_PATH_PREFIXES + EN_SOURCE_PATH_PREFIXES)


def decode_git_path(path: str) -> str:
    """Decode git core.quotepath octal byte escapes (e.g. relev\\303\\242ncia -> relevância)."""
    if "\\" not in path:
        return path

    out = bytearray()
    index = 0
    while index < len(path):
        if (
            path[index] == "\\"
            and index + 3 < len(path)
            and path[index + 1 : index + 4].isdigit()
            and all(ch in "01234567" for ch in path[index + 1 : index + 4])
        ):
            out.append(int(path[index + 1 : index + 4], 8))
            index += 4
            continue
        out.extend(path[index].encode("utf-8"))
        index += 1
    return out.decode("utf-8")


def normalize_changed_path(path: str) -> str:
    """Resolve git numstat rename syntax (dir/{old => new}) to the new path."""
    normalized = decode_git_path(path.strip()).replace("\\", "/")
    if "{" not in normalized or "=>" not in normalized:
        return normalized

    parent, _, name = normalized.rpartition("/")
    if RENAME_PATH_PATTERN.search(name):
        new_name = RENAME_PATH_PATTERN.sub(r"\1", name)
        return f"{parent}/{new_name}" if parent else new_name
    return RENAME_PATH_PATTERN.sub(r"\1", normalized)


def changed_files() -> list[str]:
    raw = env("CHANGED_FILES")
    if not raw:
        return []
    seen: set[str] = set()
    files: list[str] = []
    for line in raw.splitlines():
        stripped = line.strip()
        if "{" in stripped and "=>" not in stripped:
            print(
                "[crowdin_sync] Skipping truncated rename path "
                "(ensure CHANGED_FILES uses awk -F'\\t'): "
                f"{stripped}",
                file=sys.stderr,
            )
            continue
        path = normalize_changed_path(stripped)
        if (
            path
            and path.endswith((".md", ".mdx"))
            and is_eligible_path(path)
            and path not in seen
        ):
            seen.add(path)
            files.append(path)
    return files


def files_for_prefixes(all_files: list[str], prefixes: tuple[str, ...]) -> list[str]:
    return [
        path
        for path in all_files
        if path.replace("\\", "/").startswith(prefixes)
    ]


def reset_upload_state() -> None:
    global _current_source_path, _rename_map
    _current_source_path = None
    _rename_map = {}
    _slug_en_duplicate_keys.clear()
    _slug_en_duplicate_warnings.clear()


def jira_post_comment(issue_key: str, body: str) -> None:
    base_url = env("LOC_JIRA_BASE_URL").rstrip("/")
    email = env("LOC_JIRA_USER_EMAIL")
    token = env("LOC_JIRA_API_TOKEN")
    if not base_url or not email or not token:
        raise RuntimeError(
            "LOC_JIRA_BASE_URL, LOC_JIRA_USER_EMAIL, and LOC_JIRA_API_TOKEN "
            "are required to post Jira comments"
        )

    credentials = base64.b64encode(f"{email}:{token}".encode()).decode()
    payload = json.dumps({"body": body}).encode("utf-8")
    request = urllib.request.Request(
        f"{base_url}/rest/api/2/issue/{issue_key}/comment",
        data=payload,
        method="POST",
        headers={
            "Authorization": f"Basic {credentials}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(request) as response:
            if response.status != 201:
                raise RuntimeError(
                    f"Jira comment on {issue_key} failed (HTTP {response.status})"
                )
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"Jira comment on {issue_key} failed (HTTP {error.code}): {detail}"
        ) from error


def note_duplicate_slug_en_on_main(
    *,
    slug_en: str,
    locale: str,
    main_paths: list[str],
    chosen_path: str,
) -> None:
    key = (slug_en, locale, tuple(sorted(main_paths)))
    if key in _slug_en_duplicate_keys:
        return
    _slug_en_duplicate_keys.add(key)
    warning = {
        "slug_en": slug_en,
        "locale": locale,
        "main_paths": sorted(main_paths),
        "chosen_path": chosen_path,
        "source_path": _current_source_path,
    }
    _slug_en_duplicate_warnings.append(warning)
    paths_list = "\n".join(f"  - {path}" for path in warning["main_paths"])
    print(
        f"Duplicate slugEN {slug_en!r} on main for locale {locale}; "
        f"using {chosen_path}. Files on main:\n{paths_list}",
        file=sys.stderr,
    )


def post_duplicate_slug_en_jira_comment(task_key: str) -> None:
    if not _slug_en_duplicate_warnings:
        return

    lines = [
        "Duplicate slugEN on main detected during localization automation.",
        "Multiple files on main share the same slugEN value. "
        "Please review and resolve the duplicates.",
        "",
    ]
    for index, warning in enumerate(_slug_en_duplicate_warnings, start=1):
        lines.append(f"{index}. slugEN: {warning['slug_en']} ({warning['locale']})")
        source_path = warning.get("source_path")
        if source_path:
            lines.append(f"   Source file: {source_path}")
        lines.append("   Files on main:")
        for path in warning["main_paths"]:
            lines.append(f"   - {path}")
        lines.append(f"   Automation used: {warning['chosen_path']}")
        lines.append("")

    jira_post_comment(task_key, "\n".join(lines).rstrip())
    print(
        f"Posted duplicate slugEN on main comment on {task_key}",
        file=sys.stderr,
    )


@dataclass(frozen=True)
class CrowdinUploadGroup:
    name: str
    path_prefixes: tuple[str, ...]
    project_id_env: str
    target_languages: tuple[tuple[str, str], ...]
    # link_bucket names map to workflow outputs (en_editor_links / es_editor_links).
    # Spanish links always use CROWDIN_ES_LANGUAGE (es-MX).


PT_CROWDIN_GROUP = CrowdinUploadGroup(
    name="pt",
    path_prefixes=PT_SOURCE_PATH_PREFIXES,
    project_id_env="LOC_CROWDIN_PROJECT_ID",
    target_languages=(
        ("CROWDIN_EN_LANGUAGE", "en"),
        ("CROWDIN_ES_LANGUAGE", "es"),
    ),
)

EN_CROWDIN_GROUP = CrowdinUploadGroup(
    name="en",
    path_prefixes=EN_SOURCE_PATH_PREFIXES,
    project_id_env="LOC_CROWDIN_PROJECT_ID_EN",
    target_languages=(
        ("CROWDIN_PT_LANGUAGE", "en"),
        ("CROWDIN_ES_LANGUAGE", "es"),
    ),
)


def build_rename_map(base_sha: str, head_sha: str) -> dict[str, str]:
    rename_map: dict[str, str] = {}
    for scope in ("docs/", "localization/"):
        result = subprocess.run(
            [
                "git",
                "diff",
                "--name-status",
                "-M",
                f"{base_sha}...{head_sha}",
                "--",
                scope,
            ],
            capture_output=True,
            text=True,
            check=False,
        )
        if result.returncode not in (0, 1):
            continue
        for line in result.stdout.splitlines():
            match = RENAME_STATUS_PATTERN.match(line)
            if match:
                rename_map[match.group(2)] = match.group(1)
    return rename_map


def diff_scope_for_path(relative_path: str, rename_source: str | None) -> str:
    """Pick a git diff path scope where rename detection still works."""
    path = relative_path.replace("\\", "/")
    if rename_source:
        old = rename_source.replace("\\", "/")
        old_parts = Path(old).parts
        new_parts = Path(path).parts
        common = [
            left
            for left, right in zip(old_parts, new_parts, strict=False)
            if left == right
        ]
        if common:
            return "/".join(common)
        if path.startswith("docs/"):
            return "docs/"
        return "localization/"
    parent = str(Path(path).parent)
    return parent if parent != "." else path


def extract_file_diff(full_diff: str, relative_path: str) -> str:
    """Keep only the unified-diff chunk for relative_path (including renames)."""
    target = relative_path.replace("\\", "/")
    chunks: list[str] = []
    current: list[str] = []
    matches = False

    for line in full_diff.splitlines(keepends=True):
        if line.startswith("diff --git"):
            if matches and current:
                chunks.append("".join(current))
            current = [line]
            matches = False
        else:
            current.append(line)

        stripped = line.rstrip("\n")
        if stripped.startswith("+++ b/") and stripped[6:] == target:
            matches = True
        elif stripped.startswith("rename to ") and stripped[len("rename to ") :] == target:
            matches = True

    if matches and current:
        chunks.append("".join(current))

    return "".join(chunks)


def git_diff(base_sha: str, head_sha: str, relative_path: str) -> str:
    rename_source = _rename_map.get(relative_path.replace("\\", "/"))
    scope = diff_scope_for_path(relative_path, rename_source)
    result = subprocess.run(
        [
            "git",
            "diff",
            "-U0",
            "-M",
            f"{base_sha}...{head_sha}",
            "--",
            scope,
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode not in (0, 1):
        raise RuntimeError(
            f"git diff failed for {relative_path}: "
            f"{result.stderr.strip() or result.stdout.strip()}"
        )

    extracted = extract_file_diff(result.stdout, relative_path)
    if extracted.strip():
        return extracted

    # Fallback for edge cases (e.g. file-only edits with no rename).
    fallback = subprocess.run(
        [
            "git",
            "diff",
            "-U0",
            "-M",
            f"{base_sha}...{head_sha}",
            "--",
            relative_path,
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    if fallback.returncode not in (0, 1):
        raise RuntimeError(
            f"git diff failed for {relative_path}: "
            f"{fallback.stderr.strip() or fallback.stdout.strip()}"
        )
    return fallback.stdout


def git_file_exists(ref: str, relative_path: str) -> bool:
    result = subprocess.run(
        ["git", "cat-file", "-e", f"{ref}:{relative_path}"],
        capture_output=True,
        text=True,
        check=False,
    )
    return result.returncode == 0


def git_read_file_at_ref(ref: str, relative_path: str) -> bytes | None:
    result = subprocess.run(
        ["git", "show", f"{ref}:{relative_path}"],
        capture_output=True,
        check=False,
    )
    if result.returncode != 0:
        return None
    return result.stdout


def parse_slug_en(text: str) -> str | None:
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    if end == -1:
        return None
    match = SLUG_EN_PATTERN.search(text[3:end])
    if not match:
        return None
    value = match.group(1).strip()
    if value.startswith(('"', "'")) and value.endswith(value[0]):
        value = value[1:-1]
    return value or None


def get_slug_en_for_path(path: str, head_sha: str, base_sha: str) -> str | None:
    for ref in (head_sha, base_sha):
        content = git_read_file_at_ref(ref, path)
        if content is None:
            continue
        slug_en = parse_slug_en(content.decode("utf-8"))
        if slug_en:
            return slug_en

    normalized = path.replace("\\", "/")
    if normalized.startswith("docs/en/") and normalized.endswith((".md", ".mdx")):
        return Path(normalized).stem
    return None


def pick_preferred_equivalent_path(
    matches: list[str],
    *,
    base_sha: str | None,
    slug_en: str,
    locale: str,
) -> str | None:
    unique = sorted(set(matches))
    if not unique:
        return None
    if len(unique) == 1:
        return unique[0]

    if base_sha:
        on_main = [path for path in unique if git_file_exists(base_sha, path)]
        if on_main:
            chosen = sorted(on_main)[0]
            if len(on_main) > 1:
                note_duplicate_slug_en_on_main(
                    slug_en=slug_en,
                    locale=locale,
                    main_paths=on_main,
                    chosen_path=chosen,
                )
            elif len(unique) > len(on_main):
                print(
                    f"Multiple {locale} equivalents for slugEN {slug_en!r}; "
                    f"preferring existing on main: {chosen}",
                    file=sys.stderr,
                )
            return chosen

    chosen = unique[0]
    print(
        f"Multiple {locale} equivalents for slugEN {slug_en!r}; "
        f"using {chosen}",
        file=sys.stderr,
    )
    return chosen


def find_en_equivalent_by_slug(
    ref: str,
    slug_en: str,
    *,
    base_sha: str | None = None,
) -> str | None:
    """EN files use slugEN as the filename (docs/en/**/{slugEN}.md)."""
    result = subprocess.run(
        ["git", "ls-tree", "-r", "--name-only", ref, "--", "docs/en/"],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None

    matches = [
        path
        for path in result.stdout.splitlines()
        if path.endswith((".md", ".mdx")) and Path(path).stem == slug_en
    ]
    return pick_preferred_equivalent_path(
        matches,
        base_sha=base_sha,
        slug_en=slug_en,
        locale="en",
    )


def normalize_git_grep_path(line: str, ref: str) -> str:
    line = line.strip()
    prefix = f"{ref}:"
    if line.startswith(prefix):
        return line[len(prefix):]
    return line


def find_locale_equivalent_by_slug(
    ref: str,
    locale: str,
    slug_en: str,
    *,
    base_sha: str | None = None,
) -> str | None:
    """PT/ES equivalents share slugEN in frontmatter but may use different filenames."""
    pattern = rf"^slugEN:\s*\"?{re.escape(slug_en)}\"?\s*$"
    matches: list[str] = []

    for search_path in (f"docs/{locale}/", "localization/"):
        result = subprocess.run(
            [
                "git",
                "grep",
                "-l",
                "-E",
                pattern,
                ref,
                "--",
                search_path,
            ],
            capture_output=True,
            text=True,
            check=False,
        )
        if result.returncode in (0, 1):
            matches.extend(
                normalize_git_grep_path(line, ref)
                for line in result.stdout.splitlines()
                if line.strip().endswith((".md", ".mdx"))
            )

    return pick_preferred_equivalent_path(
        matches,
        base_sha=base_sha,
        slug_en=slug_en,
        locale=locale,
    )


def find_equivalent_path_at_ref(
    slug_en: str,
    target_locale: str,
    ref: str,
    *,
    base_sha: str | None = None,
) -> str | None:
    prefer_base = base_sha if base_sha and base_sha != ref else None
    if target_locale == "en":
        return find_en_equivalent_by_slug(ref, slug_en, base_sha=prefer_base)
    return find_locale_equivalent_by_slug(
        ref,
        target_locale,
        slug_en,
        base_sha=prefer_base,
    )


def resolve_equivalent_path(
    slug_en: str,
    target_locale: str,
    *,
    base_sha: str,
    head_sha: str,
) -> str | None:
    equivalent_path = find_equivalent_path_at_ref(
        slug_en,
        target_locale,
        head_sha,
        base_sha=base_sha,
    )
    if equivalent_path and git_file_exists(head_sha, equivalent_path):
        return equivalent_path
    return find_equivalent_path_at_ref(slug_en, target_locale, base_sha)


def resolve_translation_content(
    repo_path: str,
    *,
    base_sha: str,
    head_sha: str,
) -> tuple[bytes, str] | None:
    """Prefer PR version when present; otherwise use main."""
    head_content = git_read_file_at_ref(head_sha, repo_path)
    if head_content is not None:
        return head_content, "pr"
    main_content = git_read_file_at_ref(base_sha, repo_path)
    if main_content is not None:
        return main_content, "main"
    return None


def import_translation_file(
    project_id: str,
    file_id: int,
    language_id: str,
    content: bytes,
    file_name: str,
) -> str:
    storage_id = upload_storage_bytes(content, file_name)
    response = crowdin_request(
        "POST",
        f"/projects/{project_id}/translations/imports",
        data={
            "storageId": storage_id,
            "fileId": file_id,
            "languageIds": [language_id],
            "importEqSuggestions": False,
            "autoApproveImported": False,
        },
    )
    return str(response["data"]["identifier"])


def parse_added_lines(diff_text: str) -> list[tuple[int, str]]:
    additions: list[tuple[int, str]] = []
    new_line = 0

    for line in diff_text.splitlines():
        if line.startswith("@@"):
            match = re.search(r"\+(\d+)(?:,(\d+))?", line)
            if match:
                new_line = int(match.group(1))
            continue
        if line.startswith("+++") or line.startswith("---"):
            continue
        if line.startswith("+"):
            additions.append((new_line, line[1:]))
            new_line += 1
        elif line.startswith("-"):
            continue
        elif line.startswith(" "):
            new_line += 1

    return additions


def group_consecutive_blocks(additions: list[tuple[int, str]]) -> list[list[str]]:
    if not additions:
        return []

    blocks: list[list[str]] = [[additions[0][1]]]
    for (prev_no, _), (line_no, text) in zip(additions, additions[1:]):
        if line_no == prev_no + 1:
            blocks[-1].append(text)
        else:
            blocks.append([text])
    return blocks


def is_new_file(diff_text: str) -> bool:
    if not diff_text.strip():
        return False
    if "rename from" in diff_text or "similarity index" in diff_text:
        return False
    return "new file mode" in diff_text


def count_words(text: str) -> int:
    return len(re.findall(r"\w+", text, flags=re.UNICODE))


def partial_upload_tier(
    block_count: int,
    added_words: int,
    total_words: int,
) -> str | None:
    if total_words <= 0 or added_words <= 0:
        return None
    added_ratio = added_words / total_words
    if block_count <= 10 and added_ratio < 0.80:
        return "≤10 blocks and added words <80% of total"
    if block_count <= 15 and added_ratio < 0.60 and total_words >= 2000:
        return "≤15 blocks and added words <60% of total (≥2000 words)"
    if block_count <= 20 and added_ratio < 0.40 and total_words >= 3000:
        return "≤20 blocks and added words <40% of total (≥3000 words)"
    return None


def should_upload_partial(
    added_count: int,
    block_count: int,
    total_lines: int,
    added_words: int,
    total_words: int,
    *,
    new_file: bool,
    has_existing_translations_in_main: bool,
) -> bool:
    if not has_existing_translations_in_main:
        return False
    if added_count == 0 or new_file:
        return False
    # Entire file is new content (e.g. new file or full rewrite) → upload full file.
    if total_lines > 0 and added_count >= total_lines:
        return False
    return partial_upload_tier(block_count, added_words, total_words) is not None


def format_partial_content(blocks: list[list[str]]) -> str:
    return "\n\n".join("\n".join(block) for block in blocks)


def strip_frontmatter(text: str) -> tuple[str, int]:
    """Return body text without YAML frontmatter and the 1-based first body line."""
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return text, 1

    for index in range(1, len(lines)):
        if lines[index].strip() == "---":
            body_start = index + 1
            while body_start < len(lines) and not lines[body_start].strip():
                body_start += 1
            return "\n".join(lines[body_start:]), body_start + 1

    return text, 1


def format_partial_file_context(
    relative_path: str,
    full_text: str,
    changed_line_numbers: set[int],
) -> str:
    body_text, first_body_line = strip_frontmatter(full_text)
    adjusted_line_numbers = {
        line_no - first_body_line + 1
        for line_no in changed_line_numbers
        if line_no >= first_body_line
    }
    highlighted = highlight_changed_lines(body_text, adjusted_line_numbers)
    marker_note = (
        "Sections marked with **[START OF UPDATED SECTION]** and "
        "**[END OF UPDATED SECTION]** below are the changed portions "
        "to translate in this task.\n\n"
        if changed_line_numbers
        else ""
    )
    return (
        "# Full file reference\n\n"
        f"Source path: `{relative_path}`\n\n"
        "The strings in this file are **partial changes only**. "
        "Use the full document below for context when translating.\n\n"
        f"{marker_note}"
        "---\n\n"
        f"{highlighted}"
    )


def highlight_changed_lines(full_text: str, changed_line_numbers: set[int]) -> str:
    if not changed_line_numbers:
        return full_text

    highlighted: list[str] = []
    in_section = False

    for line_no, line in enumerate(full_text.splitlines(), start=1):
        is_changed = line_no in changed_line_numbers

        if is_changed and not in_section:
            highlighted.append("")
            highlighted.append("**[START OF UPDATED SECTION]**")
            highlighted.append("")
            highlighted.append(line)
            in_section = True
        elif is_changed:
            highlighted.append(line)
        elif in_section:
            highlighted.append("**[END OF UPDATED SECTION]**")
            highlighted.append("")
            highlighted.append(line)
            in_section = False
        else:
            highlighted.append(line)

    if in_section:
        highlighted.append("**[END OF UPDATED SECTION]**")
        highlighted.append("")

    return "\n".join(highlighted)


@dataclass(frozen=True)
class TranslationImportPlan:
    language_id: str
    link_bucket: str
    repo_path: str
    content: bytes
    source_ref: str


def plan_translation_context(
    source_path: str,
    *,
    base_sha: str,
    head_sha: str,
    group: CrowdinUploadGroup,
) -> tuple[bool, list[TranslationImportPlan]]:
    slug_en = get_slug_en_for_path(source_path, head_sha, base_sha)
    if not slug_en:
        print(
            f"No slugEN found for {source_path}; skipping translation imports",
            file=sys.stderr,
        )
        return False, []

    has_main_equivalent = False
    imports: list[TranslationImportPlan] = []

    for language_env, link_bucket in group.target_languages:
        target_locale = LANGUAGE_ENV_TO_REPO_LOCALE.get(language_env)
        if not target_locale:
            continue

        equivalent_path = resolve_equivalent_path(
            slug_en,
            target_locale,
            base_sha=base_sha,
            head_sha=head_sha,
        )
        if not equivalent_path:
            continue
        if git_file_exists(base_sha, equivalent_path):
            has_main_equivalent = True

        resolved = resolve_translation_content(
            equivalent_path,
            base_sha=base_sha,
            head_sha=head_sha,
        )
        if resolved is None:
            continue

        content, source_ref = resolved
        imports.append(
            TranslationImportPlan(
                language_id=crowdin_language_id(language_env, group.name),
                link_bucket=link_bucket,
                repo_path=equivalent_path,
                content=content,
                source_ref=source_ref,
            )
        )

    return has_main_equivalent, imports


@dataclass
class UploadPlan:
    mode: Literal["full", "partial"]
    source_file_name: str
    content: bytes
    added_line_count: int
    total_line_count: int
    block_count: int
    has_existing_translations_in_main: bool
    file_context: str | None = None
    translation_imports: list[TranslationImportPlan] | None = None


def plan_upload(
    relative_path: str,
    base_sha: str,
    head_sha: str,
    group: CrowdinUploadGroup,
) -> UploadPlan:
    global _current_source_path
    _current_source_path = relative_path

    file_path = Path(relative_path)
    file_name = crowdin_basename(relative_path)
    full_text = file_path.read_text(encoding="utf-8")
    total_lines = len(full_text.splitlines())
    total_words = count_words(full_text)
    diff_text = git_diff(base_sha, head_sha, relative_path)
    additions = parse_added_lines(diff_text)
    blocks = group_consecutive_blocks(additions)
    added_count = len(additions)
    added_words = count_words("\n".join(text for _, text in additions))
    new_file = is_new_file(diff_text)
    translations_in_main, translation_imports = plan_translation_context(
        relative_path,
        base_sha=base_sha,
        head_sha=head_sha,
        group=group,
    )

    if should_upload_partial(
        added_count,
        len(blocks),
        total_lines,
        added_words,
        total_words,
        new_file=new_file,
        has_existing_translations_in_main=translations_in_main,
    ):
        partial_text = format_partial_content(blocks)
        changed_line_numbers = {line_no for line_no, _ in additions}
        return UploadPlan(
            mode="partial",
            source_file_name=file_name,
            content=partial_text.encode("utf-8"),
            added_line_count=added_count,
            total_line_count=total_lines,
            block_count=len(blocks),
            has_existing_translations_in_main=translations_in_main,
            file_context=format_partial_file_context(
                relative_path,
                full_text,
                changed_line_numbers,
            ),
            translation_imports=translation_imports,
        )

    if not translations_in_main:
        print(
            f"Using full upload for {relative_path}: "
            "no equivalent EN/ES files on main (matched by slugEN)",
            file=sys.stderr,
        )
    elif new_file or (total_lines > 0 and added_count >= total_lines):
        print(
            f"Using full upload for {relative_path}: "
            "new file or full rewrite",
            file=sys.stderr,
        )
    else:
        print(
            f"Using full upload for {relative_path}: "
            f"{len(blocks)} blocks, {added_words}/{total_words} added words "
            "outside partial tiers",
            file=sys.stderr,
        )

    return UploadPlan(
        mode="full",
        source_file_name=file_name,
        content=file_path.read_bytes(),
        added_line_count=added_count,
        total_line_count=total_lines,
        block_count=len(blocks),
        has_existing_translations_in_main=translations_in_main,
        translation_imports=translation_imports,
    )


def write_github_output(name: str, value: str) -> None:
    output_path = env("GITHUB_OUTPUT")
    if not output_path:
        return
    delimiter = f"EOF_{name}"
    with open(output_path, "a", encoding="utf-8") as handle:
        handle.write(f"{name}<<{delimiter}\n{value}\n{delimiter}\n")


def merge_word_count_description(current: str, count: str) -> str:
    row = f"|Word count|{count}|"
    if re.search(r"^\|Word count\|", current, flags=re.MULTILINE):
        return re.sub(r"^\|Word count\|.*\|$", row, current, flags=re.MULTILINE)
    if "||Field||Value||" in current:
        return current.replace(
            "||Field||Value||\n",
            f"||Field||Value||\n{row}\n",
            1,
        )
    if current.strip():
        return f"{current.rstrip()}\n\nh3. Crowdin\n||Field||Value||\n{row}\n"
    return f"h3. Crowdin\n||Field||Value||\n{row}\n"


def resolve_upload_context(
    all_files: list[str],
) -> tuple[CrowdinUploadGroup, list[str]]:
    content_source = env("CONTENT_SOURCE")
    pt_files = files_for_prefixes(all_files, PT_CROWDIN_GROUP.path_prefixes)
    en_files = files_for_prefixes(all_files, EN_CROWDIN_GROUP.path_prefixes)

    if content_source == "pt" or (not content_source and pt_files):
        if en_files:
            print(
                "PR touches PT source (docs/pt or localization/) and docs/en; "
                "ignoring docs/en files",
                file=sys.stderr,
            )
        active_files = pt_files or [
            path
            for path in all_files
            if path.replace("\\", "/").startswith(PT_CROWDIN_GROUP.path_prefixes)
        ]
        return PT_CROWDIN_GROUP, active_files

    if content_source == "en" or en_files:
        return EN_CROWDIN_GROUP, en_files or [
            path
            for path in all_files
            if path.replace("\\", "/").startswith(EN_CROWDIN_GROUP.path_prefixes)
        ]

    raise RuntimeError(
        "Could not determine Crowdin upload mode (expected CONTENT_SOURCE=pt|en "
        "or changed files under docs/pt, localization/, or docs/en)"
    )


def merge_crowdin_description(current: str, links: str) -> str:
    section = f"h3. Crowdin editor\n\n{links}"
    if re.search(r"^h3\. Crowdin editor\b", current, flags=re.MULTILINE):
        return re.sub(
            r"^h3\. Crowdin editor[\s\S]*$",
            section,
            current.rstrip(),
            count=1,
            flags=re.MULTILINE,
        )
    if current.strip():
        return f"{current.rstrip()}\n\n{section}"
    return section


def require_project_id(project_id_env: str, group_name: str) -> str:
    project_id = env(project_id_env)
    if not project_id:
        raise RuntimeError(
            f"{project_id_env} is required for {group_name} source files"
        )
    if not env("LOC_CROWDIN_API_TOKEN"):
        raise RuntimeError("LOC_CROWDIN_API_TOKEN is required")
    return project_id


def upload_group_files(
    group: CrowdinUploadGroup,
    files: list[str],
    *,
    base_sha: str,
    head_sha: str,
    task_key: str,
) -> tuple[int, dict[str, list[str]], list[dict]]:
    global _rename_map
    if not files:
        return 0, {"en": [], "es": []}, []

    _rename_map = build_rename_map(base_sha, head_sha)

    project_id = require_project_id(group.project_id_env, group.name)
    project_data = fetch_project_data(project_id)
    project_identifier = str(project_data["identifier"])
    source_editor_code = str(project_data["sourceLanguage"]["editorCode"])

    target_codes: dict[str, str] = {}
    for language_env, link_bucket in group.target_languages:
        language_id = resolve_project_language_id(
            project_data,
            crowdin_language_id(language_env, group.name),
        )
        target_codes[link_bucket] = language_editor_code(project_data, language_id)

    uploaded_files: list[dict] = []
    total_words = 0
    link_buckets: dict[str, list[str]] = {"en": [], "es": []}

    for relative_path in files:
        file_path = Path(relative_path)
        if not file_path.is_file():
            print(f"Skipping missing file: {relative_path}", file=sys.stderr)
            continue

        plan = plan_upload(relative_path, base_sha, head_sha, group)
        crowdin_name = build_crowdin_file_name(
            task_key,
            plan.source_file_name,
            plan.mode,
        )
        storage_id = upload_storage_bytes(plan.content, crowdin_name)
        file_id = create_or_update_file(
            project_id,
            storage_id,
            crowdin_name,
            "md",
            file_context=plan.file_context if plan.mode == "partial" else None,
        )

        imported_translations: list[dict] = []
        for translation in plan.translation_imports or []:
            language_id = resolve_project_language_id(
                project_data,
                translation.language_id,
            )
            import_id = import_translation_file(
                project_id,
                file_id,
                language_id,
                translation.content,
                crowdin_basename(translation.repo_path),
            )
            imported_translations.append(
                {
                    "repo_path": translation.repo_path,
                    "language_id": language_id,
                    "source_ref": translation.source_ref,
                    "import_id": import_id,
                }
            )
            print(
                f"[{group.name}] Imported {translation.repo_path} as "
                f"{translation.language_id} translation for {crowdin_name} "
                f"(from {translation.source_ref})",
                file=sys.stderr,
            )

        words = get_file_word_count(project_id, file_id)
        total_words += words

        file_record = {
            "source_path": relative_path,
            "path": crowdin_name,
            "upload_mode": plan.mode,
            "file_id": file_id,
            "words": words,
            "added_lines": plan.added_line_count,
            "total_lines": plan.total_line_count,
            "addition_blocks": plan.block_count,
            "translations_in_main": plan.has_existing_translations_in_main,
            "imported_translations": imported_translations,
            "crowdin_project_id": project_id,
            "crowdin_group": group.name,
        }

        for link_bucket, target_editor_code in target_codes.items():
            editor_link = editor_url(
                project_identifier,
                file_id,
                source_editor_code,
                target_editor_code,
            )
            link_buckets[link_bucket].append(f"[{crowdin_name}|{editor_link}]")
            file_record[f"{link_bucket}_editor_url"] = editor_link

        uploaded_files.append(file_record)
        print(
            f"[{group.name}] Uploaded {crowdin_name} ({plan.mode}): "
            f"{words} words "
            f"({plan.added_line_count}/{plan.total_line_count} added lines, "
            f"{plan.block_count} block(s))",
            file=sys.stderr,
        )

    return total_words, link_buckets, uploaded_files


def upload_files() -> int:
    base_sha = env("BASE_SHA")
    head_sha = env("HEAD_SHA")
    if not base_sha or not head_sha:
        raise RuntimeError("BASE_SHA and HEAD_SHA are required")

    task_key = env("JIRA_TASK_KEY")
    if not task_key:
        raise RuntimeError("JIRA_TASK_KEY is required")

    reset_upload_state()

    all_files = changed_files()
    if not all_files:
        raise RuntimeError("No eligible markdown files to upload to Crowdin")

    group, active_files = resolve_upload_context(all_files)
    if not active_files:
        raise RuntimeError(f"No {group.name} source files to upload to Crowdin")

    total_words, link_buckets, uploaded_files = upload_group_files(
        group,
        active_files,
        base_sha=base_sha,
        head_sha=head_sha,
        task_key=task_key,
    )

    if not uploaded_files:
        raise RuntimeError("No files were uploaded to Crowdin")

    en_editor_links = "\n".join(link_buckets["en"])
    es_editor_links = "\n".join(link_buckets["es"])
    if not en_editor_links or not es_editor_links:
        raise RuntimeError("Crowdin editor links were not generated")

    post_duplicate_slug_en_jira_comment(task_key)

    result = {
        "content_source": group.name,
        "total_words": total_words,
        "en_editor_links": en_editor_links,
        "es_editor_links": es_editor_links,
        "files": uploaded_files,
    }
    print(json.dumps(result))
    write_github_output("content_source", group.name)
    write_github_output("total_words", str(total_words))
    write_github_output("en_editor_links", en_editor_links)
    write_github_output("es_editor_links", es_editor_links)
    write_github_output("files_json", json.dumps(uploaded_files))
    return 0


def main() -> int:
    if len(sys.argv) == 1:
        return upload_files()

    command = sys.argv[1]
    if command == "word-count":
        print(merge_word_count_description(
            os.environ.get("CURRENT", ""),
            os.environ.get("COUNT", ""),
        ))
        return 0
    if command == "crowdin-links":
        print(merge_crowdin_description(
            os.environ.get("CURRENT", ""),
            os.environ.get("LINKS", ""),
        ))
        return 0
    if command == "upload":
        return upload_files()

    print(
        f"Unknown command: {command} "
        "(expected upload, word-count, or crowdin-links)",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:  # noqa: BLE001
        print(f"Crowdin sync failed: {error}", file=sys.stderr)
        raise SystemExit(1) from error
