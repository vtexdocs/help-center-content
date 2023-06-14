---
title: For in cash payment (1 installment) is being processed by payment conditions that have not 1 installment option
id: 4IFxkUqJ9jdqkJf7kSNUcy
status: PUBLISHED
createdAt: 2022-03-26T12:27:04.928Z
updatedAt: 2022-11-25T22:06:19.145Z
publishedAt: 2022-11-25T22:06:19.145Z
firstPublishedAt: 2022-03-26T12:27:05.532Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: for-in-cash-payment-1-installment-is-being-processed-by-payment-conditions-that-have-not-1-installment-option
kiStatus: Backlog
internalReference: 292781
---

## Summary


For in cash payment (1 installment) it is being ignored for the payment condition rule, even though the payment condition does not have configuration for 1 installment.




## Simulation



1. Create two Payment conditions with two different installments intervals: One with 1-12 installments and other with 13-18 installments
2. Go to checkout and buy a random item and finalize the purchase with 1 installment option and verify the transaction in the admin, it will be associated to the Payment condition with 13-18 installments, even though it does not have 1 installment configured.




## Workaround


Set the payment condition with installments from 1 to 13 as default

