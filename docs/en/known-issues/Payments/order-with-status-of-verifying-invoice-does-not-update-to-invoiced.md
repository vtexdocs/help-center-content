---
title: 'Order with Status of Verifying Invoice does not update to Invoiced.'
id: 2FRiGkhLT3JID4I5MvoGo6
status: PUBLISHED
createdAt: 2022-03-03T18:37:58.724Z
updatedAt: 2022-11-25T22:04:20.586Z
publishedAt: 2022-11-25T22:04:20.586Z
firstPublishedAt: 2022-03-03T18:37:59.222Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: order-with-status-of-verifying-invoice-does-not-update-to-invoiced
locale: en
kiStatus: Backlog
internalReference: 500245
---

## Summary


Due to an inconsistency, there is a difference between what was actually captured and what was requested for capture. Making it impossible to invoice the order.



## Simulation


It is not possible to simulate this problem, but we can see that it exists by checking with the API https://{account}.myvtex.com/api/payments/pvt/transactions/{transactionId}/settlements requests and actions.
If there is a divergence between the total values, then we can confirm the inconsistency




## Workaround


The way we currently solve this is to insert a settlement entry with the value directly into the database, so when we click to invoice at OMS, whoever calls the gateway will understand that the values match, and we no longer need to call no settlement, allowing the order to move

