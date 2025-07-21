---
title: "Price without taxes being considered in the minicart"
id: 6hhGsovguA1HEqYiS81M7m
status: PUBLISHED
createdAt: 2025-05-28T20:19:33.068Z
updatedAt: 2025-05-28T20:19:33.930Z
publishedAt: 2025-05-28T20:19:33.930Z
firstPublishedAt: 2025-05-28T20:19:33.930Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: price-without-taxes-being-considered-in-the-minicart
locale: en
kiStatus: Backlog
internalReference: 1234933
---

## Summary


It is currently not possible to display product price with taxes within the minicart list context.


##

## Simulation



1. Add a product that has associated taxes to the cart.
2. Open the minicart and observe the product details.
3. Note that the additional taxes are not displayed, even though they may be present and calculated in the checkout.


##

## Workaround


It is only possible to add the tax amount in the totalizers field.

This is configured adding the option "Tax" to the prop `totalizersToShow` from the `checkout-summary.compact` block:


      "checkout-summary.compact#minicart": { "children": ["summary-totalizers#minicart"], "props": { "totalizersToShow": ["Items", "Discounts", "Tax"] } }






