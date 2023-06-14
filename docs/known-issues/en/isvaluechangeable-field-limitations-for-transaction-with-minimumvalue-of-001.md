---
title: 'isValueChangeable field limitations for transaction with minimumValue of 0.01'
id: 3Upg1JbyotDHZwfCLAD7v4
status: PUBLISHED
createdAt: 2023-05-12T19:59:34.646Z
updatedAt: 2023-05-12T19:59:35.064Z
publishedAt: 2023-05-12T19:59:35.064Z
firstPublishedAt: 2023-05-12T19:59:35.064Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: isvaluechangeable-field-limitations-for-transaction-with-minimumvalue-of-001
kiStatus: Backlog
internalReference: 825122
---

## Summary


There are only two ways to change the `isValueChangeable` field for a transaction: when a split occurs, and when the `maximumValue` is equal to the `minimumValue`. Furthermore, it's worth noting that every transaction is created with a `minimumValue` of 0.01. As a result, when a transaction is created with a value of 0.01, the `isValueChangeable` field is automatically set to `false`.


##

## Simulation


Create a transaction with a value of 0.01 and access the /capabilities route.


##

## Workaround


N/A





