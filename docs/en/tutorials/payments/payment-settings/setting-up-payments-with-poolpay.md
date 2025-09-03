---
title: 'Setting up payments with PoolPay'
id: 5N3llK2tpVPKdfJvOIJmQ0
status: PUBLISHED
createdAt: 2023-09-11T14:36:06.412Z
updatedAt: 2024-01-25T17:26:19.086Z
publishedAt: 2024-01-25T17:26:19.086Z
firstPublishedAt: 2023-09-11T14:58:37.086Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-poolpay
legacySlug: setting-up-payments-with-poolpay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PoolPay payment provider. With this provider, your store can make sales through the credit cards, PIX, ITP (Brazilian payment transaction initiator) and BNPL (Buy Now Pay Later).

To configure PoolPay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PoolPay__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with the data provided by Liquido Payment.
5. In __Enable payout split and sending payment recipients?__, select whether split payments will be available for the marketplace and sellers.
6. Click on the `Save` button.

To configure the payment methods to be processed by PoolPay, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PoolPay may take up to 10 minutes to appear at your store's checkout as a payment option.
