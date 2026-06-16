---
title: 'Setting up payments with Koin-PaymentsV2'
id:
status: PUBLISHED
createdAt: 2026-06-16T00:00:00.000Z
updatedAt: 2026-06-16T00:00:00.000Z
publishedAt: 2026-06-16T00:00:00.000Z
firstPublishedAt: 2026-06-16T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-koin-paymentsv2
legacySlug: setting-up-payments-with-koin-paymentsv2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Koin-PaymentsV2 payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Diners, Hipercard, Mastercard, American Express, Visa Electron, Maestro, Discover, Elo, Mastercard Debit, Pix, Cabal, BoletoParceladoKoin e Naranja.

To configure Koin-PaymentsV2, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Koin-Payments-V2** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the registration fields **App key** and **App token** with the data provided by Koin-PaymentsV2.
5. If you wish to modify the identification name to be displayed for the Koin-PaymentsV2 provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

To configure the payment methods to be processed by Koin-PaymentsV2, access [Configuring Payment Conditions](https://help.vtex.com/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/docs/tutorials/special-conditions).

After following the indicated steps, Koin-PaymentsV2 connector may take up to 10 minutes to appear at your store's checkout as a payment option.
