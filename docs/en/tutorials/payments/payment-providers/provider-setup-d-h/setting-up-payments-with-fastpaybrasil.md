---
title: 'Setting up payments with FastPayBrasil'
createdAt: 2026-10-27T00:00:00.000Z
updatedAt: 2026-10-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-fastpaybrasil
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the FastPayBrasil payment provider. Through this provider, your store can make sales using different payment methods, such as Pix, Visa, Mastercard, American Express, Elo, and Apple Pay.

To configure FastPayBrasil, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **FastPayBrasil** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App Token** fields with data provided by your FastPayBrasil account.
5. If you wish to modify the identification name to be displayed for the FastPayBrasil provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, fill in the **applePayToken** field according to the provider's instructions.
8. Click `Save`.

To configure the payment methods to be processed by FastPayBrasil, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, FastPayBrasil may take up to 10 minutes to appear at your store's checkout as a payment option.
