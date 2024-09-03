---
title: 'Search API not returning showIfNotAvailable=true SKUs for &fq=specificationFilter queries.'
id: 7p26JmS8pyPA8H0b1QJHyU
status: PUBLISHED
createdAt: 2022-06-28T16:55:27.329Z
updatedAt: 2024-02-16T20:29:43.164Z
publishedAt: 2024-02-16T20:29:43.164Z
firstPublishedAt: 2022-06-28T16:55:28.384Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: search-api-not-returning-showifnotavailabletrue-skus-for-fqspecificationfilter-queries
locale: en
kiStatus: No Fix
internalReference: 336896
---

## Summary



Our search routes should display information about products tagged as showIfNotAvailable=true.

However, when using sku specification queries, as `&fq=specificationFilter_:` for a given SKU that has this specification, that is not available but still showing on the storefront, the response on the API will be empty, which diverges from the standard behavior of the rest of the API queries for the /search/



## Simulation


1) Create a sku that has a sku specification.
2) Make it unavailable but still showing on the store
3) Try searching using the `&fq=specificationFilter_:` query on a /search/ API.
4) Nothing will be retuned (the SKU you've just configured should be!)



## Workaround


Using the specifications as product specifications and/or using other search parameters to find skus.

