---
title: 'How are the payments made through bank slips approved?'
id: frequentlyAskedQuestions_489
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.873Z
updatedAt: 2020-07-02T21:00:48.704Z
publishedAt: 2020-07-02T21:00:48.704Z
firstPublishedAt: 2019-01-24T22:11:54.868Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-are-the-payments-made-through-bank-slips-approved
locale: en
legacySlug: how-are-the-payments-made-through-bank-slips-approved
subcategoryId: 2tEO9ytK1aMO0i2oMayoQq
---

Bank slips can be set up in two different ways: banking information may be recorded directly on the Payments section, or it may go through a payment gateway. [See our bank slip creation manual](/en/tutorial/how-to-configure-a-bank-slip/).

See below details regarding approval of each one of these types:

## Directly through VTEX

In this type of setup, the store, or some other system, must inform VTEX that the payment was made.

The order status will remain **Payment pending** until the payment is notified. This notification can be made through [bank reconciliation](/en/tutorial/bank-reconciliations/), [API](https://developers.vtex.com/reference/payment#sendpaymentnotification "API") or [manually in Orders management](/en/tutorial/approving-payment-of-the-bank-payment-slip/).

It must be mentioned that the order will follow its normal course only upon approval of the payment.

## Through an external Gateway

In this case, the Gateway registered must communicate the payment to VTEX, just as it happens with credit cards, for example..

Payments can also be approved [manually in Orders management](/en/tutorial/approving-payment-of-the-bank-payment-slip).
