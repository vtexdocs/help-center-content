---
title: 'Setting up payments with PlaceToPayLatam'
id: 1Xda32LgbEV54wHLzEAFgA
status: PUBLISHED
createdAt: 2024-03-14T14:28:41.680Z
updatedAt: 2024-03-14T14:34:51.650Z
publishedAt: 2024-03-14T14:34:51.650Z
firstPublishedAt: 2024-03-14T14:34:51.650Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-placetopaylatam
legacySlug: setting-up-payments-with-placetopaylatam
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PlaceToPayLatam payment provider. With this provider, your store can make sales through PlaceToPay, credit and debit cards and notes payable.

To configure PlaceToPayLatam, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PlaceToPayLatam__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by PlaceToPayLatam.
5. If you wish to modify the identification name to be displayed for the PlaceToPayLatam provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

To configure the payment methods to be processed by PlaceToPayLatam, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PlaceToPayLatam may take up to 10 minutes to appear at your store's checkout as a payment option.
