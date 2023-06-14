---
title: 'Setting up the SafetyPay gateway'
id: lf89DOdeveuMOI4Q0CwgC
status: PUBLISHED
createdAt: 2018-02-22T13:57:16.523Z
updatedAt: 2023-03-29T00:44:35.344Z
publishedAt: 2023-03-29T00:44:35.344Z
firstPublishedAt: 2018-02-22T15:12:57.862Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: setup-safetypay
legacySlug: setup-safetypay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

SafetyPay is a payment solution that directly connects your store's checkout to your customer's bank. With it, your customer chooses SafetyPay as a payment method and is *redirected* to the secure internet banking environment you choose. Once redirected, the customer can make a bank transfer and pay for the order.

To set up SafetyPay, follow the steps below:

## Setting up SafetyPay gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Safety Pay__ connector.
4. Fill in the registration fields with the data provided by SafetyPay (Fields *ApiKey, SignatureKey, Custom Merchant Name*).
5. The __Tracking Code__ field is optional. It can be used for marketing analysis purposes.
6. In the __Product ID__ field, fill in the desired payment method: __Express__ for bank transfer or __Cash__ for cash payment.
7. In __Currency__, select the currency of the transactions.
8. In __Language__, choose the language that will be used in the UI.
9. In the __Time To Expire (in hours)__ field, choose the payment expiration time.
10. In __Time To Expire for Lottery Payment (in days)__, choose the expiration time for payments to be made in lottery (applies only to Brazil).
11. Click __Save__.

## Setting up the SafetyPay payment condition

1. Within Payments __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Click on the __Safety Pay__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If you wish, check the box __Use Anti-Fraud__ to activate the basic anti-fraud.
7. You can also set up [special payment conditions](/en/tutorial/special-conditions) to use with SafetyPay.
8. Click __Save__.

That's it! SafetyPay is now set up in your store and will be available at checkout.
