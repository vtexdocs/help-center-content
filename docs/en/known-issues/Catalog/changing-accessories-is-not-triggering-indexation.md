---
title: "Changing Accessories is not triggering indexation"
id: 5asLRh4ChyuSEg1mRwWbgT
status: PUBLISHED
createdAt: 2024-05-22T18:30:14.578Z
updatedAt: 2024-05-22T18:30:15.412Z
publishedAt: 2024-05-22T18:30:15.412Z
firstPublishedAt: 2024-05-22T18:30:15.412Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: changing-accessories-is-not-triggering-indexation
locale: en
kiStatus: Backlog
internalReference: 1037800
---

## Summary


When the merchant makes changes or adds new accessories to the sku, the indexer is not being triggered automatically.

This makes the changes not reflect at the UI until another action triggers the indexer.


##

## Simulation


Make a change or add a accessories to a sku.
Check (after cache time) that the PDP does not update automatically.
Make another change on the sku.
Check (after cache time) that the PDP will reflect both changes.


##

## Workaround


Force the indexer by making another action on the sku.





