---
title: 'Warehouse API demonstrates pickup point deleted (inStore warehouse)'
id: obATI7B4MgRb2lNExdXcV
status: PUBLISHED
createdAt: 2022-05-10T20:45:27.127Z
updatedAt: 2022-11-25T21:59:11.134Z
publishedAt: 2022-11-25T21:59:11.134Z
firstPublishedAt: 2022-05-10T20:45:27.527Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: warehouse-api-demonstrates-pickup-point-deleted-instore-warehouse
kiStatus: Fixed
internalReference: 573017
---

## Summary


When you delete a pickup point that is linked to a warehouse (inStore warehouse), the pickup point remains linked to the warehouse if you query it via API.



## Simulation


To simulate this behavior, we must:

- Create a pickup point;
- Link this pickup point to a warehouse;
- Delete the pickup point;
- Query (via API) the warehouse, and verify that the pickup point is still linked to the `pickuPointIds`.



## Workaround


As a workaround, you can remove this pickup point from the warehouse via Create/update warehouse API.

