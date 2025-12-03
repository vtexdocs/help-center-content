---
title: 'Setting up payments with Worldline Global Collect'
id:
status: PUBLISHED
createdAt: 2025-12-03T00:00:00.000Z
updatedAt: 2025-12-03T00:00:00.000Z
publishedAt: 2025-12-03T00:00:00.000Z
firstPublishedAt: 2025-12-03T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-worldline-global-collect
legacySlug: setting-up-payments-with-worldline-global-collect
locale: en
subcategoryId:
---

At VTEX, it is possible to integrate with the Worldline Global Collect payment provider. Through this provider, your store can make sales using different payment methods, such as credit and debit cards, PIX, and Worldline Global Collect.

To configure Worldline Global Collect, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **worldline.globalcollect** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Worldline Global Collect.
5. If you wish to modify the identification name to be displayed for the Worldline Global Collect provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, select or complete the fields **Environment**, **Merchant ID**, **Webhook Key ID**, **Webhook Secret Key**, **Capture type**, **Payment Sub-domain**, **3DS mode**, **PosID**, and **Soft Descriptor** according to the provider's  instructions.
8. Click `Save`.

To configure the payment methods to be processed by Worldline Global Collect, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, Worldline Global Collect may take up to 10 minutes to appear at your store's  checkout as a payment option.