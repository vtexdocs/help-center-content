# Benchmark Portals — IA Patterns for VTEX Help Center Tutorials

Six benchmark portals informing the VTEX Help Center IA plan, with patterns to adopt from each.

---

## 1. Stripe Docs — [docs.stripe.com](https://docs.stripe.com)

**Why:** Manages a large, multi-product doc set comparable to VTEX in breadth, with exemplary progressive disclosure and task-first navigation.

| Pattern | How Stripe does it | How to apply to VTEX |
| :--- | :--- | :--- |
| Product-first top level | Top-level nav groups by product domain: Payments, Revenue, Money management | L1 sections must map to merchant workflows, not internal teams (e.g., `Payments`, `Catalog` — not `Operational`, `Other`) |
| Sidebar scoped per section | Entering a section collapses all others | Collapse inactive sections; don't expose all 36 sections at once |
| Task-first entry points | Homepage has direct action links: "Accept payments online", "Sell subscriptions" | Tutorials homepage should lead with user goals, not category labels |
| Flat structure for small sections | Sections with few articles go Section → Article (no intermediate grouping) | Sections with ≤ 15 articles should use L1 → L3 directly, skipping L2 |
| Stable section labels | "Payments", "Billing", "Terminal" unchanged for 5+ years | L1 section names should remain stable; rename only when scope changes significantly |

---

## 2. Shopify Help Center — [help.shopify.com](https://help.shopify.com)

**Why:** Serves a non-technical merchant audience — the closest profile to VTEX's primary users — with clear task language and a strict 3-level hierarchy.

| Pattern | How Shopify does it | How to apply to VTEX |
| :--- | :--- | :--- |
| Merchant-first language | "Manage your products" not "Product catalog configuration" | Use verb-first, user-goal titles: "Add a product" not "Product registration" |
| Consistent article template | Goal summary → prerequisites → numbered steps → screenshots → related articles | Enforce this template across all tutorials articles |
| Stable category labels | "Orders", "Payments", "Shipping" survive internal product renames | L1 labels must survive product rebrands |
| Strict 3-level max | Section → Category → Article | Hard maximum of 3 levels for all VTEX tutorials content |
| Search-first entry | Search bar is the primary homepage element | Feature search more prominently than category browsing |

---

## 3. HubSpot Knowledge Base — [knowledge.hubspot.com](https://knowledge.hubspot.com)

**Why:** Manages 10+ products in a single knowledge base — analogous to VTEX managing Catalog, CX Platform, Indeva, and Sales App under one portal.

| Pattern | How HubSpot does it | How to apply to VTEX |
| :--- | :--- | :--- |
| Hub/overview landing pages | Each top-level category has a hub page with popular articles and a "Start here" path | Every L1 section must have an overview/hub article as its first entry |
| Stable labels through product renames | "Emails" and "Contacts" did not change when HubSpot rebranded features | Decouple section labels from internal product naming |
| Audience callouts instead of duplicate sections | Articles for both admins and end users use inline audience callout boxes | Avoid parallel "for sellers" / "for buyers" sections; use inline audience callouts |
| Related articles at every level | Hub pages and article pages surface related content and "next step" links | Every tutorial article must end with 3–5 related article links |

---

## 4. Zendesk Help Center — [support.zendesk.com](https://support.zendesk.com)

**Why:** The canonical example of a clean 3-level B2B SaaS help center, used directly by VTEX's customer support audience.

| Pattern | How Zendesk does it | How to apply to VTEX |
| :--- | :--- | :--- |
| 5–7 visible top-level sections | Getting started, Account management, Messaging, Tickets, Reporting, Apps | Reduce from 36 to 15 L1 sections |
| Strict 3-click rule | No article more than 3 clicks from the home | 3-level maximum: Home → Section → Category → Article = 3 clicks |
| Breadcrumbs on every page | "Help > Account management > Users > Managing agent seats" | Show full breadcrumbs at every article |
| Related articles at article footer | Every article ends with 3–5 curated related articles | Make "Related articles" a template requirement |
| Category descriptions | Each L2 category has a one-line description in the sidebar | `metadata.json` should include a `description` field for each L2 group |

