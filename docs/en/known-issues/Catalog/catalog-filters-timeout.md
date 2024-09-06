---
title: 'Catalog Filters Timeout'
id: 5KtT2SvTSO6xMdJOSYz5VZ
status: PUBLISHED
createdAt: 2023-10-19T17:11:37.486Z
updatedAt: 2023-10-19T17:11:38.181Z
publishedAt: 2023-10-19T17:11:38.181Z
firstPublishedAt: 2023-10-19T17:11:38.181Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-filters-timeout
locale: en
kiStatus: Backlog
internalReference: 922350
---

## Summary


For stores with a large quantity of skus (1 million or more), often, when filtering using the catalog UI's filters, either for the main menu or for the reports section, if the filter query returns a very large result, the UI times out (504 gateway timeout)


##

## Simulation


There is no reliable way to simulate it consistently - only specific large queries for few accounts end up in the error.


##

## Workaround


Request a "user filter cleanup" to the product team.

Also, if the same query is often generating a timeout (i.e. you filter for a specific department and it times out), consider performing filters that select a subset of what you want (in the same example, a category within the given department)





