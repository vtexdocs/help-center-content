---
title: 'Setting up payments with Serfinsa'
createdAt: 2026-07-26T00:00:00.000Z
updatedAt: 2026-07-26T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-serfinsa
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Serfinsa payment provider. With this provider, your store can make sales through Serfinsa.

To configure Serfinsa, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Serfinsa** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account PlataDifiere.
5. If you wish to modify the identification name to be displayed for the PlataDifiere provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Serfinsa**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/docs/tutorials/special-conditions).
7. Click `Save`.

After following the indicated steps, Serfinsa may take up to 10 minutes to appear at your store's checkout as a payment option.
