---
name: relocate-tutorial-folders
description: Relocates Help Center tutorial folders across en, es, and pt and updates CDN image URLs in the markdown files. Uses slugEN as the ID that connects the three locales. Use when moving a docs folder out of a parent category, relocating tutorials under docs/en, docs/es, or docs/pt, or when asked to fix image links after a folder move.
---

# Relocate tutorial folders

Move Help Center tutorial folders (and co-located assets) to a new path, keep **en / es / pt** in sync, then fix image URLs.

**slugEN funciona como o ID que conecta as docs en es e pt.** Do not match locales by translating folder names.

## Defaults

- Apply the same structural move to **all three locales** unless the user restricts the scope.
- Keep each locale's existing leaf folder name (`vtex-admin` vs `admin-vtex`). Infer the destination from the same relative change (for example, "one level up, out of the parent category").
- Use `git mv` so Git tracks the rename, including images and `metadata.json`.
- Do not edit `metadata.json` slugs, frontmatter, or in-article links (`/en/docs/tutorials/...`) unless asked. Those use slugs, not folder paths.

## Script

Prefer the script over doing the steps by hand:

```bash
# dry-run (default)
node docs-utils/relocateTutorialFolders.js <source> --up
node docs-utils/relocateTutorialFolders.js <source> <destination>

# actually git mv + rewrite CDN URLs + verify image links
node docs-utils/relocateTutorialFolders.js <source> --up --apply
```

`--locale en|es|pt` restricts the move to one locale. Leaf folder names stay locale-specific.

## Workflow

Use the script above. Manual steps below are the spec it implements.

### 1. Resolve the source folder

From the path the user gives, list markdown files in that folder (not nested subcategories unless the user asked to move the whole tree).

### 2. Collect `slugEN` values

Read the YAML frontmatter of each `.md` file and collect every `slugEN`.

### 3. Find counterparts in the other locales

For each `slugEN`, search the other locale trees:

```bash
rg -l --glob 'docs/{pt,es,en}/**/*.md' '^slugEN: <value>$'
```

The parent directory of each match is that locale's folder to move. Folder names are localized (`operational` / `operacional` / `operativo`); never derive PT/ES paths by translating the EN path.

If a `slugEN` has no counterpart, or counterparts live in inconsistent folder structures, stop and report. Do not guess.

### 4. Move each locale folder

```bash
git mv <source-folder> <destination-folder>
```

Move the whole directory: markdown, `metadata.json`, and co-located images (`{basename}_1.png`, `{basename}_2.gif`, …).

Example — move a subcategory out of its parent category:

| Locale | From | To |
|--------|------|----|
| en | `docs/en/tutorials/operational/vtex-admin` | `docs/en/tutorials/vtex-admin` |
| pt | `docs/pt/tutorials/operacional/admin-vtex` | `docs/pt/tutorials/admin-vtex` |
| es | `docs/es/tutorials/operativo/admin-vtex` | `docs/es/tutorials/admin-vtex` |

### 5. Update image URLs

Image URLs embed the repo-relative file path:

```
https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/{path-to-file}
```

In every moved markdown file, replace the **old directory path** with the **new directory path** inside those URLs. Replace only that path segment; do not rewrite alt text or other links.

```
# before
.../docs/en/tutorials/operational/vtex-admin/vtex-admin-start-here_1.gif

# after
.../docs/en/tutorials/vtex-admin/vtex-admin-start-here_1.gif
```

Do this per locale. PT and ES have different path strings.

### 6. Verify

- Old directory path no longer appears in the moved markdown files.
- Destination folders exist in the locales that had counterparts.
- Source folders are gone.
- Report any locale that had no counterpart.

## Notes

- Images may not show up in glob search; list the directory with `ls` / `git ls-files` before moving.
- If the user names only one locale, still locate the other two via `slugEN` and apply the same move, unless they explicitly ask for a single locale.
