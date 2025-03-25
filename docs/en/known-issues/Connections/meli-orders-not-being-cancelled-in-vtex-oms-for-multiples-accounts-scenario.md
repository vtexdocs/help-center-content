---
title: 'MELI Orders not being cancelled in VTEX OMS for multiples accounts scenario'
id: 4u9ue93sHNWcfVm3sRL2qx
status: PUBLISHED
createdAt: 2024-02-06T11:04:52.918Z
updatedAt: 2024-02-06T11:04:54.082Z
publishedAt: 2024-02-06T11:04:54.082Z
firstPublishedAt: 2024-02-06T11:04:54.082Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-orders-not-being-cancelled-in-vtex-oms-for-multiples-accounts-scenario
locale: en
kiStatus: Backlog
internalReference: 977453
---

## Summary



Currently our MELI integration has an issue related to the process of cancelling orders. When MELI cancel an order and the seller has more than 4 accounts in VTEX there is a chance of not trying to cancel the order in the fifth account


##

## Simulation



If the cancellation of the order cannot be completed the seller may see the order not cancelled in VTEX but cancelled in MELI, for this case a manual cancellation is required directly in OMS.
This is only applied for cases that the seller has more than 4 accounts in VTEX, using the same MELI UserID.


##

## Workaround


n/a





