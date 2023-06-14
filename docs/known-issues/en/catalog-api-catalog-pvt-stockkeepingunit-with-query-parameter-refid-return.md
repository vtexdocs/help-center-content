---
title: 'Catalog API /catalog/pvt/stockkeepingunit with query parameter refId return field Videos as empty'
id: 71Y9CFaM10xaVyQkcgKydQ
status: PUBLISHED
createdAt: 2022-01-21T15:28:34.187Z
updatedAt: 2022-12-22T15:16:11.363Z
publishedAt: 2022-12-22T15:16:11.363Z
firstPublishedAt: 2022-12-22T15:16:11.363Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-api-catalog-pvt-stockkeepingunit-with-query-parameter-refid-return
locale: en
kiStatus: Backlog
internalReference: 388869
---

## Summary


[KI] Catalog API `/catalog/pvt/stockkeepingunit` with query parameter `refId` return field Videos as empty



## Simulation


- Do a request that returns a value on the field Videos,f or example: https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/13130?an=hopelingerie

 ![](https://vtexhelp.zendesk.com/attachments/token/fxxa2tvxLqJcCmINgOWsDv9KM/?name=inline104653841.png)​

- Do the request now using the query parameter refid, for example: https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit?refId=LCL91200MSH000P&an=hopelingerie

 ![](https://vtexhelp.zendesk.com/attachments/token/XzVhNkVqxQSCuhCCxS46Inzgq/?name=inline310060959.png)​



## Workaround


Use the API with the SKU value,not the REFID

