---
title: "Orders stuck in cancel status in fulfillment, but with Marketplace canceled."
id: 1EKp8ML4uFCWO862mEELbo
status: PUBLISHED
createdAt: 2025-03-24T17:16:07.545Z
updatedAt: 2025-03-26T13:56:35.231Z
publishedAt: 2025-03-26T13:56:35.231Z
firstPublishedAt: 2025-03-24T17:16:08.182Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-cancel-status-in-fulfillment-but-with-marketplace-canceled
locale: en
kiStatus: Backlog
internalReference: 1198719
---

## Summary


In scenarios where Fulfillment orders cannot be cancelled due to some inconsistency, but the Marketplace order can go to cancelled status, we will not be able to unlock, as the Seller tries to cancel the Marketplace order again and gives an error, as the Marketplace order is already cancelled, breaking the validation that fulfillment does.


##

## Simulation


We are currently unable to simulate this scenario, as it occurs due to some type of inconsistencies or delay in the endpoint or errors in other modules, such as catalog.


##

## Workaround


We do not have a workaround for this issue, that is, the seller's order will be in "cancel" status.





