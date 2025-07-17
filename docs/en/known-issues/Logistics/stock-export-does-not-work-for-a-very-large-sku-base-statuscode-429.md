---
title: "Stock export does not work for a very large sku base (StatusCode: 429)"
id: 6izOV1uXucJACuFH1Ehj57
status: PUBLISHED
createdAt: 2025-02-13T13:22:42.390Z
updatedAt: 2025-06-06T16:40:50.019Z
publishedAt: 2025-06-06T16:40:50.019Z
firstPublishedAt: 2025-02-13T13:22:43.550Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: stock-export-does-not-work-for-a-very-large-sku-base-statuscode-429
locale: en
kiStatus: Backlog
internalReference: 1178575
---

## Summary



For customers who have a huge base of SKUs, equal, 500k +, the inventory export will not work. During the exportation process, it will start to generate `StatusCode: 429 Message: Too Many Requests` on our internal logs, and the e-mail with the spreadsheet will never arrive.



##

## Simulation


In any account that has more than 500k+ SKUs, the inventory spreadsheet will never arrive at the e-mail.



##

## Workaround



A possible alternative to get around this problem is to use our inventory APIs to set up a runner:

By warehouse:
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-

By SKU (With all warehouses):
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/skus/-skuId-

Please be aware that this process via the API is time-consuming and will most likely generate an outdated inventory report.




