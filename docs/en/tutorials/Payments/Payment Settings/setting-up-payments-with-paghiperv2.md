---
title: 'Setting up payments with PagHiperV2'
id: 131E6zBcTTkzZtL82cZh1x
status: PUBLISHED
createdAt: 2024-03-14T12:01:07.521Z
updatedAt: 2024-03-14T12:18:12.256Z
publishedAt: 2024-03-14T12:18:12.256Z
firstPublishedAt: 2024-03-14T12:18:12.256Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paghiperv2
locale: en
legacySlug: setting-up-payments-with-paghiperv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PagHiperV2 payment provider. With this provider, your store can make sales through bank invoices and PIX.

To configure PagHiperV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagHiperV2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by PagHiperV2.
5. If you wish to modify the identification name to be displayed for the PagHiperV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Limite Vencimento__, enter how many days the bank invoice will remain open after its expiration date.
7. In __Exibir Frase fixa__, select whether you want to include a phrase to be displayed on the bank invoices issued.
8. In __Frase variável do vendedor__, if desired, configure the phrase to be displayed for each specific bank invoice.
9. Click `Save`.

To configure the payment methods to be processed by PagHiperV2, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PagHiperV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
