---
title: "'availability' field is incorrect in Fulfillment Simulation for no stock or price products"
id: 1k2zcLEN5vG6mnksLwEXxp
status: PUBLISHED
createdAt: 2023-10-04T14:22:53.519Z
updatedAt: 2023-10-04T14:22:54.219Z
publishedAt: 2023-10-04T14:22:54.219Z
firstPublishedAt: 2023-10-04T14:22:54.219Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: availability-field-is-incorrect-in-fulfillment-simulation-for-no-stock-or-price-products
locale: en
kiStatus: Backlog
internalReference: 773537
---

## Summary


When a product is out of stock or has no price, the fulfillment simulation incorrectly reports the `availability` field as `available`.
This behavior also applies to the context of gift selection, where the `selectableGifts` field is likewise affected by this issue.


1. If the item has a price, but no stock, the fulfillment simulation will return `"availability": "nullPrice"` when there is no address;
2. If the item has a price, but no stock, the fulfillment simulation will return `"availability": "available"` when there is an address.


##

## Simulation



- Have a product with no stock or price in a seller
- Do a Fulfillment Simulation


##

## Workaround


N/A




