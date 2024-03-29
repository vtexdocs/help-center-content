---
title: 'Setting up PayZen gateway'
id: 3v3n5eQvxem8MQOCkugk24
status: PUBLISHED
createdAt: 2018-03-13T19:39:04.093Z
updatedAt: 2023-03-29T00:56:10.654Z
publishedAt: 2023-03-29T00:56:10.654Z
firstPublishedAt: 2018-03-13T22:27:11.198Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payzen-gateway
locale: en
legacySlug: setting-up-payzen-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

With VTEX, you can set up [PayZen gateway](/en/tutorial/what-is-a-payment-gateway) in your store. Easily integrated, it follows the security standards defined by [Payments](/en/faq/what-is-the-pci-ssc).

To set PayZen up, follow the steps below:

## Setting up PayZen gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __PayZen__ connector.
4. Fill in the _Id da Loja_ ("Store ID") and _Certificado_ ("Certificate") fields with the data provided by PayZen.
5. In __Moeda da transação__ ("Currency"), fill in the code [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) for the currency that will be used for payments.
6. In __Registered bank invoice__, choose whether to use registered or unregistered bank tickets.
7. Click __Save__.

## Setting up the payment condition
After following the steps indicated, PayZen will be configured in your store. So when you enter a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with PayZen). To learn how to set up payment conditions, [visit this Help article](/en/tutorial/how-to-configure-payment-conditions).
