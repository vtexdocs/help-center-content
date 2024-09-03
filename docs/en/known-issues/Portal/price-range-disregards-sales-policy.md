---
title: 'Price range disregards sales policy'
id: 4isnfk4T2UB3CId8bXcvFT
status: DRAFT
createdAt: 2022-03-16T16:35:57.963Z
updatedAt: 2024-01-19T19:13:41.739Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: price-range-disregards-sales-policy
locale: en
kiStatus: Backlog
internalReference: 322764
---

## Summary


The price range filter, which is configured from the options category, considers the price that is registered in all of the store's sales policies, which means that it will always display the lowest registered value from any sales policy, possibly displaying a product that is not in the price range of the that particular sales policy.


##

## Simulation



1. Register different prices in different sales policies for the same SKU;
2. Create price ranges in the category in which the registered prices have different ranges;
3. In the sales policy of the SKU with the highest price, filter by price range
4. Notice that the considered SKU value belongs to another sales policy, because the filter only looks at the lowest value of any policy.


##

## Workaround


There is no available workaround for this scenario.

