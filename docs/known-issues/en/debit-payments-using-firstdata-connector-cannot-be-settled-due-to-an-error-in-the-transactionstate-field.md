---
title: Debit payments using Firstdata connector cannot be settled due to an error in the TransactionState field
id: 6imTj4PTpJGGFqyhSLTPu9
status: PUBLISHED
createdAt: 2022-03-03T21:59:55.119Z
updatedAt: 2022-11-25T22:05:01.885Z
publishedAt: 2022-11-25T22:05:01.885Z
firstPublishedAt: 2022-03-03T21:59:55.506Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: debit-payments-using-firstdata-connector-cannot-be-settled-due-to-an-error-in-the-transactionstate-field
kiStatus: Backlog
internalReference: 461095
---

## Summary


When using Firstdata connector to process debit payments, our code expects the field `TransactionState`as "CAPTURED". However, the provider is sending "CAPTURED" as well as "SETTLED" which triggers an error:

Message: Unknown Error on AutoSettleThere is an error in XML document (1, 745).
&
Error executing Settlement operation. Please, see the inner exception. Connector = Firstdata. Message = Input string was not in a correct format.

I couldn't find in the firstdata documentation what is the correct one, but there are examples for both of them.



## Simulation



Sometimes when a transaction is canceled using this connector is possible to observe this behavior.



## Workaround


No workaround is available.

