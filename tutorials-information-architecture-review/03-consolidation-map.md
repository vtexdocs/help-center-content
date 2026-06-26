# Consolidation Map — 36 Sections → 15 Sections

This document maps every existing top-level section (and their sub-categories) to the proposed new Information Architecture (IA) structure. It is the primary reference for the restructuring phase.

**Reading this document:**

- `KEEP` = folder is retained in place (may be renamed)
- `MOVE INTO` = folder's content migrates to a different section
- `NEW` = a new top-level folder must be created
- `REDISTRIBUTE` = articles are distributed across multiple destinations
- `DELETE` = section is removed (content reassigned elsewhere)
- Article counts are English counts; ES and PT mirror these counts (±7 articles for PT)

---

## Summary Table: All 36 Current Sections

| # | Current Folder | Current Name | Articles | Action | Target New Section |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `about-the-admin` | About the Admin | 3 | MOVE INTO | Getting Started |
| 2 | `account-management` | Account Management | 28 | KEEP (rename) | Account Management |
| 3 | `apps` | Apps | 14 | MOVE INTO | Apps & Integrations |
| 4 | `authentication` | Authentication | 8 | MOVE INTO | Account Management |
| 5 | `b2b` | B2B | 39 | KEEP (rename) | Sellers & B2B |
| 6 | `beta` | Beta | 36 | REDISTRIBUTE | Various sections |
| 7 | `billing` | Billing | 18 | MOVE INTO | Account Management |
| 8 | `catalog` | Catalog | 73 | KEEP | Catalog |
| 9 | `checkout` | Checkout | 29 | KEEP (rename) | Checkout & Subscriptions |
| 10 | `cms` | CMS | 7 | MOVE INTO | Storefront |
| 11 | `conversational-commerce` | Conversational Commerce | 37 | MOVE INTO | Customer Experience |
| 12 | `dashboards` | Dashboards | 4 | MOVE INTO | Infrastructure & Data |
| 13 | `indeva-by-vtex` | Indeva by VTEX | 90 | MOVE INTO | Infrastructure & Data |
| 14 | `infrastructure` | Infrastructure | 11 | KEEP (rename) | Infrastructure & Data |
| 15 | `integrations` | Integrations | 85 | MOVE INTO | Apps & Integrations |
| 16 | `intelligent-search` | Intelligent Search | 26 | KEEP | Intelligent Search |
| 17 | `master-data` | Master Data | 29 | MOVE INTO | Customer Experience |
| 18 | `message-center` | Message center | 7 | MOVE INTO | Customer Experience |
| 19 | `omnichannel` | Omnichannel | 5 | KEEP (rename) | Omnichannel |
| 20 | `operational` | Operational | 13 | REDISTRIBUTE | Getting Started + Account Management |
| 21 | `orders` | Orders | 56 | KEEP | Orders |
| 22 | `other` | Other | 4 | REDISTRIBUTE | Various sections |
| 23 | `payments` | Payments | 277 | KEEP | Payments |
| 24 | `prices` | Prices | 14 | MOVE INTO | Pricing & Promotions |
| 25 | `projects-and-integrations` | Projects & Integrations | 15 | MOVE INTO | Apps & Integrations |
| 26 | `promotions-and-taxes` | Promotions & taxes | 48 | KEEP (rename) | Pricing & Promotions |
| 27 | `security` | Security | 24 | MOVE INTO | Account Management |
| 28 | `sellers` | Sellers | 30 | KEEP (rename) | Sellers & B2B |
| 29 | `shipping` | Shipping | 65 | KEEP | Shipping |
| 30 | `store-settings` | Store Settings | 3 | MOVE INTO | Getting Started |
| 31 | `storefront` | Storefront | 100 | KEEP | Storefront |
| 32 | `subscriptions` | Subscriptions | 11 | MOVE INTO | Checkout & Subscriptions |
| 33 | `suggestions` | Suggestions | 2 | MOVE INTO | Catalog |
| 34 | `trade-policies` | Trade policies | 7 | MOVE INTO | Pricing & Promotions |
| 35 | `vtex-cx-platform` | VTEX CX Platform | 90 | MOVE INTO | Customer Experience |
| 36 | `vtex-sales-app` | VTEX Sales App | 10 | MOVE INTO | Omnichannel |

