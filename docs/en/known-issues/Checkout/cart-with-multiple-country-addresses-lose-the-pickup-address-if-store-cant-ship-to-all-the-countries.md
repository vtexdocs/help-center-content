---
title: "Cart with multiple country addresses lose the pickup address if store can't ship to all the countries"
id: 5yDJ05btQxQq8BuZzfopqv
status: PUBLISHED
createdAt: 2024-07-19T15:02:39.647Z
updatedAt: 2024-07-19T15:02:41.579Z
publishedAt: 2024-07-19T15:02:41.579Z
firstPublishedAt: 2024-07-19T15:02:41.579Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-with-multiple-country-addresses-lose-the-pickup-address-if-store-cant-ship-to-all-the-countries
locale: en
kiStatus: Backlog
internalReference: 1068197
---

## Summary


If a shopper has several addresses in their profile from different countries, and the store doesn't deliver to any of those addresses, when selecting pickup to a valid address and moving to the payment step, the Checkout UI redirects the shopper back to the shipping step.


##

## Simulation



- Register addresses from a country that the store doesn't offer delivery to;
- Go to checkout and select a valid address with the country that the store delivers;
- Click on "Go to payment".


##

## Workaround


N/A




