---
title: 'Apple Pay'
id: STKWiXJSR9ImPt5EEC2aL
status: PUBLISHED
createdAt: 2023-06-28T14:04:58.979Z
updatedAt: 2024-06-25T21:02:43.540Z
publishedAt: 2024-06-25T21:02:43.540Z
firstPublishedAt: 2023-06-28T14:13:24.803Z
contentType: trackArticle
productTeam: Shopping
slugEN: apple-pay
locale: en
trackId: 6X8YyZBoVJpz5R8oXciTyu
trackSlugEN: digital-wallet-e-wallet
---

Your customers can shop using Apple Pay, the [digital wallet](https://help.vtex.com/en/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/7jLbdfch9Oe2yYbQa9zwE1) from Apple. For this, you need to fulfill some requirements:

- Have an account in `developer.apple.com`.
- Hire a provider that processes payments with Apple Pay.

>⚠️ Apple Pay currently only works on MacOs, IOS operating systems, and the Safari browser. For more information, go to [Devices compatible with Apple Pay](https://support.apple.com/en-gb/HT208531).

## Setting up the payment provider

Firstly, you need to configure a provider in your store's Admin that processes transactions with Apple Pay, such as [Adyen](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3) and [Stripe](https://help.vtex.com/en/tutorial/configuring-stripe-gateway-affiliation--fwF2wk2FQKrODrWWkvSLO).

To check all the provider options available for this payment method, access the list as described in Step 5 of the section [Set up payment with Apple Pay](#setting-up-payment-with-apple-pay).

>⚠️ Before starting to configure the provider, you must [register your Merchant ID with Apple Pay](register your Merchant ID with Apple Pay).

## Setting up payment with Apple Pay

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the __Payment conditions__ tab and then the `+` button.
3. Select the __Apple Pay__ payment method.
4. Click the `Status` button to enable this payment condition.
5. In the __Process with provider__ field, select the provider that will be used to process the payments.
6. If there is an anti-fraud set up in your store, you can activate it for this payment condition by checking the __Use anti-Fraud solution__ box.
7. Choose whether you want payments to be made in cash or installments.
8. If you wish, you can also opt for a [special payment condition](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
9. Click `Save`.

After following the indicated steps, Apple Pay may take up to 10 minutes to appear at your store's checkout as a payment option.

### Related articles

- [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay)
- [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456)
