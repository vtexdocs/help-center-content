---
title: 'Setting up payments with PagarMeV3'
id: 5PMavdamrVijwIrHas9ndE
status: PUBLISHED
createdAt: 2022-06-22T17:05:12.930Z
updatedAt: 2024-03-11T14:27:05.534Z
publishedAt: 2024-03-11T14:27:05.534Z
firstPublishedAt: 2022-06-22T17:51:37.670Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-pagarmev3
locale: en
legacySlug: setting-up-payments-with-pagarmev3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PagarMeV3 payment provider. With this provider, your store can make sales through credit and debit cards, bank invoice and PIX.

To configure PagarMeV3, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagarMeV3__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by PagarMeV3.
5. If you wish to modify the identification name to be displayed for the PagarMeV3 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

To configure the payment methods to be processed by PagarMeV3, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PagarMeV3 may take up to 10 minutes to appear at your store's checkout as a payment option.
