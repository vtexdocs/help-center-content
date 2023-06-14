---
title: 'Transaction stuck in Analyzing Risk due to null documentType field.'
id: 5cZWkKc0ZXnMZCw4bvXJjA
status: PUBLISHED
createdAt: 2023-05-11T17:33:04.077Z
updatedAt: 2023-05-11T17:33:04.511Z
publishedAt: 2023-05-11T17:33:04.511Z
firstPublishedAt: 2023-05-11T17:33:04.511Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transaction-stuck-in-analyzing-risk-due-to-null-documenttype-field
kiStatus: Backlog
internalReference: 697107
---

## Summary


Transactions are getting stuck in the "Analyzing Risk" stage because the `documentType` field is null.


##

## Simulation


This issue occurs when a client uses information from a company to complete an order. If the company name is used to complete the transaction, the `documentType` field is left unfilled, causing problems with antifraud approval for the transaction.


##

## Workaround



N/A

