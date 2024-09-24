---
title: 'Documents are not indexed in masterdata v2 when the entity has multiple schemas'
id: bjjbd2AmtCBSdQGRqYz51
status: PUBLISHED
createdAt: 2024-08-08T13:44:12.920Z
updatedAt: 2024-08-08T13:44:14.192Z
publishedAt: 2024-08-08T13:44:14.192Z
firstPublishedAt: 2024-08-08T13:44:14.192Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: documents-are-not-indexed-in-masterdata-v2-when-the-entity-has-multiple-schemas
locale: en
kiStatus: Backlog
internalReference: 1077981
---

## Summary


When a masterdata v2 entity has many schemas, it suffers from indexing problems and some documents are not returned in the search.


##

## Simulation



1. Check if the entity has multiple schemas (usually +50 schemas). Create a new document, for example, using the field email=test@test.com
2. Search for documents (using _where=email=test@test.com)
3. Check that this document is not returned because it was not indexed.
4. When using the Get Documents route, the document returns normally.


##

## Workaround


Open a ticket to the team requesting the reindexing of the entity.





