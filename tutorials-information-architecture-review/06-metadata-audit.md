# Metadata Audit — `metadata.json` Findings and Specifications

This document covers:

1. Ordering issues in existing metadata (duplicate order numbers)
2. Overview-not-first ordering problems
3. `metadata.json` templates for new folders created by the restructuring
4. Metadata needed for new top-level sections

---

## 1. Duplicate Order Numbers

Two sections have duplicate `order` values among their L2 groups. Duplicate orders cause non-deterministic sidebar rendering (the CMS may show either item first).

### `storefront` — duplicate order 2

| Folder                     | Current order | Fix               |
| -------------------------- | ------------- | ----------------- |
| `headless-cms/`            | 2             | Change to order 1 |
| `cms-for-store-framework/` | 2             | Change to order 5 |


> Order 3 cannot be used for `cms-for-store-framework` because `layout/` is already at order 3. Order 5 is currently unoccupied in the storefront sequence. The actual display name of `headless-cms/` in the repository is "Headless CMS (Legacy)", not "Headless CMS".

Update `docs/en/tutorials/storefront/headless-cms/metadata.json`:

```json
{
  "id": "headless-cms",
  "name": "Headless CMS (Legacy)",
  "slug": "headless-cms-subcategory",
  "order": 1
}
```

Update `docs/en/tutorials/storefront/cms-for-store-framework/metadata.json`:

```json
{
  "id": "cms-for-store-framework",
  "name": "CMS for Store Framework",
  "slug": "cms-for-store-framework-subcategory",
  "order": 5
}
```

Apply same fix to ES and PT equivalents.

---

## 2. Overview-Ordering Issues

By convention, an overview/hub group should always be the first item (lowest order number) within its section. The following sections have their overview group out of sequence:


| Section                | Overview group                | Current order | Recommended order     | Other affected groups                                         |
| ---------------------- | ----------------------------- | ------------- | --------------------- | ------------------------------------------------------------- |
| `intelligent-search`   | `intelligent-search-overview` | 4             | 1                     | `banners` currently at 1 → move to order 3; adjust all others |
| `orders`               | `orders-overview`             | 4             | 1                     | `all-orders` currently at 1 → move to order 2                 |
| `sellers`              | `sellers-overview`            | 5             | 1                     | Shift all others down                                         |
| `payments`             | `payments-overview`           | 4             | 1                     | `bank-conciliation` at 1 → move to last                       |
| `promotions-and-taxes` | (none — no overview group)    | n/a           | Create overview group | —                                                             |
| `billing`              | (none — no overview group)    | n/a           | Create overview group | —                                                             |
| `trade-policies`       | `trade-policies'-overview`    | 2             | 1                     | `trade-policies-settings` at 1 → move to 2                    |
| `catalog`              | `catalog-overview`            | 4             | 1                     | `brands` at 1, `bundle` at 2 → shift                          |
| `vtex-cx-platform`     | `vtex-cx-platform-overview`   | 9             | 1                     | All others shift                                              |
| `integrations`         | `integrations-overview`       | 2             | 1                     | `integration-settings` at 1 → move to order 2                 |
| `shipping`             | `logistics-overview`          | 6             | 1                     | Shift all others                                              |


> These ordering fixes are low-impact changes (only metadata.json `order` field values change). They should be applied in the same pass as the main restructuring.

**Recommended order for the `orders` section as a concrete example:**


| Group                            | Recommended order |
| -------------------------------- | ----------------- |
| `orders-overview`                | 1                 |
| `all-orders`                     | 2                 |
| `orders-management-settings`     | 3                 |
| `telesales-and-customer-service` | 4                 |


---

## 3. Metadata.json Templates for New Folders

The restructuring creates new top-level sections and new L2 groups. Each requires a `metadata.json`. Below are the specifications for all new files.

### New top-level sections (L1)

`**docs/en/tutorials/getting-started/metadata.json`**

```json
{
  "id": "getting-started",
  "name": "Getting Started",
  "slug": "getting-started-category",
  "order": 1
}
```

`**docs/en/tutorials/pricing-and-promotions/metadata.json**`

