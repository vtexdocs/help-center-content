---
title: 'SSQ disabled for search pages with map parameters'
id: 4hbo7YxKAxLOkhT21w1Q4e
status: PUBLISHED
createdAt: 2024-09-04T12:52:05.855Z
updatedAt: 2024-09-04T12:52:11.844Z
publishedAt: 2024-09-04T12:52:11.844Z
firstPublishedAt: 2024-09-04T12:52:06.843Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: ssq-disabled-for-search-pages-with-map-parameters
locale: en
kiStatus: Backlog
internalReference: 1092143
---

## Summary


In search pages that use the map parameters, the SSQ is disabled, and the queries made after the page is mounted are not present in the HTML.


##

## Simulation



- Open a search page that uses the map parameters (?map=c,c,c,b)
- Note the meta title of the page
- Search for the title in the source code
- It will not be found


##

## Workaround


N/A





