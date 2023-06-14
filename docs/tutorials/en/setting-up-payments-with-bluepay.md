---
title: 'Setting up payments with BluePay'
id: 26gzpfmEiwgpE8yhkaFS16
status: PUBLISHED
createdAt: 2023-04-03T14:55:51.576Z
updatedAt: 2023-04-03T15:04:37.336Z
publishedAt: 2023-04-03T15:04:37.336Z
firstPublishedAt: 2023-04-03T15:04:37.336Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-bluepay
locale: en
legacySlug: setting-up-payments-with-bluepay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the BluePay payment provider. With this connector, your store can make sales through PIX.

To configure BluePay affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __BluePay__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by your account BluePay.
5. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
6. Click on `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Under __Instant Payment__, select the __Pix__ option.
4. Under __Process with affiliation__, select the __bluepaypartnerbr-bluepay-v0__ connector.
5. Activate the condition in the __Status__ field.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, BluePay connector may take up to 10 minutes to appear at your store's checkout as a payment option.
