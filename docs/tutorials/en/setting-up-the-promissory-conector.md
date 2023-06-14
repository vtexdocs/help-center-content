---
title: 'Setting up the Promissory conector'
id: 7Gy0SJRVS0Qi2CuWMAqQc0
status: PUBLISHED
createdAt: 2018-06-22T15:15:02.946Z
updatedAt: 2023-03-26T22:01:58.494Z
publishedAt: 2023-03-26T22:01:58.494Z
firstPublishedAt: 2018-06-22T19:10:55.195Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-the-promissory-conector
legacySlug: setting-up-the-promissory-conector
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

The __Promissory__ connector, as its name suggests, allows your store to accept promissory notes as a payment method.

To set it up, follow the steps below:

## Setting up the promissory gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Promissory__ Connector.
4. In __Validity of the promissory in days max (180)__ ("Expiration date"), set how many days your customer will have to pay the promissory note before it loses its validity.
5. Under __Autorizar automaticamente__ ("Authorize automatically"), inform if you want to approve the payment immediately. We only recommend choosing this option in cases where payment is made on delivery or withdrawal in the store. By choosing _Yes_, the order automatically changes to the status _Preparing Delivery_ without going through any payment checks.
6. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, the Promissory connector will be configured in your store. Thus, when registering a promissory note (on Payments'  __Custom Payments__ tab), it will be available in the __Process with affiliation__ field. To learn how to register custom payments, visit [this article](https://help.vtex.com/en/tutorial/como-configurar-pagamento-customizado#).
