---
title: 'Setting up payments with WompiCoV2'
createdAt: 2026-08-04T00:00:00.000Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompicov2
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the WompiCoV2 payment provider. Through this provider, your store can make sales using different payment methods, such as American Express, Mastercard, Visa, Mastercard Debit, and Visa Electron.

To configure WompiCoV2, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **WompiCoV2** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, click **Authorize via OAuth**. At this point, you will be redirected to the provider's page, where you must access your account and authorize the connection of VTEX to your WompiCoV2 account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the WompiCoV2 provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

To configure the payment methods to be processed by WompiCoV2, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, WompiCoV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
