---
title: 'Payment refunds'
id: 6mS04nXwV46LeeH8Nr99fE
status: PUBLISHED
createdAt: 2025-04-03T10:23:45.401Z
updatedAt: 2025-04-03T11:01:24.508Z
publishedAt: 2025-04-03T11:01:24.508Z
firstPublishedAt: 2025-04-03T11:01:24.508Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: payment-refunds
legacySlug: payment-refunds
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

A refund returns the amount paid by the customer for a store purchase. This action may be required in several scenarios, such as:

- The product can not be delivered due to logistical issues.
- The product is temporarily out of stock.
- The customer requests a product return.

There are two types of refunds:

- __Total refund__: The entire order is canceled and the full purchase amount is returned to the customer.
- __Parcial refund__: Only part of the purchase amount is refunded. For example, when the customer keeps one or more order items.

## Priority rules for partial refunds

For purchases made using two different payment methods where a partial refund is requested, you need to determine which payment method will be prioritized for the refund. The VTEX payment gateway offers two priority rules:

- __Lowest settled amount__: Defines that the refund will begin with the payment method that has the lowest settled (captured) amount so far.

- __Credit card first (card-first)__: Determines that the refund will be made from the credit card balance first, followed by the other payment method used in the purchase, such as gift cards. This rule is subject to [specific payment settlement scenarios](#payment-settlement-scenarios).

> ℹ️ VTEX stores are configured by default to use the **Lowest settled amount** rule. If you want to switch to the **Credit card first rule**, submit a request by opening a ticket with [VTEX Support](/en/support).

### Payment settlement scenarios

The __Credit card first__ rule prioritizes credit card refunds in partial refunds with two payment methods. If the credit card balance isn’t enough, the remaining amount is refunded through the other method. However, when a partial refund is requested, the system checks the settled amount on the credit card, which may lead to variations in how the rule is applied.

Below are some possible scenarios for partial refunds involving a purchase made with both a credit card and a gift card:

#### The credit card amount is already fully settled, or the refund amount is less than the settled amount

The refund will be issued using the total credit card balance. If the refund amount exceeds the available credit card balance, the remaining value will be refunded using the gift card balance.

#### Credit card amount already settled is less than the refund amount

The refund will be issued first using the available credit card balance (settled amount). Any remaining amount will be refunded via gift card.

#### Credit card amount not yet settled

The refund will first be issued using the gift card balance. If necessary, the system will wait for the remaining credit card amount to be cleared before completing the refund.
