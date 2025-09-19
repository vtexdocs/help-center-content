---
title: 'Setting up payments with PayJoy'
id: MNN6mbLPEwr10jA9eavl1
status: PUBLISHED
createdAt: 2025-08-15T19:08:03.632Z
updatedAt: 2025-08-25T13:16:15.834Z
publishedAt: 2025-08-25T13:16:15.834Z
firstPublishedAt: 2025-08-15T19:27:09.638Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payjoy
legacySlug: setting-up-payments-with-payjoy
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PayJoy payment provider. Through this provider, your store can make sales using different payment methods, such as PayJoy.

To configure PayJoy, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **PayJoy** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account PayJoy.
5. If you wish to modify the identification name to be displayed for the PayJoy provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, complete the fields **Partner**, **Device Model Id**, **Memory Id**, **Capacity Id**, **Color Id**, **Os Id**, and **Imei** according to the provider`s instructions.
8. Click `Save`.

To configure the payment methods to be processed by PayJoy, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, PayJoy may take up to 10 minutes to appear at your store`s checkout as a payment option.

