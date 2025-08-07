---
title: "Deleting Collections on the New Admin is not Reindexing the Products"
id: 33abWd1ApVTwPKdaxqgKPm
status: PUBLISHED
createdAt: 2022-06-28T16:56:28.134Z
updatedAt: 2022-11-25T21:44:29.933Z
publishedAt: 2022-11-25T21:44:29.933Z
firstPublishedAt: 2022-06-28T16:56:28.414Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: deleting-collections-on-the-new-admin-is-not-reindexing-the-products
locale: en
kiStatus: Backlog
internalReference: 490740
---

## Summary


Currently, if you have a collection created entirely either in the new/legacy (CMS) Collections admin, deleting it via UI won't reindex the products in it, consequently not effectively removing them from the collection.



## Simulation


1) Create a collection using the new admin and insert products to it;
2) Check that the added products will be reindexed and their indexed info will contain the collection's data;
3) Click to delete the entire collection on the main UI
4) The indexed info data of the products contained previously within this given collection should have been updated.



## Workaround


Use either the Legacy (CMS) collections module for deletions or the collections APIs: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-collection

