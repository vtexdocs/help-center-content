---
title: Inventory Divergence - Logistics handle zero on left as another SKU
id: 3FKaDXw5pWVyUfwgKo6pfV
status: PUBLISHED
createdAt: 2022-05-18T15:19:00.037Z
updatedAt: 2022-11-25T21:58:49.907Z
publishedAt: 2022-11-25T21:58:49.907Z
firstPublishedAt: 2022-05-18T15:19:00.350Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: inventory-divergence-logistics-handle-zero-on-left-as-another-sku
kiStatus: Fixed
internalReference: 427610
---

## Summary



SKU IDs with and without leading zero are causing confusion in inventory, and admin inconsistency. The SKU 0XXX has different quantities in the items list than when the SKU ID filter is applied with the same value (or XXX).

The logistics module handle the left zero as another SKU. So in that case the SKU 0XXX is not the XXX. And as another SKU has its own value in stock.




## Simulation


There is no way to simulate.
But you can see the sku with left zero on list and diferent values of stock when filter that sku on inventory.



## Workaround


There is no workaround for this divergence.

