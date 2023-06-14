---
title: 'Legacy collection UI category filter selecting products wrongly to the collection'
id: 1IlioZpOSQf5t4TWqZreiS
status: PUBLISHED
createdAt: 2022-10-31T20:42:26.100Z
updatedAt: 2022-12-20T16:37:12.340Z
publishedAt: 2022-12-20T16:37:12.340Z
firstPublishedAt: 2022-10-31T20:42:26.591Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: legacy-collection-ui-category-filter-selecting-products-wrongly-to-the-collection
locale: en
kiStatus: Backlog
internalReference: 590934
---

## Summary


Eventually, depending on the number of products that we have inside a category, if we select the categories filters on the legacy collection UI, it may return products that do not belong to these categories.


##

## Simulation



- Create a collection using the legacy collection UI;
- Insert products using the categories filter, the categories should have a large number of products.
- The collection sometimes may have products that do not belong to this category.


##

## Workaround



- On the legacy Collection UI, create a filter to remove the category from this product.

