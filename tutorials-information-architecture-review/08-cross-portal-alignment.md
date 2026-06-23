# Cross-Portal IA Alignment — Help Center ↔ Developer Portal

VTEX operates two documentation portals that serve different primary audiences but cover overlapping product areas:

- **Help Center** ([help.vtex.com](https://help.vtex.com)) — merchant and store operator audience; task-based tutorials about doing things in the VTEX Admin UI.
- **Developer Portal** ([developers.vtex.com](https://developers.vtex.com)) — developer and integrator audience; technical guides about building with VTEX APIs, apps, and extensibility frameworks.

Both portals are indexed by the same shared AI search pipeline (BM25 + vector similarity). Without deliberate alignment, users receive results from both portals in the same result set, with inconsistent section labels and terminology, and no clear signal about which portal a result belongs to.

This document governs the relationship between the two portals at the IA level.

---

## 1. Content Type Boundary

The intended scope of each portal is defined by the primary user action:

| Portal | Primary user action | Content type | Audience |
|---|---|---|---|
| Help Center tutorials | Operate and configure features via the VTEX Admin UI | Task-based tutorials (step-by-step, screenshot-driven) | Merchants, store admins, operators |
| Developer Portal guides | Build, extend, or integrate using VTEX APIs and frameworks | Technical guides (API workflows, code samples, integration patterns) | Developers, integrators, technical architects |

**Rule:** Neither portal should duplicate the other's primary content type. If a feature is configured in the Admin UI, the configuration tutorial belongs in the Help Center. If a feature requires API calls, SDK setup, or code, the implementation guide belongs in the Developer Portal.

**Gray areas** — these topic areas appear in both portals and require explicit cross-links (see Section 4):

| Topic area | HC covers | Dev Portal covers |
|---|---|---|
| Checkout | Admin configuration (settings, conditions, buyer portal setup) | Checkout API, Checkout Extensibility, checkout hooks |
| Payments | Payment condition setup, connector activation | Payment Provider Protocol, payment integration guides |
| Intelligent Search / Search | Admin search configuration, synonyms, redirects, relevance | Search API, delivery promise for headless stores |
| B2B | Organization management, B2B Suite admin tasks | B2B Buyer Portal API, user provisioning, storefront roles |
| VTEX Sales App | Admin setup, daily operations | Sales App extensions, customization SDK |
| Storefront / CMS | Site Editor, Headless CMS content management, Layout | VTEX IO apps, FastStore, storefront development guides |
| Shipping / Logistics | Carrier configuration, shipping strategies, inventory | Fulfillment API, delivery promise API integration |

---

## 2. Canonical Section Names

When the same product or capability appears in both portals, one canonical name must be used. Intentional differences (where the audience genuinely uses a different term) must be documented here.

### Aligned names (both portals must use the same label)

| Concept | Canonical name | Notes |
|---|---|---|
| VTEX search product | **Intelligent Search** | The VTEX Admin UI uses "Intelligent Search"; the Dev Portal currently uses "Search" — the Dev Portal should align to the canonical name |
| Checkout product | **Checkout** | Both portals already use this consistently |
| Payments product | **Payments** | Both portals already use this consistently |
| B2B product suite | **B2B** (standalone) | Both portals use "b2b" as a folder slug; acceptable |
| VTEX Sales App | **VTEX Sales App** | Both portals use this label consistently |
| Catalog product | **Catalog** | Both portals use this consistently |
| Orders product | **Orders** | Both portals use this consistently; Dev Portal has "orders-2.md" — verify this is not a divergence |
| Pricing product | **Pricing & Promotions** | Dev Portal troubleshooting filter uses "Pricing and Promotions" (close, but uses "and" instead of "&"); align on one form |

### Intentionally different names (audience-driven, documented divergence)

| Concept | Help Center name | Developer Portal name | Rationale |
|---|---|---|---|
| Logistics/shipping capability | **Shipping** | **Logistics** | "Shipping" is the merchant-facing term in the VTEX Admin UI; "Logistics" is the developer/API-facing term used in fulfillment integration docs. Both are correct for their audience. Cross-links must bridge the gap. |
| Storefront development | **Storefront** | **vtex-io / faststore / CMS / legacy-cms** | HC uses a single section for Admin-side CMS work; Dev Portal splits by framework for developer precision. No change required; audience is distinct. |
| Platform integrations | **Apps & Integrations** | **Integration-Guides** | Different framing for different audiences; acceptable divergence. |
| Infrastructure | **Infrastructure & Data** | **VTEX-Platform-Overview / VTEX Shield** | HC covers admin-level infrastructure (CDN, SLA, dashboards); Dev Portal covers platform security architecture. Acceptable divergence. |

---

## 3. Dev Portal Troubleshooting Area Filter Alignment

The Developer Portal's `docs/troubleshooting/` articles use an **Area** filter taxonomy (defined in `dev-portal-content/README.md`). These Area values appear in the troubleshooting UI and in AI retrieval metadata.

Several Area values overlap with Help Center section names but use different labels. This must be resolved so that AI retrieval across both portals produces consistently labeled results.

### Current misalignments

| Dev Portal Area filter | Closest HC section | Status | Action |
|---|---|---|---|
| `Search` | Intelligent Search | **Misaligned** | Dev Portal should rename to "Intelligent Search" (see Section 2) |
| `Pricing and Promotions` | Pricing & Promotions | Minor format difference | Standardize on "Pricing & Promotions" (ampersand, no "and") |
| `License Manager` | Account Management | Intentional subset | No change; add a note that License Manager ⊂ Account Management |
| `CMS` | Storefront | Intentional divergence | No change; audience distinction is valid |
| `Store Framework` | Storefront | Intentional divergence | No change |
| `VTEX IO` | (no HC equivalent) | Dev-only concept | No change |
| `FastStore` | (no HC equivalent) | Dev-only concept | No change |
| `DNS` | Infrastructure & Data | Intentional subset | No change |
| `Catalog` | Catalog | **Aligned** ✓ | — |
| `Checkout` | Checkout & Subscriptions | Minor scope difference | Acceptable |
| `Apps` | Apps & Integrations | Intentional subset | No change |
| `Analytics` | (no HC equivalent) | Dev Portal-specific | No change |

---

## 4. Cross-Portal Link Conventions

Because the two portals serve adjacent needs, articles in one portal frequently need to link to complementary articles in the other. Ad-hoc cross-linking (as currently exists) creates inconsistency. This section defines when and how to link.

### When to add a cross-portal link

**From Help Center → Developer Portal:**
- The HC article explains how to configure a feature in the Admin; the corresponding API guide explains how to do the same via API. Add a "For developers" link.
- The HC article references a concept that is explained in depth in a dev portal guide (e.g., an article about the checkout references the Checkout API).
- The HC article's prerequisites include a developer-implemented integration (e.g., a custom payment connector must be built by a developer before the admin can configure it).

**From Developer Portal → Help Center:**
- The dev portal guide explains how to build an integration; the corresponding HC tutorial explains how the merchant configures it in the Admin. Add a "For merchants" link.
- The dev portal article references Admin configuration that the developer's client (the merchant) must complete.

### Link format

Cross-portal links must appear in the **Related articles** section at the bottom of the article, not inline in the procedure steps. Use the following labels to distinguish portals clearly:

```markdown
## Related articles

- [Configure payment methods in VTEX Admin](https://help.vtex.com/en/tutorial/...) *(Help Center)*
- [Payment Provider Protocol](https://developers.vtex.com/docs/guides/...) *(Developer Portal)*
```

The portal label `*(Help Center)*` or `*(Developer Portal)*` is required so users know they are leaving the current portal.

### Articles that already require cross-portal links (initial list)

| HC article area | Should link to Dev Portal | Dev Portal guide |
|---|---|---|
| Checkout settings | Checkout API guide | `docs/guides/Checkout/` |
| Payment connector setup | Payment Provider Protocol | `docs/guides/Payments/payments-integration-payment-provider-protocol.md` |
| Intelligent Search configuration | Search API overview | `docs/guides/Search/search-api-overview.md` |
| B2B Suite admin tasks | B2B Buyer Portal API | `docs/guides/b2b/b2b-buyer-portal/` |
| VTEX Sales App setup | Sales App extensions | `docs/guides/VTEX-Sales-App/` |
| Headless CMS content management | FastStore guides | `docs/guides/faststore/` |
| Shipping carrier configuration | Fulfillment/Logistics API | `docs/guides/Logistics/` |
| Integration settings | Integration guides | `docs/guides/Integration-Guides/` |

---

## 5. "Getting Started" Disambiguation

Both portals have a "Getting Started" concept with completely different scopes. This must be clearly communicated to avoid user confusion.

| Portal | Getting Started scope | Audience | Typical first article |
|---|---|---|---|
| Help Center | Accessing the VTEX Admin, browser requirements, store settings basics, platform overview | First-time merchants and store admins | "Access the VTEX Admin" |
| Developer Portal | API integration overview by product area (fulfillment, payments, orders, search) — bridging from merchant concepts to API entry points | Developers starting a new integration | "Fulfillment and Logistics" overview |

**The portals should not try to merge these** — they are genuinely different entry points for different users. However, each portal's Getting Started should acknowledge the other exists:

- HC Getting Started should include a callout: "Are you a developer or integrator? Start at the [VTEX Developer Portal](https://developers.vtex.com)."
- Dev Portal Getting Started articles that reference Admin configuration should link to the corresponding HC tutorial.

---

## 6. Shared Front-Matter Fields

Both portals use the same AI indexer. For the indexer to correctly handle cross-portal results, certain front-matter fields must be consistent across both repositories.

| Field | Help Center | Developer Portal | Action required |
|---|---|---|---|
| `title` | ✓ Present | ✓ Present | None |
| `slug` | ✓ Present | ✓ Present | None |
| `excerpt` | ✗ Missing | ✓ Present | **Add `excerpt` to all HC articles** (see `06-metadata-audit.md`, section 6c-2) |
| `updatedAt` | ✓ Present | ✓ Present | None |
| `hidden` | Varies | ✓ Present | Audit HC articles for missing `hidden` field |
| `productTeam` | ✓ Present | ✗ Not used | Dev Portal does not use `productTeam`; no change needed in HC |
| `locale` | ✓ Present | ✗ Not used (EN-only) | HC uses `locale` for trilingual content; Dev Portal is EN-only; no change needed |
| `contentType` | ✓ Present | ✗ Not used | HC-specific; no change needed |

---

## 7. Implementation Priority

| Change | Owner | Priority | Effort |
|---|---|---|---|
| Rename "Search" → "Intelligent Search" in Dev Portal section labels and troubleshooting Area filter | Dev Portal team | High | Low (label change only) |
| Standardize "Pricing and Promotions" → "Pricing & Promotions" in Dev Portal Area filter | Dev Portal team | Medium | Low |
| Add `excerpt` field to all HC tutorial articles | HC team | High | High (retroactive on ~1,272 articles) |
| Add cross-portal links to the initial article list (Section 4) | Both teams | Medium | Medium |
| Add "For developers / For merchants" callouts to Getting Started sections in both portals | Both teams | Low | Low |
| Audit Dev Portal articles in gray-area topics for missing HC backlinks | Dev Portal team | Low | Medium |
