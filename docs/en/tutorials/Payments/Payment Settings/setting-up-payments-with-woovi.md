---
title: 'Setting up payments with Woovi'
id: a61xxlOLJTQRrPx2MrVfs
status: PUBLISHED
createdAt: 2023-09-08T17:29:33.321Z
updatedAt: 2024-01-23T21:54:32.467Z
publishedAt: 2024-01-23T21:54:32.467Z
firstPublishedAt: 2023-09-08T17:49:01.961Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-woovi
locale: en
legacySlug: setting-up-payments-with-woovi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Woovi payment provider. With this provider, your store can make sales through Woovi and Woovi Parcelado.

To configure Woovi, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __WooviConnector__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__, __Application Token__ and __App ID__ fields with data provided by your account Woovi.
5. In __Method__, select __Pix__ or __Woovi Parcelado__.
6. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __Woovi__ or __Woovi Parcelado__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, Woovi connector may take up to 10 minutes to appear at your store's checkout as a payment option.
