---
title: 'Setting up payments with Wompi-PSE'
createdAt: 2026-08-04T00:00:00.000Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompi-pse
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Wompi-PSE payment provider. Through this provider, your store can make sales using PSE.

To configure Wompi-PSE, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Wompi-PSE** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App Token** fields with data provided by your Wompi-PSE account.
5. If you wish to modify the identification name to be displayed for the Wompi-PSE provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, fill in the **Llave publica (produccion) - PSE**, **Llave privada (produccion) - PSE**, **Llave publica (prueba) - PSE**, and **Llave privada (prueba) - PSE** fields according to the provider's instructions.
8. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Wompi-PSE**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions).
7. Click `Save`.

After following the indicated steps, Wompi-PSE may take up to 10 minutes to appear at your store's checkout as a payment option.
