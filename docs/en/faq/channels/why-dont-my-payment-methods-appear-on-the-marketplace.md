---
title: 'Why don’t my payment methods appear on the marketplace?'
id: frequentlyAskedQuestions_689
status: PUBLISHED
createdAt: 2017-04-27T22:29:46.341Z
updatedAt: 2019-12-31T14:24:09.191Z
publishedAt: 2019-12-31T14:24:09.191Z
firstPublishedAt: 2017-04-27T23:02:27.518Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-dont-my-payment-methods-appear-on-the-marketplace
locale: en
legacySlug: why-dont-my-payment-methods-appear-on-the-marketplace
---

For most integrations with marketplaces ( and all those configured by the Bridge), the marketplace does not use the seller’s payment methods. This means that the marketplace processes the payment using its own payment methods and then passes the amount agreed on to the seller.

In other words, payment is made on the marketplace using the marketplace’s payment methods. Thus, the seller’s payment methods will not show up and will have no impact on the marketplace’s purchase process.

On the seller order, the VTEX Admin may show the real method used on the marketplace, for example, __Credit card__ and __Mastercard__. This doesn't mean that the payment was processed with the seller’s payment methods.

To identify that the marketplace assumed the payment, check the __Transaction ID__: The value is `PAYMENT-FROM-AFFILIATE`.

> ℹ️ The information in `paymentData` is for invoicing. It doesn't trigger authorization, capture, refund, or settlement in the Gateway of the seller account. See [Payments in VTEX marketplaces](/en/docs/tutorials/payments-in-vtex-marketplaces).

In some older integrations, OMS still displays *Assumed value by affiliate* as the payment method name, as shown in the following image.

![exemplopagamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/channels/why-dont-my-payment-methods-appear-on-the-marketplace_1.png)
