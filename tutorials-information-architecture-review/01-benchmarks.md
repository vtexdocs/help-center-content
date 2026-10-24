# Benchmark Portals — Information Architecture Patterns for VTEX Help Center Tutorials

Six benchmark portals informing the VTEX Help Center Information Architecture (IA) plan, with patterns to adopt from each.

---

## 1. Stripe Docs — [docs.stripe.com](https://docs.stripe.com)

**Why:** Manages a large, multi-product doc set comparable to VTEX in breadth, with exemplary progressive disclosure and task-first navigation.

| Pattern | How Stripe does it |
| :--- | :--- |
| Product-first top level | Top-level nav groups by product domain: Payments, Revenue, Money management |
| Sidebar scoped per section | Entering a section collapses all others |
| Flat structure for small sections | Sections with few articles go Section → Article (no intermediate grouping) |
| Stable section labels | "Payments", "Billing", "Terminal" unchanged for 5+ years |

---

## 2. Shopify Help Center — [help.shopify.com](https://help.shopify.com)

**Why:** Serves a non-technical merchant audience — the closest profile to VTEX's primary users — with clear task language and a strict 3-level hierarchy.

| Pattern | How Shopify does it |
| :--- | :--- |
| Stable category labels | "Orders", "Payments", "Shipping" survive internal product renames |
| Strict 3-level max | Section → Category → Article |

---

## 3. HubSpot Knowledge Base — [knowledge.hubspot.com](https://knowledge.hubspot.com)

**Why:** Manages 10+ products in a single knowledge base — analogous to VTEX managing Catalog, CX Platform, Indeva, and Sales App under one portal.

| Pattern | How HubSpot does it |
| :--- | :--- |
| Hub/overview landing pages | Each top-level category has a hub page with popular articles and a "Start here" path |
| Stable labels through product renames | "Emails" and "Contacts" did not change when HubSpot rebranded features |
| Related articles at every level | Hub pages and article pages surface related content and "next step" links |

---

## 4. Zendesk Help Center — [support.zendesk.com](https://support.zendesk.com)

**Why:** The canonical example of a clean 3-level B2B SaaS help center, used directly by VTEX's customer support audience.

| Pattern | How Zendesk does it |
| :--- | :--- |
| 5–7 visible top-level sections | Getting started, Account management, Messaging, Tickets, Reporting, Apps |
| Strict 3-click rule | No article more than 3 clicks from the home |
| Category descriptions | Each L2 category has a one-line description in the sidebar |

---

## 5. Intercom Help Center — [intercom.com/help](https://www.intercom.com/help)

**Why:** Uses the shallowest possible structure and relies on search + contextual links, setting the minimum viable IA standard.

| Pattern | How Intercom does it |
| :--- | :--- |
| Short collection names | "Getting started", "Inbox", "Contacts" (1–2 words) |
| "See also" links instead of deep nesting | Third-level sub-topics are replaced with contextual links |

---

## 6. Vercel Docs — [vercel.com/docs](https://vercel.com/docs)

**Why:** Built with AI-assisted navigation and hybrid semantic/keyword retrieval from the start. Their IA decisions directly reflect how LLMs retrieve documentation.

| Pattern | How Vercel does it |
| :--- | :--- |
| Descriptive H2 headings as retrieval context | H2 sections carry article title + breadcrumb scope so retrieved chunks are always contextualized |
| Canonical terminology tied to UI labels | Every term matches the label visible in the product UI |
| Complete front-matter | Title, description, last-updated used by the AI index to rank freshness and relevance |
