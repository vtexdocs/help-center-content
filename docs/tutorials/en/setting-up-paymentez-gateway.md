---
title: 'Setting up Paymentez gateway'
id: 7zmH2WCtVuAoUUQWyU2qgO
status: PUBLISHED
createdAt: 2018-03-28T17:47:41.909Z
updatedAt: 2023-03-26T22:08:53.622Z
publishedAt: 2023-03-26T22:08:53.622Z
firstPublishedAt: 2018-03-28T18:18:57.206Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-paymentez-gateway
legacySlug: setting-up-paymentez-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Paymentez is a [gateway](/en/tutorial/what-is-a-payment-gateway) with [PCI certification](/en/faq/what-is-the-pci-ssc) level 2 and has its operations concentrated in Latin America.

To set up Paymentez, follow the steps below:

## Setting up Paymentez gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway affiliations__ tab, click the __+__ button.
3. Click the __Paymentez__ connector.
4. In the __External Service Url__ field, you must configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by Paymentez (_appKey_ and _appToken_ fields).
6. In __Implements Installments Service__, choose whether you want to use external installment services or the one that is configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, you must configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, insert the thext that will appear to identify the transactions made in your store.
10. In __Early security capture__ , choose how long you want the capture to take after the transaction approval and anti-fraud analysis. You can also disable this function.
11. In __Have an anti-fraud deal with this affiliation?__ , tell us if you wish to use anti-fraud.
12. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, Paymentez will be configured in your store. So while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with Paymentez). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
