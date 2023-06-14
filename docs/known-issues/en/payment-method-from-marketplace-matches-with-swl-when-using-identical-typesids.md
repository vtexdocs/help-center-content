---
title: Payment Method from Marketplace matches with SWL when using identical types:ids
id: 4AHyl5z7ySagx6Myx0KqM7
status: PUBLISHED
createdAt: 2022-03-15T22:06:35.540Z
updatedAt: 2022-11-25T22:12:10.257Z
publishedAt: 2022-11-25T22:12:10.257Z
firstPublishedAt: 2022-03-15T22:06:36.030Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: payment-method-from-marketplace-matches-with-swl-when-using-identical-typesids
kiStatus: Backlog
internalReference: 402140
---

## Summary


Currently, the payment method configuration, in the promotions product is not intended to be passed down via the fulfillment request/response.

However, if the user sets 2 payment methods identically on each side (marketplace and seller), with the same id and type and sets up a promotion with this kind of restriction on the marketplace, in several cases the promotions validation will identify this as a match for items being sold with the seller's inventory.

This "should not" be happening under the current product, it is an unexpected side effect. ​

The unintended side effects of this are difficult to map since the original product implementation was not mapped to make it work this way. The use of it does not guarantee its functioning in all contexts and cases.

It is recommended that you only use what the product is designed to do. Currently, it is not possible to pass on the payment method condition via fulfillment, and filtering through the marketplace generates non-mapped collateral effects.




## Simulation


1) Set up a payment method on a marketplace.

2) Set up a payment method on a child account of this marketplace with the same id, type.

3) Set up a promotion on the marketplace restricted by this payment method.

4) In the marketplace environment, addToCart an item uses an item using the seller's inventory.

5) The promotion will apply over the item, which should NOT be the case under our current expected behavior.




## Workaround


None (since this is an unintended side effect of something that "should not work and is currently working unreliably").

