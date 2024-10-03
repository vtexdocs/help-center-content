---
title: 'Encoding issues for specific characters leads to unexpected product search'
id: O0dM1H8ofJU0ahJRa6217
status: PUBLISHED
createdAt: 2024-04-24T22:09:33.395Z
updatedAt: 2024-04-24T22:09:34.217Z
publishedAt: 2024-04-24T22:09:34.217Z
firstPublishedAt: 2024-04-24T22:09:34.217Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: encoding-issues-for-specific-characters-leads-to-unexpected-product-search
locale: en
kiStatus: Backlog
internalReference: 1022550
---

## Summary


An encoding issue may affect searches with special characters when they are indicated through the "query" parameter, leading to wrong search results.

Searches without any filters may use the first path of the URL to indicate the search term, but searches with filters depend on the "query" parameter from the URL.


##

## Simulation


This issue happens especially with the symbol "+".

The search term "A+" works correctly while indicated via the URL path, but it'll behave as "A " while indicated through the "query" parameter.


##

## Workaround


N/A





