---
title: 'Region API returns seller list due to cache'
id: 1uDscW8Z3tG4EXS23fCfci
status: PUBLISHED
createdAt: 2024-01-22T17:34:18.690Z
updatedAt: 2024-01-22T17:48:47.576Z
publishedAt: 2024-01-22T17:48:47.576Z
firstPublishedAt: 2024-01-22T17:34:19.518Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: region-api-returns-seller-list-due-to-cache
locale: en
kiStatus: Backlog
internalReference: 969692
---

## Summary


When using a subaccount structure with region, if the API Get sellers by region or address is used in both accounts for the same sales channel, and one of them is not available for that sales channel, it will return a seller list due to cache.


##

## Simulation



- Create a new store;
- Set different sales channel for the store;
- Use the API Get sellers by region or address in the store;
- Use again the API for the same sales channel in the other store.


##

## Workaround


N/A



