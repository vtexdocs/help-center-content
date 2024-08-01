---
title: 'Setting up Sitef gateway with pre-auth'
id: 2ZH4DLmZpKw022aSGcGYag
status: DRAFT
createdAt: 2018-03-05T21:07:59.629Z
updatedAt: 2024-03-18T20:04:33.165Z
publishedAt: 
firstPublishedAt: 2018-03-06T14:09:56.654Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-sitef-gateway-with-pre-auth
locale: en
legacySlug: setting-up-sitef-gateway-with-pre-auth
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

In order to allow purchases made with credit card to have the amount reserved, you may set up the __Sitef gateway with pre-auth__ (pre-authorization) in your store.

To do this, follow the steps below:

## Setting up Sitef with pre-auth gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Sitef with pre-auth__ connector.
4. In the __Store ID__ field , fill in the data of your MerchantId in Sitef.
5. In __Access Key__ , fill in the MerchantKey provided by Sitef.
6. In __Environment__ , define in which environment Sitef will use the account: production, homologation or homologation with timeout.
7. In __Advanced Security Capture__ , choose how long you want the capture to take place after the transaction approval and the anti-fraud analysis. You can also disable this function.
8. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, Sitef with pre-auth will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with Sitef with pre-auth). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
