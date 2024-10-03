---
title: 'Carts created from order replacement do not receive promotions correctly'
id: 2ODIE9RNP7Q5LCglXsztzf
status: PUBLISHED
createdAt: 2023-10-20T17:47:40.494Z
updatedAt: 2023-10-20T17:47:41.099Z
publishedAt: 2023-10-20T17:47:41.099Z
firstPublishedAt: 2023-10-20T17:47:41.099Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: carts-created-from-order-replacement-do-not-receive-promotions-correctly
locale: en
kiStatus: Backlog
internalReference: 473424
---

## Summary


Carts created from existing orders through the "replace orders" functionality presented on the "my orders" page are restricted to the original promotion, but without considering that the same promotion can apply to different contexts, such as different payment methods or shipping options.


##

## Simulation



- Have a promotion for multiple payment methods
- Close the order by paying with "A", which must have a discount
- On my orders screen, choose to change the order payment method
- Back to the cart, choose to pay with "B"
- The discount will not be shown


##

## Workaround


N/A




