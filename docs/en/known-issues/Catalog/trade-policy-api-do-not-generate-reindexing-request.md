---
title: 'Trade Policy API do not generate reindexing request'
id: 6xAm1zg05zDB3ff8rOloMR
status: PUBLISHED
createdAt: 2023-04-28T18:52:41.010Z
updatedAt: 2023-06-01T13:41:06.525Z
publishedAt: 2023-06-01T13:41:06.525Z
firstPublishedAt: 2023-04-28T18:52:41.427Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: trade-policy-api-do-not-generate-reindexing-request
locale: en
kiStatus: Backlog
internalReference: 276511
---

## Summary


Using the API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-trade-policy to insert/delete a Trade Policy to a product or the API do not generate a reindexing request.


##

## Simulation


Insert a trade policy to a product using the API, the product will not be reindexed.


##

## Workaround


Use any kind of action that saves the product (by API or interface) after adding/deleting the Trade Policy to the product will reindex the product and update the new trade policy information.

