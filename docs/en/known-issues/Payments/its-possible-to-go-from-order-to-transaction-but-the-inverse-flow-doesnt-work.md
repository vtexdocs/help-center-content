---
title: "It's possible to go from order to transaction but the inverse flow doesn't work"
id: 6du2dTCMNwdGDua01BEKAU
status: PUBLISHED
createdAt: 2022-03-15T20:54:12.442Z
updatedAt: 2022-11-25T22:08:38.708Z
publishedAt: 2022-11-25T22:08:38.708Z
firstPublishedAt: 2022-03-15T20:54:12.907Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: its-possible-to-go-from-order-to-transaction-but-the-inverse-flow-doesnt-work
locale: en
kiStatus: Backlog
internalReference: 393483
---

## Summary


The `sequence`, number that can be seen next to the Order Number and also in the transaction, is responsible for link the transaction to the order and the inverse too.

 They are usually the same, **but only when possible**. In cases where the same orderGroup has a number of divergent orders and transactions, these numbers are not going to match and we can find cases like that: we can go for transaction from the order but we can't do the inverse flow.



## Simulation


N/A



## Workaround



N/A

