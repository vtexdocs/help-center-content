# Micro-Sections Redistribution Plan

Micro-sections are top-level sections with too few articles to justify standing alone at Level 1. Based on the rule that a standalone L1 section requires at least 5 articles, the following sections must be dissolved and their articles redistributed.

Additionally, `beta` and `other` are org-chart categories that should not exist as user-facing sections regardless of article count.

---

## Sections to Dissolve

| Section | Current articles | Reason for removal |
|---|---|---|
| `store-settings` | 3 | Too small; content belongs in Getting Started |
| `dashboards` | 4 | Too small; content belongs in Infrastructure & Data |
| `suggestions` | 2 | Too small; content belongs in Catalog |
| `other` | 4 | Org-chart category; no user intent |
| `about-the-admin` | 3 | Org-chart category; content belongs in Getting Started |
| `operational` | 13 | Org-chart category; content belongs in Getting Started + Account Management |
| `beta` | 36 | Org-chart category; articles belong in their parent topic sections |

---

## `store-settings` → Getting Started

**3 articles to redistribute:**

| File | Target section | Target L2 group |
|---|---|---|
| `store-settings-overview.md` | Getting Started | (root, hub article) |
| `best-practices-for-the-success-of-your-vtex-store.md` | Getting Started | (root) |
| `multilevel-omnichannel-inventory.md` | Getting Started | (root) |

**ES source folder:** `configuraciones-de-la-tienda/`
**PT source folder:** `configurações-da-loja/`

---

## `dashboards` → Infrastructure & Data

**4 articles to redistribute:**

| File | Target section | Target L2 group | Notes |
|---|---|---|---|
| `dashboards-overview.md` | Infrastructure & Data | SLA & Status | |
| `sales-performance.md` | Infrastructure & Data | SLA & Status | |
| `store-overview.md` | Infrastructure & Data | SLA & Status | |
| `vtex-dashboard-guide-for-black-week-faq.md` | Infrastructure & Data | SLA & Status | This is an FAQ; verify content currency before migrating |

**ES source folder:** `dashboards/` (same slug)
**PT source folder:** `dashboards/` (same slug)

---

## `suggestions` → Catalog

**2 articles to redistribute:**

| File | Target section | Target L2 group |
|---|---|---|
| `returns-from-api-for-entering-skus-in-the-suggestion-module.md` | Catalog | Overview or Products & SKUs |
| `understanding-vtex-matcher-scoring.md` | Catalog | Overview or Products & SKUs |

> Both articles cover seller-submitted product suggestions (SKU matching). They could also fit in Sellers & B2B if editorial priorities dictate placing seller-facing content together.

**ES source folder:** `sugerencias/`
**PT source folder:** `sugestões/`

---

## `about-the-admin` → Getting Started

**3 articles to redistribute:**

| File | Target section | Target L2 group | Notes |
|---|---|---|---|
| `accessing-the-beta-environment.md` | Getting Started | (root) | Verify if still relevant given beta section removal |
| `compatibility-with-browsers-in-the-admin-module.md` | Getting Started | (root) | |
| `marketplace-overview.md` | Getting Started | (root) | Or promote to a "Marketplace overview" hub article |

**ES source folder:** `acerca-de-admin/`
**PT source folder:** `sobre-o-admin/`

---

## `other` → Multiple sections

**4 articles to redistribute:**

| File | Current sub-folder | Target section | Target L2 group | Notes |
|---|---|---|---|---|
| `vtex-academy-overview.md` | (root) | Getting Started | (root) | Overview of VTEX Academy; good fit for onboarding |
| `scheduling-features-for-special-events.md` | (root) | Pricing & Promotions | Promotions | Seasonal event scheduling |
| `connecting-to-retailers-and-marketplaces-using-vtex-network.md` | `uncategorized/` | Apps & Integrations | Analytics & Marketing | About VTEX Network/marketplace connections |
| `partner-program-intranet-and-vtex-store-manual.md` | `uncategorized/` | Getting Started | (root) | Partner-facing guide |

> Note: The `foresight-commerce-academy-overview` images exist in the `other` folder root but no corresponding `.md` file was found — these may be orphaned image assets. Verify and remove if unused.

**ES source folders:** `otros/`, `otros/no-categorizado/`
**PT source folders:** `outros/`, `outros/não-categorizado/`

---

## `operational` → Getting Started + Account Management

**13 articles split across two target sections:**

### Sub-folder `vtex-admin/` → Getting Started

| File | Target section | Target L2 group |
|---|---|---|
| `vtex-admin-start-here.md` | Getting Started | (root) |
| `visualization-of-vtex-admin-rendering-errors.md` | Getting Started | (root) |

### Sub-folder `support/` → Account Management

| File | Target section | Target L2 group |
|---|---|---|
| `generating-a-har-file.md` | Account Management | Support |
| `how-does-vtex-support-work.md` | Account Management | Support |
| `opening-tickets-to-vtex-support.md` | Account Management | Support |
| `responsibilities-within-the-vtex-ecosystem.md` | Account Management | Support |
| `vtex-global-support-resources.md` | Account Management | Support |
| `vtex-support-apac.md` | Account Management | Support |
| `vtex-support-satisfaction-survey.md` | Account Management | Support |
| `writing-an-effective-ticket-to-vtex-support.md` | Account Management | Support |

### Sub-folder `financial/` → Account Management

| File | Target section | Target L2 group |
|---|---|---|
| `best-practices-when-creating-your-partner-environment.md` | Account Management | Support or Billing |
| `how-do-i-change-my-cnpj-new.md` | Account Management | Billing |
| `how-long-does-the-platform-take-to-identify-my-payment.md` | Account Management | Billing |

