---
title: Failure on the cancellation (PPP) when cancellationId=null
id: 4yNCRQ1xhA8lEp5AGRs5eu
status: PUBLISHED
createdAt: 2022-06-21T21:37:04.567Z
updatedAt: 2022-11-25T22:07:04.838Z
publishedAt: 2022-11-25T22:07:04.838Z
firstPublishedAt: 2022-06-21T21:37:05.374Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: failure-on-the-cancellation-ppp-when-cancellationidnull
kiStatus: Backlog
internalReference: 333897
---

## Summary





When the provider responds with cancellationId=null it should be the trigger to call a manual cancelation, however, it is not happening. The protocol expects at least 3 requests to have failed before starting the manual cancelation and changing the status of the payment and transaction to "canceled".

The issue occurs when the payment method uses a payment app and due to this behavior, explained earlier, the app at the checkout never receives a notification of the cancellation and loops indefinitely.



## Simulation





It is not possible to simulate.



## Workaround





It's possible to implement a manual process of proactively canceling the transactions via API or by clicking the cancel button on the order page.

