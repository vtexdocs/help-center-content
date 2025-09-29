#!/usr/bin/env bash
# Run the index-docs-on-change workflow locally for a mock pull_request using act.
# Usage:
#   scripts/local-act-pr-test.sh [HEAD_BRANCH] [BASE_BRANCH]
# Examples:
#   scripts/local-act-pr-test.sh                 # uses current branch as head, base=main
#   scripts/local-act-pr-test.sh ci/mock-pr-index main
# Notes:
# - Loads secrets from ../algolia-index-analyzer/scripts/.env.local (not printed)
# - Requires: Docker running, act installed (brew install act)
# - Override runner image: ACT_IMAGE=ghcr.io/catthehacker/ubuntu:act-22.04 scripts/local-act-pr-test.sh

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

# Default runner image mapping for act
ACT_IMAGE_DEFAULT="ghcr.io/catthehacker/ubuntu:act-22.04"
ACT_IMAGE="${ACT_IMAGE:-$ACT_IMAGE_DEFAULT}"

if ! command -v act >/dev/null 2>&1; then
  echo "act is not installed. Install with: brew install act" >&2
  exit 1
fi

ANALYZER_ENV="$ROOT_DIR/../algolia-index-analyzer/.env.local"
if [ ! -f "$ANALYZER_ENV" ]; then
  echo "Missing $ANALYZER_ENV" >&2
  exit 1
fi

# Load environment (do not print)
set -a
. "$ANALYZER_ENV"
set +a

SECRETS_FILE="$(mktemp -t act-secrets.XXXXXX)"
EVENT_FILE="$(mktemp -t act-event.XXXXXX.json)"
cleanup() { rm -f "$SECRETS_FILE" "$EVENT_FILE"; }
trap cleanup EXIT
chmod 600 "$SECRETS_FILE"

# Append secrets if present (never echo values)
write_secret() {
  local key="$1"
  local val="${!key:-}"
  if [ -n "$val" ]; then
    printf '%s=%s\n' "$key" "$val" >> "$SECRETS_FILE"
  fi
}
write_secret ALGOLIA_APPLICATION_ID
write_secret ALGOLIA_ADMIN_API_KEY
write_secret ALGOLIA_INDEX_NAME
write_secret GITHUB_TOKEN
write_secret ANALYZER_REPO_TOKEN
printf 'ACTIONS_STEP_DEBUG=true\n' >> "$SECRETS_FILE"

HEAD_BRANCH="${1:-$(git rev-parse --abbrev-ref HEAD)}"
BASE_BRANCH="${2:-main}"

# Minimal PR event payload
cat > "$EVENT_FILE" <<JSON
{
  "pull_request": {
    "base": { "ref": "$BASE_BRANCH" },
    "head": { "ref": "$HEAD_BRANCH" }
  },
  "repository": {
    "name": "help-center-content",
    "full_name": "vtexdocs/help-center-content",
    "owner": { "login": "vtexdocs" }
  }
}
JSON

# Resolve local analyzer absolute path and mount into container at /home/runner/algolia-index-analyzer
ANALYZER_SRC="$(cd "$ROOT_DIR/../algolia-index-analyzer" && pwd)"
ANALYZER_DST="/home/runner/algolia-index-analyzer"

# Run act against the single workflow/job with bind mounts
act pull_request \
  -b \
  -W .github/workflows/index-docs-on-change.yml \
  -j index-docs \
  --secret-file "$SECRETS_FILE" \
  -e "$EVENT_FILE" \
  -P ubuntu-latest="$ACT_IMAGE" \
  --container-options "-v ${ANALYZER_SRC}:${ANALYZER_DST}" \
  "${@:3}"
