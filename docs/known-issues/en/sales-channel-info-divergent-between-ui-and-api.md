---
title: 'Sales channel info divergent between UI and API'
id: 66bWccTAGpRbodBXvmIlHK
status: PUBLISHED
createdAt: 2023-05-04T15:30:18.265Z
updatedAt: 2023-05-08T18:33:43.359Z
publishedAt: 2023-05-08T18:33:43.359Z
firstPublishedAt: 2023-05-04T15:30:18.800Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: sales-channel-info-divergent-between-ui-and-api
kiStatus: Backlog
internalReference: 802560
---

## Summary


Sometimes the information about sales channel can be different depending on where the customer is checking.


##

## Simulation


This scenario does not happen all the time. Is usually when the indexation fails or is not a recent indexation.

Check the sales channel that the product belongs via UI.
Check the sales channel that the product belongs via API:
https://{accountName}.{environment}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}
 ![](https://vtexhelp.zendesk.com/attachments/token/F8f1Y1fSQVsq5JubtoILmeZjz/?name=image.png)



##

## Workaround


Index the product.





