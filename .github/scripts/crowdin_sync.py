#!/usr/bin/env python3
"""
Upload PR-touched markdown files to Crowdin and update Jira descriptions
with Crowdin metadata (word count, editor links).

Partial uploads require equivalent EN and/or ES files on main (matched by slugEN
in frontmatter) plus the existing ≤5-block diff rule. Full source is uploaded
otherwise. When equivalent locale files exist on main or are added in the PR, they
are imported as Crowdin translations so reviewers can update existing strings
instead of translating from scratch.

Commands:
  crowdin_sync.py              Upload touched files to Crowdin
  crowdin_sync.py word-count   Merge word count into a Jira description (CURRENT, COUNT)
  crowdin_sync.py crowdin-links  Merge editor links into a Jira description (CURRENT, LINKS)
"""

from __future__ import annotations

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

# Crowdin language IDs (Spanish is always es-mx, not generic es).
LANGUAGE_ENV_DEFAULTS: dict[str, str] = {
    "CROWDIN_EN_LANGUAGE": "en",
    "CROWDIN_ES_LANGUAGE": "es-mx",
    "CROWDIN_PT_LANGUAGE": "pt-br",
}

LANGUAGE_ENV_TO_REPO_LOCALE: dict[str, str] = {
    "CROWDIN_EN_LANGUAGE": "en",
    "CROWDIN_ES_LANGUAGE": "es",
    "CROWDIN_PT_LANGUAGE": "pt",
}

SLUG_EN_PATTERN = re.compile(r"^slugEN:\s*(.+?)\s*$", re.MULTILINE)


def env(name: str, default: str = "") -> str:
    return os.environ.get(name, default).strip()


def crowdin_language_id(language_env: str, group_name: str) -> str:
    language_id = env(language_env, LANGUAGE_ENV_DEFAULTS.get(language_env, ""))
    if not language_id:
        raise RuntimeError(
            f"{language_env} is required for {group_name} Crowdin uploads"
        )
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
    source = project_data.get("sourceLanguage") or {}
    if source.get("id") == language_id:
        return str(source["editorCode"])
    for language in project_data.get("targetLanguages") or []:
        if language.get("id") == language_id:
            return str(language["editorCode"])
    return language_id


def editor_url(
    project_identifier: str,
    file_id: int,
    source_editor_code: str,
    target_editor_code: str,
) -> str:
    language_pair = f"{source_editor_code}-{target_editor_code}"
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


def changed_files() -> list[str]:
    raw = env("CHANGED_FILES")
    if not raw:
        return []
    return [
        line.strip()
        for line in raw.splitlines()
        if line.strip().endswith((".md", ".mdx")) and is_eligible_path(line.strip())
    ]


def files_for_prefixes(all_files: list[str], prefixes: tuple[str, ...]) -> list[str]:
    return [
        path
        for path in all_files
        if path.replace("\\", "/").startswith(prefixes)
    ]


@dataclass(frozen=True)
class CrowdinUploadGroup:
    name: str
    path_prefixes: tuple[str, ...]
    project_id_env: str
    target_languages: tuple[tuple[str, str], ...]
    # link_bucket names map to workflow outputs (en_editor_links / es_editor_links).
    # Spanish links always use CROWDIN_ES_LANGUAGE (es-mx).


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


