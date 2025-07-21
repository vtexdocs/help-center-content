---
title: "Case Variations in Document ID Cause Duplications in Indexer"
id: 5KaMjJpOrpEQiUanTmqTox
status: PUBLISHED
createdAt: 2025-04-01T19:30:55.908Z
updatedAt: 2025-04-01T19:30:57.200Z
publishedAt: 2025-04-01T19:30:57.200Z
firstPublishedAt: 2025-04-01T19:30:57.200Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: case-variations-in-document-id-cause-duplications-in-indexer
locale: en
kiStatus: Backlog
internalReference: 1203412
---

## Summary


When creating a document and then applying a patch request with the ID in a different case (e.g., all uppercase), the system treats it as a new entry in some components. This issue occurs because document persistence in database is case-insensitive, meaning only one document actually exists. However, other flows, such as the indexer, handle the ID without case normalization, leading to duplicate entries in the search API.


##

## Simulation



1. Create a document with an ID in lowercase.
2. Apply a patch request using the same ID but in uppercase (or any other case variation).
3. Observe that the indexer creates multiple records for the same document ID, even though only one document exists in database.


##

## Workaround


Ensure that all ID references use a consistent case before sending requests to avoid unintentional duplications in the indexer.





