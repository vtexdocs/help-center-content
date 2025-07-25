---
title: 'Authorization status is stuck for asynchronous transactions with 2 or more payments when the first one is canceled.'
id: 7kEU8P6lkSQYZWzgaC16nY
status: PUBLISHED
createdAt: 2023-11-02T15:49:18.723Z
updatedAt: 2023-11-02T19:37:18.326Z
publishedAt: 2023-11-02T19:37:18.326Z
firstPublishedAt: 2023-11-02T15:49:19.524Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: authorization-status-is-stuck-for-asynchronous-transactions-with-2-or-more-payments-when-the-first-one-is-canceled
locale: en
kiStatus: Backlog
internalReference: 929517
---

## Summary


When a transaction has multiple payments and becomes asynchronous due to Sherlock or Defense mode, and if the first payment authorization attempt fails, it can result in the other payments being stuck in an "Authorized" status. This is because the entire transaction is canceled, but our worker does not recognize this and proceeds with an authorization attempt for the second payment. Consequently, the second payment cannot be canceled, as the transaction has already been canceled, and it does not allow a cancellation request.


##

## Simulation


Create a transaction with two payments, in which Defense Mode or any other feature that makes the transaction asynchronous is activated. Then, use a custom provider connector to decline the first payment authorization attempt while approving the other one.


##

## Workaround


N/A





