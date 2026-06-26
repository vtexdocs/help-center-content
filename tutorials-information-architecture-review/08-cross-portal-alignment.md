# Cross-Portal Alignment — Decisions in the Proposal

The HC restructuring proposal was made with the Developer Portal structure in mind. This document records where the Dev Portal's existing structure directly influenced a naming or scoping decision in the proposal.

---

## Section naming decisions

**"Intelligent Search" — kept as canonical name**
The proposal keeps `intelligent-search` as the HC section name. The Dev Portal currently uses "Search" for the same product area — that is a Dev Portal misalignment, not a reason to rename the HC section. The correct canonical name is "Intelligent Search" (as used in the VTEX Admin UI), and the Dev Portal should align to it.

**"Shipping" — kept over "Logistics"**
The proposal keeps the existing `shipping` section name rather than renaming it to "Logistics." The Dev Portal uses "Logistics" for its API-facing content (Fulfillment API, delivery promise). The divergence is intentional: "Shipping" is the merchant-facing term in the Admin UI; "Logistics" is the developer/API-facing term. Both are correct for their audience.

**"Pricing and Promotions" — plain "and" over ampersand**
The proposal introduces `pricing-and-promotions` as a new section. The display name uses "and" rather than "&": plain text avoids special character encoding issues (HTML `&amp;`, JSON escaping) and is safer in metadata and sidebar rendering. The Dev Portal's troubleshooting filter already uses "Pricing and Promotions," so no change is needed on that side.

---

## Scope boundary decisions

All new HC sections are scoped to Admin UI content only. The Dev Portal covers the API/developer layer for the same product areas; the HC sections do not overlap with it.

The new `getting-started` section does not duplicate the Dev Portal's Getting Started — the Dev Portal's is developer onboarding (API integration by product area); the HC's is merchant onboarding (Admin access, store settings basics). The HC Getting Started should include a callout pointing developers to the Dev Portal.
