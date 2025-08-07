---
title: "Issues with BillingAddress Leading to Transaction Cancellations"
id: 14RT6S4Hm7H30L0FBzdDRY
status: PUBLISHED
createdAt: 2024-05-06T16:34:12.989Z
updatedAt: 2024-05-06T16:34:14.299Z
publishedAt: 2024-05-06T16:34:14.299Z
firstPublishedAt: 2024-05-06T16:34:14.299Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: issues-with-billingaddress-leading-to-transaction-cancellations
locale: en
kiStatus: Backlog
internalReference: 1027901
---

## Summary



Transactions are being canceled during the antifraud analysis due to missing essential information in the `billingAddress`.

The `billingAddress` is sent during the payment process and can either be a copy of the `shippingAddress` if the user chooses not to differentiate them (by marking `isBillingAddressDifferent` as `false`) during checkout. Alternatively, it can be a new address provided by the user if the `isBillingAddressDifferent` option is marked as `true`. This address is used in the antifraud authorization request, and the absence of mandatory information can lead to transaction cancellations.

We have observed that this behavior occurs with payments made using new cards, which have not been previously saved in the store, and when the user chooses not to differentiate the addresses (`isBillingAddressDifferent`: `false`). Importantly, the `shippingAaddress` contains all the required fields correctly filled out, while the `billingAddress`, which should be a copy of the `shippingAddress`, remains incomplete.


##

## Simulation


We were not able to replicate this issue


##

## Workaround


N/A





