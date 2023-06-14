---
title: Failed payments created by Checkout UI (transaction without payments)
id: 1LiK9rfhz2ULgmaitcYyyH
status: PUBLISHED
createdAt: 2022-09-26T14:32:12.988Z
updatedAt: 2022-11-25T22:04:12.988Z
publishedAt: 2022-11-25T22:04:12.988Z
firstPublishedAt: 2022-09-26T14:32:17.719Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: failed-payments-created-by-checkout-ui-transaction-without-payments
kiStatus: Backlog
internalReference: 339243
---

## Summary


Cases of incomplete orders where its transactions have no payments.
In the logs of the "gatewayCallback" (Checkout API) and the Gateway itself, we can only see the volume of transactions that were consulted at the end of the purchase but had no payments.
In the UI logs, we only have the generic "payment-fail" record, which does not lead us to the cause.
Naturally, the reason for the request not being completed and the transaction is left without payment comes from the UI, which at this moment is the one who sends the relevant data directly to the Gateway API.



## Simulation


There is no evidence on how to reproduce the case and it can have several root causes.

**On the Gateway side, there may be specific or different reasons, which eventually come in the response from API (and could even prevent the realization of the "gatewayCallback"), but there are also cases that do not generate any record there (gateway). In both cases, to proceed with the investigation it is expected to have this log from the Checkout UI.**

So we can see the following scenario:

- Creation of the transaction
- gatewayCallback returning that the transaction had no payment
- Registration of "payment-fail" of the UI without detailing the reason (note that the log is probably delayed in relation to the previous point)
- Zero records from the gateway about "ReceiveArrayPayments", which would record errors in the request for "sendPayments" that the UI makes



## Workaround


N/A