---

## Proposed New Sections: Detailed Mapping

### 1. Getting Started

**New folder (EN):** `getting-started`
**Article count:** ~8 articles
**Source sections:**

| Source folder | Sub-folder | Articles to include |
| :--- | :--- | :--- |
| `about-the-admin` | (root) | `accessing-the-beta-environment.md`, `compatibility-with-browsers-in-the-admin-module.md`, `marketplace-overview.md` |
| `store-settings` | (root) | `store-settings-overview.md`, `best-practices-for-the-success-of-your-vtex-store.md`, `multilevel-omnichannel-inventory.md` |
| `operational` | `vtex-admin/` | `vtex-admin-start-here.md`, `visualization-of-vtex-admin-rendering-errors.md` |
| `other` | (root) | `vtex-academy-overview.md` |

**Proposed Level 2 groups within Getting Started:** None required (< 15 articles total; use flat L1 → L3 structure)

---

### 2. Account Management

**New folder (EN):** `account-management` *(keep existing folder, expand scope)*
**Article count:** ~81 articles
**Source sections:**

| Source folder | Sub-folder | Articles | Notes |
|---|---|---|---|
| `account-management` | `accounts/` | 11 | Keep as L2 group |
| `account-management` | `access-control/` | 5 | Keep as L2 group |
| `account-management` | `api-keys/` | 6 | Keep as L2 group |
| `account-management` | `users/` | 8 | Keep as L2 group |
| `account-management` | (root) | 1 | Promote to L2 hub page |
| `authentication` | `authentication-basics/` | 5 | New L2 group: "Authentication" |
| `authentication` | `two-factor-authentication/` | 2 | Merge into Authentication L2 group |
| `authentication` | (root) | 1 | Merge into Authentication L2 group |
| `billing` | `contracts/` | 8 | New L2 group: "Contracts" |
| `billing` | `invoices/` | 8 | New L2 group: "Invoices" |
| `billing` | (root) | 2 | Merge into Billing hub article |
| `security` | `information-security-compliance/` | 5 | New L2 group: "Security & Compliance" |
| `security` | `platform-security-resources/` | 4 | Merge into Security & Compliance |
| `security` | `store-security/` | 7 | New L2 group: "Store Security" |
| `security` | `vtex-shield/` | 8 | New L2 group: "VTEX Shield" |
| `operational` | `support/` | 8 | New L2 group: "Support" |
| `operational` | `financial/` | 3 | Merge into Billing or new group |

**Proposed Level 2 groups within Account Management (ordered):**

1. **Overview** ← account-settings-overview.md (hub page)
2. **Accounts** ← `account-management/accounts/` (11 articles)
3. **Users & Access** ← `account-management/users/` + `account-management/access-control/` (13 articles)
4. **API Keys** ← `account-management/api-keys/` (6 articles)
5. **Authentication** ← `authentication/` all (8 articles)
6. **Billing** ← `billing/contracts/` + `billing/invoices/` + billing root (18 articles)
7. **Store Security** ← `security/store-security/` (7 articles)
8. **Security & Compliance** ← `security/information-security-compliance/` + `security/platform-security-resources/` (9 articles)
9. **VTEX Shield** ← `security/vtex-shield/` (8 articles)
10. **Support** ← `operational/support/` + `operational/financial/` (11 articles)

> Note: 10 groups is slightly above the recommended 3–8 maximum. Consider merging "Store Security" + "Security & Compliance" into one group (16 articles, within the 5–20 range) to reduce to 9 groups. Final call depends on internal content team priority.

---

### 3. Catalog

**New folder (EN):** `catalog` *(keep existing folder)*
**Article count:** ~75 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
|---|---|---|
| `catalog` | all existing sub-folders | 73 |
| `suggestions` | (root) | 2 |

