---
title: 'Setting up payments with DripPixParcelado'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-drippixparcelado
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the DripPixParcelado payment provider. Through this provider, your store can make sales using different payment methods, such as Pix and Drip.

To configure DripPixParcelado, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **DripPixParcelado** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, click on **Authorize via OAuth**. At this point, you will be redirected to the DripPixParcelado page, where you must access your account and authorize the connection of VTEX to your DripPixParcelado account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the DripPixParcelado provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

To configure the payment methods to be processed by DripPixParcelado, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, DripPixParcelado may take up to 10 minutes to appear at your store's checkout as a payment option.
