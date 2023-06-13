---
title: delayToAutoSettleAfterAntifraud triggering automatic capture even without antifraud
id: 4HjKZsCbSTJSYE49xij9C8
status: PUBLISHED
createdAt: 2023-05-08T19:59:07.523Z
updatedAt: 2023-05-08T19:59:08.684Z
publishedAt: 2023-05-08T19:59:08.684Z
firstPublishedAt: 2023-05-08T19:59:08.684Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: delaytoautosettleafterantifraud-triggering-automatic-capture-even-without-antifraud
kiStatus: Backlog
internalReference: 369633
---

## Summary


When the transaction does **NOT** have antifraud, it takes the shortest value between `delayToAutoSettle` and `delayToAutoSettleAfterAntifraud`. In this case, the `EarlySettlementWorker` is responsible for capturing, which is the worker for early capture. Technically, it is the worker that is called after the antifraud performs, but when there isn't one, it starts its countdown after payment authorization.

On the other hand, in the scenario where antifraud **EXISTS**, it behaves as expected: whichever comes first, is called. Automatic capture starts the countdown after payment approval. Early capture starts the countdown after antifraud approval.

For example, if `delayToAutoSettle` is equal to 1 minute and `delayToAutoSettleAfterAntifraud` is equal to 1 second, and antifraud is called and approved before 1 minute after payment authorization, then the `EarlySettlementWorker` will be called.


##

## Simulation


To simulate, it is necessary that the connector in question is sending different periods for delayto[...]. Considering that this is configured, it is necessary to create a payment condition without an associated antifraud. Proceed to place an order and verify the time it takes for the settlement to be called (which will be the reference for `delayToAutoSettleAfterAntifraud` and not `delayToAutoSettle`).


##

## Workaround


N/A





