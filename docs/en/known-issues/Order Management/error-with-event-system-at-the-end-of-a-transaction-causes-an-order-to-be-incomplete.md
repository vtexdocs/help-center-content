---
title: "Error with event system at the end of a transaction causes an order to be incomplete"
id: 6FzlxrxSQgIE3G62ZCJurd
status: PUBLISHED
createdAt: 2025-02-11T16:43:10.540Z
updatedAt: 2025-02-11T16:43:11.122Z
publishedAt: 2025-02-11T16:43:11.122Z
firstPublishedAt: 2025-02-11T16:43:11.122Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-with-event-system-at-the-end-of-a-transaction-causes-an-order-to-be-incomplete
locale: en
kiStatus: Backlog
internalReference: 421137
---

## Summary


When an error occurs with the event system at the end of a transaction, the order that the customer was trying to buy is not finalized and remains incomplete. The "RaiseEvent" action is an internal action triggered in the last steps of the order creation, always after the transaction/payment being done (not necessarily approved or analyzed; they can have their own flows and timings), when an error occurs in this step, being it at the end of a purchase, for example GatewayCallback, the user cannot complete his purchase, thus canceling the transaction due to the failure of this event.


##

## Simulation


There's no way to simulate, but we can see the logs:

RaiseEventyAsync failed in the last 30 days counted by workflow type

RaiseEventAsync & RaiseEventAsyncV2 in the workflow_type PlaceOrder & NewGatewayCallback


##

## Workaround


N/A