```json
{
  "id": "pricing-and-promotions",
  "name": "Pricing & Promotions",
  "slug": "pricing-and-promotions-category",
  "order": 4
}
```

`**docs/en/tutorials/sellers-and-b2b/metadata.json**`

```json
{
  "id": "sellers-and-b2b",
  "name": "Sellers & B2B",
  "slug": "sellers-and-b2b-category",
  "order": 11
}
```

`**docs/en/tutorials/apps-and-integrations/metadata.json**`

```json
{
  "id": "apps-and-integrations",
  "name": "Apps & Integrations",
  "slug": "apps-and-integrations-category",
  "order": 12
}
```

`**docs/en/tutorials/customer-experience/metadata.json**`

```json
{
  "id": "customer-experience",
  "name": "Customer Experience",
  "slug": "customer-experience-category",
  "order": 14
}
```

`**docs/en/tutorials/infrastructure-and-data/metadata.json**`

```json
{
  "id": "infrastructure-and-data",
  "name": "Infrastructure & Data",
  "slug": "infrastructure-and-data-category",
  "order": 15
}
```

### New L2 groups (Account Management expansion)

`**docs/en/tutorials/account-management/authentication/metadata.json**`

```json
{
  "id": "authentication",
  "name": "Authentication",
  "slug": "authentication-subcategory",
  "order": 5
}
```

`**docs/en/tutorials/account-management/billing/metadata.json**`

```json
{
  "id": "billing",
  "name": "Billing",
  "slug": "billing-subcategory",
  "order": 6
}
```

`**docs/en/tutorials/account-management/security/metadata.json**`

```json
{
  "id": "security",
  "name": "Security",
  "slug": "security-subcategory",
  "order": 7
}
```

`**docs/en/tutorials/account-management/support/metadata.json**`

```json
{
  "id": "support",
  "name": "Support",
  "slug": "support-subcategory",
  "order": 10
}
```

### New L2 groups (Storefront — after 4-level fix)

`**docs/en/tutorials/storefront/cms-pages/metadata.json**`

```json
{
  "id": "cms-pages",
  "name": "CMS Pages",
  "slug": "cms-pages-subcategory",
  "order": 4
}
```

`**docs/en/tutorials/storefront/site-editor/metadata.json**`

```json
{
  "id": "site-editor",
  "name": "Site Editor",
  "slug": "site-editor-subcategory",
  "order": 5
}
```

`**docs/en/tutorials/storefront/storefront-settings/metadata.json**`

```json
{
  "id": "storefront-settings",
  "name": "Storefront Settings",
  "slug": "storefront-settings-subcategory",
  "order": 6
}
```

### New L2 group (Indeva — after 4-level fix)

`**docs/en/tutorials/indeva-by-vtex/sales-update-pdv-erp/metadata.json**`

```json
{
  "id": "sales-update-pdv-erp",
  "name": "Sales Update with PDV/ERP",
  "slug": "sales-update-pdv-erp-subcategory",
  "order": 15
}
```

### New L2 group (Infrastructure & Data — for beta migration)

`**docs/en/tutorials/infrastructure-and-data/vtex-data-pipeline/metadata.json**`

```json
{
  "id": "vtex-data-pipeline",
  "name": "VTEX Data Pipeline",
  "slug": "vtex-data-pipeline-subcategory",
  "order": 4
}
```

---

## 4. `metadata.json` Field Reference

All `metadata.json` files in this repository use the following fields:


| Field   | Type   | Description                                          | Rules                                                                                            |
| ------- | ------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `id`    | string | Unique identifier; matches the folder name (EN slug) | Lowercase, hyphens, no spaces. Must be unique within its parent.                                 |
| `name`  | string | Display name shown in the sidebar                    | Max 3 words for L1; max 4 words for L2. Localized (EN/ES/PT have different names but same `id`). |
| `slug`  | string | URL-friendly identifier used by the CMS              | L1 sections: `{id}-category`; L2 groups: `{id}-subcategory`. Must be globally unique.            |
| `order` | number | Sort position within parent container                | Positive integer, no duplicates within a parent. Overview groups must be order 1.                |


**No two folders at the same level within the same parent may share the same `order` value.** If a new folder is inserted between two existing folders, all subsequent `order` values in that parent must be incremented.

