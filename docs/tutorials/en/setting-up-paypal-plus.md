---
title: 'Setting up PayPal Plus (Transparent PayPal)'
id: 2akxq3I92k8A4kymIYOiWy
status: PUBLISHED
createdAt: 2018-02-20T20:15:36.950Z
updatedAt: 2023-03-29T01:12:02.453Z
publishedAt: 2023-03-29T01:12:02.453Z
firstPublishedAt: 2018-02-20T22:56:13.192Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: setting-up-paypal-plus
legacySlug: setting-up-paypal-plus
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX Payments, you can set up the PayPal Plus sub-acquirer, PayPal's transparent checkout. Through this payment mode, the client simply enters their __credit card information__ and finishes the purchase normally. Payment is made directly on your site, without the need to redirect your customers.

To set it up, follow the steps below:

## Setting up PayPal Plus gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __PayPalPlus__ connector.

Fill in the registration fields with the information provided by PayPal, as follows.
- Fill in the __Client ID__ field with the *clientId*.
- Fill in the __Secret__ field with the *secret*.
- Fill in the __Username__ field with the *userName*.
- Fill in the __Password__ field with the *password*.
- Fill in the __Signature__ field with the *signature*.

Then, follow these steps:
1. In the __Save cards__ field, select __Yes__ so that the customer may choose the option to save the card at the time of checkout. If you don't want to enable this option, select __No__.
2. In __Currency__, choose the currency of the transaction.
3. In __Local__, select the location of the transaction.
4. Click __Save__.

## Setting up PayPal Plus payment condition

1. Within the __Setting__ area of Payments, click on the __Payment Conditions__.
2. Click the __+__ button.
3. Click on the __PayPalPlus__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If you want, check the __Use Anti-Fraud__ box to activate the basic anti-fraud.
6. Since payment with PayPal Plus is a credit card payment, you can choose between [setting up cash payment or payment with installments](/en/tutorial/how-to-configure-payment-conditions).
7. If you want, you can also configure [special payment conditions](/en/tutorial/special-conditions).
8. After you have made the settings, click __Save__.

Great! Now checkout will show the __credit card__ payment option using [PayPal as a sub-acquirer](/en/tutorial/what-is-a-sub-acquirer).
