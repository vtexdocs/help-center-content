---
title: 'Free shipping promotion being applied on split orders outside promotion restriction'
id: APAIGZx8tdtIjGsQJmvgu
status: PUBLISHED
createdAt: 2023-01-12T16:19:47.878Z
updatedAt: 2024-02-16T20:23:58.107Z
publishedAt: 2024-02-16T20:23:58.107Z
firstPublishedAt: 2023-01-12T16:19:48.479Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: free-shipping-promotion-being-applied-on-split-orders-outside-promotion-restriction
locale: en
kiStatus: No Fix
internalReference: 732302
---

## Summary



On the free shipping promotion the account can setup a restriction to be applied, for instance, the shipping method.

On cartlinks with products sold by different sellers it might occur a scenario of split orders. Which some products will be delivered by a seller and others by another seller.

Is common in this scenarios that the shipping methods of the sellers are different, which means the split orders will have different shipping methods.

The problem happens when the free shipping promotion does not validate the shipping method restriction on split orders. The result is that the shipping will be free even for the split order with a different shipping method.

The expected result is that only the split orders with shipping methods equal to the restriction would have free shipping.


##

## Simulation



1. Create a free shipping promotion with shipping method restriction.
2. Simulate a cart with products sold by different sellers (it can be white label sellers) that have different shipping methods.
3. Make sure that one of the sellers is using a shipping method that does not belong to the promotion restriction.
4. Check that the free shipping is applying to the entire cart.


##

## Workaround


No workaround.

