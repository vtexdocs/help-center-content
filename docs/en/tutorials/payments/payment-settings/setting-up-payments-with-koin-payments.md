---
title: 'Setting up payments with Koin-Payments'
id: 5nTQFgTLGkPcJrqi7PKlO1
status: PUBLISHED
createdAt: 2022-08-18T12:40:14.512Z
updatedAt: 2024-03-11T17:58:22.260Z
publishedAt: 2024-03-11T17:58:22.260Z
firstPublishedAt: 2022-08-18T12:56:36.170Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-koin-payments
legacySlug: setting-up-payments-with-koin-payments
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Koin-Payments payment provider. With this provider, your store can make sales through a credit and debit cards, PIX and BoletoParceladoKoin.

To configure Koin-Payments, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Koin-Payments__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Koin-Payments.
5. If you wish to modify the identification name to be displayed for the Koin-Payments provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

To configure the payment methods to be processed by Koin-Payments, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Koin-Payments may take up to 10 minutes to appear at your store's checkout as a payment option.
