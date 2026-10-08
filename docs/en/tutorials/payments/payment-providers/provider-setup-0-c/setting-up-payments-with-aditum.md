---
title: 'Setting up payments with Aditum'
id: 24042qRWfIL6EVTb0tflvt
status: PUBLISHED
createdAt: 2022-05-05T14:08:42.644Z
updatedAt: 2025-01-09T20:22:26.897Z
publishedAt: 2025-01-09T20:22:26.897Z
firstPublishedAt: 2022-05-05T16:29:41.407Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-aditum
legacySlug: setting-up-payments-with-aditum
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Aditum payment provider. With this provider, your store can make sales through credit cards, bank invoices and PIX.

To configure Aditum, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __AditumBr__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Aditum.
5. If you wish to modify the identification name to be displayed for the Aditum provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

To configure the payment methods to be processed by Aditum, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Aditum may take up to 10 minutes to appear at your store's checkout as a payment option.