**ES source folder:** `operativo/`
**PT source folder:** `operacional/`

---

## `beta` → Multiple sections (article-by-article)

Beta articles belong in their parent topic sections. They are listed here with the target L2 group and a note on tagging.

**All beta articles must receive a `[Beta]` front-matter label after migration** so users can identify features not yet in general availability. The label should NOT appear in the article's sidebar title.

### `beta/authentication-beta/` → Account Management

| File | Target section | Target L2 group |
|---|---|---|
| `configuring-sign-in-with-apple-id-beta.md` | Account Management | Authentication |

### `beta/catalog-beta/` → Catalog

| File | Target section | Target L2 group |
|---|---|---|
| `creating-or-editing-categories-attributes-and-variations-beta.md` | Catalog | Categories & Brands |

### `beta/dashboards-beta/` → Infrastructure & Data

| File | Target section | Target L2 group |
|---|---|---|
| `store-overview-beta.md` | Infrastructure & Data | SLA & Status |

### `beta/data-insights-agent-beta/` → Infrastructure & Data

| File | Target section | Target L2 group |
|---|---|---|
| `data-insights-agent.md` | Infrastructure & Data | (root or new group) |

### `beta/intelligent-search-beta/` → Intelligent Search

| File | Target section | Target L2 group |
|---|---|---|
| `intelligent-search-semantic-search-beta.md` | Intelligent Search | Search Behavior |
| `vtex-intelligent-search-multilanguage-settings-beta.md` | Intelligent Search | Configuration |

### `beta/product-recommendations-beta/` → Storefront

| File | Target section | Target L2 group |
|---|---|---|
| `creating-recommendation-lists.md` | Storefront | (new group: Product Recommendations) |
| `product-recommendations-beta.md` | Storefront | Product Recommendations |
| `recommendations-dashboard.md` | Storefront | Product Recommendations |

### `beta/promotions-beta/` → Pricing & Promotions

| File | Target section | Target L2 group |
|---|---|---|
| `promotion-alerts-beta.md` | Pricing & Promotions | Promotions |
| `promotion-alerts-how-to-create-an-alert-beta.md` | Pricing & Promotions | Promotions |

### `beta/releases-beta/` → Storefront

| File | Target section | Target L2 group | Notes |
|---|---|---|---|
| `planner-actions-on-releases-beta.md` | Storefront | Headless CMS | Releases = content versioning feature |
| `planner-calendar-page-beta.md` | Storefront | Headless CMS | |
| `planner-release-concept-beta.md` | Storefront | Headless CMS | |
| `planner-releases-page-beta.md` | Storefront | Headless CMS | |
| `releases-module-beta.md` | Storefront | Headless CMS | |
| `releases-overview.md` | Storefront | Headless CMS | |

### `beta/shipping-beta/` → Shipping

| File | Target section | Target L2 group |
|---|---|---|
| `delivery-options-beta.md` | Shipping | Shipping Strategy |
| `delivery-promise-beta.md` | Shipping | Shipping Strategy |
| `delivery-promise-faq.md` | Shipping | Shipping Strategy |

### `beta/vtex-data-pipeline-beta/` → Infrastructure & Data

| File | Target section | Target L2 group |
|---|---|---|
| `bridge-logs-data-pipeline.md` | Infrastructure & Data | new group: "VTEX Data Pipeline" |
| `cart-availability-data-pipeline.md` | Infrastructure & Data | VTEX Data Pipeline |
| `catalog-data-pipeline.md` | Infrastructure & Data | VTEX Data Pipeline |
| `data-dictionary-vtex-data-pipeline-beta.md` | Infrastructure & Data | VTEX Data Pipeline |
| `gift-card-data-pipeline.md` | Infrastructure & Data | VTEX Data Pipeline |
| `inventory-data-pipeline-beta.md` | Infrastructure & Data | VTEX Data Pipeline |
| `marketplace-in-data-pipeline.md` | Infrastructure & Data | VTEX Data Pipeline |
| `navigation-data-pipeline.md` | Infrastructure & Data | VTEX Data Pipeline |
| `orders-data-pipeline-beta.md` | Infrastructure & Data | VTEX Data Pipeline |
| `payments.md` | Infrastructure & Data | VTEX Data Pipeline |
| `prices-data-pipeline-beta.md` | Infrastructure & Data | VTEX Data Pipeline |
| `promotions.md` | Infrastructure & Data | VTEX Data Pipeline |
| `search-and-recomendations-data-pipeline.md` | Infrastructure & Data | VTEX Data Pipeline |

### `beta/vtex-sales-app-beta/` → Omnichannel

| File | Target section | Target L2 group |
|---|---|---|
| `change-seller-of-an-vtex-sales-app-order-beta.md` | Omnichannel | VTEX Sales App |
| `lista-da-vez.md` | Omnichannel | VTEX Sales App |
| `order-to-delivery.md` | Omnichannel | VTEX Sales App |

---

## Summary: All Micro/Org-Chart Sections

| Section dissolved | Articles | Target sections |
|---|---|---|
| `store-settings` | 3 | Getting Started (3) |
| `dashboards` | 4 | Infrastructure & Data (4) |
| `suggestions` | 2 | Catalog (2) |
| `about-the-admin` | 3 | Getting Started (3) |
| `other` | 4 | Getting Started (2), Pricing & Promotions (1), Apps & Integrations (1) |
| `operational` | 13 | Getting Started (2), Account Management (11) |
| `beta` | 36 | Account Management (1), Catalog (1), Infrastructure & Data (14), Intelligent Search (2), Omnichannel (3), Pricing & Promotions (2), Shipping (3), Storefront (9) |
| **TOTAL** | **65** | distributed across 8 target sections |
