---
title: 'Setting up payments with Fiserv MX'
id: 3vcYUO1y0Zp9DWVI1AcvfK
status: PUBLISHED
createdAt: 2024-10-07T20:39:42.430Z
updatedAt: 2024-10-07T20:47:15.111Z
publishedAt: 2024-10-07T20:47:15.111Z
firstPublishedAt: 2024-10-07T20:47:15.111Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fiserv-mx
locale: en
legacySlug: setting-up-payments-with-fiserv-mx
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Fiserv MX payment provider. With this provider, your store can make sales through credit, debit, cobranded, private labels cards, bank invoices and Fiserv.

To configure Fiserv MX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __FiservMX__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Fiserv.
5. If you wish to modify the identification name to be displayed for the Fiserv provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, fill in the __Ingrese su Api Key Pública__, __Ingrese su Api Key Privada__, and __Ingrese su Store Id__ fields with your Fiserv account information.
8. In __Activar protocolo 3D-Secure__ and __Habilitar autorización y captura en 2 pasos__ select the desired options.
9. Click `Save`.

To configure the payment methods to be processed by Fiserv MX, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Fiserv MX may take up to 10 minutes to appear at your store's checkout as a payment option.
