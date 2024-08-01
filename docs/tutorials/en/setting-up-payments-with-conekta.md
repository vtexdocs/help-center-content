---
title: 'Setting up payments with Conekta'
id: 7kiAD3SlnABF75xLSL3eSA
status: PUBLISHED
createdAt: 2022-08-11T12:41:42.110Z
updatedAt: 2024-01-25T17:54:14.697Z
publishedAt: 2024-01-25T17:54:14.697Z
firstPublishedAt: 2022-08-11T12:54:43.579Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-conekta
locale: en
legacySlug: setting-up-payments-with-conekta
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Conekta payment provider. With this provider, your store can make sales through a credit, debit cards, OXXO and Notes Payable.

To configure Conekta, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Conekta__ in the search bar and click on the name of the provider.
4. Fill in the fields below your Conekta account information:
   - __Application Key__
   - __Application Token__
   - __Preautorizado__
   - __SKU__
   - __Unidad del tiempo de expiración para OXXOPay__
   - __Tiempo de expiración para OXXOPay__
   - __Metadata 4__
   - __Metadata 5__ 
5. Click `Save`.

To configure the payment methods to be processed by Conekta, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Conekta may take up to 10 minutes to appear at your store's checkout as a payment option.
