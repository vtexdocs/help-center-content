---
title: "Transaction with antifraud doesn't update to \"settling\" when \"riskApproved\" log is missing"
id: 50IrRBlZJJxgEbE0RccCA9
status: PUBLISHED
createdAt: 2025-02-24T14:42:45.902Z
updatedAt: 2025-02-24T14:42:46.474Z
publishedAt: 2025-02-24T14:42:46.474Z
firstPublishedAt: 2025-02-24T14:42:46.474Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-with-antifraud-doesnt-update-to-settling-when-riskapproved-log-is-missing
locale: en
kiStatus: Backlog
internalReference: 1184723
---

## Summary


Sometimes, when the Antifraud provider approves the transaction, we can see that the gateway receives the message of approved by antifraud, but it doesn't update the transaction to "riskApproved" status. When it happens, the transaction is stuck in Authorized or Approved even after the settlement is done by the payment provider.


##

## Simulation


There is no assertive way of reproducing this error, since it's intermittent.


##

## Workaround


Open a ticket to Product Support - Payments, in order to manually proceed with the transaction flow.




