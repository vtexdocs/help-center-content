---
title: 'Offline payment condition'
id: 3WtA4nmQJWqAaCy0kYG6IG
status: PUBLISHED
createdAt: 2019-01-24T20:45:37.593Z
updatedAt: 2026-09-30T20:30:00.000Z
publishedAt: 2024-08-15T17:45:31.703Z
firstPublishedAt: 2019-01-24T22:06:51.647Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-an-offline-payment-condition
legacySlug: what-is-an-offline-payment-condition
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
hidden: false
---

Offline payment conditions are conditions that depend on a customer action outside of the store environment for the transaction to proceed. The flow has three stages:

1. The customer chooses an offline payment condition.
2. The payment provider or connector generates the boleto (Brazil) or the payment code.
3. The provider confirms the payment to VTEX, or the confirmation arrives through the return file described in [How bank reconciliations work](/en/docs/tutorials/bank-reconciliations).

With the confirmation, the store regains control of the transaction and can complete the order. Before that, the order remains in the [**Payment pending**](/en/docs/tutorials/order-flow-and-status) status, and if the customer doesn't pay within the deadline, the order is canceled.

Examples of offline payment conditions:

- **Boleto (Brazil):** The customer pays directly to the bank, at a branch, ATM, or app, before the product is shipped. The complete flow is described in [Registered Ticket - Basic payment flow](/en/docs/tutorials/registered-ticket-flow). To enable the use of boleto in your store, see [Configuring a Boleto](/en/docs/tutorials/how-to-configure-a-boleto).
- **Ficha de Depósito:** Used in Mexico. The customer pays at authorized locations. You can learn how it works in [What is Deposit Slip](/en/docs/tutorials/what-is-deposit-slip).
- **Mercado Pago offline conditions:** Available in Latin American countries. The configuration is described in [Setting up offline payment conditions using MercadoPago (Latin America)](/en/docs/tutorials/setting-up-offline-payment-conditions-using-mercadopago).
