---
title: 'Setting up payments with Mobbex'
id: 2pgHFFeRRe7LRJOTCWigmh
status: PUBLISHED
createdAt: 2023-09-29T12:02:01.214Z
updatedAt: 2024-01-24T13:31:18.969Z
publishedAt: 2024-01-24T13:31:18.969Z
firstPublishedAt: 2023-09-29T12:27:46.314Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-mobbex
locale: en
legacySlug: setting-up-payments-with-mobbex
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Mobbex payment provider. With this provider, your store can make sales through credit cards, debit cards and Mobbex.

To configure Mobbex, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Mobbex__ in the search bar and click on the name of the provider.
4. In __Click to authorize VTEX to make payments__, click on __Authorize__. At this moment, you will be redirected to the Mobbex webpage, where you will have to access your account, and authorize the connection of VTEX in your Mobbex account.
5. After authorizing, you will automatically return to the VTEX Admin, and the __Application Key__, __Application Token__, __Application Id__ fields will already be filled in.
6. In __Enable payout split and send payment recipients?__, select whether split payments will be available for the marketplace and sellers.
7. Click `Save`.

To configure the payment methods to be processed by Mobbex, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Mobbex connector may take up to 10 minutes to appear at your store's checkout as a payment option.
