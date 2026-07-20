# Section Naming Rationale

Rationale for non-obvious naming choices in the proposal. Self-evident names (Catalog, Orders, Payments, Storefront, Shipping) are not included.

---

| New name | Replaces |
|---|---|
| Getting Started | `about-the-admin`, `store-settings`, part of `operational` |
| Pricing and Promotions | `promotions-and-taxes`, `prices`, `trade-policies` |
| Sellers & B2B | `sellers`, `b2b` |
| Checkout & Subscriptions | `checkout`, `subscriptions` |
| Apps & Integrations | `apps`, `integrations`, `projects-and-integrations` |
| Customer Experience | `vtex-cx-platform`, `conversational-commerce`, `message-center`, `master-data` |
| Infrastructure & Data | `infrastructure`, `dashboards`, `indeva-by-vtex` |
| Intelligent Search | `intelligent-search` (kept; Dev Portal divergence documented below) |

---

## Getting Started
Old names (`about-the-admin`, `operational`) reflect where content was stored, not what a user is trying to do. "Getting Started" is the only label that signals "this is where a first-time merchant begins," matching the convention used by Stripe, Shopify, and Zendesk.

## Pricing and Promotions
The old section (`promotions-and-taxes`) led with "Promotions" and named a sub-topic ("Taxes") as its scope. "Pricing" leads because it is the higher-frequency task. "Taxes" is dropped from the label — it remains in the section as a sub-topic. "and" is used instead of "&" to match the Dev Portal's existing label and avoid special character encoding issues.

## Sellers & B2B
Distinct product areas, but same primary audience: operators managing non-standard commerce relationships. At 30 and 39 articles respectively, keeping them separate would produce two undersized sections; combined they reach ~69 articles, within range.

## Checkout & Subscriptions
"Subscriptions" is added to the label to make the section scope explicit — without it, subscriptions content would be invisible to users scanning the sidebar.

## Apps & Integrations
"Apps" alone excluded ERP and marketplace integrations; "Integrations" alone excluded the VTEX App Store. The combined label covers the full merchant-recognized scope: things you install and things you connect.

## Customer Experience
"VTEX CX Platform" is an internal product name that communicates nothing to a merchant scanning the sidebar. "Customer Experience" describes the shared purpose of all four source sections: tools for managing how customers interact with and are supported by the store.

## Infrastructure & Data
"Infrastructure" alone covered only CDN and SLA. Adding Dashboards and Indeva (VTEX Data Pipeline) significantly broadened the scope. "& Data" signals that data pipeline content lives here, not just platform health.

## Intelligent Search — kept despite Dev Portal divergence
The Dev Portal uses "Search" for the same product area. "Intelligent Search" is the canonical name as used in the VTEX Admin UI; the Dev Portal should align to the HC label, not the reverse.

> **Note on Shipping:** The Dev Portal uses "Logistics" for its API-facing content. The divergence is intentional — "Shipping" is the merchant-facing term in the Admin UI. Both are correct for their audience.

---

## Canonical terminology requirement

The BM25 (keyword) component of hybrid search relies on exact term matching. Every article within the proposed sections must use the canonical name — the label used in the VTEX Admin UI — consistently. Synonym sprawl across articles in the same section directly degrades keyword retrieval.

| Canonical name (use this) | Synonyms to stop using |
| --- | --- |
| VTEX Admin | Admin Panel, Back-office, BO, Dashboard |
| Order Management | OMS, Order Management System |
| Intelligent Search | IS, VTEX Search, Search module |
| Master Data | MD, CRM module |
| Trade Policy | Sales policy, Commercial policy |
| SKU | Product variant, Item variant |
