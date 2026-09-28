---
title: 'Setting up payments with Plexo'
createdAt: 2026-07-26T00:00:00.000Z
updatedAt: 2026-07-26T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-plexo
locale: en
hidden: false
---
At VTEX, it is possible to integrate with the Plexo payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard, American Express and Cabal.

To configure Plexo, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Plexo** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Plexo.
5. If you wish to modify the identification name to be displayed for the Plexo provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, complete the fields **Merchant Name**, **Merchant Id** and **Tax Return Law** according to the provider's  instructions.
8. Click `Save`.

To configure the payment methods to be processed by Plexo, access [Configuring Payment Conditions](https://help.vtex.com/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/docs/tutorials/special-conditions).

After following the indicated steps, Plexo may take up to 10 minutes to appear at your store's checkout as a payment option.
