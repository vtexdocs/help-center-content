---
title: Setting up payments with Zenki
id: 6LK7wMg0OB39UQKoZILoNL
status: PUBLISHED
createdAt: 2023-03-30T17:34:01.758Z
updatedAt: 2023-03-30T18:04:59.870Z
publishedAt: 2023-03-30T18:04:59.870Z
firstPublishedAt: 2023-03-30T18:02:25.796Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-zenki
legacySlug: setting-up-payments-with-zenki
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Zenki. With this connector, your store can make sales through bitcoins.

To configure Zenki affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __Zenki__ connector.
4. Fill in the __Application Key__, __Application Token__, __API key__, __Secret Key__ and __Webhook signing secret__ fields with data provided by your account Zenki.
5. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
6. Click on `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Click on __Bitcoin__.
4. Under __Process with affiliation__, select the __zenkipartnermx-zenki-v0__ option.
5. Activate the condition in the __Status__ field.
6. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Click on `Save`.

After following the indicated steps, Bancolombia BNPL connector may take up to 10 minutes to appear at your store's checkout as a payment option.
