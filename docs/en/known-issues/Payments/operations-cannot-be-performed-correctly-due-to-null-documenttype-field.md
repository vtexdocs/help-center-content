---
title: 'Operations cannot be performed correctly due to null documentType field.'
id: 5cZWkKc0ZXnMZCw4bvXJjA
status: PUBLISHED
createdAt: 2023-05-11T17:33:04.077Z
updatedAt: 2023-12-06T15:21:16.013Z
publishedAt: 2023-12-06T15:21:16.013Z
firstPublishedAt: 2023-05-11T17:33:04.511Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: operations-cannot-be-performed-correctly-due-to-null-documenttype-field
locale: en
kiStatus: Backlog
internalReference: 697107
---

## Summary


Some providers necessarily need `documentType` to be different from `null`, that is, to be correctly filled in to carry out some payment operations.

So far we have two known scenarios:

1. The absence of this field does not allow the payment to be correctly analyzed by anti-fraud, which causes the transaction to be at risk.
2. The absence of the field prevents the payment from being authorized and consequently leads to the transaction being canceled.


##

## Simulation


This issue occurs when a client uses information from a company to complete an order.
If the company name is used to complete the transaction, the `documentType` field is left unfilled, causing problems with the approval for the payment.


##

## Workaround



For the first scenario, it is possible to use an internal API to skip the anti-fraud analysis step.
Despite being strongly discouraged, it is a possible operation.

