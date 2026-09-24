---
title: 'Setting up payments with Sicoob'
id: 42kZoRHMW7vSG7pu9xucnu
status: PUBLISHED
createdAt: 2025-07-02T14:36:43.444Z
updatedAt: 2025-07-02T18:00:29.221Z
publishedAt: 2025-07-02T18:00:29.221Z
firstPublishedAt: 2025-07-02T14:49:13.633Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-sicoob
legacySlug: setting-up-payments-with-sicoob
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Sicoob payment provider. With this provider, your store can make sales through credit, debit cards, and PIX.

To configure Sicoob, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __ProviderSicoob__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Sicoob.
5. If you wish to modify the identification name to be displayed for the Sicoob provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, fill in the __Chave Pix__ field.
8. Click `Save`.

To configure the payment methods to be processed by Sicoob, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Sicoob may take up to 10 minutes to appear at your store's checkout as a payment option.
