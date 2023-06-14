---
title: "CMS' Search Context does not filter by product ID or SKU ID"
id: 6RqbCunfdqZpzLJaKiOqhN
status: DRAFT
createdAt: 2021-08-19T16:24:41.110Z
updatedAt: 2022-12-22T20:51:46.600Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
tag: Portal (CMS)
slug: cms-search-context-does-not-filter-by-product-id-or-sku-id
kiStatus: Backlog
internalReference: 
---

## Summary

The CMS **Search Context** field does not work properly on the search result if filtering by `productId` or `skuId`.

## Simulation

1. On Admin, click on the **CMS** module.
2. Click on **Layout**.
3. Click on the **CMS** directory.
4. Click on the **Sites and channels** folder.
5. Click on the desired website.
6. Click on the **Busca** folder.
7. Click on the `New folder` button.
8. Add a value to the **Search Context (Default)** field.
9. Fill the remaining fields.
10. Click on `Save Folder`.

After doing this setup, you can simulate it by doing a query on the Portal filtering by a `productId` or `skuId`, for example:

`https://{accountName}.{environment}.com.br/busca/?fq=productId:30`

The search result will return lots of products, but not what was filtered by the query.

## Workaround

Remove the **Search Context** from the folder.

