---
title: "Special Characters in Search Query Break Store Framework Search Behavior"
id: QEWCb3zac7EmrB1FfdFma
status: PUBLISHED
createdAt: 2025-05-26T18:26:29.544Z
updatedAt: 2025-05-26T18:28:35.586Z
publishedAt: 2025-05-26T18:28:35.586Z
firstPublishedAt: 2025-05-26T18:26:30.298Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: special-characters-in-search-query-break-store-framework-search-behavior
locale: en
kiStatus: Backlog
internalReference: 1232881
---

## Summary


When a search query includes special characters such as # or ?, the remainder of the product name is ignored. Additionally, the map parameter is incorrectly recognized, resulting in an empty search or a 'Not Found' page if the flag `enable404OneSegment` is set as true.


##

## Simulation



1. Go to the store's search page (Store Framework-based).
2. Perform a search for a product with special characters, such as `Produto#123` or `Produto?123`.
3. Observe that only the part of the term before the special character is considered.
4. The `map` parameter is disregarded, leading to a broken or empty search result.


##

## Workaround


N/A