**Proposed Level 2 groups within Catalog (current sub-folders are already good L2 groups; order them by user journey):**

1. **Overview** ← `catalog-overview/` (2 articles) — hub page
2. **Products & SKUs** ← `products-and-skus/` (23 articles)
3. **Categories** ← `categories/` (11 articles)
4. **Brands** ← `brands/` (3 articles) — consider merging with Categories (< 5 articles)
5. **Custom Attributes** ← `custom-product-attributes/` (6 articles)
6. **Collections** ← `collection/` (3 articles) — consider merging with Products & SKUs (< 5 articles)
7. **Kits & Bundles** ← `kit/` (4 articles) + `bundle/` (5 articles, EN only) = 9 articles total
8. **List Types** ← `list-types/` (3 articles) — consider merging with Custom Attributes (< 5 articles)
9. **Import & Export** ← `import-and-export/` (4 articles)
10. **XML Integration** ← `xml-integration/` (4 articles) — consider merging with Import & Export
11. **Reports** ← `catalog-reports/` (3 articles)
12. **Search** ← `catalog/search/` (4 articles) — consider merging with Overview
13. **Seller Suggestions** ← `suggestions/` root (2 articles) — merge with Overview or Products & SKUs

> Note: Several L2 groups have fewer than 5 articles (Brands, Collections, Import & Export, XML Integration, List Types, Reports). These should be merged to reduce the total from 13 groups to ~7–8.

**Recommended consolidated groups:**

1. **Overview** ← catalog-overview + search + suggestions (8 articles)
2. **Products & SKUs** ← products-and-skus (23 articles)
3. **Categories & Brands** ← categories + brands (14 articles)
4. **Attributes & Lists** ← custom-product-attributes + list-types (9 articles)
5. **Collections & Kits** ← collection + kit + bundle (12 articles)
6. **Import & Integrations** ← import-and-export + xml-integration (8 articles)
7. **Reports** ← catalog-reports + registering-a-commercial-condition.md (4 articles) — may merge into Overview

---

### 4. Pricing & Promotions

**New folder (EN):** `pricing-and-promotions` *(new folder; replaces `promotions-and-taxes`)*
**Article count:** ~69 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `promotions-and-taxes` | `promotions/` | 38 |
| `promotions-and-taxes` | `campaign-audiences/` | 4 |
| `promotions-and-taxes` | `coupons/` | 3 |
| `promotions-and-taxes` | `taxes/` | 3 |
| `promotions-and-taxes` | (root) | 1 |
| `prices` | `price-list/` | 9 |
| `prices` | `price-settings/` | 2 |
| `prices` | (root) | 2 |
| `trade-policies` | `trade-policies'-overview/` | 5 |
| `trade-policies` | `trade-policies-settings/` | 2 |

**Proposed Level 2 groups within Pricing & Promotions (ordered):**

1. **Overview** ← `promotions-and-taxes` root (1) + `prices` root (2) — hub page
2. **Prices** ← `prices/price-list/` (9) + `prices/price-settings/` (2) = 11 articles
3. **Promotions** ← `promotions-and-taxes/promotions/` (38 articles) — large; consider splitting into "Creating Promotions" and "Managing Promotions"
4. **Campaign Audiences** ← `promotions-and-taxes/campaign-audiences/` (4 articles) + `promotions-and-taxes/coupons/` (3 articles) = 7 articles
5. **Taxes** ← `promotions-and-taxes/taxes/` (3 articles) — consider merging into Overview
6. **Trade Policies** ← `trade-policies/` all (7 articles)

---

### 5. Storefront

**New folder (EN):** `storefront` *(keep existing folder)*
**Article count:** ~107 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `storefront` | all existing sub-folders | 100 |
| `cms` | `branching-and-versioning/` | 2 |
| `cms` | `configuring-locales/` | 4 |
| `cms` | `content-management-overview/` | 1 |

**Proposed Level 2 groups within Storefront (current structure mostly works; consolidate cms into it):**

