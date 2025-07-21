---
title: 'Setting up payments with PayPalCheckout'
id: 16hMsDk96fEeIH6n34NA9N
status: PUBLISHED
createdAt: 2025-02-04T18:12:01.558Z
updatedAt: 2025-04-09T18:10:22.507Z
publishedAt: 2025-04-09T18:10:22.507Z
firstPublishedAt: 2025-02-04T18:26:28.114Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paypalcheckout
locale: en
legacySlug: setting-up-payments-with-paypalcheckout
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PayPalCheckout payment provider. Through this provider, your store can make sales using different payment methods, such as PayPalCheckout, PayPalRT, PayPalOXXO, PayPalBCDC, PayPalACDC e PaypalACDCV2.

To configure PayPalCheckout, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **PayPalCheckout** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account PayPalCheckout.
5. If you wish to modify the identification name to be displayed for the PayPalCheckout provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, select or complete the fields **FraudNet - Source Web Id**, **Enable STC**, **High Risk Transaction**, **STC Merchant Id**, **Vertical**, **Locale**, **Sandbox**, **Force login (ACDC)**, **Display Powered by PayPal Logo (ACDC)**, **Language**, **AutoClick (Checkout & BCDC)**, **Installments rules**, **T&C Checkbox identifier**, **Invoice ID**, **Account type**, and **Groceries or Subscriptions** according to the provider`s instructions.
8. Click `Save`.

To configure the payment methods to be processed by PayPalCheckout, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, PayPalCheckout may take up to 10 minutes to appear at your store`s checkout as a payment option.

