---
title: '[Catalog] API Get Product by RefId returns "not found" for some products/RefId'
id: 1hVZC2kSCnsURW3k8w53Ef
status: PUBLISHED
createdAt: 2025-01-02T18:27:05.040Z
updatedAt: 2025-06-13T17:38:19.706Z
publishedAt: 2025-06-13T17:38:19.706Z
firstPublishedAt: 2025-01-02T18:27:05.832Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-get-product-by-refid-returns-not-found-for-some-productsrefid
locale: en
kiStatus: Backlog
internalReference: 1157371
---

## Summary


API Get Product by RefId returns "not found" for some products/RefId, even with ref registered in the VTEX catalog

✅️ if you search for the refid in the UI it returns the product
❌️ search using the route "/productgetbyrefid", returns not found

*Note: this issue also happens for when searching skubyrefid


##

## Simulation



https://VTEX.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-api-get-product-by-refid-returns-not-found-for-some-productsrefid_1.png)

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-api-get-product-by-refid-returns-not-found-for-some-productsrefid_2.png)




##

## Workaround


n/a