1. **Overview** ← `storefront-overview.md` + `cms/content-management-overview/` = hub
2. **Layout (Legacy CMS)** ← `storefront/layout/` (65 articles — large; keep as is, L2 group)
3. **Headless CMS** ← `storefront/headless-cms/` (6 articles) + `cms/branching-and-versioning/` (2) + `cms/configuring-locales/` (4) = 12 articles
4. **CMS for Store Framework** ← `storefront/cms-for-store-framework/` (27 articles) — see 4-level fixes doc for flattening plan
5. **Agentic CX** ← `storefront/agentic-cx/` (2 articles) — may merge with Overview (< 5 articles)

> The 4-level nesting within `cms-for-store-framework` must be resolved before this section is finalized. See `04-4level-fixes.md`.

---

### 6. Intelligent Search

**New folder (EN):** `intelligent-search` *(keep existing folder)*
**Article count:** 26 articles
**Rationale for keeping as standalone:** 26 articles is sufficient for an independent section; merging with Storefront would make Storefront unwieldy.

> **Naming note:** The VTEX Developer Portal uses "Search" (not "Intelligent Search") as its section label. "Intelligent Search" is the correct canonical name (as used in the VTEX Admin UI); the Dev Portal should align to it. See `07-section-naming-rationale.md` for the full naming rationale.

**Proposed Level 2 groups (current sub-folders are good as-is):**

1. **Overview** ← `intelligent-search-overview/` (4 articles) — hub
2. **Search Behavior** ← `intelligent-search-behavior/` (6 articles)
3. **Relevance** ← `relevance/` (6 articles)
4. **Synonyms** ← `synonyms/` (5 articles)
5. **Redirects** ← `redirects/` (2 articles) + `banners/` (2 articles) = 4 articles (merge)
6. **Configuration** ← `search-configuration.md` (1 article, root) + `banners/` if not merged above

---

### 7. Checkout & Subscriptions

**New folder (EN):** `checkout` *(keep existing folder, add subscriptions as new L2 group)*
**Article count:** ~40 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `checkout` | `checkout-overview/` | 6 |
| `checkout` | `checkout-settings/` | 21 |
| `checkout` | `buyer-portal-checkout/` | 1 |
| `checkout` | (root) | 1 |
| `subscriptions` | (root) | 11 |

**Proposed Level 2 groups:**

1. **Overview** ← `checkout-overview/` (6 articles) — hub
2. **Checkout Settings** ← `checkout-settings/` (21 articles)
3. **Buyer Portal Checkout** ← `checkout/buyer-portal-checkout/` (1 article) — merge into Overview if stays at 1 article
4. **Subscriptions** ← `subscriptions/` all (11 articles)

---

### 8. Orders

**New folder (EN):** `orders` *(keep existing folder)*
**Article count:** 56 articles

**Proposed Level 2 groups (current sub-folders are good as-is):**

1. **Overview** ← `orders-overview/` (10 articles) — hub
2. **All Orders** ← `all-orders/` (28 articles)
3. **Order Settings** ← `orders-management-settings/` (13 articles)
4. **Telesales & Customer Service** ← `telesales-and-customer-service/` (4 articles)
   - Note: Root article `understanding-b2b-orders.md` should be moved to the Sellers & B2B section or promoted to an L2 group overview

---

### 9. Payments

**New folder (EN):** `payments` *(keep existing folder)*
**Article count:** 277 articles — largest section; justified as standalone.

**Proposed Level 2 groups (current sub-folders are good as-is):**

1. **Overview** ← `payments-overview/` (29 articles) — hub
2. **Payment Settings** ← `payment-settings/` (229 articles — very large)
3. **Transactions** ← `transactions/` (16 articles)
4. **Bank Conciliation** ← `bank-conciliation/` (2 articles)
5. Root article `gift-card.md` → merge into Payment Settings or Transactions

> The `payment-settings` sub-folder with 229 articles warrants further internal splitting (e.g., by payment method type: card payments, local methods, connectors A-Z). This is out of scope for the current IA restructuring and should be addressed as a follow-up.

