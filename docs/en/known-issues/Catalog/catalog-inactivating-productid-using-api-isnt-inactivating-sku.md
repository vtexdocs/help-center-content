---
title: "Catalog Inactivating productid using API isn't inactivating SKU"
id: 4RLMpCxYNtCz4WkAiwL8ws
status: PUBLISHED
createdAt: 2025-01-03T17:38:07.670Z
updatedAt: 2025-07-17T19:33:18.513Z
publishedAt: 2025-07-17T19:33:18.513Z
firstPublishedAt: 2025-01-03T17:38:08.681Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-inactivating-productid-using-api-isnt-inactivating-sku
locale: en
kiStatus: Backlog
internalReference: 1157944
---

## Summary


Inactivating productid using API isn't inactivating SKU
Product stay available at PDP


##

## Simulation



✅️ Inactive product
❌️ Active SKU UI
❌️ Sku available from PDP

PUT - https://VTEX.vtexcommercestable.com.br/api/catalog/pvt/product/

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-inactivating-productid-using-api-isnt-inactivating-sku_1.png)


##

## Workaround


Whenever the whole product including their SKUs wants to be inactivated, the merchant needs to inactivate the SKUs




