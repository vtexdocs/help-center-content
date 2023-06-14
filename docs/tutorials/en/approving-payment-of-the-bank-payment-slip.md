---
title: 'Approving payment of the bank payment slip'
id: tutorials_184
status: PUBLISHED
createdAt: 2017-04-27T22:16:19.919Z
updatedAt: 2023-03-26T21:44:48.077Z
publishedAt: 2023-03-26T21:44:48.077Z
firstPublishedAt: 2017-04-27T23:00:46.699Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: approving-payment-of-the-bank-payment-slip
legacySlug: approving-payment-of-the-bank-payment-slip
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Approval of the payment is the confirmation that the amount of the order has been paid by the customer, enabling the order to proceed. 

Whether the boleto has actually been paid or not, the order will go ahead if you approve the payment.

This approval can be done manually through the Orders Management module as shown below.

1. Access __Orders__ tab.
2. Click on the transaction.
3. Click on **Notify Payment** button.

![NotificarEN](//images.ctfassets.net/alneenqid6w5/19t11NnJzs40wGQqkaeKIu/1d7fee23772ca875bccb59286859c415/NotificarEN.png)

**After approval of the payment, the order will go through the normal purchase flow.**

<div class="alert alert-info">
In the Account management module, the user must have a role that includes the <code>Notify payment</code> permission to be able to approve payments.
</div>

To approve payments through API, check the [documentation about the payment notification request](https://developers.vtex.com/reference/payment#getorder).

<div class="alert alert-warning">
Since <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide">ERP integrations</a> are governed by the <a href="https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196#">orders flow</a>, manually approving a payment will continue the integration of this order with the store’s back office as usual. Therefore, caution is recommended when approving payments manually, in order to ensure that every order that is processed and shipped is received.
</div>

