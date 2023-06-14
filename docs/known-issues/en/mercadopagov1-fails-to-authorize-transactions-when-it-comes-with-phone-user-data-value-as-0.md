---
title: 'MercadoPagoV1 fails to authorize transactions when it comes with phone user data value as 0.'
id: 2C7ULAPQxqHjn8e1d0StFc
status: PUBLISHED
createdAt: 2023-03-27T15:35:09.810Z
updatedAt: 2023-03-27T15:35:10.936Z
publishedAt: 2023-03-27T15:35:10.936Z
firstPublishedAt: 2023-03-27T15:35:10.936Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: mercadopagov1-fails-to-authorize-transactions-when-it-comes-with-phone-user-data-value-as-0
locale: en
kiStatus: Backlog
internalReference: 778611
---

## Summary


If the client's checkout sends user data without proper validation, such as a phone number with fewer than three digits, this data is passed to the gateway as is, which can cause unexpected errors during processing. For example, our parser may trigger an exception and cancel the transaction.


##

## Simulation


To simulate this issue, we used our legacy MercadoPagoV1 connector to place an order and passed user phone data with less than three digits.


##

## Workaround


Unfortunately, there is no workaround at this time. To avoid this issue, we recommend ensuring that all user data is properly validated before being sent to the gateway.





