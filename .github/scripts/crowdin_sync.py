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


def env(name: str, default: str = "") -> str:
    return os.environ.get(name, default).strip()


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


def verify_project(project_id: str) -> None:
    """Raise if the project ID, API host, or token is invalid."""
    try:
        crowdin_request("GET", f"/projects/{project_id}")
    except RuntimeError as error:
        if "HTTP 404" in str(error):
            raise RuntimeError(
                f"Crowdin project {project_id!r} was not found at "
                f"{crowdin_api_base()}. {crowdin_config_help(project_id)}"
            ) from error
        raise


def default_branch_id(project_id: str) -> int | None:
    """Return the default branch ID when branching is enabled, else None."""
    query = urllib.parse.urlencode({"limit": 500})
    try:
        response = crowdin_request("GET", f"/projects/{project_id}/branches?{query}")
    except RuntimeError as error:
        # Branching is optional; skip branchId when branches can't be listed.
        if "HTTP 404" not in str(error) and "HTTP 403" not in str(error):
            raise
        print(
            "Crowdin branches unavailable; uploading without branchId "
            f"({error})",
            file=sys.stderr,
        )
        return None

    branches = response.get("data", [])
    if not branches:
        return None

    for preferred in ("main", "master"):
        for item in branches:
            if item["data"]["name"] == preferred:
                return int(item["data"]["id"])
    return int(branches[0]["data"]["id"])


def find_file(project_id: str, file_name: str, branch_id: int | None) -> int | None:
    params: dict[str, str | int] = {"filter": file_name, "limit": 500}
    if branch_id is not None:
        params["branchId"] = branch_id
    query = urllib.parse.urlencode(params)
    response = crowdin_request("GET", f"/projects/{project_id}/files?{query}")
    for item in response.get("data", []):
        if item["data"]["name"] == file_name:
            return int(item["data"]["id"])
    return None


def create_or_update_file(
    project_id: str,
    branch_id: int | None,
    storage_id: int,
    file_name: str,
    file_type: str,
) -> int:
    existing_id = find_file(project_id, file_name, branch_id)
    if existing_id is None:
        payload: dict[str, object] = {
            "storageId": storage_id,
            "name": file_name,
            "type": file_type,
        }
        if branch_id is not None:
            payload["branchId"] = branch_id
        created = crowdin_request(
            "POST",
            f"/projects/{project_id}/files",
            data=payload,
        )
        return int(created["data"]["id"])

    crowdin_request(
        "PUT",
        f"/projects/{project_id}/files/{existing_id}",
        data={"storageId": storage_id},
    )
    return existing_id


def get_file_word_count(project_id: str, file_id: int) -> int:
    for attempt in range(6):
        response = crowdin_request(
            "GET",
            f"/projects/{project_id}/files/{file_id}/languages/progress",
        )
        items = response.get("data", [])
        if items:
            return int(items[0]["data"]["words"]["total"])
        time.sleep(2 * (attempt + 1))
    return 0


def editor_url(project_id: str, file_id: int, language_id: str) -> str:
    params = urllib.parse.urlencode({"fileId": file_id, "lang": language_id})
    return f"{crowdin_web_base()}/u/projects/{project_id}/editor?{params}"


def crowdin_basename(relative_path: str) -> str:
    return Path(relative_path.replace("\\", "/")).name


def partial_crowdin_name(file_name: str) -> str:
    path = Path(file_name)
    return f"{path.stem}.partial{path.suffix}"


def prefixed_crowdin_name(task_key: str, file_name: str) -> str:
    return f"{task_key}_{file_name}"


def is_eligible_path(relative_path: str) -> bool:
    path = relative_path.replace("\\", "/")
    return path.startswith(("docs/pt/", "localization/"))


def changed_files() -> list[str]:
    raw = env("CHANGED_FILES")
    if not raw:
        return []
    return [
        line.strip()
        for line in raw.splitlines()
        if line.strip().endswith((".md", ".mdx")) and is_eligible_path(line.strip())
    ]


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


