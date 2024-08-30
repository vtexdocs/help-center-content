---
title: "Import collection only accepts the order of products if import is made based on 'skuId'"
id: 7vXi2bDVyGHSMLluQi2ZWZ
status: PUBLISHED
createdAt: 2023-12-15T16:35:11.545Z
updatedAt: 2023-12-21T18:55:17.090Z
publishedAt: 2023-12-21T18:55:17.090Z
firstPublishedAt: 2023-12-15T16:35:12.450Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: import-collection-only-accepts-the-order-of-products-if-import-is-made-based-on-skuid
locale: en
kiStatus: Fixed
internalReference: 953862
---

## Summary


When importing a spreadsheet of products into a collection, the user can choose to select the products either by "skuId", "productId", "skuRefId" or "productRefId".

However, the order of the products in the collection is only being respected when the spreadsheet is using "skuId".


##

## Simulation



1. Create a new collection;
2. Use import spreadsheet to add products;
3. Choose a field different from "skuId" to fill out the spreadsheet;
4. Check that the order of products on the collections is different than the order on the spreadsheet.


##

## Workaround


Use the column "skuId" to fill out the spreadsheet.





