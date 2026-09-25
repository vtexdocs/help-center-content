---
name: reorder-tutorial-categories
description: Updates the order field in metadata.json of folders immediately inside docs/{en,es,pt}/tutorials. Matches categories across locales by metadata id, not folder names. Use when the user asks to reorder tutorial categories, change category order, atualizar a ordem dos tutoriais nesse nivel, or edit order in those metadata.json files.
---

# Reorder tutorial categories

Update `order` in `metadata.json` of **pastas imediatamente dentro de tutorials**. Alterar apenas a `order`.

**`id` in `metadata.json` is the key that connects en / es / pt.** Do not match locales by translating folder names (`vtex-admin` vs `admin-vtex`, `catalog` vs `catálogo`).

## Scope

In:

```
docs/en/tutorials/*/metadata.json
docs/es/tutorials/*/metadata.json
docs/pt/tutorials/*/metadata.json
```

Out:

- Nested files (`docs/.../tutorials/*/**/metadata.json`)
- `id`, `name`, `slug`, markdown, frontmatter, folder moves

Apply to **all three locales** unless the user restricts the scope.

## Script

Prefer the script over doing the steps by hand:

```bash
# dry-run (default)
node docs-utils/reorderTutorialCategories.js "VTEX Admin" Dashboards Orders Catalog Promotions Storefront Shipping Marketplace Apps "Store Settings"

# write the new order values
node docs-utils/reorderTutorialCategories.js --file order.txt --apply
```

`--locale en|es|pt` restricts the write to those locales. Labels can be ids, localized names, or the aliases below.

## Workflow

Use the script above. Manual steps below are the spec it implements.

### 1. Load top-level categories

Read every `docs/{en,es,pt}/tutorials/*/metadata.json`. Index by `id`. Skip directories with no `metadata.json` and report them.

### 2. Resolve the requested list

The user gives an ordered list of labels (names, ids, or localized titles). Map each label to one `id`:

1. Exact `id`
2. Case-insensitive `name` in any locale
3. Aliases below

If a label matches zero or more than one `id`, stop and ask. Do not guess.

Known aliases:

| User label | `id` |
|---|---|
| VTEX Admin / Admin VTEX | `vtex-admin` |
| Promotions / Promotions & taxes / Promoções e taxas / Tasas y promociones | `promotions-and-taxes` |
| Marketplace | `sellers` |
| Store Settings / Configurações da Loja / Configuraciones de la Tienda | `store-settings` |

Same `id` must exist in en, es, and pt. If a locale is missing that `id`, stop and report.

### 3. Assign `order`

Listed categories get `1`, `2`, `3`, … in the given sequence. Write the **same number** for that `id` in all three locales.

Unlisted categories: leave `order` unchanged unless it collides with `1..N` **in that locale**. Then set it to the next unused integer `≥ N+1` in that locale (sort colliding unlisted by current `order`, then `name`). Do not reshuffle unlisted categories that already sit after `N`.

### 4. Write files

Replace only the `order` value. Keep JSON shape, key order, and formatting.

### 5. Verify

Print a table: position, `id`, EN/ES/PT `name`, `order`. Confirm:

- Listed ids are `1..N` in every locale
- No other top-level file in that locale shares those numbers (after collision fixes)
- Nested `metadata.json` files were not edited

## Example

User list:

```
VTEX Admin
Dashboards
Orders
Catalog
Promotions
Storefront
Shipping
Marketplace
Apps
Store Settings
```

Resulting `order` (all locales):

| order | id |
|---|---|
| 1 | `vtex-admin` |
| 2 | `dashboards` |
| 3 | `orders` |
| 4 | `catalog` |
| 5 | `promotions-and-taxes` |
| 6 | `storefront` |
| 7 | `shipping` |
| 8 | `sellers` |
| 9 | `apps` |
| 10 | `store-settings` |
