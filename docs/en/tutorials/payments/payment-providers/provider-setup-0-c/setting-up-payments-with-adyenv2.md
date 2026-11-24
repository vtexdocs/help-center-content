---
title: 'Setting up payments with AdyenV2'
id:
status: PUBLISHED
createdAt: 2026-06-18T00:00:00.000Z
updatedAt: 2026-06-18T00:00:00.000Z
publishedAt: 2026-06-18T00:00:00.000Z
firstPublishedAt: 2026-06-18T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-payments-with-adyenv2
legacySlug: setting-up-payments-with-adyenv2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the AdyenV2 payment provider. Through this provider, your store can make sales using different payment methods, such as Pix e Privatelabels.

To configure AdyenV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __AdyenV2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by AdyenV2.
5. If you wish to modify the identification name to be displayed for the AdyenV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, select or complete the fields __Adyen Merchant Endpoint Prefix__, __Alelo - merchantKey__, __Alelo - merchantId__, __Edenred - tokenRequestorId__, __Edenred - merchantId__, __Vale Refeição - CNPJ (SOMENTE NUMEROS)__, and __Adyen merchant ID__ according to the provider`s instructions.
8. Click `Save`.

To configure the payment methods to be processed by AdyenV2, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, AdyenV2 may take up to 10 minutes to appear at your store`s checkout as a payment option.

