---
title: "Payment finished and transaction canceling after risk analysis rejected"
id: 2ysbvix1xPcsuTKiBHZvZz
status: PUBLISHED
createdAt: 2025-02-17T18:23:46.040Z
updatedAt: 2025-02-17T18:23:46.534Z
publishedAt: 2025-02-17T18:23:46.534Z
firstPublishedAt: 2025-02-17T18:23:46.534Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-finished-and-transaction-canceling-after-risk-analysis-rejected
locale: en
kiStatus: Backlog
internalReference: 1163213
---

## Summary


The payment is finished and the transaction remains stuck on canceling status after the risk analysis is rejected.



##

## Simulation


When the auto-settle process occurs before the risk analysis is complete, the payment status is updated to "finished," while the transaction remains in the "analysing risk" state.

If the risk analysis results in a "risk-rejected" outcome, the cancellation process is triggered. However, once a transaction has been settled, it cannot be canceled—only refunded.

As a result, transactions get stuck in the "canceling" status, even after a successful refund, while the payment status remains "finished."


##

## Workaround



Cancel the order manually on the OMS to prevent any issues with inventory management.





