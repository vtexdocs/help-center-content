---
title: "REST Content-Range Header Shows Incorrect Total When Using Custom Index on Entity"
id: 2T8DqFKMI0BhVAZp8RZ9PU
status: PUBLISHED
createdAt: 2025-06-25T13:50:22.910Z
updatedAt: 2025-06-26T19:10:15.645Z
publishedAt: 2025-06-26T19:10:15.645Z
firstPublishedAt: 2025-06-25T13:50:23.692Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: rest-contentrange-header-shows-incorrect-total-when-using-custom-index-on-entity
locale: en
kiStatus: Backlog
internalReference: 1249679
---

## Summary


When querying documents using a custom index as a filter and the REST-Range header (e.g., resources=0-100), the response's REST-Content-Range header returns an incorrect total of resources (e.g., 300). However, querying with a higher range (e.g., resources=300-400) reveals that the actual total is larger. This happens because the query uses a custom index instead of the indexer.


##

## Simulation



1.

Perform a search with the custom index as a filter on an entity that has more than 300 documents with the header:

    REST-Range: resources=0-100

2. Observe that the `REST-Content-Range` response indicates a total of `300`.
3.

Perform another request using:

    REST-Range: resources=300-400

4. Observe that documents continue to return, indicating the real total is more than 300.


##

## Workaround


Remove the custom index. This will force the application to query the indexer directly, which correctly returns the total count.




