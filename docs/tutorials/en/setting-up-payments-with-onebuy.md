---
title: 'Setting up payments with OneBuy'
id: 1fgHy2pgQGQgCiEGYi0m2M
status: PUBLISHED
createdAt: 2018-04-12T13:08:01.424Z
updatedAt: 2023-03-29T00:49:49.514Z
publishedAt: 2023-03-29T00:49:49.514Z
firstPublishedAt: 2018-04-12T15:12:01.050Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-onebuy
legacySlug: setting-up-payments-with-onebuy
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

You can set up OneBuy to receive payments at your store. With it, your customer chooses the __payment method__ OneBuy to make the purchase.

To configure OneBuy, follow the steps below:

## Setting up OneBuy gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateways Affiliation__ tab, click the __+__ button.
3. Click the __OneBuy__ connector.
4. In the __External Service Url__ field, configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by OneBuy (_appKey_ and _appToken_ fields).
6. In __Implements Installments Service__, choose whether you want to use external installment services or the one that is configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, you must configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate the text that will appear to identify the transactions you made in your store.
10. In __Captura de segurança antecipada__ ("Early security capture"), choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Use Anti-Fraud__, inform if you wish to use an anti-fraud system.
12. Click __Save__.

## Setting Up OneBuy payment condition
1. Within Payments __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Select the __OneBuy__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. The __Process with affiliation__ field will already be filled by the _OneBuy_ option.
6. If there is an anti-fraud set up in your store, you can activate it for this payment condition by checking the __Usar Anti-Fraud__ box.
7. Choose whether you want payments to be made in cash or installments.
8. If you wish, you can also opt for a [special payment condition](/en/tutorial/special-conditions).
9. Click __Save__.

After following the steps indicated above, OneBuy will appear at your store checkout as a payment option for your customers to use.
