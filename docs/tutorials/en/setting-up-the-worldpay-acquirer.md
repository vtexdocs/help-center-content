---
title: Setting up the Worldpay acquirer
id: 7GCtigwhNYMi604UM0KeO6
status: PUBLISHED
createdAt: 2018-02-28T22:09:45.321Z
updatedAt: 2023-03-29T00:47:52.166Z
publishedAt: 2023-03-29T00:47:52.166Z
firstPublishedAt: 2018-02-28T22:38:14.737Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-the-worldpay-acquirer
legacySlug: setting-up-the-worldpay-acquirer
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Worldpay is a global [acquirer](/en/tutorial/what-is-an-acquirer) which can process payments on various types of currencies and cards.

To set Worldpay up, follow the steps below:

## Setting up Worldpay gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Worldpay__ Connector.
4. Fill in the registration fields with your Worldpay account information (fields _UserName_, _Password_, _Version_, _MerchantCode_).
5. In the __Currency__ field, choose the currency of the transactions.
6. In the __Captura de segurança antecipada__ field, choose how long you want the capture to take place after the transactionapproval and the anti-fraud analysis. You can also disable this function.
7. Click __Save__.

## Setting up the payment condition

After following the steps indicated above, Worldpay will be configured in your store. So when you enter a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is part of the Worldpay acquiring network). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
