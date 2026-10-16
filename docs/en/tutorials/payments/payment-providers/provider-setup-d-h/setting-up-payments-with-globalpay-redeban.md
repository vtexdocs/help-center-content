---
title: 'Setting up payments with GlobalPay-Redeban'
id:
status: PUBLISHED
createdAt: 2026-06-26T00:00:00.000Z
updatedAt: 2026-06-26T00:00:00.000Z
publishedAt: 2026-06-26T00:00:00.000Z
firstPublishedAt: 2026-06-26T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-globalpay-redeban
legacySlug: setting-up-payments-with-globalpay-redeban
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the GlobalPay-Redeban payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard, Diners, Discover, Elo, JCB, Aura, American Express, Privatelabels, Cobranded, Cash, Promissories, TuyaPay, Visa Electron, Maestro, Mastercard Debit, Brilla, 2C2P, APM_PagoEfectivo, Shieldgate-MX e PSE.

To configure GlobalPay-Redeban, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **GlobalPay-Redeban** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account GlobalPay-Redeban.
5. If you wish to modify the identification name to be displayed for the GlobalPay-Redeban provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

To configure the payment methods to be processed by GlobalPay-Redeban, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, GlobalPay-Redeban may take up to 10 minutes to appear at your store's  checkout as a payment option.