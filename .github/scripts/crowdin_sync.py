#!/usr/bin/env python3
"""
Upload PR-touched markdown files to Crowdin and update Jira descriptions
with Crowdin metadata (word count, editor links).

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
    data: dict | bytes | None = None,
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
    if isinstance(data, dict):
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


def partial_crowdin_name(file_name: str) -> str:
    path = Path(file_name)
    return f"{path.stem}.partial{path.suffix}"


def prefixed_crowdin_name(task_key: str, file_name: str) -> str:
    return f"{task_key}_{file_name}"


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


def should_upload_partial(added_count: int, total_lines: int, block_count: int) -> bool:
    if added_count == 0 or total_lines == 0:
        return False
    if block_count > 3:
        return False
    return added_count < (total_lines / 2)


def format_partial_content(blocks: list[list[str]]) -> str:
    return "\n\n".join("\n".join(block) for block in blocks)


def format_partial_file_context(relative_path: str, full_text: str) -> str:
    return (
        "# Full file reference\n\n"
        f"Source path: `{relative_path}`\n\n"
        "The strings in this file are **partial changes only**. "
        "Use the full document below for context when translating.\n\n"
        "---\n\n"
        f"{full_text}"
    )


@dataclass
class UploadPlan:
    mode: Literal["full", "partial"]
    crowdin_name: str
    content: bytes
    added_line_count: int
    total_line_count: int
    block_count: int
    file_context: str | None = None


def plan_upload(relative_path: str, base_sha: str, head_sha: str) -> UploadPlan:
    file_path = Path(relative_path)
    file_name = crowdin_basename(relative_path)
    total_lines = len(file_path.read_text(encoding="utf-8").splitlines())
    diff_text = git_diff(base_sha, head_sha, relative_path)
    additions = parse_added_lines(diff_text)
    blocks = group_consecutive_blocks(additions)
    added_count = len(additions)

    if should_upload_partial(added_count, total_lines, len(blocks)):
        partial_name = partial_crowdin_name(file_name)
        partial_text = format_partial_content(blocks)
        full_text = file_path.read_text(encoding="utf-8")
        return UploadPlan(
            mode="partial",
            crowdin_name=partial_name,
            content=partial_text.encode("utf-8"),
            added_line_count=added_count,
            total_line_count=total_lines,
            block_count=len(blocks),
            file_context=format_partial_file_context(relative_path, full_text),
        )

    return UploadPlan(
        mode="full",
        crowdin_name=file_name,
        content=file_path.read_bytes(),
        added_line_count=added_count,
        total_line_count=total_lines,
        block_count=len(blocks),
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

        plan = plan_upload(relative_path, base_sha, head_sha)
        crowdin_name = prefixed_crowdin_name(task_key, plan.crowdin_name)
        storage_id = upload_storage_bytes(plan.content, crowdin_name)
        file_id = create_or_update_file(
            project_id,
            storage_id,
            crowdin_name,
            "md",
            file_context=plan.file_context,
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
