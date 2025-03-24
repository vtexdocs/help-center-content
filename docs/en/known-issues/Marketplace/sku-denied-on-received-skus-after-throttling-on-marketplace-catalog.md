---
title: 'Sku denied on Received Skus after throttling on marketplace catalog'
id: 4fleOaKNp6ALXdmZcAVCg0
status: PUBLISHED
createdAt: 2024-01-23T12:50:23.697Z
updatedAt: 2024-01-23T12:50:24.398Z
publishedAt: 2024-01-23T12:50:24.398Z
firstPublishedAt: 2024-01-23T12:50:24.398Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: sku-denied-on-received-skus-after-throttling-on-marketplace-catalog
locale: en
kiStatus: Backlog
internalReference: 970208
---

## Summary


When approving a new product on Received Skus (automatically or manually) the suggestions module communicates with the Marketplace's catalog to perform the action.
If at this time the catalog module returns an throttling error, the sku ends up being rejected by the matcher despite having all the information correct.


##

## Simulation


This is not an easy (or usual) scenario to replicate because it depends on another system not performing as it should and returning throttling.


##

## Workaround


Approve the sku manually from the rejected area of Received Skus.





