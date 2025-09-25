---
title: 'Setting up payments with SumasPay'
id: OiIQTxRkWuVoTFs5MFslm
status: PUBLISHED
createdAt: 2025-09-25T13:08:19.074Z
updatedAt: 2025-09-25T13:35:40.937Z
publishedAt: 2025-09-25T13:35:40.937Z
firstPublishedAt: 2025-09-25T13:35:40.937Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-sumaspay
legacySlug: setting-up-payments-with-sumaspay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the SumasPay payment provider. With this provider, your store can make sales through SumasPay.

To configure SumasPay, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **SumasPay** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account SumasPay.
5. If you wish to modify the identification name to be displayed for the SumasPay provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the __+__ button.
3. Click on **SumasPay**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, SumasPay may take up to 10 minutes to appear at your store`s checkout as a payment option.
