---
title: 'Transaction stuck in "Canceling" because AntiFraud rejected after the payment is "Finished'
id: 2dFaHTjrQZse6wNrRzw4Pt
status: PUBLISHED
createdAt: 2025-02-28T12:27:26.637Z
updatedAt: 2025-02-28T12:40:20.759Z
publishedAt: 2025-02-28T12:40:20.759Z
firstPublishedAt: 2025-02-28T12:27:27.436Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-canceling-because-antifraud-rejected-after-the-payment-is-finished
locale: en
kiStatus: Backlog
internalReference: 1187516
---

## Summary


The order status gets stuck on canceling, and the transaction will also be stuck in the canceling status.

Whenever a payment is in the "Finished" status, the transaction should also be in the "Finished" status. However, if the antifraud rejects the risk before the transaction changes to "Finished", the transaction will start the "Canceling" flow.


##

## Simulation


In the transaction logs, it is possible to see that the payment is settled and finished. After the antifraud rejects the risk.


##

## Workaround


Cancel the order via the Order Details page. The transaction can't be updated and will remain in "Canceling" status.




