---
title: 'Setting up payments with PagHiperV3'
id: 1dYVbSK0yHNY5vp0gJj4fC
status: PUBLISHED
createdAt: 2024-03-14T12:27:03.520Z
updatedAt: 2024-03-14T12:39:32.791Z
publishedAt: 2024-03-14T12:39:32.791Z
firstPublishedAt: 2024-03-14T12:39:32.791Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paghiperv3
legacySlug: setting-up-payments-with-paghiperv3
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PagHiperV3 payment provider. With this provider, your store can make sales through bank invoices and PIX.

To configure PagHiperV3, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagHiperV3__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by PagHiperV3.
5. If you wish to modify the identification name to be displayed for the PagHiperV3 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Limite Vencimento__, enter how many days the bank invoice will remain open after its expiration date.
8. In __Dias corridos até o vencimento__, enter the maximum expiration date for the bank invoices. For PIX payments, it is not possible to change the expiration period, the default period is 15 minutes.
9. In __Exibir Frase fixa__, select whether you want to include a phrase to be displayed on the bank invoices issued.
10. In __Frase variável do vendedor__, if desired, configure the phrase to be displayed for each specific bank invoice.
11. Click `Save`.

To configure the payment methods to be processed by PagHiperV3, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PagHiperV3 may take up to 10 minutes to appear at your store's checkout as a payment option.
