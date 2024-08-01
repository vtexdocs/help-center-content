---
title: 'Setting up payments with Mercado Pago'
id: 2FPdhTma6QywUmwEcEUGoS
status: PUBLISHED
createdAt: 2018-03-08T21:11:28.158Z
updatedAt: 2024-01-23T11:46:52.226Z
publishedAt: 2024-01-23T11:46:52.226Z
firstPublishedAt: 2018-03-08T22:43:32.092Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-mercado-pago
locale: en
legacySlug: setting-up-payments-with-mercado-pago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

In addition to a sub-acquirer that processes transactions carried out with various payment conditions, Mercado Pago also offers a [digital wallet](/en/faq/what-is-an-e-wallet) service. To enable this payment condition, you must first configure one of the supported gateway affiliations:

- MercadoPago
- [MercadoPagoV1](https://help.vtex.com/en/tutorial/configurar-o-subadquirente-mercadopagov1#)
- [MercadoPagoV2](https://help.vtex.com/en/tutorial/configurar-o-subadquirente-mercadopagov2)

Below are the settings for __Mercado Pago__ connector.

## Setting up MercadoPago gateway

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __MercadoPago__ in the search bar and click on the name of the provider.
4. Fill in the registration fields with the credentials provided by MercadoPago (fields _Client id_ and _Client secret_). Remember that they should not start with __APP\_USR__.
5. In the __País__ field ("Country"), select the country of your store.
6. In __Time Zone__, specify the region that defines your local time.
7. Under __orderExpirationHours__, set for how many hours the system should check the order status before it expires. When this option is not met, the 192-hour standard is adopted.
8. In the __maxInstallments__ field, choose the maximum quantity of installments sent to MercadoPago.
9. Under __Categoria Principal__ ("Main Category"), choose the category that best fits your store.
10. Access `http://developers.mercadopago.com/documentation/instant-payment-notifications` and click the __Configure the URL where you want to receive notifications__ button.
11. Access the `vtexpayments` domain through `https://{AccountName}.vtexpayments.com.br/mp/payment/notifications` to set up the notifications that will be sent by MercadoPago.
12. In the __Tipo de estorno__ field ("Refund type"), choose between the automatic process or the manual request (in this case, MercadoPago will send an e-mail notifying the pending refund).
13. Click __Save__.

<div class="alert alert-warning">
The step indicated in item <strong>11</strong> is performed in an environment outside VTEX. Therefore, such process can be updated without prior notice.
</div>

## Setting up MercadoPago payment condition
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings > Payment conditions**, or type **Settings** in the search bar at the top of the page. click on the  tab.
2. Click the __+__ button.
3. Select __MercadoPago__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If there's an anti-fraud set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
6. Choose between __cash__ or __installments__. Learn more about these options [in this article](/en/tutorial/how-to-configure-payment-conditions).
7. You can also set up [special payment conditions](/en/tutorial/special-conditions).
8. Click __Save__.

After following these steps, MercadoPago will appear at the checkout of your store as a payment option. After clicking __Finish Purchase__, your customer will be directed to the digital wallet environment, where they should follow the authentication steps.
