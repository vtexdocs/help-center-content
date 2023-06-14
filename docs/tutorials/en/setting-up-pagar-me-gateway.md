---
title: 'Setting up Pagar.me gateway'
id: egFyDkXjfa80wkSkUWsmc
status: PUBLISHED
createdAt: 2018-04-10T17:54:18.410Z
updatedAt: 2023-03-26T21:05:35.943Z
publishedAt: 2023-03-26T21:05:35.943Z
firstPublishedAt: 2018-04-10T18:10:52.337Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-pagar-me-gateway
locale: en
legacySlug: setting-up-pagar-me-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Pagar.me is a [gateway](/en/tutorial/what-is-a-payment-gateway) that offers several solutions for processing payments in your store.

To set up Pagar.me, follow the steps below:

## Setting up Pagar.me gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Pagar.me__ connector.
4. In the __External Service Url__ field, configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by Pagar.me (fields __appKey__ and __appToken__).
6. In __Implements Installments Service__, you must choose whether you want to use external installment services or the one that is configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate the text that will appear to identify the transactions made in your store.
10. In __Captura de segurança antecipada__ ("Early security capture"), choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Use Anti-Fraud__, inform if you wish to use an anti-fraud system.
12. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, Pagar.me will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with the Pagar.me). 

To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
