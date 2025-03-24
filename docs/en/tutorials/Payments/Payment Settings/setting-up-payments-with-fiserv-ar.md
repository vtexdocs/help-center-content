---
title: 'Setting up payments with Fiserv AR'
id: 1qF6HiMShBpMCyzz53edlx
status: PUBLISHED
createdAt: 2024-10-07T20:10:41.652Z
updatedAt: 2024-10-07T20:52:09.314Z
publishedAt: 2024-10-07T20:52:09.314Z
firstPublishedAt: 2024-10-07T20:31:20.030Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fiserv-ar
locale: en
legacySlug: setting-up-payments-with-fiserv-ar
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Fiserv AR payment provider. With this provider, your store can make sales through credit, debit, cobranded, private labels cards, bank invoices and Fiserv.

To configure Fiserv AR, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Fiserv AR__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Fiserv.
5. If you wish to modify the identification name to be displayed for the Fiserv provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, fill in the __Ingrese su Store ID__, __Ingrese su API Key Pública__, and __Ingrese su API Key Privada__ fields with your Fiserv account information.
8. In __Activar autenticación 3DS__, __Flujo mastercard__ and __Autorización y captura diferidos__ select the desired options.
9. Click `Save`.

To configure the payment methods to be processed by Fiserv AR, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Fiserv AR may take up to 10 minutes to appear at your store's checkout as a payment option.
