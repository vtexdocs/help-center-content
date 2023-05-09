---
title: Trade Policy API do not generate reindexing request
id: 6xAm1zg05zDB3ff8rOloMR
createdAt: 2023-04-28T18:52:41.010Z
updatedAt: 2023-05-08T18:26:51.898Z
publishedAt: 2023-05-08T18:26:51.898Z
firstPublishedAt: 2023-04-28T18:52:41.427Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: trade-policy-api-do-not-generate-reindexing-request
status: Backlog
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

