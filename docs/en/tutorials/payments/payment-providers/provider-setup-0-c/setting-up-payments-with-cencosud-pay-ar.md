---
title: 'Setting up payments with Cencosud-Pay-Ar'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-cencosud-pay-ar
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Cencosud-Pay-Ar payment provider. Through this provider, your store can make sales using Cencosud Pay Ar.

To configure Cencosud-Pay-Ar, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Cencosud-Pay-Ar** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App Token** fields with data provided by your Cencosud-Pay-Ar account.
5. If you wish to modify the identification name to be displayed for the Cencosud-Pay-Ar provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Choose the payment condition **Cencosud Pay**.
4. Fill the **Rule Name** field with a name of your choice for identification.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud**.
7. If you want, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions?&utm_source=autocomplete#).
8. Click on `Save`.

After following the indicated steps, Cencosud-Pay-Ar may take up to 10 minutes to appear at your store's checkout as a payment option.
