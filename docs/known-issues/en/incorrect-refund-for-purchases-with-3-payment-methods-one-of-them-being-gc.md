---
title: Incorrect refund for purchases with 3 payment methods (one of them being GC)
id: 5nWfRRuxOj7CN5mjXCLzzu
status: PUBLISHED
createdAt: 2022-03-03T18:38:19.216Z
updatedAt: 2022-11-25T22:08:35.058Z
publishedAt: 2022-11-25T22:08:35.058Z
firstPublishedAt: 2022-03-03T18:38:19.775Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incorrect-refund-for-purchases-with-3-payment-methods-one-of-them-being-gc
kiStatus: Backlog
internalReference: 464837
---

## Summary


Transactions with 3 payment methods being one of their gift card have incorrect refund amounts. In some cases we have a negative refund which causes the payment to be canceled.

Thread with the discussion



## Simulation


The procedure appears to be random, we realized that the negative refund amount is the total amount requested - the payment methods that were correctly refunded - the GC amount.
In the case that above:
Payment 1(American express): 66,99 BRL
Payment 2(Diners): 67,00 BRL
**Payment 3(GC): 30,99 BRL**

Refund requested: 104.99 BRL

**Refund on giftcard: 30,99 BRL**
Refund on American express: 66,99 BRL
Refund on Diners: -23,98 BRL

The negative value in the Diners refund is (104,99 - 30,99 -  66,99 - **30,99**) = -23,98.
What appears to be is that somehow the value of the GC is being discounted twice.



## Workaround


There is no workaround for this bug

