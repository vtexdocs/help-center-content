---
title: "Tax hub request doesn't sum discounts when manual price is applied"
id: 3p8mpZALGS95pB9j4CclHi
status: PUBLISHED
createdAt: 2023-11-08T18:07:23.968Z
updatedAt: 2024-07-01T18:49:18.565Z
publishedAt: 2024-07-01T18:49:18.565Z
firstPublishedAt: 2023-11-08T18:07:24.393Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-hub-request-doesnt-sum-discounts-when-manual-price-is-applied
locale: en
kiStatus: No Fix
internalReference: 932667
---

## Summary


When a manual price is applied to an item to decrease the price, the tax hub request doesn't sum it and shows the discount totals always as 0.


##

## Simulation



- Set a manual price lower than the current price for an item;
- The tax hub request won't sum the discount in the totals.


##

## Workaround


N/A




