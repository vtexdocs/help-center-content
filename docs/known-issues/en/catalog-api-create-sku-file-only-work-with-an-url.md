---
title: 'Catalog API Create SKU File only work with an URL'
id: 2rbU28Rw8AESiAvzuc6cWf
status: PUBLISHED
createdAt: 2022-10-26T13:30:57.669Z
updatedAt: 2022-11-25T21:41:36.443Z
publishedAt: 2022-11-25T21:41:36.443Z
firstPublishedAt: 2022-10-26T13:30:58.226Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-api-create-sku-file-only-work-with-an-url
locale: en
kiStatus: Fixed
internalReference: 503153
---

## Summary


The Catalog API Create SKU File only work with Option 1 ( send an image through URL)
`https://{accountName}.{environment}.``com.br/api/catalog/pvt/stockkeepingunit/skuId/file`



## Simulation



- Go to https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku-file#catalog-api-post-sku-file
- At `BODY PARAMS `select `Option 2` and upload an image
- Copy the cURL and send the POST
- Get the response message:

    { "Message": "Field Url is required"}


## Workaround


There is no workaround

