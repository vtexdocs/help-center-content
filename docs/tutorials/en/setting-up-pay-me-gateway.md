---
title: 'Setting up Pay-me gateway'
id: 34IXQJGJdea666aiOA8y8S
status: DRAFT
createdAt: 2018-03-28T19:01:07.670Z
updatedAt: 2022-12-23T20:40:43.255Z
publishedAt: 
firstPublishedAt: 2018-03-28T22:58:57.093Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-pay-me-gateway
locale: en
legacySlug: setting-up-pay-me-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Developed by Alignet, Pay-me is a payments solution that has several features. On VTEX platform, it acts exclusively as a [gateway](/en/tutorial/what-is-a-payment-gateway) to process the Alignet __payment condition__ (which also has a connector with the same name aimed at this function).

To enable Alignet payments using Pay-me gateway, follow the steps below:

## Setting up Pay-me gateway affiliation
1. Access the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway affiliations__ tab, click the __+__ button.
4. Click the __Payme__ connector.
5. Fill in the registration fields with the data provided by Alignet (fields _Código de adquirente_, _Código de Comercio_, _Password_, _PrivateKey Comercio_ and _PublicKey Alignet_).
6. In the __Currency__ field, select one of the currencies that can be processed by the gateway.
7. In __Language__ , choose between Spanish and English.
8. Click __Save__.

## Setting up Alignet payment condition
1. Within the Payments module __Settings__, click on the tab __Payment Conditions__.
2. Click the __+__ button.
3. Click the payment method __Alignet__.
4. Click the __Status__ button to enable this payment condition.
5. If your store has an anti-fraud set up, you can activate it by checking the box __Use Anti-Fraud__.
6. If you wish, you can also add a [special payment condition](/en/tutorial/special-conditions).
8. Click __Save__.

After following the steps indicated above, Alignet will appear at your store checkout as a payment option. After clicking __Finish Purchase__, your client will be redirected to authentication in the Alignet environment. You may also enable this payment condition by using the [Alignet connector](/en/tutorial/setting-up-payments-with-alignet).
