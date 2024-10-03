---
title: 'Inventory Update Failure using Broadcaster for Integrations to Notify External Marketplace'
id: 25IVNGiJJYIl8Ppb3UuNqo
status: PUBLISHED
createdAt: 2022-03-24T19:30:24.948Z
updatedAt: 2022-11-25T21:59:06.502Z
publishedAt: 2022-11-25T21:59:06.502Z
firstPublishedAt: 2022-05-18T18:06:41.252Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: inventory-update-failure-using-broadcaster-for-integrations-to-notify-external-marketplace
locale: en
kiStatus: Fixed
internalReference: 549645
---

## Summary



There is a flow in case of accounts VTEX using External Maketplaces and that account should notify this external Marketplace regarding SKU inventory update. And due cache or full queue that syncronous information does not go ahead correctly.
Nowadays in the ItemAvailability flow, if there is an error to save into the elasticsearch, a worker will save it instead. If fore some reason the queue is full and an item takes more time to be persisted into the elasticsearch, the information in the cache can become inconsistent.




## Simulation



There is no way to simulate the error, but you will see the incorrect update to the integration side with the previous value of inventory.




## Workaround



There is no workaround available.

