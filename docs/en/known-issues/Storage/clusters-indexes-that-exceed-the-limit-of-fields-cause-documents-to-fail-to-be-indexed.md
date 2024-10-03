---
title: "Cluster's indexes that exceed the limit of fields cause documents to fail to be indexed."
id: 6NPe2vm2ay5BMqvAr1P4zd
status: PUBLISHED
createdAt: 2024-08-08T14:12:00.560Z
updatedAt: 2024-08-08T14:12:01.273Z
publishedAt: 2024-08-08T14:12:01.273Z
firstPublishedAt: 2024-08-08T14:12:01.273Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: clusters-indexes-that-exceed-the-limit-of-fields-cause-documents-to-fail-to-be-indexed
locale: en
kiStatus: Backlog
internalReference: 1078027
---

## Summary


When an index, which can contain multiple accounts, surpasses the fields limit, new documents are not indexed, leading to search and retrieval issues.


##

## Simulation



1. Attempt to search or retrieve newly added documents.
2. Observe that the new documents are not indexed and do not appear in search results.


##

## Workaround


The VTEX team must check the cluster and verify the fields limit of the index, so that the data will be available again.





