---
title: Shipping calculator for shopping cart is inconsistent 
id: 2U3U4r7DAAuIegW0geKG8U
status: PUBLISHED
createdAt: 2018-12-10T16:09:32.683Z
updatedAt: 2019-12-31T17:00:43.523Z
publishedAt: 2019-12-31T17:00:43.523Z
firstPublishedAt: 2018-12-10T16:30:03.673Z
contentType: knownIssue
productTeam: Shopping
author: authors_4
tag: Checkout
slug: inconsistent-shipping-calculator
kiStatus: Closed
internalReference: 
---

## Summary

When a cart has more than 20 items, its display is partially obstructed, instead displaying a "show more items button".

In such cases, the shipping calculator displays an inconsistent behavior, showing two selectors and divergent values between them.

This only occurs when using Checkout v5.

## Simulation

- use a store with checkout v5
- have a cart with more than 20 items
- calculate shipping for that cart in order to observe its behavior

## Workaround

This scenario does not occur anymore within the 6th version of Checkout, which uses the "Shipping Preview" component to calculate cart shipping.

