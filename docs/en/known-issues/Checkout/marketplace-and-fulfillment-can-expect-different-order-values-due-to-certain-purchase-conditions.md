---
title: "Marketplace and Fulfillment can expect different order values due to certain purchase conditions"
id: 5LoC3DwesBWH5kr2b5u6WD
status: PUBLISHED
createdAt: 2024-05-13T20:04:19.094Z
updatedAt: 2024-05-13T20:34:01.432Z
publishedAt: 2024-05-13T20:34:01.432Z
firstPublishedAt: 2024-05-13T20:04:20.144Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-and-fulfillment-can-expect-different-order-values-due-to-certain-purchase-conditions
locale: en
kiStatus: Backlog
internalReference: 1032473
---

## Summary


Marketplace and Fulfillment layers may expect different values for the order, preventing purchase completion.
In such cases, the Marketplace's `sellingPrice` for the item does not match its Fulfillment `price`.


##

## Simulation


The issue is not necessarily restricted to this exact step-by-step, but is easiest to reproduce as follows:

1. Set the Marketplace and seller's decimal places to zero.
2. At the seller's account, set an item's price to 49950.00, and a Fulfillment promotion that applies a 15% discount to it.
3. At a Marketplace, add 3 units of the seller's item to your cart.
4. Try to complete the purchase. The error message "The requested order could not be created. Please try again." will be displayed.


##

## Workaround


N/A





