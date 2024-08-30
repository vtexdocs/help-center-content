---
title: 'Setting up Rede acquirer with ERedeRest'
id: 5TD6Ap9kiIUSiAMUsgYmcY
status: DRAFT
createdAt: 2018-04-12T15:47:44.783Z
updatedAt: 2024-03-18T18:22:35.227Z
publishedAt: 
firstPublishedAt: 2018-04-13T15:41:42.879Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-rede-acquirer-with-erederest
locale: en
legacySlug: setting-up-rede-acquirer-with-erederest
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

In VTEX, you can integrate with the [acquirer](/en/tutorial/what-is-an-acquirer) Rede using the ERedeREST connector. This connector brings a number of enhancements, including pre-authorization support (__Visa__, __Mastercard__, __American Express__, __Diners__, __Hipercard__, __JCB__ and __Credz__).

>⚠️ The **Elo** brand does not yet support pre-authorization.

Another important feature of the ERedeREST connector is that you can also configure it to accept payments with [__Apple Pay __](/en/tutorial/setting-up-payments-with-apple-pay).

To configure ERedeREST, follow the steps below:

## Setting up ERedeREST gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __ERedeRest__ connector.
4. In the __PV__ field, enter the ID number of your store in Rede system.
5. In __Token__, inform the value of the Token created by Rede. To fill in this field, access your account on the Rede website and in the Settings section, look for __Token Generation__.
6. The __Apple MerchantId__, __Apple Merchant Certificate (.p12)__ and __Apple Merchant Password__ fields must be populated with the data provided by Apple. This setting is required for your store to accept payments with __Apple Pay__. See how to get this data [in this article](/en/tutorial/setting-up-merchant-id-in-apple-pay).
7. Under __Early security capture__, choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
8. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, the Rede acquirer will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is part of the Rede acquiring network). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).

### Related articles
- [Setting up payments with Apple Pay](/en/tutorial/setting-up-payments-with-apple-pay)
- [How to use ERedeREST integration](/en/tutorial/new-integration-with-erede-erederest)
- [Setting up Merchant ID in Apple Pay](/en/tutorial/setting-up-merchant-id-in-apple-pay)
- [Configuring payment conditions](/en/tutorial/how-to-configure-payment-conditions)
- [What is an acquirer?](/en/tutorial/what-is-an-acquirer)
