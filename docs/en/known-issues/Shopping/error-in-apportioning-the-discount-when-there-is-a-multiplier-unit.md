---
title: "Error in apportioning the discount when there is a multiplier unit"
id: 1AbljaKsBmoKwGQOMAKo2C
status: PUBLISHED
createdAt: 2018-03-20T19:21:20.708Z
updatedAt: 2022-12-22T20:48:46.897Z
publishedAt: 2022-12-22T20:48:46.897Z
firstPublishedAt: 2018-03-20T19:48:07.230Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: error-in-apportioning-the-discount-when-there-is-a-multiplier-unit
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

In cases of orders with discount that have non-integer multiplier items, rounding is performed per item, not after the sum of all items.

This can result in the loss of a few cents.

## Simulation

- Create percentage promotion.
- Receive an order with items that use non-integer multiplier.
- Analyze the apportionment of the discount.

## Workaround

At the moment, we do not have a workaround for this scenario.


