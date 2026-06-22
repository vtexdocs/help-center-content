# Benchmark Portals — IA Patterns for VTEX Help Center Tutorials

This document expands on the five benchmark portals identified in the IA plan, detailing the specific patterns VTEX should adopt from each.

---

## 1. Stripe Docs — [docs.stripe.com](https://docs.stripe.com)

**Why it is a benchmark:** Stripe manages a very large, multi-product documentation set (comparable to VTEX in breadth) with exemplary progressive disclosure and task-first navigation.

### IA patterns to adopt

| Pattern | How Stripe does it | How to apply to VTEX |
|---|---|---|
| Product-first top level | Top-level nav groups by product domain: Payments, Revenue, Money management, Prebuilt components | VTEX top-level sections should map to merchant workflows, not internal teams (e.g., Orders, Payments, Catalog — not Operational, Other) |
| Sidebar scoped per section | When a user enters a section (e.g., Billing), the sidebar shows only that section's articles — not the full 2,000-article tree | VTEX sidebar should not expose all 36 sections at once; collapse inactive sections |
| Task-first homepage entry points | Home page has direct action links: "Accept payments online", "Sell subscriptions", "Set up development environment" | VTEX tutorials homepage should lead with user goals, not category labels |
| Max 2 sidebar levels per section | Section → Article (no third level except for very large reference sections) | Most VTEX sections under 50 articles should use L1 > L2 only (skip L3); only Payments, Storefront, CX Platform justify 3 levels |
| Stable section labels | "Payments", "Billing", "Terminal" have not changed names in 5+ years | VTEX must freeze top-level section names; product rebrands should not rename sections |

---

## 2. Shopify Help Center — [help.shopify.com](https://help.shopify.com)

**Why it is a benchmark:** Shopify serves a non-technical merchant audience — the closest profile to VTEX's primary help center users — with clear task language and a strict 3-level hierarchy.

### IA patterns to adopt

| Pattern | How Shopify does it | How to apply to VTEX |
|---|---|---|
| Merchant-first language | "Manage your products" not "Product catalog configuration" | VTEX article titles should use verb-first, user-goal framing: "Add a product" not "Product registration" |
| Consistent article template | Every article: goal summary → prerequisites → numbered steps → screenshots → related articles | VTEX tutorials must enforce this template to be consistent across all 1,318 articles |
| Category label stability | "Orders", "Payments", "Shipping" do not change when Shopify rebrands sub-features | Top-level labels in VTEX must survive internal product renames |
| Strict 3-level max | Section (e.g., "Sell online") → Category ("Checkout") → Article | Enforce hard maximum of 3 levels for all VTEX tutorials content |
| Search-first entry | Search bar is the primary homepage element, above category tiles | VTEX tutorials homepage should feature search more prominently than category browsing |

---

## 3. HubSpot Knowledge Base — [knowledge.hubspot.com](https://knowledge.hubspot.com)

**Why it is a benchmark:** HubSpot manages 10+ products with a single knowledge base, requiring sophisticated multi-product IA — analogous to VTEX managing Catalog, CX Platform, Indeva, Sales App, etc. under one portal.

### IA patterns to adopt

| Pattern | How HubSpot does it | How to apply to VTEX |
|---|---|---|
| Product-line tabs at the top | Horizontal tabs filter content by product (Marketing Hub, Sales Hub, Service Hub) | VTEX could use tabs or a product filter to separate platform-level content from add-on products (Indeva, VTEX CX Platform, VTEX Sales App) |
| Hub/overview landing pages | Each top-level category has a hub page listing popular articles, sub-categories, and a "Start here" path | Every VTEX L1 section must have an overview/hub article as its first entry |
| Stable labels through product renames | Categories like "Emails" and "Contacts" did not change when HubSpot rebranded features | VTEX must decouple section labels from internal product naming |
| Audience-aware articles (not duplicate sections) | Articles that apply to both admins and end users are not duplicated — they use audience callout boxes inline | VTEX should avoid creating "for sellers" and "for buyers" parallel sections; use inline audience callouts instead |
| Related articles surfaced at every level | Hub pages and article pages both surface related articles; "next step" links at article end | Every VTEX tutorial article must end with 3–5 related article links |

---

## 4. Zendesk Help Center — [support.zendesk.com](https://support.zendesk.com)

**Why it is a benchmark:** Zendesk's own help center is the canonical example of a 3-level hierarchy done cleanly for a B2B SaaS product, and it is used directly by VTEX's customer support audience.

### IA patterns to adopt

| Pattern | How Zendesk does it | How to apply to VTEX |
|---|---|---|
| 5–7 visible top-level sections | Help home shows: Getting started, Account management, Messaging, Tickets, Reporting, Apps | VTEX should reduce 36 sections to 12–16, showing only the most important ones collapsed by default |
| Strict 3-click rule | No article is more than 3 clicks from the help center home | This maps directly to the 3-level maximum: Home → Section → Category → Article = 3 clicks |
| Breadcrumbs on every page | "Help > Account management > Users > Managing agent seats" | VTEX Help Center must show full breadcrumbs at every article level |
| Related articles at article footer | Every article ends with 3–5 manually curated related articles | VTEX must make "Related articles" a template requirement, not optional |
| Category descriptions | Each L2 category has a one-line description visible in the sidebar hover and on the category hub page | VTEX metadata.json should support a `description` field for each L2 group |

