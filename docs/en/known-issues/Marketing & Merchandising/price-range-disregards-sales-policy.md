---
title: "Price range disregards sales policy"
id: 3OsmwHOZyM0AQWA8CuK0aC
status: PUBLISHED
createdAt: 2017-10-17T17:50:40.970Z
updatedAt: 2022-12-22T20:46:23.778Z
publishedAt: 2022-12-22T20:46:23.778Z
firstPublishedAt: 2017-10-17T18:03:23.731Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: price-range-disregards-sales-policy
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The price range filter, which is configured from the options category, considers the price that is registered in all of the store's sales policies, which means that it will always display the lowest registered value from any sales policy, possibly displaying a product that is not in the price range of the that particular sales policy.

## Simulation

1. Register different prices in different sales policies for the same SKU;
2. Create price ranges in the category in which the registered prices have different ranges;
3. In the sales policy of the SKU with the highest price, filter by price range
4. Notice that the considered SKU value belongs to another sales policy, because the filter only looks at the lowest value of any policy.

## Workaround

There is no available workaround for this scenario.

