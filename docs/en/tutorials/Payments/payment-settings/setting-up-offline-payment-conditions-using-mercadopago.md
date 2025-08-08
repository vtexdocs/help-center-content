---
title: 'Setting up offline payment conditions using MercadoPago (Latin America)'
id: 3IVvb48DeoKeWyOAwe2OME
status: PUBLISHED
createdAt: 2018-03-14T23:34:08.473Z
updatedAt: 2023-03-29T01:20:41.392Z
publishedAt: 2023-03-29T01:20:41.392Z
firstPublishedAt: 2018-03-15T00:21:34.875Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-offline-payment-conditions-using-mercadopago
legacySlug: setting-up-offline-payment-conditions-using-mercadopago
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">
This article deals with configurations applicable in stores that operate in the following Latin American countries: <strong>Argentina</strong>, <strong>Chile</strong>, <strong>Colombia</strong>, <strong>Mexico</strong>, <strong>Peru</strong>, <strong>Uruguay</strong> and <strong>Venezuela</strong>.
</div>

You can use Mercado Pago to offer offline payment conditions in your store. For that, you first have to register [MercadoPagoV1](/en/tutorial/setting-up-mercadopagov1-sub-acquirer) gateway affiliation.

Then follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment conditions__ tab, click the __+__ button.
3. Select __Boleto bancário__ ("Bank Slip"). This option is compatible with all offline payment methods in your country (learn about it [here](/en/faq/what-offline-payment-conditions-are-available-in-latin-america)).
4. Click the __Status__ button to enable this payment condition.
5. If there is an anti-fraud system set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
6. Rename the payment condition to make it easier to identify. We recommend that you do this, especially if your store uses more than one.
7. You can also set up [special payment conditions](/en/tutorial/special-conditions).
8. Click __Save__.

By completing these steps, the chosen offline payment condition will be available to your customers at your store checkout.

### Related articles
- [Setting up MercadoPagoV1 sub-acquirer](/en/tutorial/setting-up-mercadopagov1-sub-acquirer)
- [What offline payment conditions are available in Latin America?](/en/faq/what-offline-payment-conditions-are-available-in-latin-america)
- [Configuring payment special conditions](/en/tutorial/special-conditions)
