---
title: 'Collections Schedule Start Date not Working'
id: 3G6rD1JIm5BaZhFkFrdvok
status: PUBLISHED
createdAt: 2022-10-28T18:07:53.326Z
updatedAt: 2022-11-25T21:42:47.113Z
publishedAt: 2022-11-25T21:42:47.113Z
firstPublishedAt: 2022-10-28T18:07:54.025Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: collections-schedule-start-date-not-working
locale: en
kiStatus: Fixed
internalReference: 667328
---

## Summary


Currently, when the start date of a scheduled collection is reached, the process of reindexing the products in it is not triggered, that is, the start date scheduling does not work as a whole. As a consequence, the products are not indexed in the collection on the configured date.



## Simulation


1) Create a new collection either via the new collections admin module or the legacy CMS collections

2) Set a start date for this specific collection to initiate a few minutes ahead of the current date

3) Insert 1+ products into this collection and save it

4) The product will not be reindexed and consequently not be added to the given collection.




## Workaround


Manually reindex the products or access the collection from the legacy CMS and save the inclusion group and the collection again.

