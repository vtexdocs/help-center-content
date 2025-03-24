---
title: 'Search API using O=OrderByNameASC or O=OrderByNameDESC returns results considering difference in lower case and uppercase for first letter'
id: 1VqHI8kcnqRarzc1kxUGig
status: PUBLISHED
createdAt: 2022-04-07T14:04:16.705Z
updatedAt: 2022-11-25T21:46:20.647Z
publishedAt: 2022-11-25T21:46:20.647Z
firstPublishedAt: 2022-04-07T14:04:17.341Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: search-api-using-oorderbynameasc-or-oorderbynamedesc-returns-results-considering-difference-in-lower-case-and-uppercase-for-first-letter
locale: en
kiStatus: Backlog
internalReference: 305247
---

## Summary


Search API using O=OrderByNameASC or O=OrderByNameDESC returns results considering the difference in lower case and uppercase for the first letter



## Simulation


Perform any search using the query O=OrderByPriceASC with some product that has a name with lowercase and another with uppercase, that is higher than the first, for example (`product E` and `Product Z`).
In this case, `Product Z` will be shown first, because it uses uppercase on the first letter.



## Workaround


Correct the product names for all of them using the same standard: All with Lowercase on the first letter or All with Uppercase on the first letter.

