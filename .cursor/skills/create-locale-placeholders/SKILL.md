---
name: create-locale-placeholders
description: Keeps en and es tutorial files in sync with a pt tutorial article that was just created or updated, matched by slugEN. If the pt article is new, creates empty-body placeholder files in en and es with a translated title and filename. If the pt article already has en/es counterparts, copies its updatedAt into them. Use when a pt tutorial file under docs/pt/tutorials was created or edited and the corresponding en/es files need to be created or kept in sync.
---

# Create locale placeholders

Given a `docs/pt/tutorials/**/*.md` file that was created or updated, keep its `en` and `es` counterparts in sync:

- **pt file is new** (no `en`/`es` counterpart with the same `slugEN`) → create an empty-body placeholder in `en` and `es`, with the Portuguese title and filename translated into that locale.
- **pt file was updated** (counterpart already exists) → copy pt's `updatedAt` into the `en`/`es` frontmatter. Nothing else changes.

Existing counterparts are matched by `slugEN`. Folder names stay matched by `metadata.json` id. A new placeholder's **title and filename** are translations of the Portuguese ones — never a copy of the pt title or pt filename.

## Script

```bash
# dry-run (default) — pass the translated title and filename on creates
node docs-utils/createLocalePlaceholders.js <pt-file.md> \
  --en-title "Checking Credit Wallet" --en-filename checking-credit-wallet.md \
  --es-title "Consultar la cartera de crédito" --es-filename consultar-la-cartera-de-credito.md

# write changes (same flags)
node docs-utils/createLocalePlaceholders.js <pt-file.md> \
  --en-title "Checking Credit Wallet" --en-filename checking-credit-wallet.md \
  --es-title "Consultar la cartera de crédito" --es-filename consultar-la-cartera-de-credito.md \
  --apply

# only one target locale
node docs-utils/createLocalePlaceholders.js <pt-file.md> --locale en \
  --en-title "Checking Credit Wallet" --en-filename checking-credit-wallet.md --apply
```

Always run the dry run first and check the plan before `--apply`.

When the dry run will **create** a placeholder, translate before that dry run and pass the flags. The script refuses to create a file if `--en-title` / `--es-title` or `--en-filename` / `--es-filename` is missing for that locale. An update of an existing counterpart only copies `updatedAt` and does not need these flags.

### How to translate

- **Title**: natural translation of the pt `title` into that locale, in the same style as neighboring Help Center titles (sentence case; keep product names as they appear in that locale, e.g. Credit Wallet / Cartera de Crédito).
- **Filename**: kebab-case slug of that translated title, lowercase, no accents, ending in `.md`. For English, use `{slugEN}.md` when `slugEN` is already that slug.

## What it does

1. Reads `slugEN` and frontmatter from the pt file. Stops if `slugEN` or `updatedAt` is missing.
2. Searches `docs/en` and `docs/es` for a file with the same `slugEN`.
3. For each locale (`en`, `es`):
   - **Counterpart found**: if its `updatedAt` differs from pt's, rewrites just that line. Body and every other frontmatter field are untouched.
   - **No counterpart**: creates a new placeholder file (frontmatter only, empty body) at the destination described below.
   - **Multiple counterparts found**: stops and reports — does not guess.

### Placeholder destination and content

- **Folder**: the folder whose `metadata.json` `id` matches the pt file's parent folder `id` (folder names are localized — e.g. `informacoes-de-faturamento` (pt) / `billing` (en) / `facturacion` (es) — so folders are matched by `metadata.json` id, not by name). If no such folder exists in that locale, the script stops and reports it: create the matching folder + `metadata.json` there first, then rerun.
- **Filename**: the translated filename passed with `--en-filename` / `--es-filename`. Required when creating. Never the pt filename.
- **Frontmatter fields copied from pt as-is**: `createdAt`, `updatedAt`, `contentType`, `productTeam`, `slugEN`, `legacySlug`, `hidden` (only the ones present on pt).
- **`title`**: the translated title passed with `--en-title` / `--es-title`. Required when creating. Never the pt title.
- **`locale`**: set to the target locale.
- **`subcategoryId`**: set to the destination folder's `metadata.json` id.
- **`seeAlso`** and other array fields: never copied — they're locale-specific internal links.
- **Body**: left empty.

## After running

- Report which locales were created vs. only updated vs. skipped (with the reason).
- If a folder mapping failed, tell the user which locale/folder is missing before they can create the placeholder there.
