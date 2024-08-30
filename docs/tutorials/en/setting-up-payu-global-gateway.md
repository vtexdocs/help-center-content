---
title: 'Setting up PayU Global gateway'
id: 2M5OMlqXdYo2CUg8WQIEam
status: DRAFT
createdAt: 2018-03-27T22:40:30.796Z
updatedAt: 2022-12-23T20:41:58.726Z
publishedAt: 
firstPublishedAt: 2018-03-27T22:49:27.104Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payu-global-gateway
locale: en
legacySlug: setting-up-payu-global-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

PayU Global is a [payment gateway](/en/tutorial/what-is-a-payment-gateway) that offers a number of solutions to make transactions in your store easier and safer. With [PCI certification](/en/faq/what-is-the-pci-ssc), this solution is exclusive to Romanian stores.

>ℹ️ Attention: currently, VTEX only supports versions 1.0.0 and 1.0.1 of PaymentsOS.

To set up Global PayU, follow the steps below:

## Setting up PayU Global gateway
1. Access the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway affiliations__ tab, click the __+__ button.
4. Click the __PayU Global__ connector.
5. Fill in the registration fields with the data provided by PaymentsOS (fields _App ID_, _Public Key_ and _Private Key_).
6. In the __Currency__ field, select the currency that will be used in the transactions.
7. In __Country__, choose the country of your store (as this is an exclusive solution, Romania is the country that should be selected).
8. In the __Early security capture__ field , define how long you want the capture to take after the transaction approval and anti-fraud analysis. You can also disable this function.
9. In __Have an anti-fraud deal with this affiliation?__ , inform whether you want to use anti-fraud.
10. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, PayU Global will be configured in your store. So while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with PayU Global). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
