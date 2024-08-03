---
title: 'Setting up payments with EgetnetV2'
id: 6jfBE8ocN5T0xQo8BTGH31
status: PUBLISHED
createdAt: 2023-02-13T13:55:05.519Z
updatedAt: 2024-03-14T18:21:39.711Z
publishedAt: 2024-03-14T18:21:39.711Z
firstPublishedAt: 2023-02-13T14:12:54.200Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-egetnetv2
locale: en
legacySlug: setting-up-payments-with-egetnetv2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the EgetnetV2 payment provider. With thisprovider, your store can make sales through credit cards, bank invoice and PIX.

To configure EgetnetV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __EgetnetV2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by EgetnetV2.
5. If you wish to modify the identification name to be displayed for the EgetnetV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

To configure the payment methods to be processed by EgetnetV2, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, EgetnetV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
