---
title: 'Products remain in the collection after their removal'
id: hyuFn96MqOsyIoM6iUqWo
status: PUBLISHED
createdAt: 2017-06-16T20:47:54.231Z
updatedAt: 2019-12-31T15:17:58.380Z
publishedAt: 2019-12-31T15:17:58.380Z
firstPublishedAt: 2017-06-16T22:45:30.819Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: products-remain-in-the-collection-after-their-removal
kiStatus: Fixed
internalReference: 
---

## Summary

When removing products from a collection, they are not reindexed. That way the collection still responds with those products until the indexing event happens by other means.

This affects any scenario that makes use of collections to determine the product mix, such as trade policies, landing pages, shop windows, etc.

## Simulation

1. Create a collection with one or more products.
2. Remove any product from this collection.
3. Confirm that the collection still answers with that product in its group.

## Workaround

Whenever a product is removed from a collection, it's necessary to manually re-index it by other methods.

The article [Understanding the workings of indexing](http://help.vtex.com/en/tutorial/understanding-how-indexation-works) demonstrates some actions that trigger the indexing event.

