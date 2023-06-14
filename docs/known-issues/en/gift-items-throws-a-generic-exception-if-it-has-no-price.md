---
title: Gift items throws a generic exception if it has no price
id: 7Jw1Nihqp3Sg2ecg7R9IEt
status: PUBLISHED
createdAt: 2022-05-12T14:52:18.546Z
updatedAt: 2022-11-25T21:51:44.617Z
publishedAt: 2022-11-25T21:51:44.617Z
firstPublishedAt: 2022-05-12T14:52:18.968Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: gift-items-throws-a-generic-exception-if-it-has-no-price
kiStatus: Backlog
internalReference: 510490
---

## Summary


Selecting a gift item in the cart will throw a generic exception if it has no price, especially if the store uses an external tax service. The customer can't go ahead selecting it.

Since the price is a requirement, the expected behavior is that the item/gift shouldn't be offered.



## Simulation


- to register a new item or to update it to be without price
- to create a gift promotion offering this item
- to create a cart where the item will be offered
- try to select the gift; an error will be presented



## Workaround


To register a price, which is a requirement for every item that will be active and sold, even as a gift.

