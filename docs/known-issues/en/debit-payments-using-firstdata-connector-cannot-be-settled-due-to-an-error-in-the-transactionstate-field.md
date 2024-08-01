---
title: 'Debit payments using Firstdata connector cannot be settled due to an error in the TransactionState field'
id: 6imTj4PTpJGGFqyhSLTPu9
status: PUBLISHED
createdAt: 2022-03-03T21:59:55.119Z
updatedAt: 2024-02-16T20:24:59.932Z
publishedAt: 2024-02-16T20:24:59.932Z
firstPublishedAt: 2022-03-03T21:59:55.506Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: debit-payments-using-firstdata-connector-cannot-be-settled-due-to-an-error-in-the-transactionstate-field
locale: en
kiStatus: No Fix
internalReference: 461095
---

## Summary


When utilizing the Firstdata connector for processing debit payments, our code is designed to expect the field TransactionState to be set as "CAPTURED." However, we have encountered an issue where the provider is sending both "CAPTURED" and "SETTLED" values, which is causing an error to occur:


    Error Message: Unknown Error on AutoSettle. There is an error in the XML document (1, 745). & Error executing the Settlement operation. Please refer to the inner exception. Connector: Firstdata. Message: Input string was not in the correct format.



##

## Simulation


It is not possible to simulate since it is an intermittent behavior that depends on the payment provider's response.


##

## Workaround


N/A





