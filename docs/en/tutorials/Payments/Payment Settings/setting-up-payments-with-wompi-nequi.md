---
title: 'Setting up payments with Wompi-Nequi'
id: 3rX87mTmjYXbeZZ0CqSC44
status: PUBLISHED
createdAt: 2023-04-20T16:43:45.032Z
updatedAt: 2023-04-20T17:21:31.981Z
publishedAt: 2023-04-20T17:21:31.981Z
firstPublishedAt: 2023-04-20T17:15:10.408Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-wompi-nequi
locale: en
legacySlug: setting-up-payments-with-wompi-nequi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Wompi-Nequi payment provider. With this connector, your store can make sales through Nequi (colombian payment system).

To configure Wompi-Nequi affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __Wompi-Nequi__ connector.
4. Fill in the __Application Key__, __Application Token__, __Llave publica (produccion) - Wompi__, __Llave privada (produccion) - Wompi__, __Llave publica (prueba) - Wompi__ and __Llave publica (prueba) - Wompi__ fields with data provided by Wompi-Nequi.
5. If an alert message appears indicating the need to install the app, click on the __Install app__ button and follow the installation instructions.
6. Click on `Save`.

## Setting up payment condition 

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click the __Wompi-Nequi__ payment method.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
6. If you wish, you can also configure [payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click on `Save`.

After following the indicated steps, Wompi-Nequi connector may take up to 10 minutes to appear at your store's checkout as a payment option.
