# Cross-Portal Information Architecture Alignment — Help Center ↔ Developer Portal

VTEX operates two documentation portals that serve different primary audiences but cover overlapping product areas:

- **Help Center** ([help.vtex.com](https://help.vtex.com)) — merchant and store operator audience; task-based tutorials about doing things in the VTEX Admin UI.
- **Developer Portal** ([developers.vtex.com](https://developers.vtex.com)) — developer and integrator audience; technical guides about building with VTEX APIs, apps, and extensibility frameworks.

The portals are separate sites with separate search, but users frequently move between them — a merchant follows a cross-link to understand the API behind a feature they're configuring, or a developer needs to know what the Admin-side setup looks like. When section names and product labels differ between portals, users lose orientation at the moment of handoff.

This document defines the scope boundary, canonical naming constraints, and Getting Started disambiguation that the HC restructuring proposal must respect.

> Sections covering cross-portal link conventions, troubleshooting Area filter alignment, shared front-matter fields, and implementation priority are deferred to the implementation phase.

---

## 1. Content Type Boundary

The intended scope of each portal is defined by the primary user action:

| Portal | Primary user action | Content type | Audience |
|---|---|---|---|
| Help Center tutorials | Operate and configure features via the VTEX Admin UI | Task-based tutorials (step-by-step, screenshot-driven) | Merchants, store admins, operators |
| Developer Portal guides | Build, extend, or integrate using VTEX APIs and frameworks | Technical guides (API workflows, code samples, integration patterns) | Developers, integrators, technical architects |

**Rule:** Neither portal should duplicate the other's primary content type. If a feature is configured in the Admin UI, the configuration tutorial belongs in the Help Center. If a feature requires API calls, SDK setup, or code, the implementation guide belongs in the Developer Portal.

**Gray areas** — these topic areas appear in both portals and will require cross-links during implementation:

| Topic area | HC covers | Dev Portal covers |
|---|---|---|
| Checkout | Admin configuration (settings, conditions, buyer portal setup) | Checkout API, Checkout Extensibility, checkout hooks |
| Payments | Payment condition setup, connector activation | Payment Provider Protocol, payment integration guides |
| Intelligent Search | Admin search configuration, synonyms, redirects, relevance | Search API, delivery promise for headless stores |
| B2B | Organization management, B2B Suite admin tasks | B2B Buyer Portal API, user provisioning, storefront roles |
| VTEX Sales App | Admin setup, daily operations | Sales App extensions, customization SDK |
| Storefront / CMS | Site Editor, Headless CMS content management, Layout | VTEX IO apps, FastStore, storefront development guides |
| Shipping / Logistics | Carrier configuration, shipping strategies, inventory | Fulfillment API, delivery promise API integration |

---

## 2. Canonical Section Names

When the same product or capability appears in both portals, one canonical name must be used. The proposed HC section names below have been checked against the Dev Portal's existing labels.

### Aligned names (both portals use or must use the same label)

| Concept | Canonical name | Notes |
|---|---|---|
| VTEX search product | **Intelligent Search** | VTEX Admin UI uses "Intelligent Search"; Dev Portal currently uses "Search" — Dev Portal should align (low-effort label change, deferred to implementation) |
| Checkout product | **Checkout** | Both portals already consistent |
| Payments product | **Payments** | Both portals already consistent |
| B2B product suite | **B2B** (standalone) | Both portals use "b2b" as folder slug; acceptable |
| VTEX Sales App | **VTEX Sales App** | Both portals already consistent |
| Catalog product | **Catalog** | Both portals already consistent |
| Orders product | **Orders** | Both portals already consistent |
| Pricing product | **Pricing & Promotions** | Dev Portal troubleshooting filter uses "Pricing and Promotions" (uses "and" instead of "&"); align on ampersand form |

### Intentionally different names (audience-driven, documented divergence)

| Concept | Help Center name | Developer Portal name | Rationale |
|---|---|---|---|
| Logistics/shipping capability | **Shipping** | **Logistics** | "Shipping" is the merchant-facing term in the VTEX Admin UI; "Logistics" is the developer/API-facing term. Both are correct for their audience. |
| Storefront development | **Storefront** | **vtex-io / faststore / CMS / legacy-cms** | HC uses a single section for Admin-side CMS work; Dev Portal splits by framework. Audience is distinct; no change required. |
| Platform integrations | **Apps & Integrations** | **Integration-Guides** | Different framing for different audiences; acceptable divergence. |
| Infrastructure | **Infrastructure & Data** | **VTEX-Platform-Overview / VTEX Shield** | HC covers admin-level infrastructure (CDN, SLA, dashboards); Dev Portal covers platform security architecture. Acceptable divergence. |

---

## 3. "Getting Started" Disambiguation

Both portals have a "Getting Started" concept with completely different scopes. The HC restructuring creates a new Getting Started section, so this distinction must be explicit.

| Portal | Getting Started scope | Audience | Typical first article |
|---|---|---|---|
| Help Center | Accessing the VTEX Admin, browser requirements, store settings basics, platform overview | First-time merchants and store admins | "Access the VTEX Admin" |
| Developer Portal | API integration overview by product area (fulfillment, payments, orders, search) | Developers starting a new integration | "Fulfillment and Logistics" overview |

**The portals should not merge these** — they are genuinely different entry points for different users. Each portal's Getting Started should acknowledge the other:

- HC Getting Started should include a callout: "Are you a developer or integrator? Start at the [VTEX Developer Portal](https://developers.vtex.com)."
- Dev Portal Getting Started articles that reference Admin configuration should link to the corresponding HC tutorial.
