---
title: "Creating a regionalized sales channel with an already used binding does not update the item's stockbalance"
id: 7CqZPslfGY8mTmBLuWe5SQ
status: PUBLISHED
createdAt: 2024-03-22T19:39:26.469Z
updatedAt: 2024-07-01T18:49:34.061Z
publishedAt: 2024-07-01T18:49:34.061Z
firstPublishedAt: 2024-03-22T19:39:27.432Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-a-regionalized-sales-channel-with-an-already-used-binding-does-not-update-the-items-stockbalance
locale: en
kiStatus: No Fix
internalReference: 1005112
---

## Summary


For regionalized accounts the index system filters by the regionalized sales channels the stockbalance that should appear, in order not to show sales bindings that are not regionalized.

If a new channel needs to be regionalized on a binding that is already in production, the indexation won't be triggered. Causing some inconsistence on the availability of the products.


##

## Simulation



1. Create a regionalized sales channel on a production binding;
2. Check if the stocks and availability are consistent with all products.


##

## Workaround


Force a reindex with stockSimulation. Update stock for example.





