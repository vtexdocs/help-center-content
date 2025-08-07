---
title: 'Setting up payments with Cleo'
id: 4B2H3gXQEHFo5ZOhHQpw8q
status: PUBLISHED
createdAt: 2024-09-17T12:58:37.771Z
updatedAt: 2024-09-17T13:24:12.551Z
publishedAt: 2024-09-17T13:24:12.551Z
firstPublishedAt: 2024-09-17T13:24:12.551Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cleo
locale: en
legacySlug: setting-up-payments-with-cleo
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Cleo payment provider. With this provider, your store can make sales through SweetPay.

To configure Cleo, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Cleo__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account Cleo.
5. If you wish to modify the identification name to be displayed for the Cleo provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __SweetPay__.
4. Activate the condition in the __Status__ field.
5. Under __Process with provider__, select the option __sweetpay__.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, Cleo may take up to 10 minutes to appear at your store's checkout as a payment option.
