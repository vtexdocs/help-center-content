# Section Naming Rationale

This document records the reasoning behind non-obvious naming choices in the proposal. Names that are self-evident (Catalog, Orders, Payments, Storefront, Shipping) are not included.

---

**"Getting Started"** ← `about-the-admin` + `store-settings` + part of `operational`
The old names reflect where content was stored, not what a user is trying to do. "Getting Started" is the only label that signals "this is where a first-time merchant begins." It also matches the established convention used by Stripe, Shopify, and Zendesk for new-user onboarding sections.

**"Pricing and Promotions"** ← `promotions-and-taxes`+ `prices` + `trade-policies`
The old section led with "Promotions" and included "Taxes" in the name — neither reflects how merchants think about this area. "Pricing" is the higher-frequency task (merchants configure prices more often than they create promotions), so it leads. "Taxes" is dropped from the label because it is a sub-topic, not the defining scope of the section. "and" is used instead of "&" to match the Dev Portal's troubleshooting filter ("Pricing and Promotions") and avoid special character encoding issues.

**"Sellers & B2B"** ← `sellers` + `b2b`
Sellers (marketplace) and B2B are distinct product areas but share the same primary audience: store operators managing non-standard commerce relationships. Keeping them separate at 30 and 39 articles respectively would produce two undersized sections. Combining them reaches ~69 articles — within range — and mirrors how Shopify and other commerce platforms group marketplace and wholesale features under a single commerce-relationships section.

**"Checkout & Subscriptions"** ← `checkout` + `subscriptions`
"Subscriptions" is added to the name to make the section's scope immediately clear — subscriptions are a recurring-order concept that many merchants actively manage alongside checkout settings. Without it in the label, subscriptions content would be invisible to users scanning the sidebar.

**"Apps & Integrations"** ← `apps` + `integrations` + `projects-and-integrations`
Three sections with distinct but overlapping scope collapsed into one. "Apps" alone would be too narrow (it excluded ERP and marketplace integrations); "Integrations" alone would be too narrow (it excluded the VTEX App Store). The combined label covers the full scope merchants recognize: things you install and things you connect.

**"Customer Experience"** ← `vtex-cx-platform` + `conversational-commerce` + `message-center` + `master-data`
"VTEX CX Platform" is an internal product name, not a navigation label — it communicates nothing to a merchant scanning the sidebar. "Customer Experience" describes what all four source sections are about: tools for managing how customers interact with and are supported by the store. It follows the principle that the VTEX Admin UI is the authoritative source for labels, not internal product naming.

**"Infrastructure & Data"** ← `infrastructure` + `dashboards` + `indeva-by-vtex`
"Infrastructure" alone covered only CDN and SLA. Adding `dashboards` (store performance data) and `indeva-by-vtex` (VTEX Data Pipeline content) made the scope significantly broader. "& Data" is added to the label to signal that data pipeline and analytics content lives here, not just platform health.

**"Intelligent Search"** — kept as canonical name despite Dev Portal divergence
The Dev Portal uses "Search" for the same product area. The correct canonical name is "Intelligent Search" (as used in the VTEX Admin UI); the Dev Portal should align to the HC label, not the reverse.

**"Shipping"** — kept over "Logistics"
The Dev Portal uses "Logistics" for its API-facing content (Fulfillment API, delivery promise). The divergence is intentional: "Shipping" is the merchant-facing term in the Admin UI. Both are correct for their audience.
