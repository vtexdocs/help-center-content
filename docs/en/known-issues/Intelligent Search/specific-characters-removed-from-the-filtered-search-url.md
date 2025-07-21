---
title: "Specific characters removed from the filtered search URL"
id: 3Kh69v05JvswhmIwAUdEhl
status: PUBLISHED
createdAt: 2025-03-18T21:51:08.329Z
updatedAt: 2025-03-18T21:51:09.350Z
publishedAt: 2025-03-18T21:51:09.350Z
firstPublishedAt: 2025-03-18T21:51:09.350Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specific-characters-removed-from-the-filtered-search-url
locale: en
kiStatus: Backlog
internalReference: 1196131
---

## Summary


Some special characters, such as the comma, may be removed from the filter's URL. This may generate a collision between products with different values.


##

## Simulation



Two different products with an attribute Size and values "2,5" and "25" will use the same URL: "/size/25".

Although you may see the two filter values to be selected in the store, they will result in the same products


##

## Workaround


N/A




