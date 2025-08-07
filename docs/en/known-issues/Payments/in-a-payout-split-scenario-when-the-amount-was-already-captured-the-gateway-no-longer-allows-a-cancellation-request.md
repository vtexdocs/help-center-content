---
title: "In a payout split scenario when the amount was already captured, the gateway no longer allows a cancellation request"
id: 5qVUfltwPb3FacbECRsNa0
status: PUBLISHED
createdAt: 2023-01-27T20:13:21.397Z
updatedAt: 2023-01-27T20:13:22.038Z
publishedAt: 2023-01-27T20:13:22.038Z
firstPublishedAt: 2023-01-27T20:13:22.038Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-a-payout-split-scenario-when-the-amount-was-already-captured-the-gateway-no-longer-allows-a-cancellation-request
locale: en
kiStatus: Backlog
internalReference: 742046
---

## Summary


For a split scenario, when the user makes a change order or even a simple cancelation after the payment has already been captured, the gateway no longer allows receiving a new UpdateAdditionalData.
So, in this case, the gateway will throw an exception called PayoutSplitWasAlreadyDone.


##

## Simulation


Try canceling a transaction along with an updateAdditionalData after the transaction has captured its payment.


##

## Workaround


Finish the transaction by capturing the remaining amount and then perform a total or partial refund of the transaction amount.