---

### 10. Shipping

**New folder (EN):** `shipping` *(keep existing folder)*
**Article count:** 65 articles

**Proposed Level 2 groups (current sub-folders work well):**

1. **Overview** ← `logistics-overview/` (2 articles) — hub
2. **Shipping Strategy** ← `shipping-strategy/` (24 articles)
3. **Inventory** ← `inventory/` (3 articles) + `inventory-and-shipping-settings/` (7 articles) = 10 articles
4. **Shipping Rates** ← `shipping-rates/` (3 articles) + `shipping-simulator/` (2 articles) = 5 articles
5. **Pickup Points** ← `pickup-points/` (2 articles) + `registering-geolocation.md` + `registering-holidays.md` = 4 articles — may merge with Shipping Strategy
6. **VTEX Pick & Pack** ← `vtex-pick-and-pack/` (8 articles)
7. **VTEX Shipping Network** ← `vtex-shipping-network/` (5 articles)
8. **Operational Capacity** ← `operational-capacity/` (1 article) — merge into Inventory (< 5 articles)

---

### 11. Sellers & B2B

**New folder (EN):** `sellers-and-b2b` *(new folder combining `sellers` + `b2b`)*
**Article count:** ~69 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `sellers` | `sellers-overview/` | 8 |
| `sellers` | `seller-portal/` | 13 |
| `sellers` | `management/` | 3 |
| `sellers` | `categories-and-brands/` | 2 |
| `sellers` | `sku-binding/` | 2 |
| `sellers` | (root) | 1 |
| `b2b` | `b2b-buyer-portal/` | 7 |
| `b2b` | `b2b-suite/` | 24 |
| `b2b` | `organization-account/` | 8 |

**Proposed Level 2 groups within Sellers & B2B:**

1. **Sellers Overview** ← `sellers/sellers-overview/` (8 articles) — hub
2. **Seller Portal** ← `sellers/seller-portal/` (13 articles)
3. **Seller Management** ← `sellers/management/` (3) + `sellers/categories-and-brands/` (2) + `sellers/sku-binding/` (2) + root (1) = 8 articles
4. **B2B Overview** ← `b2b/organization-account/` (8 articles) — hub for B2B section
5. **B2B Buyer Portal** ← `b2b/b2b-buyer-portal/` (7 articles)
6. **B2B Suite** ← `b2b/b2b-suite/` (24 articles) — see 4-level fixes for organization-details flattening

---

### 12. Apps & Integrations

**New folder (EN):** `apps-and-integrations` *(new folder combining `apps`, `integrations`, `projects-and-integrations`)*
**Article count:** ~114 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `apps` | `apps-overview/` | 2 |
| `apps` | `customer-credit/` | 2 |
| `apps` | `live-shopping/` | 3 |
| `apps` | `my-account/` | 2 |
| `apps` | (root direct) | 5 |
| `integrations` | `integration-settings/` | 40 |
| `integrations` | `integrations-overview/` | 8 |
| `integrations` | `inventory/` | 7 |
| `integrations` | `offer-management/` | 2 |
| `integrations` | `orders/` | 10 |
| `integrations` | `price/` | 2 |
| `integrations` | `products/` | 3 |
| `projects-and-integrations` | (root) | 15 (Google Analytics, Search Console, etc.) |
| `other` | `uncategorized/` | 2 (marketplace connections) |

**Proposed Level 2 groups within Apps & Integrations:**

1. **Overview** ← `integrations/integrations-overview/` (8) + `apps/apps-overview/` (2) = 10 articles — hub
2. **Apps** ← `apps/customer-credit/`, `apps/live-shopping/`, `apps/my-account/`, `apps/` root = 12 articles
3. **Integration Settings** ← `integrations/integration-settings/` (40 articles)
4. **Orders Integration** ← `integrations/orders/` (10 articles)
5. **Inventory Integration** ← `integrations/inventory/` (7 articles)
6. **Products Integration** ← `integrations/products/` (3) + `integrations/price/` (2) + `integrations/offer-management/` (2) = 7 articles
7. **Analytics & Marketing** ← `projects-and-integrations/` all (15 articles — Google Analytics, Search Console, AdWords, etc.) + `other/uncategorized/` partner articles (2) = 17 articles

