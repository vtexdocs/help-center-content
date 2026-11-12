---
title: 'Setting up payments with SafraPay'
id: 70ov5R7wJjUYXE0AzlNy7Y
status: PUBLISHED
createdAt: 2024-09-26T18:36:57.313Z
updatedAt: 2025-10-17T17:56:30.277Z
publishedAt: 2025-10-17T17:56:30.277Z
firstPublishedAt: 2024-09-26T18:55:35.999Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-safrapay
legacySlug: setting-up-payments-with-safrapay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the SafraPay payment provider. With this provider, your store can make sales through credit cards, bank invoice and PIX.

To configure SafraPay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __SafraPay__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by SafraPay.
5. If you wish to modify the identification name to be displayed for the SafraPay provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](/en/docs/tutorials/split-payment) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

To configure the payment methods to be processed by SafraPay, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, SafraPay may take up to 10 minutes to appear at your store's checkout as a payment option.
