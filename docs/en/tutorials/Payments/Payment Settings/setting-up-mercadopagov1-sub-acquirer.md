---
title: 'Setting up MercadoPagoV1 sub-acquirer'
id: 6wTlR3UTJe6YMAsEuquO26
status: ARCHIVED
createdAt: 2018-03-08T13:05:57.452Z
updatedAt: 2024-03-18T18:35:39.248Z
publishedAt: 
firstPublishedAt: 2018-03-08T19:45:23.370Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-mercadopagov1-sub-acquirer
locale: en
legacySlug: setting-up-mercadopagov1-sub-acquirer
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

With the VTEX gateway, you can configure the MercadoPago [sub-acquirer](/en/tutorial/what-is-a-sub-acquirer) to operate in various ways. __MercadoPagoV1__ allows your store to receive payments using debit and credit cards, in addition to Mercado Pago's [digital wallet](/en/faq/what-is-an-e-wallet).

>⚠️ The **MercadoPagoV1** integration does not support payment using boleto bancario (payment method in Brazil).

The steps below will let you set up MercadoPagoV1:

## Setting up MercadoPagoV1

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __MercadoPagoV1__ in the search bar and click on the name of the provider.
4. The __OAuth login__ field is not used. Leave it as it is.
5. Fill in the __PublicKey__ and __AccessToken__ fields with the data provided by MercadoPago.
6. Leave the __RefreshToken__, __ExpiredTokenIn__, and __Merchant Account Id__ fields blank.
7. In __Processing Mode__, choose how you want to use MercadoPagoV1: as a gateway or as a sub-acquirer.
8. In the __CountryName__ field, select the your store's country.
9. In __SoftDescriptor__, insert the label that will appear to identify the transactions made in your store.
10. In the __Description__ field, write a brief description of your business (optional).
11. In the __CategoryId__ field, choose the category of products that you sell in your store.
12. The __Financial Institution__ field is optional and should be filled out only if your store operates in Chile.
13. In __Use External Installments__, select whether or not to use the MercadoPagoV1 installments service.
14. In the __Antifraud__ field, select whether you want to use an anti-fraud system.
15. In __Time Zone__, select the region that sets your local time.
16. In __orderExpirationHours__, set for how many hours the system should check the order status before it expires. When this option is left blank, 192-hour timeframe is default.
17. In the __maxInstallments__ field, choose the maximum number of installments sent to MercadoPago.
18. In __Categoria Principal__ ("Main Category"), choose the category that best fits your store.
19. The __Captura de segurança antecipada__  field ("Advanced security capture") is optional and should only be filled out by stores in Argentina and Brazil. You can either deactivate this function or choose how long you want to perform the capture after the transaction approval of the anti-fraud analysis.
20. Click on __Save__.

## Setting up the payment condition
After following the steps indicated above, MercadoPagoV1 will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with MercadoPagoV1). 

For more on how to set up payment conditions, access [this Help article](/en/tutorial/how-to-configure-payment-conditions).

For more information about the integration with Mercado Pago, access the [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/en/guides/plugins/unofficial/vtex/gateway-affiliations).
