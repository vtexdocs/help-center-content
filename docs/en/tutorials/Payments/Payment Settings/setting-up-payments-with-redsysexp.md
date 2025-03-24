---
title: 'Setting up payments with RedsysEXP'
id: 7DSQeUbDEgH6yUvtXg4wly
status: PUBLISHED
createdAt: 2024-10-02T18:59:08.362Z
updatedAt: 2024-10-02T19:25:48.987Z
publishedAt: 2024-10-02T19:25:48.987Z
firstPublishedAt: 2024-10-02T19:25:48.987Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-redsysexp
locale: en
legacySlug: setting-up-payments-with-redsysexp
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the RedsysEXP payment provider. With this provider, your store can make sales through credit cards and Bizum.

To configure RedsysEXP, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __RedsysEXP__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by RedsysEXP.
5. If you wish to modify the identification name to be displayed for the RedsysEXP provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, fill in the __Merchant code__, __Signature key__, and __Merchant URL__ fields with your RedsysEXP account information.
8. In __Terminal__, __Currency__, __Language__ and __3DS Enabled__ select the desired options.
9. Click `Save`.

To configure the payment methods to be processed by RedsysEXP, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, RedsysEXP may take up to 10 minutes to appear at your store's checkout as a payment option.
