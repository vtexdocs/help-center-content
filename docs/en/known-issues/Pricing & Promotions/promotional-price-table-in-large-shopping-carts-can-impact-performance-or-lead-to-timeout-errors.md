---
title: 'Promotional price table in large shopping carts can impact performance or lead to timeout errors'
id: 22H47mc9qYLdzk2sFkbBut
status: PUBLISHED
createdAt: 2023-12-07T15:47:28.360Z
updatedAt: 2023-12-07T15:57:49.789Z
publishedAt: 2023-12-07T15:57:49.789Z
firstPublishedAt: 2023-12-07T15:47:28.972Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotional-price-table-in-large-shopping-carts-can-impact-performance-or-lead-to-timeout-errors
locale: en
kiStatus: Backlog
internalReference: 949389
---

## Summary



When we have a store with promotional price tables created and large shopping carts applying the promotions, it causes slows in the performance of the purchase and leads to timeout errors in the cart.

Any actions on the cart can trigger errors, such as adding items, editions, input zip code, etc will compromise the performance of the purchase.

We cannot know for precise which number of promotional price tables being calculated in the cart or the quantity of items added in the cart will start triggering the timeout errors or slowing down the performance, from what was analyzed it can happen with any significant amount.



##

## Simulation



Create multiple promotional price tables and a shopping cart with many items (here we cannot point a clear number, such as 50 or 100, it depends on the promotions)


##

## Workaround



Unfortunately, we do not have any workarounds for this,
deactivating the promotions and using the price module to insert the prices would help.





