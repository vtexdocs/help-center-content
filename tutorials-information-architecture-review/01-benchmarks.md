# Benchmark Portals — Information Architecture Patterns for VTEX Help Center Tutorials

Six benchmark portals informing the VTEX Help Center Information Architecture (IA) plan, with patterns to adopt from each.

---

## 1. Stripe Docs — [docs.stripe.com](https://docs.stripe.com)

**Why:** Manages a large, multi-product doc set comparable to VTEX in breadth, with exemplary progressive disclosure and task-first navigation.

| Pattern | How Stripe does it |
| :--- | :--- |
| Product-first top level | Top-level nav groups by product domain: Payments, Revenue, Money management |
| Sidebar scoped per section | Entering a section collapses all others |
| Task-first entry points | Homepage has direct action links: "Accept payments online", "Sell subscriptions" |
| Flat structure for small sections | Sections with few articles go Section → Article (no intermediate grouping) |
| Stable section labels | "Payments", "Billing", "Terminal" unchanged for 5+ years |

---

## 2. Shopify Help Center — [help.shopify.com](https://help.shopify.com)

**Why:** Serves a non-technical merchant audience — the closest profile to VTEX's primary users — with clear task language and a strict 3-level hierarchy.

| Pattern | How Shopify does it |
| :--- | :--- |
| Merchant-first language | "Manage your products" not "Product catalog configuration" |
| Consistent article template | Goal summary → prerequisites → numbered steps → screenshots → related articles |
| Stable category labels | "Orders", "Payments", "Shipping" survive internal product renames |
| Strict 3-level max | Section → Category → Article |
| Search-first entry | Search bar is the primary homepage element |

---

## 3. HubSpot Knowledge Base — [knowledge.hubspot.com](https://knowledge.hubspot.com)

**Why:** Manages 10+ products in a single knowledge base — analogous to VTEX managing Catalog, CX Platform, Indeva, and Sales App under one portal.

| Pattern | How HubSpot does it |
| :--- | :--- |
| Hub/overview landing pages | Each top-level category has a hub page with popular articles and a "Start here" path |
| Stable labels through product renames | "Emails" and "Contacts" did not change when HubSpot rebranded features |
| Audience callouts instead of duplicate sections | Articles for both admins and end users use inline audience callout boxes |
| Related articles at every level | Hub pages and article pages surface related content and "next step" links |

---

## 4. Zendesk Help Center — [support.zendesk.com](https://support.zendesk.com)

**Why:** The canonical example of a clean 3-level B2B SaaS help center, used directly by VTEX's customer support audience.

| Pattern | How Zendesk does it |
| :--- | :--- |
| 5–7 visible top-level sections | Getting started, Account management, Messaging, Tickets, Reporting, Apps |
| Strict 3-click rule | No article more than 3 clicks from the home |
| Breadcrumbs on every page | "Help > Account management > Users > Managing agent seats" |
| Related articles at article footer | Every article ends with 3–5 curated related articles |
| Category descriptions | Each L2 category has a one-line description in the sidebar |

---

## 5. Intercom Help Center — [intercom.com/help](https://www.intercom.com/help)

**Why:** Uses the shallowest possible structure and relies on search + contextual links, setting the minimum viable IA standard.

| Pattern | How Intercom does it |
| :--- | :--- |
| Search as primary navigation | Search is the visual hero; categories are secondary |
| Short collection names | "Getting started", "Inbox", "Contacts" (1–2 words) |
| "See also" links instead of deep nesting | Third-level sub-topics are replaced with contextual links |
| Feedback widget on every article | Thumbs up/down + optional comment |

---

## 6. Vercel Docs — [vercel.com/docs](https://vercel.com/docs)

**Why:** Built with AI-assisted navigation and hybrid semantic/keyword retrieval from the start. Their IA decisions directly reflect how LLMs retrieve documentation — the same stack VTEX uses.

| Pattern | How Vercel does it |
| :--- | :--- |
| Descriptive H2 headings as retrieval context | H2 sections carry article title + breadcrumb scope so retrieved chunks are always contextualized |
| Self-contained articles | Every article is written for a reader arriving directly from search, with no assumed prior context |
| Canonical terminology tied to UI labels | Every term matches the label visible in the product UI |
| Complete front-matter | Title, description, last-updated used by the AI index to rank freshness and relevance |
| Short, focused H2 sections | Each H2 section stands alone as a retrieved chunk |

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
