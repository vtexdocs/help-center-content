---
title: 'OrderForm not updating after order is placed'
id: 4Xkk9LA95PRXbKxFYy189f
status: PUBLISHED
createdAt: 2024-06-27T15:22:19.922Z
updatedAt: 2024-06-28T11:47:47.958Z
publishedAt: 2024-06-28T11:47:47.958Z
firstPublishedAt: 2024-06-27T15:22:20.951Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: orderform-not-updating-after-order-is-placed
locale: en
kiStatus: Backlog
internalReference: 1056870
---

## Summary


After an order is placed, the orderFormId is not updated, causing items to remain visible in the cart. This issue affects FastStore accounts
This issue may be related to the delay in updating the orderFormId due to changes related to the checkout cookie.

After the gatewayCallback response, the expected scenario would be a new orderFormId cookie for the user. This scenario is broken because the domain of the new cookie does not match the domain of the user's previous cookie (because of the secure domain).


##

## Simulation



- Complete an order on a Faststore account
- Return to the home page
- The items that you just bought will remain in your cart


##

## Workaround


N/A





