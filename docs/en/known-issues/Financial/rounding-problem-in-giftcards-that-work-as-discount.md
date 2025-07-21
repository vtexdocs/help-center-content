---
title: "Rounding problem in giftcards that work as discount"
id: ecLMI2kGhqmEMUkESOSOK
status: PUBLISHED
createdAt: 2018-03-27T20:47:13.941Z
updatedAt: 2022-12-22T14:45:08.837Z
publishedAt: 2022-12-22T14:45:08.837Z
firstPublishedAt: 2018-03-27T20:53:30.783Z
contentType: knownIssue
productTeam: Financial
author: authors_84
tag: Checkout,Order Management
slugEN: rounding-problem-in-giftcards-that-work-as-discount
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Vouchers (gift cards) that work as a discount are having a rounding problem, since the items are not splitted.

Since this priceTag does not work like the priceTags that come from RnB, the item doesn't adjust the unit price, showing incorrect values.

## Simulation

Make an order using gift card as a discount (not a payment method) and more than one item in the same order.

Note that the sum of the items will not coincide with the total of the order, since - because the items will not be splitted - a rounding will happen.

## Workaround

There is currently no workaround for this issue.

