---
title: 'Setting up payments with KlarnaPayments'
id:
status: PUBLISHED
createdAt: 2026-16-06T00:00:00.000Z
updatedAt: 2026-16-06T00:00:00.000Z
publishedAt: 2026-16-06T00:00:00.000Z
firstPublishedAt: 2026-16-06T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-klarnapayments
legacySlug: setting-up-payments-with-klarnapayments
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the KlarnaPayments payment provider. Through this provider, your store can make sales using different payment methods, such as Klarna.

To configure KlarnaPayments, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **KlarnaPayments** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the registration fields **App key** and **App token** with the data provided by KlarnaPayments.
5. If you wish to modify the identification name to be displayed for the KlarnaPayments provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

## Setting up Klarna payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click the `+` button.
3. Click **Klarna** option.
4. On the configuration page, activate the condition by clicking **Status**.
5. If you want to use an anti-fraud system, check the **Use anti-fraud solution** option.
6. If necessary, you can also [configure special payment conditions](https://help.vtex.com/docs/tutorials/special-conditions).
7. Click `Save`.

After following the indicated steps, KlarnaPayments connector may take up to 10 minutes to appear at your store's checkout as a payment option.
