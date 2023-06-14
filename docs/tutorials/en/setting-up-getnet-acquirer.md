---
title: 'Setting up Getnet acquirer'
id: 5jKTzassnCkOcU4AIGc6W6
status: DRAFT
createdAt: 2018-03-05T19:25:46.439Z
updatedAt: 2020-04-24T15:04:58.459Z
publishedAt: 
firstPublishedAt: 2018-03-05T20:43:53.372Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-getnet-acquirer
legacySlug: setting-up-getnet-acquirer
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Getnet is one of the largest [acquirers](/en/tutorial/what-is-an-acquirer) in Brazil and has the main card brands in its acquiring network, including some that operate regionally.

To set Getnet up, follow the steps below:

## Setting up Getnet gateway affiliation

1. Enter the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __Getnet__ connector.
5. In the __External Service Url__ field, you must configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
6. Fill in the registration fields with the data provided by Getnet (_appKey_ and _appToken_ fields).
7. In __Implements Installments Service__, you must choose whether you want to use external installment services or the one that's configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
8. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the url configured in the __External Service Url__ field.
9. In the __Installments Service Url__ field, you must configure the external URL that will be associated with `/options`.
10. In __SoftDescriptor__, enter the label that what will appear to identify the transaction you made in your store.
11. In __Captura de segurança antecipada__ ("Advanced security capture"), choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
12. In "Anti-Fraud", inform if you wish to use anti-fraud.
13. Click __Save__.

## Setting up the payment condition

After following the steps indicated above, Getnet will be configured in your store. So while you are registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with Getnet). To learn how to set up payment conditions, visit [this article](/en/tutorial/how-to-configure-payment-conditions).
