---
title: "Inconsistent price when the SKU has unit multiplier different than 1"
id: NVtFiuWgptqa2gBEVmpOC
status: PUBLISHED
createdAt: 2022-09-05T13:05:50.789Z
updatedAt: 2024-02-02T16:50:00.987Z
publishedAt: 2024-02-02T16:50:00.987Z
firstPublishedAt: 2022-09-05T13:05:51.613Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: inconsistent-price-when-the-sku-has-unit-multiplier-different-than-1
locale: en
kiStatus: Backlog
internalReference: 651102
---

## Summary


When some SKU contains a unit multiplier different than 1 (it can be int as 10 or 100, or float as 0.8, for example), in some situations, the price returned in store-graphql may have inconsistencies based on the division of the price returned from the simulation API:

calculatedSellingPrice / (unitMultiplier * 100)

It can apply to all price values that use the unit multiplier such as in installments (that do not consider unit multiplier value and the simulation call sends the value with the unit multiplier being considered), PDP price, PLP price, or cart.


##

## Simulation


Check the simulation called for a product with a unit multiplier
Check the Price of the product on a search page or using a product search query from search-graphql
The prices can be divergent by cents


##

## Workaround


N/A