---

### 13. Omnichannel

**New folder (EN):** `omnichannel` *(keep existing folder, add vtex-sales-app as new L2 group)*
**Article count:** ~15 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `omnichannel` | `omnichannel-overview/` | 3 |
| `omnichannel` | `omnichannel-settings/` | 2 |
| `vtex-sales-app` | (root) | 10 |

**Proposed Level 2 groups:**

1. **Overview** ← `omnichannel-overview/` (3 articles) — hub; may be promoted to section hub page with no L2 group
2. **Omnichannel Settings** ← `omnichannel-settings/` (2 articles) — consider merging into Overview (< 5 articles)
3. **VTEX Sales App** ← `vtex-sales-app/` all (10 articles)

> With only 15 articles total, Omnichannel could use a flat 2-level structure (L1 → L3 without L2 groups), relying on an overview article and search.

---

### 14. Customer Experience

**New folder (EN):** `customer-experience` *(new folder combining `vtex-cx-platform`, `conversational-commerce`, `message-center`, `master-data`)*
**Article count:** ~163 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `vtex-cx-platform` | `vtex-cx-platform-overview/` | 9 |
| `vtex-cx-platform` | `agent-builder/` | 4 |
| `vtex-cx-platform` | `agent-builder/automation-flow/` | 19 |
| `vtex-cx-platform` | `integrations/` | 34 |
| `vtex-cx-platform` | `live-desk/` | 6 |
| `vtex-cx-platform` | `studio/` | 16 |
| `vtex-cx-platform` | `vtex-cx-platform-settings/` | 2 |
| `vtex-cx-platform` | (root direct) | 2 |
| `conversational-commerce` | `vtex-assisted-sales-suiteshare/` | 37 |
| `message-center` | `templates/` | 6 |
| `message-center` | (root) | 1 |
| `master-data` | `customer-relations-management/` | 8 |
| `master-data` | `master-data-basics/` | 2 |
| `master-data` | `master-data-v1-applications/` | 5 |
| `master-data` | `master-data-v1-settings/` | 9 |
| `master-data` | `master-data-v1-triggers/` | 4 |
| `master-data` | (root) | 1 |

**Proposed Level 2 groups within Customer Experience:**

1. **Overview** ← `vtex-cx-platform/vtex-cx-platform-overview/` (9 articles) — hub
2. **VTEX CX Platform** ← `vtex-cx-platform/agent-builder/` + `automation-flow/` flattened (23 articles) + `studio/` (16) + `live-desk/` (6) + `vtex-cx-platform-settings/` (2) = 47 articles (large; may need to remain as its own sub-sections)
3. **CX Integrations** ← `vtex-cx-platform/integrations/` (34 articles)
4. **Conversational Commerce** ← `conversational-commerce/vtex-assisted-sales-suiteshare/` (37 articles)
5. **Message Center** ← `message-center/` all (7 articles)
6. **Master Data** ← `master-data/` all (29 articles)

> Note: Customer Experience at 163 articles is very large. If it exceeds comfortable sidebar management, consider keeping `vtex-cx-platform` as its own top-level section (bringing the total from 15 → 16 sections). The final decision should be based on user research about whether merchants think of CX Platform and Conversational Commerce as one area.

---

### 15. Infrastructure & Data

**New folder (EN):** `infrastructure-and-data` *(new folder combining `infrastructure`, `dashboards`, `indeva-by-vtex`)*
**Article count:** ~105 articles
**Source sections:**

| Source folder | Sub-folder | Articles |
| :--- | :--- | :--- |
| `infrastructure` | `cdn-service/` | 8 |
| `infrastructure` | `sla-and-status/` | 3 |
| `dashboards` | (root) | 4 |
| `indeva-by-vtex` | all sub-folders | 90 |

