---
title: 'Products with "unitMultiplier" wrongly flagged as "with promotion" for search filters'
id: 2rCi8K01DHsNuYsefE7oR2
status: PUBLISHED
createdAt: 2024-02-15T22:52:17.434Z
updatedAt: 2024-02-15T22:52:18.189Z
publishedAt: 2024-02-15T22:52:18.189Z
firstPublishedAt: 2024-02-15T22:52:18.189Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: products-with-unitmultiplier-wrongly-flagged-as-with-promotion-for-search-filters
locale: en
kiStatus: Backlog
internalReference: 982830
---

## Summary


A product whose selling price is lower than its list price will be flagged as being part of a promotion for search filtering purposes. Products with some unit multiplier may result in a wrong calculation that can affect this comparison, resulting in them wrongly receiving this flag.


##

## Simulation


The simulation depends on the occurrence of specific rounding issues, but an example of that is a product with a list price and regular price of $264.20 and a unit multiplier of 3.07.

Although the list price and regular price are the same, this item will be returned in the search filter "promotion=yes".


##

## Workaround


N/A





