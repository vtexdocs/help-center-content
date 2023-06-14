---
title: 'Can't create orders with promotions applied on the marketplace layer to a seller under the multilevel behavior'
id: 8X5ut0NZnHJJbsrZqRxps
status: PUBLISHED
createdAt: 2021-12-17T17:58:11.823Z
updatedAt: 2022-11-25T21:50:35.525Z
publishedAt: 2022-11-25T21:50:35.525Z
firstPublishedAt: 2021-12-17T18:12:45.235Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: cant-create-orders-with-promotions-applied-on-the-marketplace-layer-to-a-seller-under-the-multilevel-behavior
kiStatus: Fixed
internalReference: 446938
---

## Summary


It isn't possible to finish purchases where the marketplace is applying promotions to items from sellers that are under multilevel behavior. The customer will see a generic error message.

These sellers are defined by having their "fulfillmentEndpoint" as "/api/checkout". They make use of this flow to forward the order to a 3rd-layer, which is another seller (whitelabel).

It affects the cart/orderForm purchase flow and also the order creation via the placeOrder API.



## Simulation


To simulate this scenario, you need to:
- create a cart using some SKU that has a promotion applied to it.
- make sure that the marketplace is under some recursive account.

This order will fail as reported.



## Workaround


N/A

