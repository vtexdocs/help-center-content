---
title: 'Fixed Price being created on trade Policy 1 when saving bundle prices.'
id: 3Xbh5GVn0jm2yhaOiRg3Le
status: PUBLISHED
createdAt: 2022-11-28T12:41:07.808Z
updatedAt: 2024-02-16T20:24:01.848Z
publishedAt: 2024-02-16T20:24:01.848Z
firstPublishedAt: 2022-11-28T12:41:08.426Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: fixed-price-being-created-on-trade-policy-1-when-saving-bundle-prices
locale: en
kiStatus: No Fix
internalReference: 705869
---

## Summary



A kit sku (or bundle sku) price is the sum of the sku components prices multiplied by their quantity.

If a kit is composed  by 1 unit of sku A and 2 units of sku B, it's price is gonna be 1x(A's price) + 2x(B's price).

When saving this price or when changing the quantity of the components on the kit via catalog admin a fixed price is being created on the Trade Policy 1 for the kit sku.

However, this is not an expected behavior.



## Simulation




1. Create a kit on the catalog;
2. Set a component price and the quantity on the kit;
3. Change the quantity of the component;
4. Check that a fixed price was created on trade policy 1 for the sku kit.



## Workaround


No workaround.

