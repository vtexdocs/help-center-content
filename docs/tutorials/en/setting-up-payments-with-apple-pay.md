---
title: 'Setting up payments with Apple Pay'
id: 5L3NWMgvdKswWQa6eIc008
status: PUBLISHED
createdAt: 2018-04-12T20:38:42.521Z
updatedAt: 2024-06-25T21:20:56.252Z
publishedAt: 2024-06-25T21:20:56.252Z
firstPublishedAt: 2018-05-23T19:26:11.000Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-apple-pay
locale: en
legacySlug: setting-up-payments-with-apple-pay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Your customers can shop using Apple Pay, the [digital wallet](/en/faq/what-is-an-e-wallet) from Apple. For this, you need to fulfill some requirements:

- Have an account in `developer.apple.com`.
- Hire a gateway that processes payments with Apple Pay.

<div class="alert alert-warning">
  Apple Pay currently only works on MacOs, IOS operating systems, and the Safari browser. For more information, go to <a href="https://support.apple.com/en-gb/HT208531">Devices compatible with Apple Pay</a>.
</div>

## Setting up the payment provider

Firstly, you need to configure a provider in your store's Admin that processes transactions with Apple Pay, such as [Adyen](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3) and [Stripe](https://help.vtex.com/en/tutorial/configuring-stripe-gateway-affiliation--fwF2wk2FQKrODrWWkvSLO).

To check all the provider options available for this payment method, access the list as described in Step 5 of the section [Set up payment with Apple Pay](#setting-up-payment-with-apple-pay).

<div class="alert alert-warning">
  Before starting to configure the provider, you must <a href="register your Merchant ID with Apple Pay">register your Merchant ID with Apple Pay</a>.
</div>

## Setting up payment with Apple Pay

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the __Payment conditions__ tab and then the __+__ button.
3. Select the __Apple Pay__ payment method.
4. Click the `Status` button to enable this payment condition.
5. In the __Process with provider__ field, select the provider that will be used to process the payments.
6. If there is an anti-fraud set up in your store, you can activate it for this payment condition by checking the __Use anti-Fraud solutio__ box.
7. Choose whether you want payments to be made in cash or installments.
8. If you wish, you can also opt for a [special payment condition](/en/tutorial/special-conditions).
9. Click `Save`.

After following the indicated steps, Apple Pay may take up to 10 minutes to appear at your store's checkout as a payment option.

### Related articles

- [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay)
- [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456)
- [What is an ewallet?](https://help.vtex.com/en/tutorial/what-is-an-e-wallet--4v5wcOe4A0SiaimWM2cU60)
