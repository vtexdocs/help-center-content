---
title: "Duplicated payments with the same information"
id: 6NYsfYOk6vOo8WjnlycjA
status: PUBLISHED
createdAt: 2025-02-17T18:22:28.796Z
updatedAt: 2025-05-08T13:09:28.425Z
publishedAt: 2025-05-08T13:09:28.425Z
firstPublishedAt: 2025-02-17T18:22:29.371Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: duplicated-payments-with-the-same-information
locale: en
kiStatus: Backlog
internalReference: 1154246
---

## Summary


Duplicated payments with the same information sent to the gateway, leading to transaction cancellation.

It is possible to confirm the scenario by checking some information, such as:


- The error log returned in the transaction

Ex:

**PaymentGateway**
_Transaction value (111503.00) is not equal to payments sum (223006.00)._



-

Using the API https://{accountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/payments, check the number of objects in the transaction.payments array. If two objects are found, this KI fits with the scenario.



##

## Simulation


It is not possible to simulate


##

## Workaround


There is no workaround available.





