---
title: "Nominal Tax and Gift Promotions generating rounding error"
id: 6zsBxIeKSPKX9yVRA5jcct
status: PUBLISHED
createdAt: 2024-08-29T14:57:35.310Z
updatedAt: 2024-12-19T13:35:00.593Z
publishedAt: 2024-12-19T13:35:00.593Z
firstPublishedAt: 2024-08-29T14:57:36.770Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-tax-and-gift-promotions-generating-rounding-error
locale: en
kiStatus: Backlog
internalReference: 1089066
---

## Summary


When configuring a nominal tax and gift promotions for the same item, the Promotions module may generate a rounding discrepancy in the tax value during communication with the Checkout application. This discrepancy can prevent orders from being completed.


##

## Simulation


The issue is highly specific and challenging to replicate as it depends on particular combinations of item quantity, tax values, and gift promotions. The steps to reproduce are as follows:

1. Configure a nominal tax for a specific SKU, using an odd tax value (e.g., 4.99). Even numbers may not trigger this issue.
2. Create a gift promotion for the same SKU.
3. Add an even quantity of the SKU to the cart.
4. Attempt to complete the order. An error message may appear, preventing the order from being finalized.
5. Confirm the issue by adjusting the quantity of items in the cart. If changing the item count resolves the issue, it is likely related to this bug.


##

## Workaround


To avoid this issue:

- Use percentage-based taxes instead of nominal taxes.
- Opt for other types of promotions instead of gift promotions.





