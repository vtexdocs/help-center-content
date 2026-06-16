---
title: 'Setting up payments with PaymentezV2'
id:
status: PUBLISHED
createdAt: 2026-16-06T00:00:00.000Z
updatedAt: 2026-16-06T00:00:00.000Z
publishedAt: 2026-16-06T00:00:00.000Z
firstPublishedAt: 2026-16-06T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paymentezv2
legacySlug: setting-up-payments-with-paymentezv2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PaymentezV2 payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard, Diners, Discover, Elo, JCB, Aura, American Express, Privatelabels, Promissories, Cash, Cobranded e TuyaPay.

To configure PaymentezV2, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **PaymentezV2** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the registration fields **App key** and **App token** with the data provided by PaymentezV2.
5. If you wish to modify the identification name to be displayed for the PaymentezV2 provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

To configure the payment methods to be processed by PaymentezV2, access [Configuring Payment Conditions](https://help.vtex.com/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/docs/tutorials/special-conditions).

After following the indicated steps, PaymentezV2 connector may take up to 10 minutes to appear at your store's checkout as a payment option.
