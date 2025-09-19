---
title: 'Setting up payments with Barte'
id: 4KYwWluJ0pLKA6BLvNkNRS
status: PUBLISHED
createdAt: 2025-06-11T20:29:38.757Z
updatedAt: 2025-06-11T21:30:35.155Z
publishedAt: 2025-06-11T21:30:35.155Z
firstPublishedAt: 2025-06-11T21:30:35.155Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-barte
legacySlug: setting-up-payments-with-barte
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Barte payment provider. With this provider, your store can make sales through credit cards, bank invoices and Pix.

To configure Barte, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **VtexBartePaymentProvider** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Barte.
5. If you wish to modify the identification name to be displayed for the Barte provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Check with the Barte provider if you need to select the option **Requires document**.
8. Click `Save`.

To configure the payment methods to be processed by Barte, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Barte may take up to 10 minutes to appear at your store's checkout as a payment option.
