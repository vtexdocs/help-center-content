---
name: reorder-tutorial-subcategories
description: Updates the order field in metadata.json of folders immediately inside a parent Help Center tutorial category (any depth under tutorials). Matches the parent and its children across en/es/pt by metadata id, not folder names (billing vs facturacion vs informacoes-de-faturamento). Use when the user asks to reorder subcategories, segundo nivel, children of a category such as Informações de faturamento / Facturación / Billing, or edit order in nested metadata.json under a parent folder.
---

# Reorder tutorial subcategories

Update `order` in `metadata.json` of **pastas imediatamente dentro de uma categoria pai** (qualquer profundidade sob `tutorials`). Alterar apenas a `order`.

**`id` in `metadata.json` is the key that connects en / es / pt.** Do not match locales by translating folder names (`vtex-admin` vs `admin-vtex`, `billing` vs `facturacion` vs `informacoes-de-faturamento`).

For **pastas imediatamente dentro de tutorials**, use `reorder-tutorial-categories` instead.

## Scope

In (children of one parent category):

```
docs/en/tutorials/**/<parent>/*/metadata.json
docs/es/tutorials/**/<parent>/*/metadata.json
docs/pt/tutorials/**/<parent>/*/metadata.json
```

The parent folder name differs by locale. Example for `id: billing`:

| Locale | Parent path |
|---|---|
| EN | `docs/en/tutorials/vtex-admin/billing` |
| ES | `docs/es/tutorials/admin-vtex/facturacion` |
| PT | `docs/pt/tutorials/admin-vtex/informacoes-de-faturamento` |

Out:

- Parent `metadata.json`
- Top-level `docs/{en,es,pt}/tutorials/*/metadata.json`
- Deeper files (`<parent>/*/**/metadata.json`)
- `id`, `name`, `slug`, markdown, frontmatter, folder moves
- Creating `metadata.json` for folders that lack one

Apply to **all three locales** unless the user restricts the scope.

## Script

Prefer the script over doing the steps by hand:

```bash
# dry-run (default)
node docs-utils/reorderTutorialSubcategories.js --parent billing contratos faturas credito

# write the new order values
node docs-utils/reorderTutorialSubcategories.js --parent informacoes-de-faturamento --file order.txt --apply
```

`--parent` is required: id, localized name, folder name, or path of the parent. `--locale en|es|pt` restricts the write. Child labels can be ids, localized names, or folder names.

## Workflow

Use the script above. Manual steps below are the spec it implements.

### 1. Resolve the parent

Load every `docs/{en,es,pt}/tutorials/**/metadata.json`. Map `--parent` to one `id`:

1. Path to the parent folder or its `metadata.json` (read `id`)
2. Exact `id`
3. Case-insensitive `name` in any locale
4. Case-insensitive folder name in any locale

If the label matches zero or more than one `id`, stop and ask. Do not guess. Same parent `id` must exist in every requested locale. If a locale is missing that parent, stop and report.

### 2. Load immediate children

For each locale, read `metadata.json` only in immediate subfolders of that locale's parent directory. Index by `id`. Skip directories with no `metadata.json` and report them. **Do not create** those files.

### 3. Resolve the requested child list

The user gives an ordered list of labels. Map each label to one child `id`:

1. Exact `id`
2. Case-insensitive `name` in any locale
3. Case-insensitive folder name in any locale

If a label matches zero or more than one `id`, stop and ask. Do not guess. Same child `id` must exist in every requested locale.

### 4. Assign `order`

Listed children get `1`, `2`, `3`, … in the given sequence. Write the **same number** for that `id` in all three locales.

Unlisted children: leave `order` unchanged unless it collides with `1..N` **in that locale**. Then set it to the next unused integer `≥ N+1` in that locale (sort colliding unlisted by current `order`, then `name`). Do not reshuffle unlisted children that already sit after `N`.

### 5. Write files

Replace only the `order` value. Keep JSON shape, key order, and formatting.

### 6. Verify

Print a table: position, `id`, EN/ES/PT `name`, `order`, and the resolved parent path per locale. Confirm:

- Listed ids are `1..N` in every requested locale
- No other immediate child in that locale shares those numbers (after collision fixes)
- Parent `metadata.json` and deeper nested files were not edited

## Example

Parent: Informações de faturamento (`billing`)

Child list:

```
contratos
faturas
dados-cadastrais
credito
```

Resulting `order` (all locales that have those child ids):

| order | id |
|---|---|
| 1 | `contracts` |
| 2 | `invoices` |
| 3 | `registration-information` |
| 4 | `credit-wallet` |
