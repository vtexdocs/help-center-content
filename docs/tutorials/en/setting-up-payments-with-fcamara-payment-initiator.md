---
title: 'Setting up payments with FCamara (Payment initiator)'
id: 4p5E3jc9J5xHkOI6AbnhTV
status: PUBLISHED
createdAt: 2023-04-03T15:12:23.123Z
updatedAt: 2023-04-03T16:42:01.758Z
publishedAt: 2023-04-03T16:42:01.758Z
firstPublishedAt: 2023-04-03T16:42:01.758Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-fcamara-payment-initiator
legacySlug: setting-up-payments-with-fcamara-payment-initiator
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the FCamara payment initiator. With this connector, your store can make sales through PIX.

To configure FCamara affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __iniciadorfcamara__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by your account FCamara.
5. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
6. Click on `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Select the __FCamara - Iniciador de pagamentos__ connector.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, FCamara connector may take up to 10 minutes to appear at your store's checkout as a payment option.
