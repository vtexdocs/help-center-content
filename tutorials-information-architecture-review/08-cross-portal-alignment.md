# Cross-Portal IA Alignment — Help Center ↔ Developer Portal

When section names and product labels differ between portals, users lose orientation when following cross-links. This document defines the naming constraints and Getting Started disambiguation that the HC restructuring proposal must respect.

> Cross-portal link conventions, troubleshooting Area filter alignment, shared front-matter fields, and implementation priority are deferred to the implementation phase.

---

## 1. Gray Areas

These topic areas have content in both portals and will require cross-links during implementation:

| Topic area | HC covers | Dev Portal covers |
|---|---|---|
| Checkout | Admin configuration, conditions, buyer portal setup | Checkout API, Checkout Extensibility, hooks |
| Payments | Payment condition setup, connector activation | Payment Provider Protocol, payment integration guides |
| Intelligent Search | Admin search configuration, synonyms, redirects, relevance | Search API, delivery promise for headless |
| B2B | Organization management, B2B Suite admin tasks | B2B Buyer Portal API, user provisioning, storefront roles |
| VTEX Sales App | Admin setup, daily operations | Sales App extensions, customization SDK |
| Storefront / CMS | Site Editor, Headless CMS content management, Layout | VTEX IO apps, FastStore, storefront development |
| Shipping / Logistics | Carrier configuration, shipping strategies, inventory | Fulfillment API, delivery promise API |

---

## 2. Canonical Section Names

The proposed HC section names have been checked against the Dev Portal's existing labels.

### Aligned names

| Concept | Canonical name | Notes |
|---|---|---|
| VTEX search product | **Intelligent Search** | Dev Portal currently uses "Search" — should align (deferred to implementation) |
| Pricing product | **Pricing & Promotions** | Dev Portal troubleshooting filter uses "Pricing and Promotions"; align on ampersand form |
| Checkout, Payments, B2B, VTEX Sales App, Catalog, Orders | Same in both portals | No action needed |

### Intentional divergences (documented, no change needed)

| Concept | Help Center | Developer Portal | Rationale |
|---|---|---|---|
| Logistics/shipping | **Shipping** | **Logistics** | Merchant-facing vs. API-facing term; both correct for their audience |
| Storefront development | **Storefront** | **vtex-io / faststore / CMS / legacy-cms** | HC is Admin-side only; Dev Portal splits by framework |
| Platform integrations | **Apps & Integrations** | **Integration-Guides** | Different framing for different audiences |
| Infrastructure | **Infrastructure & Data** | **VTEX-Platform-Overview / VTEX Shield** | Different scope: admin-level vs. platform security architecture |

---

## 3. "Getting Started" Disambiguation

The HC restructuring creates a new Getting Started section. Both portals have one, with completely different scopes:

| Portal | Scope |
|---|---|
| Help Center | Accessing the VTEX Admin, browser requirements, store settings basics |
| Developer Portal | API integration overview by product area (fulfillment, payments, orders, search) |

These should not merge — they are different entry points for different users. The HC Getting Started should include a callout pointing developers to the [VTEX Developer Portal](https://developers.vtex.com).
