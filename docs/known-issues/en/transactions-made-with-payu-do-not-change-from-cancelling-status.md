---
title: 'Transactions made with PayU do not change from cancelling status'
id: 5pyv7cj5LHOuPAiCXv7MO0
status: PUBLISHED
createdAt: 2022-03-03T18:45:17.651Z
updatedAt: 2022-11-25T22:06:50.141Z
publishedAt: 2022-11-25T22:06:50.141Z
firstPublishedAt: 2022-03-03T18:45:17.994Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transactions-made-with-payu-do-not-change-from-cancelling-status
locale: en
kiStatus: Backlog
internalReference: 338124
---

## Summary


When the transaction enters a **canceling** status it's not possible to recognize therefore it does not change to **canceled**.
The PayU connector send the following error: Response code: PENDING_TRANSACTION_REVIEW - AcquirerMessage : PENDING_REVIEW



## Simulation


This error does not happen in all accounts, but it's possible to find filtering the transaction with canceling status.




## Workaround


The workaround is to call manually the API: https://developers.vtex.com/vtex-developer-docs/reference/transaction-flow#cancelthetransaction

