---
title: 'Checkout incorrectly sending item details to transaction'
id: YxjZNKuIxkKQioS7lkmu8
status: PUBLISHED
createdAt: 2022-03-04T15:08:55.326Z
updatedAt: 2022-11-25T21:52:34.380Z
publishedAt: 2022-11-25T21:52:34.380Z
firstPublishedAt: 2022-03-04T15:08:55.710Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-incorrectly-sending-item-details-to-transaction
kiStatus: Backlog
internalReference: 535859
---

## Summary



## Simulation


The user places an order that is divided into three sellers, being Seller 1 (marketplace), Seller A and Seller B, both WL;


Seller B does not have its own means of payment and uses the payment of seller 1 (marketplace), whereas Seller A has its own means of payment;

The payment and transaction are correctly registered with the corresponding merchants, in this case Seller 1 and Seller A;

However, when looking at the transaction detail in Seller 1, it will be possible to see the total amount of the payment made to Seller 1 and B, and the detail of the item sold by Seller 1 that is the seller where the transaction is linked; the Seller B item will not be considered in the transaction detail;




## Workaround


N/A


##

