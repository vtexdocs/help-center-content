---
title: 'Filters hidden from the store are also hidden from Intelligent Search admin pages'
id: 3TvpIUFzdXWesADHDhjyLQ
status: PUBLISHED
createdAt: 2022-02-23T21:59:22.607Z
updatedAt: 2023-10-19T16:24:57.801Z
publishedAt: 2023-10-19T16:24:57.801Z
firstPublishedAt: 2022-02-23T21:59:22.977Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-hidden-from-the-store-are-also-hidden-from-intelligent-search-admin-pages
locale: en
kiStatus: Backlog
internalReference: 416638
---

## Summary


Some specifications have internal usage or scenarios that need to be hidden, but the store needs that specification for purposes of the search, like using it for Merch Rules.


##

## Simulation


On some accounts, the SKU specification "color" does not appear as an option under "Use SKU specifications to display individual products in search results". We see that "color" is one of the specifications under "Hide facets".



## Workaround


Remove the attribute from the "hide facets" configuration, create the merchandising rule or do the expected configuration, and hide the attribute again.

