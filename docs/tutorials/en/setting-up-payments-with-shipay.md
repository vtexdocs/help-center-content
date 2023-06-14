---
title: 'Setting up payments with Shipay'
id: 2GVBCDdxZPexI2TikFf9Au
status: PUBLISHED
createdAt: 2023-03-27T14:40:05.161Z
updatedAt: 2023-03-27T16:15:57.347Z
publishedAt: 2023-03-27T16:15:57.347Z
firstPublishedAt: 2023-03-27T14:44:22.502Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-shipay
locale: en
legacySlug: setting-up-payments-with-shipay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Shipay payment provider. With this connector, your store can make sales through PIX.

To configure Shipay affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __Shipay__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by your account Shipay.
5. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
6. Click on `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Under __Instant Payment__, select the __Pix__ option.
4. Under __Process with affiliation__, select the __Shipay__ connector.
5. Activate the condition in the __Status__ field.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, Shipay connector may take up to 10 minutes to appear at your store's checkout as a payment option.