def git_diff(base_sha: str, head_sha: str, relative_path: str) -> str:
    result = subprocess.run(
        ["git", "diff", "-U0", f"{base_sha}...{head_sha}", "--", relative_path],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode not in (0, 1):
        raise RuntimeError(
            f"git diff failed for {relative_path}: "
            f"{result.stderr.strip() or result.stdout.strip()}"
        )
    return result.stdout


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


def find_en_equivalent_by_slug(ref: str, slug_en: str) -> str | None:
    """EN files use slugEN as the filename (docs/en/**/{slugEN}.md)."""
    result = subprocess.run(
        ["git", "ls-tree", "-r", "--name-only", ref, "--", "docs/en/"],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None

    matches: list[str] = []
    for path in result.stdout.splitlines():
        if not path.endswith((".md", ".mdx")):
            continue
        if Path(path).stem == slug_en:
            matches.append(path)
    if len(matches) == 1:
        return matches[0]
    return matches[0] if matches else None


def normalize_git_grep_path(line: str, ref: str) -> str:
    line = line.strip()
    prefix = f"{ref}:"
    if line.startswith(prefix):
        return line[len(prefix):]
    return line


def find_locale_equivalent_by_slug(ref: str, locale: str, slug_en: str) -> str | None:
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

    if not matches:
        return None
    if len(matches) == 1:
        return matches[0]

    unique_matches = sorted(set(matches))
    print(
        f"Multiple {locale} equivalents for slugEN {slug_en!r} at {ref}: "
        f"{unique_matches}; using {unique_matches[0]}",
        file=sys.stderr,
    )
    return unique_matches[0]


def find_equivalent_path_at_ref(
    slug_en: str,
    target_locale: str,
    ref: str,
) -> str | None:
    if target_locale == "en":
        return find_en_equivalent_by_slug(ref, slug_en)
    return find_locale_equivalent_by_slug(ref, target_locale, slug_en)


def has_equivalent_translations_in_main(
    source_path: str,
    base_sha: str,
    head_sha: str,
    group: CrowdinUploadGroup,
) -> bool:
    slug_en = get_slug_en_for_path(source_path, head_sha, base_sha)
    if not slug_en:
        return False

    for language_env, _link_bucket in group.target_languages:
        target_locale = LANGUAGE_ENV_TO_REPO_LOCALE.get(language_env)
        if not target_locale:
            continue
        equivalent_path = find_equivalent_path_at_ref(slug_en, target_locale, base_sha)
        if equivalent_path and git_file_exists(base_sha, equivalent_path):
            return True
    return False


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
) -> int:
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
    return int(response["data"]["identifier"])


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
    return "new file mode" in diff_text


def should_upload_partial(
    added_count: int,
    block_count: int,
    total_lines: int,
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
    return block_count <= 5


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


def collect_translation_imports(
    source_path: str,
    *,
    base_sha: str,
    head_sha: str,
    group: CrowdinUploadGroup,
) -> list[TranslationImportPlan]:
    slug_en = get_slug_en_for_path(source_path, head_sha, base_sha)
    if not slug_en:
        print(
            f"No slugEN found for {source_path}; skipping translation imports",
            file=sys.stderr,
        )
        return []

    imports: list[TranslationImportPlan] = []

    for language_env, link_bucket in group.target_languages:
        target_locale = LANGUAGE_ENV_TO_REPO_LOCALE.get(language_env)
        if not target_locale:
            continue

        equivalent_path = None
        for ref in (head_sha, base_sha):
            candidate = find_equivalent_path_at_ref(slug_en, target_locale, ref)
            if candidate and git_file_exists(ref, candidate):
                equivalent_path = candidate
                break
        if not equivalent_path:
            continue

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

    return imports


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
    file_path = Path(relative_path)
    file_name = crowdin_basename(relative_path)
    total_lines = len(file_path.read_text(encoding="utf-8").splitlines())
    diff_text = git_diff(base_sha, head_sha, relative_path)
    additions = parse_added_lines(diff_text)
    blocks = group_consecutive_blocks(additions)
    added_count = len(additions)
    new_file = is_new_file(diff_text)
    translations_in_main = has_equivalent_translations_in_main(
        relative_path,
        base_sha,
        head_sha,
        group,
    )
    translation_imports = collect_translation_imports(
        relative_path,
        base_sha=base_sha,
        head_sha=head_sha,
        group=group,
    )

    if should_upload_partial(
        added_count,
        len(blocks),
        total_lines,
        new_file=new_file,
        has_existing_translations_in_main=translations_in_main,
    ):
        partial_text = format_partial_content(blocks)
        full_text = file_path.read_text(encoding="utf-8")
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
    elif len(blocks) > 5:
        print(
            f"Using full upload for {relative_path}: "
            f"{len(blocks)} change blocks (>5)",
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
    if not files:
        return 0, {"en": [], "es": []}, []

    project_id = require_project_id(group.project_id_env, group.name)
    project_data = fetch_project_data(project_id)
    project_identifier = str(project_data["identifier"])
    source_editor_code = str(project_data["sourceLanguage"]["editorCode"])

    target_codes: dict[str, str] = {}
    for language_env, link_bucket in group.target_languages:
        language_id = crowdin_language_id(language_env, group.name)
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
            import_id = import_translation_file(
                project_id,
                file_id,
                translation.language_id,
                translation.content,
                crowdin_basename(translation.repo_path),
            )
            imported_translations.append(
                {
                    "repo_path": translation.repo_path,
                    "language_id": translation.language_id,
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
