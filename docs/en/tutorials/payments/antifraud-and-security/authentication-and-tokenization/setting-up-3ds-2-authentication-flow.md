---
title: 'Setting up 3DS 2 authentication flow'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2026-09-29T12:58:00.000Z
publishedAt: 2025-06-02T17:06:50.600Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
legacySlug: setting-up-3ds-2-authentication-flow
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

3DS 2 (EMV 3-D Secure) is a protocol that allows the card-issuing bank to authenticate the buyer during credit and debit card payments. In this tutorial, you'll enable 3DS 2 on the payment provider and validate the authentication flow at checkout. To understand how the protocol works and which versions are in use, see [3D Secure](/docs/tutorials/what-is-3d-secure).

## Before you begin

On VTEX, 3DS 2 is supported only by select providers and can only be implemented via a [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2), which the provider itself develops to display the authentication challenge at checkout. Before following the next steps, confirm the information with your payment provider:

- **3DS 2 support:** The provider supports 3DS 2 on VTEX and makes the Payment App available.
- **Authentication type:** Which 3DS authentication types are available under your contract.
- **Credentials:** What access data the provider requires to authenticate transactions.

You also need to have the provider configured in **Store Settings** > **Payment** > **Providers**.

## Enabling 3DS 2 on the payment provider

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Providers**, or type **Providers** in the search bar at the top of the page.
2. Click the payment provider.
3. Complete the authentication fields based on the provider's documentation, since field names vary. For example:
   - **Adyen V3:** In the **3DS Authentication Type** field, choose the authentication type. Full authentication includes buyer interaction and transfers liability for fraud to the issuing bank. Data Only sends risk data without buyer interaction, so that fraud liability may remain with the merchant. This type is only allowed for credit cards in BRL (Brazilian Real). For more details, see [Adyen Connector V3](https://developers.vtex.com/docs/apps/adyen.payment-provider-v3#3ds-authentication-type-required).
   - **CieloEcommerce:** In the **UseMpi** field, select **True** and complete the Mpi credentials fields. See [Setting up payments with CieloEcommerce](/docs/tutorials/setting-up-payments-with-cieloecommerce).
4. Click `Save`.

## Validating the authentication flow at checkout

> ℹ️ If the provider has a test mode, such as the **Enable test mode** option in **Payment Control**, validate the flow in that mode before processing real transactions.

1. In your store, add a product to the cart and proceed to checkout.
2. Select the card payment condition associated with the provider configured in the previous step.
3. Pay with a single card and complete the purchase.
4. If the issuing bank requests authentication, confirm your identity in the window displayed at checkout.
5. In the VTEX Admin, go to **Orders** > **Transactions**, or type **Transactions** in the search bar at the top of the page.
6. Click the test purchase transaction and check the provider's response in the interactions log. To learn more about the log, see [Viewing transaction details in Orders](/docs/tutorials/how-to-view-the-orders-details).

After authentication, the result depends on the payment status:

- If the payment is authorized or still processing, checkout displays the order confirmation.
- If the payment is denied or canceled, checkout displays a notification and returns to payment method selection.

> ℹ️ In a frictionless authentication, the issuing bank completes 3DS 2 without displaying the challenge. That's why the absence of an authentication window during a test purchase doesn't mean 3DS 2 is inactive.

## Limitations

### Purchases with two cards

On VTEX, 3DS 2 doesn't support purchases using two credit cards. If an order is placed under these conditions, the payment will be canceled.
