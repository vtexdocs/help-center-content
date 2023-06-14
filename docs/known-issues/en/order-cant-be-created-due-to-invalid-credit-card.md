---
title: "Order can't be created due to invalid credit card"
id: 3vh1jvhIzEsC4ZLC1C4pJA
status: PUBLISHED
createdAt: 2022-06-29T18:59:46.795Z
updatedAt: 2022-11-25T21:52:02.248Z
publishedAt: 2022-11-25T21:52:02.248Z
firstPublishedAt: 2022-06-29T18:59:47.166Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: order-cant-be-created-due-to-invalid-credit-card
kiStatus: Backlog
internalReference: 607742
---

## Summary


An order creation may fail with the generic exception "_A communication error with gateway has occurred and the payment data for transaction {id} not successfully received_", which have different root causes. One of them will be related to the internal exception "_The requested account information does not exist_", which can be seen in the transaction/payment history related to the incomplete order.

The mentioned "account information" is related to a credit card that doesn't exist anymore on the platform. Although it's being offered in the orderForm (cart) as an option, it can't be used. An invalid reference remained on the customer's profile and/or their orderForm.



## Simulation


The root cause for this type of scenario is unknown, so there are no clear steps to reproduce the issue.



## Workaround


When related to this specific root cause, the customer must close the purchase with another credit card. The invalid credit card can also be manually removed from the customer profile using the "my-account" page, or even from the specific orderForm (cart) while logged in, always by the own customer.

