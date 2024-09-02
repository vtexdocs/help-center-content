---
title: 'Setting up the SafetyPay gateway'
id: lf89DOdeveuMOI4Q0CwgC
status: DRAFT
createdAt: 2018-02-22T13:57:16.523Z
updatedAt: 2024-03-18T19:57:00.504Z
publishedAt: 
firstPublishedAt: 2018-02-22T15:12:57.862Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: setup-safetypay
locale: en
legacySlug: setup-safetypay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

SafetyPay is a payment solution that directly connects your store's checkout to your customer's bank. With it, your customer chooses SafetyPay as a payment method and is *redirected* to the secure internet banking environment you choose. Once redirected, the customer can make a bank transfer and pay for the order.

To set up SafetyPay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __SafetyPay__ in the search bar and click on the name of the provider.
4. Fill in the registration fields with the data provided by SafetyPay (Fields *ApiKey, SignatureKey, Custom Merchant Name*).
5. The __Tracking Code__ field is optional. It can be used for marketing analysis purposes.
6. In the __Product ID__ field, fill in the desired payment method: __Express__ for bank transfer or __Cash__ for cash payment.
7. In __Currency__, select the currency of the transactions.
8. In __Language__, choose the language that will be used in the UI.
9. In the __Time To Expire (in hours)__ field, choose the payment expiration time.
10. In __Time To Expire for Lottery Payment (in days)__, choose the expiration time for payments to be made in lottery (applies only to Brazil).
11. Click `Save`.

## Setting up the SafetyPay payment condition

1. Within Payments __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Click on the __Safety Pay__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If you wish, check the box __Use Anti-Fraud__ to activate the basic anti-fraud.
7. You can also set up [special payment conditions](/en/tutorial/special-conditions) to use with SafetyPay.
8. Click __Save__.

That's it! SafetyPay is now set up in your store and will be available at checkout.
