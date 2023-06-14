---
title: 'Setting up payments with MEO Wallet'
id: RTxEjuC7eMSeamQKAKs0W
status: DRAFT
createdAt: 2018-04-20T15:36:37.820Z
updatedAt: 2022-12-23T20:27:15.676Z
publishedAt: 
firstPublishedAt: 2018-04-20T16:19:00.365Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-meo-wallet
locale: en
legacySlug: setting-up-payments-with-meo-wallet
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

You can receive payments at your store using MEO Wallet. With it, your customer chooses the MEO Wallet __payment method__ to make purchases.

To set it up, follow the steps below:

## Setting up MEO Wallet gateway affiliation
1. Access the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __MEO Wallet__ Connector.
5. Fill in the __API Key__ field with the data provided by MEO Wallet.
6. In __Currency__, choose the currency that will be used in your store transactions. Currently only __Euro__ is available.
7. In the __Tme To Expire (in days)__ field, set the number of days for the payment to expire.
8. In __CallbackURL in MeoWallet__, you must register the callback URL `https://{{accountName}}.vtexpayments.com.br/meowallet/{{affiliationId}}/callback` on the MEO Wallet dashboard. Simply replace `{{accountName}}` with your store's primary Account Name and `{{affiliationId}}` with the affiliate ID (generated after the setup).
9. Click __Save__.

## Setting up MEO Wallet payment method
1. Within Payments __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Select the __MeoWallet__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. Under __Process with Affiliation__, the _MEO Wallet_ option will already be selected (since it is the only one available).
6. If there is an anti-fraud set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
7. You can set up [special payment conditions](/en/tutorial/special-conditions).
8. Click __Save__.

After following the steps indicated above, MEO Wallet will appear at your store checkout as a payment option for your customers to use.
