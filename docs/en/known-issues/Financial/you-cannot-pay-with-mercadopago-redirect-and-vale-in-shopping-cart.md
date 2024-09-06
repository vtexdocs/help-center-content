---
title: "You cannot pay with MercadoPago Redirect and Vale in shopping cart having Seller's product "
id: 2WwCIW6chacwYakYUemOyQ
status: PUBLISHED
createdAt: 2017-11-15T14:46:42.109Z
updatedAt: 2022-12-22T15:06:24.179Z
publishedAt: 2022-12-22T15:06:24.179Z
firstPublishedAt: 2017-11-16T17:56:38.376Z
contentType: knownIssue
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Payments
slug: you-cannot-pay-with-mercadopago-redirect-and-vale-in-shopping-cart
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Buying in a Marketplace and having a seller's product in the shopping cart, when a customer tries to pay with MercadoPago3P + Voucher, instead of being redirected to MercadoPago, the checkout displays a notice telling the customer that the purchase cannot move forward.

## Simulation

1. Add a voucher as a form of payment at checkout, but use it to make a partial payment.
2. Select MercadoPago3P to pay the remaining part of the order.
3. Click on Buy Now and the warning will appear that makes it impossible to continue with the payment.

## Workaround

A validation can be performed using JS by clicking on the Complete Purchase button. An assessment is then made as to whether an activated voucher (Vale) was found and if MercadoPago Redirect was selected in turn. In that case, the user must be informed of the restriction and alternative options available.

