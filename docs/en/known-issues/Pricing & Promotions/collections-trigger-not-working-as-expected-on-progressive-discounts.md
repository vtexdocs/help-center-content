---
title: 'Collections trigger not working as expected on Progressive Discounts'
id: 78b9yQnTm1bxgOM2cfMlql
status: PUBLISHED
createdAt: 2023-11-06T16:42:53.081Z
updatedAt: 2023-11-06T16:42:53.722Z
publishedAt: 2023-11-06T16:42:53.722Z
firstPublishedAt: 2023-11-06T16:42:53.722Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: collections-trigger-not-working-as-expected-on-progressive-discounts
locale: en
kiStatus: Backlog
internalReference: 930849
---

## Summary


When creating a progressive discount promotion the client can set the trigger by collection, by a SKU list or by both.

However, when both are setup on the promotion, the condition that should be either the collection or either the sku list triggers the promotion is actually behaving like only the SKU list is the trigger.


##

## Simulation



1. Create a progressive discount promotion;
2. On the promo triggers, select a collection and a SKU list with a sku that doesn't belong to the collection;
3. Check on the cart that the promotion is only active when the sku that belongs to the sku list is present.


##

## Workaround


To enable both triggers at the same time there is no workaround.





