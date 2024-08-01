---
title: 'Setting up payments with PayPal'
id: 4p3sD9u1moq2Aya2oc684w
status: DRAFT
createdAt: 2018-02-21T17:15:53.516Z
updatedAt: 2024-03-18T20:29:36.504Z
publishedAt: 
firstPublishedAt: 2018-02-21T17:54:19.079Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: setting-up-payment-with-paypal
locale: en
legacySlug: setting-up-payment-with-paypal
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

At VTEX gateway, you can set up the PayPal sub-acquirer to receive your payments. Through it, your customer chooses the PayPal __payment method__ and performs their authentication in the PayPal environment.

To set it up, follow the steps below:

## Setting up PayPal gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateways Affiliations__ tab, click the __+__ button.
3. Click the __PayPal__ connector.

Fill in the registration __API username__, __API password__ and __Signature__ fields with the data provided by PayPal. To obtain this information, you can access your [PayPal Dashboard](https://developer.paypal.com/dashboard/) or contact [PayPal support](https://www.paypal.com/us/smarthelp/contact-us).

In __Currency__, choose the currency of the transaction. And in __Location__, select the location of the transaction.

Finally, click __Save__.

## Setting up PayPal payment condition

1. Within the __Settings__ section of the Payments module, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Click the __PayPal__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If you want, check the __Use Anti-Fraud__ box to activate the basic anti-fraud.
6. If you want, you can also configure [special payment conditions](/en/tutorial/special-conditions).
7. After you have made the settings, click __Save__.

That's it! Now the payment option will be displayed at PayPal checkout. After finishing purchase, the customer will be redirected to the PayPal environment to perform their authentication and fill in the credit card information.

<div class="alert alert-warning" role="alert">
  <strong>Note:</strong> Payments with installments are not currently supported for this payment method. 
</div>
