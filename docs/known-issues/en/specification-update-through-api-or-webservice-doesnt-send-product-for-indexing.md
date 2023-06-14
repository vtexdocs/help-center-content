---
title: 'Specification update through API or webservice doesn't send product for indexing'
id: d0xRClv0lM6q6EmcSCG0Q
status: PUBLISHED
createdAt: 2018-04-03T14:31:21.538Z
updatedAt: 2022-06-06T15:03:48.588Z
publishedAt: 2022-06-06T15:03:48.588Z
firstPublishedAt: 2018-04-03T14:40:11.127Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slug: specification-update-through-api-or-webservice-doesnt-send-product-for-indexing
kiStatus: Backlog
internalReference: 0
---

## Summary

The product specification update through API or webservice should send the item to the indexing queue, to be updated on the site and in the search APIs. However, this is not happening as expected. That is, the product is not being sent for indexing.


## Simulation

1. Update the value of a product field (specification) through API or webservice. See the [API documentation](https://developers.vtex.com/vtex-rest-api/reference/updateproductspecificacatalog-api-post-update-product-specificationtion)
2. With the `200 (OK)` return, note in the administrative panel that the value has in fact been changed.
3. Note, however, that in the following instants the product will not enter the indexing queue.

## Workaround

Since this case can impact catalog integrations, we suggest that, until we correct this behavior, after the update of a specification, the middleware algorithm performs an update on the product, with the sole goal of placing it in the indexing queue.

