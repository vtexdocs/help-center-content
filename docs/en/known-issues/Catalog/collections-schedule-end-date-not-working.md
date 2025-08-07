---
title: "Collections Schedule End Date not Working"
id: mhO5z0twpTunMeEsPKl0q
status: PUBLISHED
createdAt: 2022-03-17T21:32:13.982Z
updatedAt: 2022-11-25T21:43:27.334Z
publishedAt: 2022-11-25T21:43:27.334Z
firstPublishedAt: 2022-03-17T21:32:14.700Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-schedule-end-date-not-working
locale: en
kiStatus: Fixed
internalReference: 497880
---

## Summary


Currently, when a scheduled collection's end date is reached, the reindexing process for products contained within it is not triggered, consequently making the end date scheduling not functional as a whole.



## Simulation





1) Create a new collection either via the new collections admin module or the legacy CMS collections.

2) Set an end date for this specific collection to expire a few minutes ahead of the current date:

3) Insert 1+ products into this collection and save it.

4) The inserted product should now be reindexed

5) Wait for the scheduled end date

6) The product will not be reindexed and consequently not be removed from the given collection.



## Workaround


Manually reindex the products

