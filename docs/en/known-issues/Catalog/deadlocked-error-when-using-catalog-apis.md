---
title: "deadlocked error when using Catalog APIs"
id: 6A4jBKBKIzn87mxNQJ4YQN
status: PUBLISHED
createdAt: 2023-07-14T18:29:11.937Z
updatedAt: 2023-07-19T14:16:39.062Z
publishedAt: 2023-07-19T14:16:39.062Z
firstPublishedAt: 2023-07-14T18:29:13.088Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: deadlocked-error-when-using-catalog-apis
locale: en
kiStatus: Backlog
internalReference: 862626
---

## Summary


The constant use of some catalog APIs like "Add SKU to Subcollection" or trying to link products through the suggestions module can cause deadlocked errors for the merchant.

Deadlocked erros can happen when there is a concurrence in saving the data on the database. So when requesting too much the API in a short period of time, this errors are more evident.


##

## Simulation



1. Use, for instance, the Add SKU to Subcollection API (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit) to add lots of skus into a collection in a short period of time;
2. Check that errors might happen, such is deadlocked.


##

## Workaround


Try to make less requests per minute.





