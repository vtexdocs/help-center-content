---
title: 'Setting up payments with Conekta'
id: 7kiAD3SlnABF75xLSL3eSA
status: PUBLISHED
createdAt: 2022-08-11T12:41:42.110Z
updatedAt: 2024-09-13T16:42:16.752Z
publishedAt: 2024-09-13T16:42:16.752Z
firstPublishedAt: 2022-08-11T12:54:43.579Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-conekta
legacySlug: setting-up-payments-with-conekta
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Conekta payment provider. With this provider, your store can make sales through a credit, debit cards, bank transfer and Efectivo (cash).

To configure Conekta, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __ConektaMX__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account Conekta.
5. If you wish to modify the identification name to be displayed for the Conekta provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Habilitar meses sin intereses (MSI)__, select whether you want to activate the option to allow customers to split purchases into monthly payments (interest-free).
8. In __Indicar número de MSI (3, 6, 9, 12)__, enter the number of months that customers can split the payment (interest-free).
9. In __Indicar la duración del checkout en días (1 - 30)__, enter the maximum number of days for the order to expire (applicable for payments via Efectivo). 
10. In __Tarjetas__, __Transferencia Bancaria__ and __Efectivo__, select whether you want to use these payment methods in your store.
11. Click `Save`.

To configure the payment methods to be processed by Conekta, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Conekta may take up to 10 minutes to appear at your store's checkout as a payment option.
