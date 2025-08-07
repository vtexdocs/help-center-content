---
title: "Search result may not display the facet sellerName on multilanguage stores in additional locales"
id: 1KD5Q3GTtx379yKHUFo38O
status: PUBLISHED
createdAt: 2025-02-25T23:17:55.030Z
updatedAt: 2025-06-06T18:18:44.623Z
publishedAt: 2025-06-06T18:18:44.623Z
firstPublishedAt: 2025-02-25T23:17:55.741Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-result-may-not-display-the-facet-sellername-on-multilanguage-stores-in-additional-locales
locale: en
kiStatus: Backlog
internalReference: 1186137
---

## Summary


The search for facets on Intelligent Search may not display the facet `sellerName` when the locale is an additional locale.

This issue occurs when searching for facets through both GraphQL and API.


##

## Simulation



The steps to simulate the Know Issue are:

1. In Postman tool, or other developer tool, create an API request of the endpoint Get list of the possible facets for a given query.
2. On API request, add a locale that is not default locale to the query string parameter `locale`.
3. Execute the endpoint.

The search result does not return the facet `sellerName`.


##

## Workaround


N/A




