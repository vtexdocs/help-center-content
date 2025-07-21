---
title: "Catalog API /catalog/pvt/stockkeepingunit with query parameter refId return field Videos as empty"
id: 71Y9CFaM10xaVyQkcgKydQ
status: PUBLISHED
createdAt: 2022-01-21T15:28:34.187Z
updatedAt: 2024-02-16T20:24:19.402Z
publishedAt: 2024-02-16T20:24:19.402Z
firstPublishedAt: 2022-12-22T15:16:11.363Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-catalog-pvt-stockkeepingunit-with-query-parameter-refid-return
locale: es
kiStatus: No Fix
internalReference: 388869
---

## Sumario


[KI] Catalog API `/catalog/pvt/stockkeepingunit` with query parameter `refId` return field Videos as empty



## Simulación


- Do a request that returns a value on the field Videos,f or example: https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/13130?an=hopelingerie

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/catalog-api-catalog-pvt-stockkeepingunit-with-query-parameter-refid-return_1.png)​

- Do the request now using the query parameter refid, for example: https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit?refId=LCL91200MSH000P&an=hopelingerie

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/catalog-api-catalog-pvt-stockkeepingunit-with-query-parameter-refid-return_2.png)​



## Workaround


Use the API with the SKU value,not the REFID

