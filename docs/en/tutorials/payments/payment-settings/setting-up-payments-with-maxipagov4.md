---
title: 'Setting up payments with MaxiPagoV4'
id: 4pWPhTago6uDxjFMB6kln3
status: PUBLISHED
createdAt: 2024-03-11T13:52:12.299Z
updatedAt: 2024-03-11T16:46:23.177Z
publishedAt: 2024-03-11T16:46:23.177Z
firstPublishedAt: 2024-03-11T16:46:23.177Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-maxipagov4
legacySlug: setting-up-payments-with-maxipagov4
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the MaxiPagoV4 payment provider. With this provider, your store can make sales through credit and debit cards, bank invoice and PIX.

To configure MaxiPagoV4, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __MaxiPagoV4__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by MaxiPagoV4.
5. If you wish to modify the identification name to be displayed for the MaxiPagoV4 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. Click `Save`.

To configure the payment methods to be processed by MaxiPagoV4, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, MaxiPagoV4 connector may take up to 10 minutes to appear at your store's checkout as a payment option.
