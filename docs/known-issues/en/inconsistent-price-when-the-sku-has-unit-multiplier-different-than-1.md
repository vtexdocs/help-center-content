---
title: 'Inconsistent price when the SKU has unit multiplier different than 1'
id: NVtFiuWgptqa2gBEVmpOC
status: PUBLISHED
createdAt: 2022-09-05T13:05:50.789Z
updatedAt: 2023-02-27T14:22:04.935Z
publishedAt: 2023-02-27T14:22:04.935Z
firstPublishedAt: 2022-09-05T13:05:51.613Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: inconsistent-price-when-the-sku-has-unit-multiplier-different-than-1
kiStatus: Backlog
internalReference: 651102
---

## Summary


When some SKU contains a unit multiplier different than 1, in some situations, the price returned in store-graphql may have inconsistencies based on the division of the price returned from the simulation API:

calculatedSellingPrice / (unitMultiplier * 100)

It also applies to values in installments that do not consider unit multiplier value and the simulation call sends the value with the unit multiplier being considered

Based on:
https://vtexhelp.zendesk.com/agent/tickets/578022



## Simulation



## Workaround



