---
title: 'Setting up the PayMee gateway'
id: 3fsilRdrBS6GOAy622soWy
status: PUBLISHED
createdAt: 2018-02-28T21:29:08.666Z
updatedAt: 2025-06-06T20:08:31.587Z
publishedAt: 2025-06-06T20:08:31.587Z
firstPublishedAt: 2018-03-01T21:53:29.140Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-the-paymee-gateway
locale: en
legacySlug: setting-up-the-paymee-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PayMee payment provider. With this provider, your store can make sales through PayMee and PIX.

To configure PayMee, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PayMee__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by PayMee.
5. If you wish to modify the identification name to be displayed for the PayMee provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. If you want to use [payment split](/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
7. Click `Save`.

To configure the payment methods to be processed by PayMee, access [Configuring payment conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PayMee may take up to 10 minutes to appear at your store's checkout as a payment option.
