---
title: "SKU ordering in the Search API does not follow the SKU position of the Admin"
id: 6onugQyL4odM0jExTsMqnZ
status: PUBLISHED
createdAt: 2022-02-01T15:33:37.326Z
updatedAt: 2022-11-25T21:48:56.005Z
publishedAt: 2022-11-25T21:48:56.005Z
firstPublishedAt: 2022-02-01T15:33:37.776Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-ordering-in-the-search-api-does-not-follow-the-sku-position-of-the-admin
locale: en
kiStatus: Backlog
internalReference: 515042
---

## Summary


Currently, the Search API response does not respect the positioning of SKUs within the product in Admin. In the response, SKUs are being sorted in ascending order of SkuId.



## Simulation


- Use the Search API `/api/catalog_system/pub/products/search/?fq=productId:`
- Note that the SKUs are sorted by SKU Id, in ascending order



## Workaround


N/A