---

## 5. Intercom Help Center — [intercom.com/help](https://www.intercom.com/help)

**Why it is a benchmark:** Intercom uses the shallowest possible structure (2 levels) and relies on search + contextual links instead of deep navigation, setting the minimum viable IA standard.

### IA patterns to adopt

| Pattern | How Intercom does it | How to apply to VTEX |
|---|---|---|
| Search as primary navigation | Search is the visual hero of the help home; categories are secondary | VTEX should not assume users will browse the sidebar — treat search as the primary path |
| Short collection names (1–2 words) | "Getting started", "Inbox", "Contacts", "Reporting" | VTEX L1 section names must be max 3 words; L2 category names max 4 words |
| "See also" links replace deep levels | Instead of creating a third level for a sub-topic, articles link contextually to related content | For VTEX sections with few articles (under 15), skip L2 grouping and use inline "See also" links instead |
| Minimal nesting for small sections | Sections with under 20 articles use Collection → Article (2 levels only) | VTEX sections with under 20 articles (store-settings, dashboards, omnichannel, suggestions) should use 2 levels, not 3 |
| Feedback widget on every article | Thumbs up/down + optional comment at every article | VTEX tutorials should have a consistent feedback mechanism to identify low-performing articles |

---

---

## 6. Vercel Docs — [vercel.com/docs](https://vercel.com/docs)

**Why it is a benchmark:** Vercel built their docs with AI-assisted navigation (the "Ask AI" sidebar search) and hybrid semantic/keyword retrieval from the start. Their IA decisions are directly informed by how LLMs retrieve and synthesize documentation — the same stack VTEX uses for its indexing pipeline.

### IA patterns to adopt

| Pattern | How Vercel does it | How to apply to VTEX |
|---|---|---|
| Heading paths as retrieval context | Every H2 section implicitly carries the article title + section breadcrumb, so chunks retrieved by the indexer always have scope | VTEX article H2 headings must be descriptive and self-contextualizing — "Step 1" or "Settings" alone are not sufficient |
| Self-contained articles | Every article is written as if the reader arrives directly from a search result with no prior context | VTEX articles must not use "as mentioned above", "in the previous section", or "see the next article" without an explicit link |
| Canonical terminology tied to UI labels | Every term in the docs exactly matches the label visible in the product UI — no synonyms | VTEX article titles and headings must use the exact string shown in the VTEX Admin UI |
| Front-matter completeness | Every page has structured metadata: title, description, OG tags, last-updated — used by the AI index to rank freshness and relevance | VTEX front-matter fields (`productTeam`, `slugEN`, `updatedAt`) must be complete on every article; incomplete metadata degrades AI retrieval |
| Short, focused H2 sections (400–800 tokens each) | Each H2 section can stand alone as a retrieved chunk — it is long enough to be useful but short enough to be precise | VTEX articles should have H2 sections of 300–700 words. Sections shorter than 100 words or longer than 800 words are retrieval anti-patterns |

---

## Summary: Key IA Rules Derived from Benchmarks

### For human navigation

1. **Max 3 levels** for all sections; max 2 levels for sections under 20 articles
2. **Max 16 top-level sections**, ordered by user journey frequency
3. **Verb-first article titles** ("Configure X", "Set up Y", "Manage Z")
4. **Every section needs an overview/hub landing page** as its first article
5. **Every article ends with 3–5 related article links** (template requirement)
6. **Breadcrumbs** on every page
7. **Sidebar shows active section only** (progressive disclosure)
8. **Section labels must be stable** — never rename because a product rebrands
9. **L1 labels: max 3 words / 20 chars; L2 labels: max 4 words / 30 chars; L3 titles: max 6 words / 45 chars in sidebar**
10. **Search must be the primary homepage element**, not secondary to category browsing

### For LLM and AI retrieval

11. **Every article must be self-contained** — no implicit references to surrounding articles; all cross-references must be explicit links
12. **Canonical terminology** — each concept has exactly one name, matching the VTEX Admin UI label; synonyms cause BM25 keyword retrieval failures
13. **Descriptive H2 headings** — H2 sections are the primary chunk boundary for the AI indexer; "Step 1" or "Overview" alone are not indexable; use "Configure payment methods in the VTEX Admin" instead
14. **H2 sections must be 300–700 words** — below 200 tokens the chunk loses retrievable context; above 800 the embedding vector averages over too many topics
15. **Front-matter must be complete** — `productTeam`, `slugEN`, `updatedAt`, `locale`, and `contentType` are all required; missing fields degrade AI retrieval ranking and freshness scoring
16. **Section/category context in article body** — the first paragraph of each article must state what section it belongs to and what goal it accomplishes, so a retrieved chunk is interpretable without sidebar context
