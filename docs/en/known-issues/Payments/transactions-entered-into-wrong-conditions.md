---
title: 'Transactions entered into wrong conditions'
id: 19wXvdynMwM6AEJAlaWJF7
status: PUBLISHED
createdAt: 2022-03-03T18:40:16.563Z
updatedAt: 2022-11-25T22:09:18.434Z
publishedAt: 2022-11-25T22:09:18.434Z
firstPublishedAt: 2022-03-03T18:40:16.906Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transactions-entered-into-wrong-conditions
locale: en
kiStatus: Backlog
internalReference: 392666
---

## Summary


Transactions entered into wrong conditions, more comprehensive than expected(configured)



## Simulation


There is no lock on the payment rules which results in the choice of which condition the system will enter becoming random.



## Workaround


Create non-intersecting conditions

