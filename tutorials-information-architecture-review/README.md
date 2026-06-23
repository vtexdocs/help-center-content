# VTEX Help Center Tutorials — Information Architecture Review

This folder contains the complete IA review for all tutorials content across EN, ES, and PT. The IA is designed to serve two audiences simultaneously: **human users** browsing the sidebar and **AI systems** (LLMs, semantic search, RAG pipelines) retrieving individual articles and H2-level chunks. It also governs alignment with the [VTEX Developer Portal](https://developers.vtex.com), which shares the same AI indexing pipeline.

## Documents

| File | Contents |
|---|---|
| [`01-benchmarks.md`](01-benchmarks.md) | Top 6 documentation portals with specific IA patterns to adopt from each, including one AI-first portal (Vercel Docs) |
| [`02-level-definitions.md`](02-level-definitions.md) | Rules for each of the 3 hierarchy levels (label length, article count, ordering, anti-patterns) + LLM and AI retrieval requirements |
| [`03-consolidation-map.md`](03-consolidation-map.md) | Full mapping of all 36 current sections → 15 proposed sections, with article counts and L2 group proposals |
| [`04-4level-fixes.md`](04-4level-fixes.md) | The 4 places where nesting exceeds 3 levels, with specific file operations to flatten them |
| [`05-micro-sections-redistribution.md`](05-micro-sections-redistribution.md) | Article-by-article redistribution plan for `store-settings`, `dashboards`, `suggestions`, `other`, `about-the-admin`, `operational`, and `beta` |
| [`06-metadata-audit.md`](06-metadata-audit.md) | Missing `metadata.json` files, duplicate order numbers, ordering issues, JSON specs for all new files, and AI retrieval metadata recommendations |
| [`07-trilingual-sync.md`](07-trilingual-sync.md) | Complete EN/ES/PT folder name mapping for all current and proposed sections |
| [`08-cross-portal-alignment.md`](08-cross-portal-alignment.md) | Governing rules for IA alignment between the Help Center and the Developer Portal: content type boundary, canonical section names, cross-portal link conventions, front-matter field alignment |

## Key Decisions

### Navigation structure (for humans)

| Decision | Specification |
|---|---|
| Maximum hierarchy depth | **3 levels** (L1 Section → L2 Category → L3 Article) |
| Target number of top-level sections | **15** (down from 36) |
| Minimum articles to justify a standalone L1 section | **5 articles** |
| L2 group article range | **5–20 articles per group** |
| L1 sidebar label max | **3 words / 20 characters** |
| L2 sidebar label max | **4 words / 30 characters** |
| L3 article title in sidebar | **6 words / 45 characters** |
| Article title format | **Verb-first** ("Configure X", "Set up Y") |
| Beta content handling | **Distribute to parent sections** with a `[Beta]` tag, not a standalone section |
| Org-chart sections to delete | `about-the-admin`, `operational`, `beta`, `other` |

### Article structure (for AI retrieval)

| Decision | Specification |
|---|---|
| Article self-containment | Every article must be independently understandable — no implicit references to adjacent articles |
| H2 section size target | **300–700 words per H2** (below 200 words: merge; above 800 words: split) |
| H2 heading format | **Descriptive action phrase** — not "Step 1", "Overview", or single-word labels |
| Canonical terminology | Each concept has **one canonical name** matching the VTEX Admin UI label — no synonyms |
| Article opening | **First paragraph must state** the VTEX Admin path, the goal, and any prerequisites |
| Required front-matter fields | `title`, `slugEN`, `productTeam`, `updatedAt`, `locale`, `contentType`, `subcategory` |
| Slug stability | **Do not change `slugEN`** when restructuring — implement 301 redirects if slug must change |
| Metadata descriptions | **L1 and L2 `metadata.json`** should include a `description` field (≤ 150 chars for L1, ≤ 100 chars for L2) |

## Proposed New Top-Level Structure

| # | New Section | Target Folder (EN) | Sources merged in | ~Articles |
|---|---|---|---|---|
| 1 | Getting Started | `getting-started` | about-the-admin, store-settings, operational/vtex-admin, other root | ~10 |
| 2 | Account Management | `account-management` | account-management, authentication, billing, security, operational/support+financial | ~81 |
| 3 | Catalog | `catalog` | catalog, suggestions | ~75 |
| 4 | Pricing & Promotions | `pricing-and-promotions` | promotions-and-taxes, prices, trade-policies | ~69 |
| 5 | Storefront | `storefront` | storefront, cms | ~107 |
| 6 | Intelligent Search | `intelligent-search` | intelligent-search | 26 |
| 7 | Checkout & Subscriptions | `checkout` | checkout, subscriptions | ~40 |
| 8 | Orders | `orders` | orders | 56 |
| 9 | Payments | `payments` | payments | 277 |
| 10 | Shipping | `shipping` | shipping | 65 |
| 11 | Sellers & B2B | `sellers-and-b2b` | sellers, b2b | ~69 |
| 12 | Apps & Integrations | `apps-and-integrations` | apps, integrations, projects-and-integrations | ~114 |
| 13 | Omnichannel | `omnichannel` | omnichannel, vtex-sales-app | ~15 |
| 14 | Customer Experience | `customer-experience` | vtex-cx-platform, conversational-commerce, message-center, master-data | ~163 |
| 15 | Infrastructure & Data | `infrastructure-and-data` | infrastructure, dashboards, indeva-by-vtex | ~105 |

## Implementation Phases

1. **Phase 1 — Audit & Mapping** *(this folder — COMPLETE)*: All analysis documents above
2. **Phase 2 — Restructure**: Apply file operations from `03`, `04`, `05`, `06`, `07` to EN, then ES, then PT
3. **Phase 3 — Validation**: Verify navigation in staging, confirm no broken cross-references, validate all 3 locales
