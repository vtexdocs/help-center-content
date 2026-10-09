---
name: relocate-tutorial-files
description: Relocates a single Help Center tutorial markdown file and its co-located images across en, es, and pt. Uses slugEN as the ID that connects the three locales. Use when moving one article (not a whole folder), relocating a .md file under docs/en, docs/es, or docs/pt, or when asked to move a tutorial and its images.
---

# Relocate tutorial files

Move **one** Help Center markdown file and its co-located images to a new folder, keep **en / es / pt** in sync, then fix image URLs.

**slugEN funciona como o ID que conecta as docs en es e pt.** Do not match locales by translating folder or file names (`what-is-a-marketplace.md` vs `o-que-e-um-marketplace.md`).

To move a whole folder (including `metadata.json` and every sibling article), use `relocate-tutorial-folders` instead.

## Defaults

- Apply the same move to **all three locales** unless the user restricts the scope.
- Keep each locale's existing filename. Infer the destination from the same relative change (for example, "one level up, out of the parent folder").
- Use `git mv` so Git tracks the rename, including images.
- Move only the target `.md` and images that belong to it (`{basename}_1.png`, `{basename}.svg`, …). Leave sibling articles and `metadata.json` in place.
- Do not edit `metadata.json` slugs, frontmatter, or in-article links (`/en/docs/tutorials/...`) unless asked.

## Script

Prefer the script over doing the steps by hand:

```bash
# dry-run (default)
node docs-utils/relocateTutorialFiles.js <source.md> --up
node docs-utils/relocateTutorialFiles.js <source.md> <destination-folder>

# actually git mv + rewrite CDN URLs + verify image links
node docs-utils/relocateTutorialFiles.js <source.md> --up --apply
```

`--locale en|es|pt` restricts the move to one locale. Filenames stay locale-specific.

## Workflow

Use the script above. Manual steps below are the spec it implements.

### 1. Resolve the source file

From the path the user gives, read the `.md` file (not its parent folder).

### 2. Read `slugEN`

Read the YAML frontmatter and take `slugEN`. If it is missing, stop.

### 3. Find counterparts in the other locales

Search the other locale trees for the same `slugEN`:

```bash
rg -l --glob 'docs/{pt,es,en}/**/*.md' '^slugEN: <value>$'
```

Each match is that locale's file to move. File and folder names are localized; never derive PT/ES paths by translating the EN path.

If a locale has no counterpart, skip it and report. If a locale has more than one file with that `slugEN`, stop and report. Do not guess.

### 4. Collect co-located images

In the same directory as each markdown file, take image files named `{basename}` or `{basename}_{n}` (png, jpg, gif, svg, webp, …). Also include CDN-referenced images that already live in that directory. Do not move images in other folders; report them.

### 5. Move each locale file

```bash
git mv <source.md> <destination-folder>/<same-filename>
git mv <sidecar-image> <destination-folder>/<same-filename>
```

Example — move one article out of its parent folder:

| Locale | From | To |
|--------|------|----|
| en | `docs/en/tutorials/integrations/integrations-overview/what-is-a-marketplace.md` | `docs/en/tutorials/integrations/what-is-a-marketplace.md` |
| pt | `docs/pt/tutorials/integrações/visão-geral-de-integrações/o-que-e-um-marketplace.md` | `docs/pt/tutorials/integrações/o-que-e-um-marketplace.md` |
| es | `docs/es/tutorials/integraciones/visión-de-conjunto-de-integraciones/que-es-un-marketplace.md` | `docs/es/tutorials/integraciones/que-es-un-marketplace.md` |

### 6. Update image URLs

Image URLs embed the repo-relative file path. In the moved markdown file, replace the **old directory path** with the **new directory path** inside those URLs. Replace only that path segment.

### 7. Verify

- Old directory path no longer appears in the moved markdown files.
- Destination files exist in the locales that had counterparts.
- Source files are gone.
- Sibling articles and `metadata.json` in the old folder are still there.
- Report any locale that had no counterpart.
