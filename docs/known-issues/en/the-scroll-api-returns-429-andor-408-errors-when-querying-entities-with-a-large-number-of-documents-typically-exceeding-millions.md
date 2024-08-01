---
title: 'The Scroll API returns 429 and/or 408 errors when querying entities with a large number of documents, typically exceeding millions'
id: 1Yx7s4kDAJOzpNCxro7TmW
status: PUBLISHED
createdAt: 2024-05-20T15:01:15.646Z
updatedAt: 2024-05-20T15:01:16.679Z
publishedAt: 2024-05-20T15:01:16.679Z
firstPublishedAt: 2024-05-20T15:01:16.679Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: the-scroll-api-returns-429-andor-408-errors-when-querying-entities-with-a-large-number-of-documents-typically-exceeding-millions
locale: en
kiStatus: Backlog
internalReference: 1035873
---

## Summary


The Scroll API is designed to handle large datasets by enabling the retrieval of documents in a scrollable manner. However, when querying entities with a significant number of documents, typically in the millions, users may encounter 429 (Too Many Requests) and/or 408 (Request Timeout) errors. These errors arise due to the high volume of data being processed, which can overwhelm the API and result in request rate limiting or timeouts.


##

## Simulation



1. Use the Scroll API to query an entity containing a large number of documents (e.g., millions).
2. Observe the responses from the API.
3. Note if the API returns 429 (Too Many Requests) and/or 408 (Request Timeout) errors during the process.


##

## Workaround


Optimize the query implementing filters to reduce the load on the API by breaking down the request into smaller chunks or batches.
When choosing filters, it is important to pay attention to whether all documents will be included to ensure that the scroll will go through all of the entity's documents.




