---
title: 'Approving payment of the bank payment slip'
id: tutorials_184
status: PUBLISHED
createdAt: 2017-04-27T22:16:19.919Z
updatedAt: 2024-06-03T20:36:09.927Z
publishedAt: 2024-06-03T20:36:09.927Z
firstPublishedAt: 2017-04-27T23:00:46.699Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: approving-payment-of-the-bank-payment-slip
legacySlug: approving-payment-of-the-bank-payment-slip
locale: en
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Approval of the payment is the confirmation that the amount of the order has been paid by the customer, enabling the order to proceed. 

Whether the boleto has actually been paid or not, the order will go ahead if you approve the payment.

This approval can be done manually through the Orders Management module as shown below.

1. Access __Orders__ tab.
2. Click on the transaction.
3. Click on **Notify Payment** button.

![NotificarEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/transactions/approving-payment-of-the-bank-payment-slip_1.png)

**After approval of the payment, the order will go through the normal purchase flow.**

> ℹ️ In the Account management module, the user must have a role that includes the `Notify payment` permission to be able to approve payments.

To approve payments through API, check the [documentation about the payment notification request](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/payments/-paymentId-/payment-notification).

> ⚠️ Since [ERP integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) are governed by the [orders flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#), manually approving a payment will continue the integration of this order with the store’s back office as usual. Therefore, caution is recommended when approving payments manually, in order to ensure that every order that is processed and shipped is received.

