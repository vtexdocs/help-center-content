---
title: 'Setting up payments with VirtusPayV2'
id: 1tbcLRNIB5Bz0oWl8LnayB
status: ARCHIVED
createdAt: 2023-03-27T12:14:53.392Z
updatedAt: 2024-10-03T16:12:55.368Z
publishedAt: 
firstPublishedAt: 2023-03-27T12:56:49.578Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-virtuspayv2
locale: en
legacySlug: setting-up-payments-with-virtuspayv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the VirtusPayV2 payment provider. With this provider, your store can make sales through VirtusPay and VirtusPay Transparente.

To configure VirtusPayV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __VirtusPayV2__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by your account VirtusPay.
5. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
6. Click on `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Click on one of the two payment conditions: __VirtusPay__ or __VirtusPay Transparente__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, VirtusPayV2 connector may take up to 10 minutes to appear at your store's checkout as a payment option.