**Proposed Level 2 groups within Infrastructure & Data:**

1. **Overview** ← hub page (new article needed)
2. **CDN & DNS** ← `infrastructure/cdn-service/` (8 articles)
3. **SLA & Status** ← `infrastructure/sla-and-status/` (3 articles) + `dashboards/` all (4 articles) = 7 articles
4. **Indeva by VTEX** ← all `indeva-by-vtex/` content (90 articles — keep its internal sub-folder structure as L3 groups)

> With 90 articles, Indeva by VTEX alone could justify its own top-level section if product team priority dictates it. The current mapping keeps it within Infrastructure & Data to stay within the 15-section target.

---

## Beta Content: Article-by-Article Redistribution

`beta` section (36 articles) is not a user-intent category. Each beta sub-folder distributes to its parent section:

| Current location | Article(s) | Target section |
|---|---|---|
| `beta/authentication-beta/` | `configuring-sign-in-with-apple-id-beta.md` | Account Management → Authentication |
| `beta/catalog-beta/` | `creating-or-editing-categories-attributes-and-variations-beta.md` | Catalog → Products & SKUs |
| `beta/dashboards-beta/` | `store-overview-beta.md` | Infrastructure & Data → SLA & Status |
| `beta/data-insights-agent-beta/` | `data-insights-agent.md` | Infrastructure & Data |
| `beta/intelligent-search-beta/` | `intelligent-search-semantic-search-beta.md`, `vtex-intelligent-search-multilanguage-settings-beta.md` | Intelligent Search → Search Behavior |
| `beta/product-recommendations-beta/` | 3 articles | Storefront |
| `beta/promotions-beta/` | 2 articles | Pricing & Promotions → Promotions |
| `beta/releases-beta/` | 6 articles | Storefront (CMS/Versioning area) |
| `beta/shipping-beta/` | 3 articles | Shipping |
| `beta/vtex-data-pipeline-beta/` | 13 articles | Infrastructure & Data |
| `beta/vtex-sales-app-beta/` | 3 articles | Omnichannel → VTEX Sales App |

**Tagging:** Each migrated beta article must receive a `[Beta]` label or tag visible on the article page, so users know the feature is not yet generally available. This tagging should be implemented via a front-matter field, not by prefixing article titles.

---

## Article Count Summary: Before and After

| New Section | Target Folder | Sources | Article Count |
|---|---|---|---|
| Getting Started | `getting-started` | about-the-admin, store-settings, operational/vtex-admin, other root | ~10 |
| Account Management | `account-management` | account-management, authentication, billing, security, operational/support+financial | ~81 |
| Catalog | `catalog` | catalog, suggestions | ~75 |
| Pricing & Promotions | `pricing-and-promotions` | promotions-and-taxes, prices, trade-policies | ~69 |
| Storefront | `storefront` | storefront, cms | ~107 |
| Intelligent Search | `intelligent-search` | intelligent-search | 26 |
| Checkout & Subscriptions | `checkout` | checkout, subscriptions | ~40 |
| Orders | `orders` | orders | 56 |
| Payments | `payments` | payments | 277 |
| Shipping | `shipping` | shipping | 65 |
| Sellers & B2B | `sellers-and-b2b` | sellers, b2b | ~69 |
| Apps & Integrations | `apps-and-integrations` | apps, integrations, projects-and-integrations, other/uncategorized | ~114 |
| Omnichannel | `omnichannel` | omnichannel, vtex-sales-app | ~15 |
| Customer Experience | `customer-experience` | vtex-cx-platform, conversational-commerce, message-center, master-data | ~163 |
| Infrastructure & Data | `infrastructure-and-data` | infrastructure, dashboards, indeva-by-vtex | ~105 |
| **TOTAL** | | | **~1,272** |

> ~46 articles from `beta`, `other`, and micro-sections are redistributed into the sections above; the totals include these redistributed articles. PT count (~1,311) is lower than EN/ES (~1,318) due to 7 untranslated articles.
