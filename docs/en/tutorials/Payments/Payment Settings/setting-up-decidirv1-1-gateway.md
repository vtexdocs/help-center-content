---
title: 'Setting up DecidirV1.1 gateway'
id: 4faOPP5b28Im2QOqiIma84
status: ARCHIVED
createdAt: 2018-06-27T14:11:28.047Z
updatedAt: 2022-12-23T20:17:30.385Z
publishedAt: 
firstPublishedAt: 2018-06-27T17:18:18.115Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-decidirv1-1-gateway
locale: en
legacySlug: setting-up-decidirv1-1-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

The __DecidirV1.1__ connector is the Argentinian [gateway](/en/tutorial/what-is-a-payment-gateway) Decidir's new integration with VTEX.

To configure __DecidirV1.1__, follow the steps below:

## Setting up DecidirV1.1 gateway affiliation
1. Access the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __DecidirV1.1__ connector.
5. In __Store ID__, enter the code that identifies your store.
6. In __Secret key__, fill in the password registered in Decidir system.
7. In the __Currency__ field, choose the currency that will be used in your store transactions. Currently only _Pesos_ is available.
8. In __Country__, set the country where your store operates. Decidir is currently only available in Argentina.
9. In __Secure capture__, choose the time after which the capture should take place.
10. In __Antifraud__, inform whether your store has an anti-fraud system set up.
11. In the __Ahora 12__ field, select whether your store uses the consumer promotion program Ahora 12.
12. In __Government Plan__, the _Yes_ option should be selected if your store uses Ahora 12.
13. In the __Change Margin__ field, set the percentage margin at which the payment amount may be changed.
14. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, DecidirV1.1 will be set up in your store. So while you're entering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with DecidirV1.1). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