---

## 5. AI Retrieval Metadata Recommendations

The VTEX Help Center indexer uses hybrid search (BM25 keyword + vector similarity). The `metadata.json` files feed the navigation layer, but AI retrieval quality also depends on fields at two other levels: the **article front-matter** and the **folder metadata**. This section identifies gaps and recommends additions.

### 5a. Add `description` field to L1 and L2 `metadata.json`

The current `metadata.json` schema has no `description` field. This creates two problems:

1. **AI disambiguation failure:** When a user asks "where do I find my invoices?", the AI cannot distinguish between `account-management` (which contains billing/invoices) and `payments` (which contains payment transaction records) based on the section name alone. A description gives the AI a semantic scope signal.
2. **Category hub pages are harder to generate:** Without a description in metadata, the category hub article must carry all orientation load. A metadata description provides a short scope summary that can be used in search results, hover tooltips, and AI context windows.

**Recommended addition to `metadata.json` schema:**

```json
{
  "id": "account-management",
  "name": "Account Management",
  "slug": "account-management-category",
  "order": 2,
  "description": "Manage VTEX accounts, users, access control, API keys, authentication, billing, security, and support resources."
}
```

**Description rules:**


| Level         | Max length     | Content                                                    |
| ------------- | -------------- | ---------------------------------------------------------- |
| L1 (section)  | 150 characters | What topics this section covers; who it is for             |
| L2 (category) | 100 characters | Specific feature area or task cluster this group addresses |


**Proposed descriptions for all 15 new L1 sections:**


| Section                  | Proposed `description`                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Getting Started          | First steps for setting up a VTEX store: Admin access, browser requirements, store settings, and platform overview. |
| Account Management       | Manage VTEX accounts, users, access control, API keys, authentication, billing, security, and VTEX support.         |
| Catalog                  | Set up and manage products, SKUs, categories, brands, collections, attributes, and imports.                         |
| Pricing & Promotions     | Configure prices, promotions, coupons, campaign audiences, taxes, and trade policies.                               |
| Storefront               | Build and manage your storefront using Headless CMS, Store Framework, Site Editor, and layout settings.             |
| Intelligent Search       | Configure search behavior, relevance, synonyms, redirects, and banners for VTEX Intelligent Search.                 |
| Checkout & Subscriptions | Configure checkout settings, buyer portal, and manage recurring order subscriptions.                                |
| Orders                   | View, manage, and configure orders, order settings, and telesales and customer service tools.                       |
| Payments                 | Set up payment methods, conditions, connectors, transactions, and bank conciliation.                                |
| Shipping                 | Configure shipping strategy, carriers, inventory, pickup points, shipping rates, and VTEX logistics products.       |
| Sellers & B2B            | Manage marketplace sellers, the Seller Portal, and B2B features including organizations and the B2B Suite.          |
| Apps & Integrations      | Install and configure apps, ERP integrations, marketplace integrations, and analytics and marketing tools.          |
| Omnichannel              | Connect physical and digital sales channels using VTEX Sales App and omnichannel settings.                          |
| Customer Experience      | Manage VTEX CX Platform, Agent Builder, Conversational Commerce, Message Center, and Master Data.                   |
| Infrastructure & Data    | Monitor CDN, DNS, SLA, platform status, VTEX Data Pipeline, and Indeva by VTEX.                                     |


### 5b. Front-matter completeness — fields required for AI retrieval

Article front-matter fields are the primary per-article metadata layer for the AI indexer. The following fields must be present and correctly filled on every tutorial article.

**Audit checklist — required fields on every tutorial article:**


| Field         | Purpose in AI retrieval                                                      | Validation rule                                                                                                         |
| ------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `title`       | Primary retrieval signal; used as chunk title in AI citations                | Must be present; verb-first; matches the H1 heading exactly                                                             |
| `slugEN`      | Cross-language canonical link; prevents EN/ES/PT from competing in retrieval | Must be present on all 3 language variants; ES and PT variants must reference the same `slugEN`                         |
| `productTeam` | Enables product-scoped filtering in semantic search                          | Must be a valid team name from the allowed list                                                                         |
| `updatedAt`   | Freshness ranking signal                                                     | Must be updated whenever article content changes; stale `updatedAt` causes outdated articles to rank above updated ones |
| `locale`      | Prevents cross-language retrieval contamination                              | Must be `en`, `es`, or `pt` exactly                                                                                     |
| `contentType` | Enables type-scoped filtering (tutorial vs knownIssue vs announcement)       | Tutorial articles must have `contentType: tutorial`                                                                     |
| `subcategory` | Maps article to its L2 group in the navigation index                         | Must match the L2 folder's `metadata.json` slug                                                                         |


