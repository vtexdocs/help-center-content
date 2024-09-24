---
title: 'Filters by SKU specifications not considering regionalized availability'
id: 3CeTfHaNBfhrC5qIi3nTLh
status: PUBLISHED
createdAt: 2024-06-05T20:52:53.211Z
updatedAt: 2024-06-05T20:52:54.055Z
publishedAt: 2024-06-05T20:52:54.055Z
firstPublishedAt: 2024-06-05T20:52:54.055Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-by-sku-specifications-not-considering-regionalized-availability
locale: en
kiStatus: Backlog
internalReference: 1045111
---

## Summary


Filtering the search by an SKU specification will also apply a filter by SKU availability, removing products where the selected variation is stockout, but it doesn't apply to regionalized stores.

Regionalized navigations may return products where the filtered variation is unavailable because the indexed availability for an SKU specification is based on all regular and whitelabel sellers.


##

## Simulation


Considering a store with two sellers and the following availability matrix for a specific product:

- size: small; seller A: available; seller B: unavailable
- size: large; seller A: unavailable; seller B: unavailable

In a navigation with "regionId: seller B", filtering by "size: small" will return the product (as it were available) and "size: large" will hide the product (because it's unavailable everywhere).


##

## Workaround


N/A




