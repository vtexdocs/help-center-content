---
title: 'Setting up payments with Appmax'
id: 6IIo8dyXKtdmXykBOhYmi0
status: PUBLISHED
createdAt: 2023-12-18T14:21:48.704Z
updatedAt: 2024-01-23T18:26:05.083Z
publishedAt: 2024-01-23T18:26:05.083Z
firstPublishedAt: 2023-12-18T14:32:23.030Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-appmax
locale: en
legacySlug: setting-up-payments-with-appmax
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Appmax payment provider. With this provider, your store can make sales through credit cards, bank invoice and Pix (brazilian payment method).

To configure Appmax, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Appmax__ in the search bar and click on the name of the provider.
4. In __Click to authorize VTEX to make payments__, click on __Authorize__. At this moment, you will be redirected to the Appmax webpage, where you will have to access your account, and authorize the connection of VTEX in your Appmax account.
5. After authorizing, you will automatically return to the VTEX Admin, and the __Application Key__, __Application Token__, __Application Id__ fields will already be filled in.
6. Click on `Save`.

To configure the payment methods to be processed by Appmax, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Appmax connector may take up to 10 minutes to appear at your store's checkout as a payment option.
