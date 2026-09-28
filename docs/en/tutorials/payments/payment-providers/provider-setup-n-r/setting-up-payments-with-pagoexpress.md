---
title: 'Setting up payments with PagoExpress'
id: 4VmPz20GbXZ1gMKPaJ09l0
status: PUBLISHED
createdAt: 2024-02-05T19:13:06.972Z
updatedAt: 2024-03-13T15:13:51.485Z
publishedAt: 2024-03-13T15:13:51.485Z
firstPublishedAt: 2024-02-05T20:10:35.385Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pagoexpress
legacySlug: setting-up-payments-with-pagoexpress
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PagoExpress payment provider. With this provider, your store can make sales through PIX.

To configure PagoExpress, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagoExpress__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account PagoExpress.
5. If you wish to modify the identification name to be displayed for the PagoExpress provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __PIX__.
4. Activate the condition in the __Status__ field. 
5. In __Process with affiliation__, select the __pagoexpresspartnerbr-pagoexpress-v0__ option.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, PagoExpress may take up to 10 minutes to appear at your store's checkout as a payment option.
