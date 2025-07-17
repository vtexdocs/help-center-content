---
title: "Transaction Stuck in Authorized Status After Being Approved"
id: 60oG2yj6wb1MomGh7Bbh9C
status: PUBLISHED
createdAt: 2024-05-22T17:58:05.800Z
updatedAt: 2025-04-01T21:52:53.517Z
publishedAt: 2025-04-01T21:52:53.517Z
firstPublishedAt: 2024-05-22T17:58:06.594Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-authorized-status-after-being-approved
locale: en
kiStatus: Backlog
internalReference: 1037765
---

## Summary


In a standard transaction flow, once all payments have been successfully authorized, the transaction is expected to change its status to **Approved**.
Here is the official documentation explaining the different transaction states in more detail: Transaction Flow in Payments.

However, in the transactions affected by this problem, we observe an unexpected behavior: after all payments have been approved (authorized) and the transaction has already transitioned to the **Approved** status, a new transiotion status event, **TransactionWorkFlowChangeStatus**, is triggered. This event incorrectly updates the status back to **Authorized**.
Even though another **TransactionWorkFlowChangeStatus - Approved** event occurs after this erroneous transition, the final status update is not properly recorded in the transaction.
As a result, the transaction remains stuck in the **Authorized** state, preventing the order or transaction from progressing as expected.

This issue can be easily evidenced by the unexpected duplication of **TransactionWorkFlowChangeStatus** logs, where both **Approved** and **Authorized** events appear consecutively, leading to an inconsistent transaction state.


##

## Simulation


It's not possible to simulate.


##

## Workaround


Support team can call internal APIs to move the transaction forward.




