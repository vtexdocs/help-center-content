---
title: 'Inventory notifications to indexer are cached'
id: 2eFmUbO1PR7ahxAGiMkqZd
status: PUBLISHED
createdAt: 2023-10-05T12:48:05.930Z
updatedAt: 2024-05-14T11:26:36.897Z
publishedAt: 2024-05-14T11:26:36.897Z
firstPublishedAt: 2023-10-05T12:48:06.727Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inventory-notifications-to-indexer-are-cached
locale: en
kiStatus: Fixed
internalReference: 914545
---

## Summary


When a franchise account or seller notifies the main account (or marketplace) about inventory changes, the account sends the product to indexer in order to have the most updated information.

The system responsible to receive the notifications and pass them to indexer is Broadcaster.

The problem is that the workflow Availability -> Broadcaster -> Indexer is working on a very fast rhythm and in some cases the information is still cached. That way the Indexer remains with the old information until a new indexation.


##

## Simulation


There is not an easy way to simulate this scenario, since it doesn't happen in every occasion.
The process should be:

1. Franchise account updates an inventory;
2. Broadcaster sends the product to Indexer;
3. Indexer updates the main account sku with the old info.


##

## Workaround


N/A





