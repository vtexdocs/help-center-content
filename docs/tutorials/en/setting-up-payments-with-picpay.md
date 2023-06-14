---
title: 'Setting up payments with PicPay'
id: 5jd6wgPCaWm8IcguyCyaY2
status: PUBLISHED
createdAt: 2018-03-13T15:53:25.279Z
updatedAt: 2023-03-29T01:02:29.955Z
publishedAt: 2023-03-29T01:02:29.955Z
firstPublishedAt: 2018-03-13T19:36:37.769Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-picpay
locale: en
legacySlug: setting-up-payments-with-picpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

PicPay is a [digital wallet](/en/faq/what-is-an-e-wallet) that allows transfers between users, including merchants. Your customer chooses to pay with it and receives a code to scan using the smartphone application.

To set up payments with this digital wallet, you first need to register __PicPay__ gateway affiliation by following the steps below:

## Setting up PicPay gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __PicPay__ connector.
4. Fill in the _Application Key_ and _Application Token_ fields with your __PicPay__ account information.
5. Click __Save__.

## Setting up the payment condition
1. Within Payments __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Select __PicPay__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If there's an anti-fraud set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
6. Choose whether the payments will be cash or installments.
7. You can also set up [special payment terms](/en/tutorial/special-conditions).
8. Click __Save__.

After following the steps indicated above, PicPay will appear at your store checkout as a payment option. After clicking __Finalize Purchase__, a code will be displayed for your customer to scan with the mobile application and make the payment.
