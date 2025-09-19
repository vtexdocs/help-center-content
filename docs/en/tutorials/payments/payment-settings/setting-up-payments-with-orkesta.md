---
title: 'Setting up payments with Orkesta'
id: 8SLAr08K4kIfYKMCUS0Wf
status: PUBLISHED
createdAt: 2025-06-12T14:47:02.940Z
updatedAt: 2025-06-12T14:58:26.076Z
publishedAt: 2025-06-12T14:58:26.076Z
firstPublishedAt: 2025-06-12T14:58:26.076Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-orkesta
legacySlug: setting-up-payments-with-orkesta
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Orkesta payment provider. With this provider, your store can make sales through credit and debit cards, OrkestaPay Card, and OrkestaPay Checkout.

To configure Orkesta, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Orkesta** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Orkesta.
5. If you wish to modify the identification name to be displayed for the Orkesta provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, select the field **Webhook signing secret** according to the provider`s instructions
8. Click `Save`.

To configure the payment methods to be processed by Orkesta, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, Orkesta may take up to 10 minutes to appear at your store`s checkout as a payment option.
