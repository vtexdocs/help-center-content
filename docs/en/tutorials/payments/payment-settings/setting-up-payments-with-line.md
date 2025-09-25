---
title: 'Setting up payments with LINE'
id: 5nJXFjefgZyTh2HiPGzQoj
status: PUBLISHED
createdAt: 2025-09-24T20:29:38.375Z
updatedAt: 2025-09-24T20:36:18.844Z
publishedAt: 2025-09-24T20:36:18.844Z
firstPublishedAt: 2025-09-24T20:36:18.844Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-line
legacySlug: setting-up-payments-with-line
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the LINE payment provider. With this provider, your store can make sales through credit and debit cards.

To configure LINE, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __LINE__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by LINE.
5. If you wish to modify the identification name to be displayed for the LINE provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

To configure the payment methods to be processed by LINE, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, LINE may take up to 10 minutes to appear at your store's checkout as a payment option.