---

## 5. Intercom Help Center — [intercom.com/help](https://www.intercom.com/help)

**Why:** Uses the shallowest possible structure and relies on search + contextual links, setting the minimum viable IA standard.

| Pattern | How Intercom does it | How to apply to VTEX |
| :--- | :--- | :--- |
| Search as primary navigation | Search is the visual hero; categories are secondary | Treat search as the primary user path, not sidebar browsing |
| Short collection names | "Getting started", "Inbox", "Contacts" (1–2 words) | L1 names: max 3 words / 20 chars; L2 names: max 4 words / 30 chars |
| "See also" links instead of deep nesting | Third-level sub-topics are replaced with contextual links | For sections with ≤ 15 articles, skip L2 and use inline "See also" links |
| Feedback widget on every article | Thumbs up/down + optional comment | Add a consistent feedback mechanism to identify low-performing articles |

---

## 6. Vercel Docs — [vercel.com/docs](https://vercel.com/docs)

**Why:** Built with AI-assisted navigation and hybrid semantic/keyword retrieval from the start. Their IA decisions directly reflect how LLMs retrieve documentation — the same stack VTEX uses.

| Pattern | How Vercel does it | How to apply to VTEX |
| :--- | :--- | :--- |
| Descriptive H2 headings as retrieval context | H2 sections carry article title + breadcrumb scope so retrieved chunks are always contextualized | H2 headings must be descriptive and self-contextualizing; "Step 1" or "Settings" alone are insufficient |
| Self-contained articles | Every article is written for a reader arriving directly from search, with no assumed prior context | No implicit references ("as mentioned above", "see the next article") without an explicit link |
| Canonical terminology tied to UI labels | Every term matches the label visible in the product UI | Titles and headings must use the exact string shown in the VTEX Admin UI |
| Complete front-matter | Title, description, last-updated used by the AI index to rank freshness and relevance | `productTeam`, `slugEN`, `updatedAt`, `locale`, and `contentType` must be complete on every article |
| Short, focused H2 sections | Each H2 section stands alone as a retrieved chunk | Target 300–700 words per H2 section; see [`09-ai-retrieval-requirements.md`](09-ai-retrieval-requirements.md) for full rules |

---

## Summary: Key IA Rules Derived from Benchmarks

### For human navigation

1. **Max 3 levels** for all sections; sections with ≤ 15 articles use L1 → L3 directly (skip L2)
2. **Target 15 L1 sections** (maximum 16), ordered by user journey frequency
3. **Verb-first article titles** ("Configure X", "Set up Y", "Manage Z")
4. **Every section needs an overview/hub article** as its first entry
5. **Every article ends with 3–5 related article links** (template requirement)
6. **Breadcrumbs** on every page
7. **L1 labels: max 3 words / 20 chars; L2 labels: max 4 words / 30 chars; L3 titles: max 6 words / 45 chars**
8. **L1 labels should remain stable** — rename only when section scope changes significantly
9. **Search must be the primary homepage element**, not secondary to category browsing
10. **L2 groups: 4–12 articles is ideal**; avoid groups with 1–3 articles; review groups with > 20 articles

### For LLM and AI retrieval

For the full set of AI retrieval rules, see [`09-ai-retrieval-requirements.md`](09-ai-retrieval-requirements.md). Key principles from the benchmarks:

1. **Every article must be self-contained** — all cross-references must be explicit links
2. **Canonical terminology** — each concept has one name, matching the VTEX Admin UI label
3. **Descriptive H2 headings** — H2 sections are the primary chunk boundary for the AI indexer
4. **Front-matter must be complete** — `productTeam`, `slugEN`, `updatedAt`, `locale`, and `contentType` required
5. **Section context in the first paragraph** — state what section it belongs to and what goal it accomplishes
