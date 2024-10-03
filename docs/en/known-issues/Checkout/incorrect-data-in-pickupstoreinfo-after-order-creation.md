---
title: 'Incorrect data in pickupStoreInfo after order creation'
id: 3OJzisIkFTyo97LCuiaytR
status: PUBLISHED
createdAt: 2023-03-28T16:11:55.486Z
updatedAt: 2023-03-31T14:08:27.755Z
publishedAt: 2023-03-31T14:08:27.755Z
firstPublishedAt: 2023-03-28T16:11:56.262Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-data-in-pickupstoreinfo-after-order-creation
locale: en
kiStatus: Fixed
internalReference: 347155
---

## Summary


In some occasions, where we have 1 item with delivery option and the other item with pickup option. The `pickupStoreInfo` data is incorrectly filled after finishing the order.

Remembering that this occurrence is a little unusual, given that we have no more details, logs or other occurrences. Therefore getting to be inconclusive.


##

## Simulation


Inside the order information, the pick up store info it's incomplete with null information.



##

## Workaround


N/A




