---
title: 'Unsupported fields by the Intelligent Search API return wrong or empty data'
id: Jvm9oLhUM6NqCslpBqSti
status: PUBLISHED
createdAt: 2024-05-13T21:03:14.026Z
updatedAt: 2024-06-25T19:11:41.925Z
publishedAt: 2024-06-25T19:11:41.925Z
firstPublishedAt: 2024-05-13T21:03:15.346Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unsupported-fields-by-the-intelligent-search-api-return-wrong-or-empty-data
locale: en
kiStatus: Backlog
internalReference: 1032531
---

## Summary


The Intelligent Search API is mainly based on the legacy Catalog Search API for compatibility reasons, but not every property returns the same information. In some cases, it is different or empty.

Some affected properties:

- "modalType" (returns empty)
- "imageText" (returns the same as "imageLabel")
- "kitItems" (returns empty)


##

## Simulation



- register value for an affected field in the Catalog module
- compare the response for the specific field between the Catalog Search and Intelligent Search APIs


##

## Workaround


N/A




