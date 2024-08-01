---
title: 'Setting up payments with PaymentezV2'
id: 6MQiFTLnSaQoCswRUN1SVe
status: PUBLISHED
createdAt: 2024-03-14T12:48:31.013Z
updatedAt: 2024-03-14T13:10:44.458Z
publishedAt: 2024-03-14T13:10:44.458Z
firstPublishedAt: 2024-03-14T13:10:44.458Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-paymentezv2
locale: en
legacySlug: setting-up-payments-with-paymentezv2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PaymentezV2 payment provider. With this provider, your store can make sales through TuyaPay, cards (credit, private label, co-branded) and notes payable.

To configure PaymentezV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PaymentezV2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by PaymentezV2.
5. If you wish to modify the identification name to be displayed for the PaymentezV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

To configure the payment methods to be processed by PaymentezV2, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PaymentezV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
