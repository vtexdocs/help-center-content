---
title: "Catalog indexer generating invalid translation documents"
id: 3pbXOA3DQILdu05tAwjlVM
status: PUBLISHED
createdAt: 2024-02-29T18:02:38.600Z
updatedAt: 2024-12-10T23:41:41.324Z
publishedAt: 2024-12-10T23:41:41.324Z
firstPublishedAt: 2024-02-29T18:02:39.430Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexer-generating-invalid-translation-documents
locale: en
kiStatus: No Fix
internalReference: 991494
---

## Summary


When indexing a product with translated information the app messages is requested. These requests are supposed to be under 3s and when they take more than that the indexation fails and generates an invalid translation document.

This scenario will generate errors in the indexing history with the message "translations is smaller than context".


##

## Simulation


There is no easy way to reproduce this scenario, but accounts with a lot of languages or a lot of fields to translate are more susceptible to this scenario.


##

## Workaround


N/A

