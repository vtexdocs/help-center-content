---
title: 'Setting up payments with Bancolombia BNPL'
id: 16iFxjwsOPwmBwmjhb17WN
status: PUBLISHED
createdAt: 2023-03-30T16:25:46.370Z
updatedAt: 2024-01-24T21:15:43.651Z
publishedAt: 2024-01-24T21:15:43.651Z
firstPublishedAt: 2023-03-30T17:24:01.279Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-bancolombia-bnpl
locale: en
legacySlug: setting-up-payments-with-bancolombia-bnpl
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Bancolombia BNPL payment provider. With this provider, your store can make sales through Bancolombia BNPL (Buy Now Pay Later).

To configure Bancolombia BNPL, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __BancolombiaBNPL__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by your account Bancolombia.
5. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
6. Click on `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Click on the __bancolombia-bnpl__ connector.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, Bancolombia BNPL may take up to 10 minutes to appear at your store's checkout as a payment option.
