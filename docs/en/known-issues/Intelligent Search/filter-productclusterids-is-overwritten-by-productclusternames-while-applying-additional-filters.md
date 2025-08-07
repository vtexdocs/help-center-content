---
title: 'Filter "productClusterIds" is overwritten by "productClusterNames" while applying additional filters'
id: 3d4BIZQBZgeK3eKwT8B1PZ
status: PUBLISHED
createdAt: 2023-09-13T22:42:57.138Z
updatedAt: 2023-09-21T18:04:57.946Z
publishedAt: 2023-09-21T18:04:57.946Z
firstPublishedAt: 2023-09-13T22:42:57.682Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filter-productclusterids-is-overwritten-by-productclusternames-while-applying-additional-filters
locale: en
kiStatus: Backlog
internalReference: 899508
---

## Summary


When a search is started from the filter "productClusterIds", applying any additional filter will convert it to "productClusterNames", losing the characteristic of presenting the items with the sorting manually defined at the product collection.


##

## Simulation


The scenario can be seen on any page, like `"store.com/111?map=productClusterIds"`, and applying any additional filter, like a category, specification, etc.

The user will be directed to `"store.com/clothing/special-sale?initialMap=productClusterIds&initialQuery=111&map=category,productclusternames"`.


##

## Workaround


There's no workaround for the specific issue if you need the special sorting, but be sure to use "productClusterIds" only in required scenarios. Otherwise, use the filter as "productClusterNames".




