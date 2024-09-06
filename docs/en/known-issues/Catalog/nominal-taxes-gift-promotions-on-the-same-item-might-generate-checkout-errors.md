---
title: 'Nominal Taxes + Gift Promotions on the same item might generate checkout errors'
id: 6zsBxIeKSPKX9yVRA5jcct
status: PUBLISHED
createdAt: 2024-08-29T14:57:35.310Z
updatedAt: 2024-09-04T16:16:07.470Z
publishedAt: 2024-09-04T16:16:07.470Z
firstPublishedAt: 2024-08-29T14:57:36.770Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: nominal-taxes-gift-promotions-on-the-same-item-might-generate-checkout-errors
locale: en
kiStatus: Backlog
internalReference: 1089066
---

## Summary


Currently, when configuring a nominal tax along with gift promotions on the same item, the promotions module, when communicating with the checkout application, might generate a different rounding of the tax value


##

## Simulation


The simulation of this type of issue is extremely specific and hard to replicate. It requires a set of gift promotions applying over the same item and a nominal tax.

Although it might be difficult to reproduce the behavior, the steps would be as follows:

1 - Create a nominal tax for a specific SKU, preferably with an odd number (such as 4.99), even numbers might not face this problem.
2 - Create a gift promotion for this SKU
3 - Add an even number of skus to the cart
4 - attempt to close the order, an error display might be shown and the order won't be closed. You can be certain this is the issue if, by changing the amount of items in the order, the problem subsides.

Note: this happens for very specific combinations of (amount of items in cart) + (tax values) + (gift promotions).


##

## Workaround


Either use a percentual tax instead, other types of promotions aside from gifts






