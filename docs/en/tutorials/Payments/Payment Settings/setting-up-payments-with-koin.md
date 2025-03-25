---
title: 'Setting up payments with Koin'
id: 415vLlrVSUgeYYwycCaGiQ
status: ARCHIVED
createdAt: 2018-04-24T19:48:39.401Z
updatedAt: 2024-03-18T18:30:25.798Z
publishedAt: 
firstPublishedAt: 2018-04-24T21:17:23.835Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-koin
locale: en
legacySlug: setting-up-payments-with-koin
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

You can set up Koin to receive payments at your store. Through it, your customer chooses the Koin Post-pay payment method to make the purchase.

To set up payments with Koin, follow the steps below:

## Setting up Koin gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Koin__ connector.
4. In __Chave de identificação__ ("Identification key"), fill in the key provided by Koin in your store registration.
5. In __Senha de identificação__ ("Identification password"), enter the password you registered during your store registration in Koin.
6. In the __Moeda__ field ("Currency"), choose the currency that will be used in the transactions. Currently, the only available option is __Real__.
7. Click __Save__.

## Setting up Koin Postpay payment condition
1. Within Payments __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Select the __Koin Pós-Pago__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. The field __Process with affiliation__ will already be filled by the _Koin_ option.
6. If there is an anti-fraud set up in your store, you can activate it for this payment condition by checking the box __Use Anti-Fraud__.
7. You can set up [special payment conditions](/en/tutorial/special-conditions).
8. Click __Save__.

After following the steps indicated, Koin will appear at the checkout of your store as a payment option for your customers.
