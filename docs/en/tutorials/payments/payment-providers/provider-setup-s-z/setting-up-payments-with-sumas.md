---
title: 'Setting up payments with sumas'
createdAt: 2026-11-27T00:00:00.000Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-sumas
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Sumas payment provider. Through this provider, your store can make sales using Sumas.

To configure Sumas, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **sumas** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App Token** fields with data provided by your Sumas account.
5. If you wish to modify the identification name to be displayed for the Sumas provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the __+__ button.
3. Click on **Sumas**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, Sumas may take up to 10 minutes to appear at your store's checkout as a payment option.