@dataclass
class UploadPlan:
    mode: Literal["full", "partial"]
    crowdin_name: str
    content: bytes
    added_line_count: int
    total_line_count: int
    block_count: int


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
        return UploadPlan(
            mode="partial",
            crowdin_name=partial_name,
            content=partial_text.encode("utf-8"),
            added_line_count=added_count,
            total_line_count=total_lines,
            block_count=len(blocks),
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


def write_skip_outputs() -> None:
    write_github_output("total_words", "0")
    write_github_output("en_editor_links", "")
    write_github_output("es_editor_links", "")
    write_github_output("files_json", "[]")


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


def upload_files() -> int:
    project_id = env("LOC_CROWDIN_PROJECT_ID")
    if not project_id:
        print("LOC_CROWDIN_PROJECT_ID is not set; skipping Crowdin upload", file=sys.stderr)
        result = {
            "skipped": True,
            "total_words": 0,
            "en_editor_links": "",
            "es_editor_links": "",
            "files": [],
        }
        print(json.dumps(result))
        write_skip_outputs()
        return 0

    base_sha = env("BASE_SHA")
    head_sha = env("HEAD_SHA")
    if not base_sha or not head_sha:
        raise RuntimeError("BASE_SHA and HEAD_SHA are required")

    task_key = env("JIRA_TASK_KEY")
    if not task_key:
        raise RuntimeError("JIRA_TASK_KEY is required")

    en_language = env("CROWDIN_EN_LANGUAGE")
    es_language = env("CROWDIN_ES_LANGUAGE")

    files = changed_files()
    if not files:
        result = {
            "skipped": False,
            "total_words": 0,
            "en_editor_links": "",
            "es_editor_links": "",
            "files": [],
        }
        print(json.dumps(result))
        write_skip_outputs()
        return 0

    verify_project(project_id)
    branch_id = default_branch_id(project_id)
    uploaded_files = []
    total_words = 0
    en_links: list[str] = []
    es_links: list[str] = []

    for relative_path in files:
        file_path = Path(relative_path)
        if not file_path.is_file():
            print(f"Skipping missing file: {relative_path}", file=sys.stderr)
            continue

        plan = plan_upload(relative_path, base_sha, head_sha)
        crowdin_name = prefixed_crowdin_name(task_key, plan.crowdin_name)
        storage_id = upload_storage_bytes(plan.content, crowdin_name)
        file_id = create_or_update_file(
            project_id, branch_id, storage_id, crowdin_name, "md"
        )
        words = get_file_word_count(project_id, file_id)
        total_words += words

        en_url = editor_url(project_id, file_id, en_language)
        es_url = editor_url(project_id, file_id, es_language)
        en_links.append(f"[{crowdin_name}|{en_url}]")
        es_links.append(f"[{crowdin_name}|{es_url}]")

        uploaded_files.append(
            {
                "source_path": relative_path,
                "path": crowdin_name,
                "upload_mode": plan.mode,
                "file_id": file_id,
                "words": words,
                "added_lines": plan.added_line_count,
                "total_lines": plan.total_line_count,
                "addition_blocks": plan.block_count,
                "en_editor_url": en_url,
                "es_editor_url": es_url,
            }
        )
        print(
            f"Uploaded {crowdin_name} ({plan.mode}): "
            f"{words} words "
            f"({plan.added_line_count}/{plan.total_line_count} added lines, "
            f"{plan.block_count} block(s))",
            file=sys.stderr,
        )

    en_editor_links = "\n".join(en_links)
    es_editor_links = "\n".join(es_links)
    result = {
        "skipped": False,
        "total_words": total_words,
        "en_editor_links": en_editor_links,
        "es_editor_links": es_editor_links,
        "files": uploaded_files,
    }
    print(json.dumps(result))
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
