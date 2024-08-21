---
title: 'Setting up Decidir gateway'
id: 4QvUUoYubmQu2e8AQqu2es
status: DRAFT
createdAt: 2018-04-27T14:40:20.485Z
updatedAt: 2022-12-23T20:17:03.808Z
publishedAt: 
firstPublishedAt: 2018-04-27T20:27:49.319Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-decidir-gateway
locale: en
legacySlug: setting-up-decidir-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Decidir is a [gateway](/en/tutorial/what-is-a-payment-gateway) from Argentina that allows your store to accept dozens of payment conditions.

To configure Decidir, follow the steps below:

## Setting up Decidir gateway affiliation
1. Access the __Payments__ module.
2. Click on __Settings__.
3. In __Gateway Affiliations__ tab, click the __+__ button.
4. Click on the __Decidir__ connector.
5. In __Store Id__, enter the code that identifies your store.
6. In __Secret key__, fill in the registered Decidir system password.
7. In the __Currency__ field, choose the currency that will be used in your store transactions. Currently, only _Pesos_ is available.
8. In __Country__, set the country where your store operates. Decidir is currently only available in Argentina.
9. In __Secure Capture__, choose the time after which the capture should take place.
10. In __Antifraud__, inform whether your store has an anti-fraud system set up.
11. In the __Ahora 12__ field, select whether your store uses the consumer promotion program Ahora 12.
12. In __Government Plan__, the _Yes_ option should be selected if your store uses Ahora 12.
13. In the __Change Margin__ field, set the percentage margin to which the payment amount may be changed.
14. Click __Save__.

>⚠️ Warning: if you decide to contract **CyberSource** anti-fraud services, we recommend contacting the Cybersource team directly for more info on the Checkout configuration.

## Setting up the payment condition

After following the steps indicated above, Decidir will be set up in your store. So while you're entering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with Decidir). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
