---
title: 'How to configure a custom payment'
id: tutorials_451
status: PUBLISHED
createdAt: 2017-04-27T22:04:32.144Z
updatedAt: 2023-10-18T14:42:25.244Z
publishedAt: 2023-10-18T14:42:25.244Z
firstPublishedAt: 2017-04-27T23:03:25.828Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-configure-a-custom-payment
locale: en
legacySlug: how-to-configure-a-custom-payment
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

The custom payment is an alternative to the standard options offered by Payments. It allows you to create up to 15 new forms of payment, such as cash on delivery or payment with the store's card, for example.

These payment methods are separated into three categories, and each category allows five configurations.

## Notes Payable

A Note Payable is a promise of payment that needs manual approval of the seller to perform the transaction. It is often used to provide payment through money. To configure Notes Payable, access the documentation [Setting up payments with Notes Payable](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable).

## Store Cards (Own Brand)

It allows the use of a store's credit card with its own brand. To configure this payment method, access the documentation [Setting up Private Label payments](https://help.vtex.com/en/tutorial/setting-up-private-label-payments).

## Store Cards (Co-Branded)

It allows the use of a store's credit card in partnership with one of the following networks: MasterCard, Visa, Amex and Diners. To configure this payment method, access the documentation [Setting up payments with Store Card (cobranded)](https://help.vtex.com/en/tutorial/setting-up-payments-with-store-card-cobranded).

After this configuration, the creation of a [Payment Condition](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions) is required.

>⚠️ We recommend using the automatic approval only in cases where the payment will be made upon delivery or pickup at the store. This option releases the payment of the order, meaning that the order automatically switches to the Preparing Delivery status, without payment verification.
