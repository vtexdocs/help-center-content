---
title: 'Cart Itens are kept in orders with total value zero'
id: 66D6RuacgCeCMQDmLPrlNP
status: PUBLISHED
createdAt: 2024-06-24T20:59:07.721Z
updatedAt: 2024-06-24T20:59:08.668Z
publishedAt: 2024-06-24T20:59:08.668Z
firstPublishedAt: 2024-06-24T20:59:08.668Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: cart-itens-are-kept-in-orders-with-total-value-zero
locale: en
kiStatus: Backlog
internalReference: 1054999
---

## Summary


Whenever a cart has a total value of `0` no transaction is created upon finishing an order.  When completing an order through checkout's UI no process order request happens, so the cart items and data are kept, and the shopper can create an order with the same cart again.


##

## Simulation



- Create a cart with total value `0`;
- Finish the purchase;
- Reaccess the cart after some time; there will be no change in the cart content.


##

## Workaround


There is no workaround available.




