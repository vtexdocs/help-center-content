---
title: "Payment received while transaction approved"
id: 30A0Dtg7lncuMolcufknRJ
status: PUBLISHED
createdAt: 2025-02-17T18:23:25.656Z
updatedAt: 2025-02-17T18:23:26.189Z
publishedAt: 2025-02-17T18:23:26.189Z
firstPublishedAt: 2025-02-17T18:23:26.189Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-received-while-transaction-approved
locale: en
kiStatus: Backlog
internalReference: 1174379
---

## Summary


In a few cases, even if the connector (**pagelofacil**) returns the correct answer, the payments remain stuck as `received` status after the transaction is `approved`.

To check the payment status you can use the API GET Payment details, which should return `received` in this case.

Also, it's possible to check some logs indicating the status change from Received to Authorizing, however, there's no effect on the payment status.


##

## Simulation


It is not possible to simulate.


##

## Workaround


There's no workaround.





