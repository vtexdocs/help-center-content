---
title: 'It is not possible to settle a transaction with the boleto method using BrasPag'
id: 6bMohwJUByz5EX16Gn7CiR
status: PUBLISHED
createdAt: 2022-04-07T16:01:35.802Z
updatedAt: 2022-11-25T22:05:39.973Z
publishedAt: 2022-11-25T22:05:39.973Z
firstPublishedAt: 2022-04-07T16:01:36.581Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: it-is-not-possible-to-settle-a-transaction-with-the-boleto-method-using-braspag
kiStatus: Backlog
internalReference: 558065
---

## Summary


When the transaction with Boleto Bancário using the BrasPag connector is stuck in approved, payment in authorized and the API Settle the transaction is called, an error occurs in the capture due to the status is as settling, which does not allow the transaction to be effectively captured.


    Message: The payment status is not ready to settle. Current Status Settling.




## Simulation


To simulate it is necessary that the transaction is stuck in approved, which is not possible to force.



## Workaround


Request engineering team to change transaction status to settle

