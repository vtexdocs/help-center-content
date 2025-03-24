---
title: 'Callback with approved status not being considered to proceed with the transaction'
id: 1IU3macRFOPM5nI2ekXHHD
status: PUBLISHED
createdAt: 2024-11-04T19:56:28.031Z
updatedAt: 2024-11-04T19:56:29.230Z
publishedAt: 2024-11-04T19:56:29.230Z
firstPublishedAt: 2024-11-04T19:56:29.230Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callback-with-approved-status-not-being-considered-to-proceed-with-the-transaction
locale: en
kiStatus: Backlog
internalReference: 1129281
---

## Summary


Even though the gateway correctly receives the callback indicating that the payment status is approved, the transaction does not progress to `authorized` and then `approved`. A subsequent authorization request is sent, and since the return is `undefined`, the transaction remains in the `authorizing` status until the number of retries is exhausted.


##

## Simulation


For this issue to occur, the gateway must retry at the same timestamp as it received the callback. It is not simple to reproduce this behavior, as hitting the exact same timestamp is quite difficult.



##

## Workaround


There are two actions the partner can take:

1. If the payment is approved, respond to subsequent authorization request calls from the gateway with this status rather than undefined.
2. Increase the number of retries (`delayToCancel`) so that the gateway makes more attempts.





