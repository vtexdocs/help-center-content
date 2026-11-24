---
title: 'Setting up payments with actX'
id:
status: PUBLISHED
createdAt: 2026-06-19T00:00:00.000Z
updatedAt: 2026-06-19T00:00:00.000Z
publishedAt: 2026-06-19T00:00:00.000Z
firstPublishedAt: 2026-06-19T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-payments-with-actx
legacySlug: setting-up-payments-with-actx
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the actX payment provider. Through this provider, your store can make sales using different payment methods, such as Promissories, Nequi, Daviplata e Bancolombia Transfer.

To configure actX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __actX__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by actX.
5. If you wish to modify the identification name to be displayed for the actX provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, complete the field __Clase (Opcional)__ according to the provider`s instructions.
8. Click `Save`.

To configure the payment methods to be processed by actX, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, actX may take up to 10 minutes to appear at your store`s checkout as a payment option.

