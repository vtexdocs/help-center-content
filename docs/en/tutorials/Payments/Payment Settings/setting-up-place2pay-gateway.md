---
title: 'Setting up Place2Pay gateway'
id: 2NmmnLpUPY0A8aMi0oyiQq
status: ARCHIVED
createdAt: 2018-03-07T21:45:23.671Z
updatedAt: 2024-03-18T19:53:38.738Z
publishedAt: 
firstPublishedAt: 2018-03-07T22:13:43.326Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-place2pay-gateway
locale: en
legacySlug: setting-up-place2pay-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

Place2Pay is the redirect version of the PlaceToPay gateway, which offers solutions for both large and small stores.

To set Place2Pay up, follow the steps below:

## Setting up Place2Pay gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateways Affiliations__ tab, click the __+__ button.
3. Click the __Place2Pay__ connector.
4. In the __External Service Url__ field, insert the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by PlaceToPay (_appKey_ and _appToken_ fields).
6. In __Implements Installments Service__, you must choose whether you want to use external installment services or the one that is configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether you want to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate what will appear to identify the transaction you made in your store.
10. In the __Advanced Security Capture__ field , choose how long you want the capture to happen after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Have an anti-fraud deal with this affiliation?__ , inform if you wish to use the anti-fraud system.
12. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, Place2Pay will be configured in your store. So while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with Place2Pay). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
