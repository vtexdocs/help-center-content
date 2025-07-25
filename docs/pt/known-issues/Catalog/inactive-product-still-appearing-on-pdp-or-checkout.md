---
title: 'Inactive product still appearing on PDP or checkout'
id: 567gsup9oQGoMmj5utCra9
status: PUBLISHED
createdAt: 2022-03-14T19:50:43.917Z
updatedAt: 2022-11-25T21:46:31.635Z
publishedAt: 2022-11-25T21:46:31.635Z
firstPublishedAt: 2022-03-14T19:50:44.487Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inactive-product-still-appearing-on-pdp-or-checkout
locale: en
kiStatus: Backlog
internalReference: 542264
---

## Summary


Inactivate only the product by API causes the product to remain active for the PDP and checkout



## Simulation



- Given an active product, send via API the flag `isActive `as **false**
- See that in the catalog admin the product is written as inactive
- Open the product's index info.
- See that the product is still available for PDP and checkout



## Workaround


Deactivate all product SKUs.

