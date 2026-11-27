---
title: 'Setting up payments with Pay2b'
id: 4MCIWE1bGYjrdHRy7WVcY4
status: PUBLISHED
createdAt: 2025-09-24T20:21:26.768Z
updatedAt: 2025-09-24T20:28:09.207Z
publishedAt: 2025-09-24T20:28:09.207Z
firstPublishedAt: 2025-09-24T20:28:09.207Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pay2b
legacySlug: setting-up-payments-with-pay2b
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Pay2b payment provider. With this provider, your store can make sales through credit cards, notes payable and bank invoice.

To configure Pay2b, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Pay2b__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Pay2b.
5. If you wish to modify the identification name to be displayed for the Pay2b provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](/en/docs/tutorials/split-payment) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

To configure the payment methods to be processed by Pay2b, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Pay2b may take up to 10 minutes to appear at your store's checkout as a payment option.
