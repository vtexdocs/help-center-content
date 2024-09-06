---
title: 'Setting up payments with Payway'
id: wHkvX7olfPPsAdeFq7obp
status: PUBLISHED
createdAt: 2024-03-07T17:04:59.563Z
updatedAt: 2024-03-13T15:29:48.955Z
publishedAt: 2024-03-13T15:29:48.955Z
firstPublishedAt: 2024-03-07T19:10:55.092Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-payway
locale: en
legacySlug: setting-up-payments-with-payway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Payway payment provider. With this provider, your store can make sales through PayWay, cards (credit, debit, private label, co-branded), notes payable and bank slips.

To configure Payway, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Payway__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account Payway.
5. If you wish to modify the identification name to be displayed for the Payway provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, enter the __User ID__, __Consume Username (PUBLIC)__ and __Consume Username (PRIVATE)__ information according to your Payway account information.
8. In __Payment type__, select the option __Simple Payment__ or __Two Steps Payment__.
9. In __Do you use Cybersource?__, select whether you want to use Cybersource as your anti-fraud provider.
10. Click `Save`.

To configure the payment methods to be processed by Payway, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Payway may take up to 10 minutes to appear at your store's checkout as a payment option.
