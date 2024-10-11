---
title: 'PaymentSystems are not returned in orderForm when a cart price comes exclusively from manualPrice'
id: 3KPNFtPgEwshbv6WiGrqOF
status: PUBLISHED
createdAt: 2024-04-30T20:06:52.774Z
updatedAt: 2024-04-30T20:06:53.756Z
publishedAt: 2024-04-30T20:06:53.756Z
firstPublishedAt: 2024-04-30T20:06:53.756Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: paymentsystems-are-not-returned-in-orderform-when-a-cart-price-comes-exclusively-from-manualprice
locale: en
kiStatus: Backlog
internalReference: 1025321
---

## Summary


When a cart's total value comes exclusively from a manual price, items `price` and delivery `price` are `0`, no payment systems other than Gift Card (if active) are offered.


##

## Simulation



- Add an item with price `0` and select a delivery option with price `0`
- Add a `manualPrice` amount to the item
- Proceed to the payment step in checkout and no payment methods are returned as available


##

## Workaround


There is no known workaround other thank adding some ammount to the item's price.





