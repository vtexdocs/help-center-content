---
title: 'Setting up the TNSPay gateway'
id: 6jIUr6Va00QyEuMEGAmQA6
status: ARCHIVED
createdAt: 2018-03-02T12:43:42.795Z
updatedAt: 2024-03-18T20:23:20.750Z
publishedAt: 
firstPublishedAt: 2018-03-02T15:56:49.389Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-the-tnspay-gateway
locale: en
legacySlug: setting-up-the-tnspay-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

TNSPay is a [payment gateway](/en/tutorial/what-is-a-payment-gateway) with PCI certification that offers a number of security features to facilitate the processing of [recurring purchases](/en/faq/how-does-recurring-purchase-work).

To configure TNSPay, follow the steps below:

## Setting up TNSPay gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __TNSPay__ connector.
4. Fill in the registration fields with the data provided (or registered) by TNSPay: _MerchantID_, _UserName_, _Password_, _Version_, _Acquirer_.
5. In the __Currency__ field, choose the currency that will be used in the transactions.
6. In __Tokenize credit card__, you must choose whether or not to use TNSPay's [tokenization](/en/faq/how-does-recurring-purchase-work#tokenizing-the-card) feature.
7. In __Use 3DSecure__, define when to use the [3DS protocol](/en/tutorial/what-is-3d-secure) (which requires user authentication with the issuing bank).
8. In __3DSecure Minimum Value__, determine the minimum value (expressed in cents) to apply the 3DS protocol. This setting is only valid if you have selected the _Just above a custom value_ option in the __Use 3DSecure__ field.
9. In the __Plan Ids__ field, you must add _plan ids_, separated by commas and indicating the number of installments.
10. In the __Captura de segurança antecipada__ field ("Advance security capture"), choose how long you want the capture to take place after the approval of the transaction and the anti-fraud analysis). You can also disable this function.
11. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, TNSPay will be configured in your store. So when you enter a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with TNSPay). 
To learn how to set payment conditions, [visit this article](/en/tutorial/how-to-configure-payment-conditions).