**Fields that degrade retrieval when missing:**

Missing `slugEN` is the highest-impact gap: the indexer uses `slugEN` to deduplicate trilingual content. Without it, the same article in EN, ES, and PT appear as three independent documents and compete for the same query slot, splitting retrieval score across languages.

Missing `productTeam` prevents product-area filtering. If a merchant searches "how to configure payment settings" while scoped to the Payments product area, articles without `productTeam: Financial` will not be returned.

### 5c. Slug stability during restructuring

When articles are moved from one section to another (as planned in `03-consolidation-map.md`), their URL slug changes. This breaks:

- Inbound links from other articles, external sites, and AI-generated citations
- The AI index's document identity — the indexer treats a renamed slug as a new document and loses any relevance history

**Rules for the restructuring phase:**

1. **Do not change `slugEN`** when moving an article — the slug is the article's canonical identity, not its location
2. If a slug must change (e.g., it contains the old section name), implement a **301 redirect** from the old slug to the new slug before the restructuring PR is merged
3. Document all slug changes in a migration table (to be added to `07-trilingual-sync.md` as a follow-up)

### 5c-2. Cross-portal field alignment: `excerpt` vs `description`

The VTEX Developer Portal (`dev-portal-content`) uses an `excerpt` field in article front-matter as a one-sentence summary of the article's purpose. Example from `creating-a-regular-order-with-the-checkout-api.mdx`:

```yaml
excerpt: "Learn how to use VTEX APIs to efficiently handle the placement, payment, and delivery aspects of a regular order."
```

The Help Center front-matter currently has no equivalent field. Since both portals use the same AI indexer (identical GitHub Action pattern), this creates a retrieval asymmetry: dev portal articles have a ready-made summary chunk available for the indexer; Help Center articles do not.

**Recommendation:** Add `excerpt` to the Help Center article front-matter template, matching the dev portal's field name exactly. Using the same field name ensures the shared indexer applies the same summary-chunk weighting logic to both portals.

**Updated front-matter template for tutorial articles** (adds `excerpt`):

```yaml
---
title: 'Configure payment methods in VTEX'
id: unique-article-id
status: PUBLISHED
createdAt: '2024-01-15T10:00:00.000Z'
updatedAt: '2025-06-01T14:00:00.000Z'
publishedAt: '2024-01-15T12:00:00.000Z'
contentType: tutorial
productTeam: Financial
slugEN: configure-payment-methods-in-vtex
locale: en
legacySlug: configure-payment-methods-in-vtex
subcategory: payment-settings-subcategory
excerpt: 'Learn how to add payment conditions, set up installment rules, and activate a payment connector in the VTEX Admin.'
---
```

`**excerpt` rules:**

- Max 160 characters (fits in search result snippets without truncation)
- Must start with a verb: "Learn how to…", "Configure…", "Understand…"
- Must state what the user will accomplish — not what the article contains
- Required on all new articles; existing articles should be retrofitted during the restructuring phase

---

### 5d. Heading path metadata for AI citations

Modern RAG systems attach a `heading_path` to every retrieved chunk (e.g., `"Payments > Payment Settings > Configure payment conditions"`). This path:

- Appears in AI citations so users can locate the source
- Is used for parent-context injection (the parent H1 + H2 is prepended to child H3 chunks)

**Implication for article authoring:** H2 headings must be unique within an article. If an article has two H2 sections both called "Configuration", the AI cannot distinguish between them when constructing the heading path for a retrieved chunk.

**Rule:** No two H2 headings in the same article may be identical. If two sections genuinely have similar scope, differentiate them: "Configure payment conditions for new orders" vs "Configure payment conditions for recurring orders".