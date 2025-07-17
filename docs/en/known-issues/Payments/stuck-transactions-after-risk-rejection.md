---
title: "Stuck transactions after Risk Rejection"
id: 4LKwXp4P9IEkUh02vNZKiA
status: PUBLISHED
createdAt: 2024-09-04T19:05:28.366Z
updatedAt: 2024-10-08T22:03:03.722Z
publishedAt: 2024-10-08T22:03:03.722Z
firstPublishedAt: 2024-09-04T19:05:29.306Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: stuck-transactions-after-risk-rejection
locale: en
kiStatus: Fixed
internalReference: 1092563
---

## Summary


Transactions with a RiskRejected response from the antifraud conector that already had a settlement get stuck in a status change loop.



##

## Simulation


Create a transaction with antifraud validation
Settle the transaction before a final response from the antifraud
Have a RiskRejected response from the antifraud provider
The transaction will get stuck in a loop



##

## Workaround


N/A






