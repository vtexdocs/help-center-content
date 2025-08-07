---
title: 'Setting up payments with aCuotaz'
id: 12WBy5YWY2lmlUQ8YXm7qu
status: PUBLISHED
createdAt: 2024-09-16T20:33:16.861Z
updatedAt: 2024-09-16T20:47:32.178Z
publishedAt: 2024-09-16T20:47:32.178Z
firstPublishedAt: 2024-09-16T20:47:32.178Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-acuotaz
locale: en
legacySlug: setting-up-payments-with-acuotaz
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the aCuotaz payment provider. With this provider, your store can make sales through aCuotaz.

To configure aCuotaz, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __aCuotaz__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account aCuotaz.
5. If you wish to modify the identification name to be displayed for the aCuotaz provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, fill in the __Client ID__ and __Secret Token__ fields with your aCuotaz account information.
8. In __Currency__ select the currency to be used in payment transactions.
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __aCuotaz__.
4. Activate the condition in the __Status__ field.
5. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
6. Click `Save`.

After following the indicated steps, aCuotaz may take up to 10 minutes to appear at your store's checkout as a payment option.
