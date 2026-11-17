---
title: 'Setting up payments with AppmaxV1'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-appmaxv1
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the AppmaxV1 payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Pix, Mastercard, American Express, BankInvoice, Elo, Discover, Diners, and Apple Pay.

To configure AppmaxV1, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **AppmaxV1** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, click on **Authorize via OAuth**. At this point, you will be redirected to the Appmax page, where you must access your account and authorize the connection of VTEX to your Appmax account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the AppmaxV1 provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

To configure the payment methods to be processed by AppmaxV1, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, AppmaxV1 may take up to 10 minutes to appear at your store's checkout as a payment option.
