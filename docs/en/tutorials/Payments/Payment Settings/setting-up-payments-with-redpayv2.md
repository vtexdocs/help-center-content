---
title: 'Setting up payments with RedPayV2'
id: 5svlby2pPr8rbyYUSvoo6L
status: PUBLISHED
createdAt: 2024-12-09T16:42:47.682Z
updatedAt: 2024-12-09T17:03:11.005Z
publishedAt: 2024-12-09T17:03:11.005Z
firstPublishedAt: 2024-12-09T17:03:11.005Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-redpayv2
locale: en
legacySlug: setting-up-payments-with-redpayv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the RedPayV2 payment provider.

Through this provider, your store can make sales using different payment methods, such as RedPay.

To configure RedPayV2, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **RedPayV2** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account RedPay.
5. If you wish to modify the identification name to be displayed for the RedPayV2 provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, select or complete the fields Código Enrolador according to the provider`s instructions.
8. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click **RedPay**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, RedPayV2 may take up to 10 minutes to appear at your store`s checkout as a payment option.

