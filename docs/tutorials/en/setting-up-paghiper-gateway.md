---
title: Setting up PagHiper gateway
id: I3KXAIIJG0oyyg4A4MykE
status: PUBLISHED
createdAt: 2018-04-09T22:06:11.621Z
updatedAt: 2023-03-29T01:13:11.291Z
publishedAt: 2023-03-29T01:13:11.291Z
firstPublishedAt: 2018-04-09T22:43:35.309Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-paghiper-gateway
legacySlug: setting-up-paghiper-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

PagHiper is a [gateway](/en/tutorial/what-is-a-payment-gateway) specialized in the processing of purchases made through bank slips.

To set up PagHiper, follow the steps below:

## Setting up PagHiper gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __PagHiper__ connector.
4. In the __External Service Url__ field, you must configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by PagHiper (fields _appKey_ and _appToken_).
6. In __Implements Installments Service__, you must choose whether you want to use external installment services or the one configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, you must configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, define the text that will appear to identify the transactions made in your store.
10. In the __email__ field, enter the email registered on PagHiper.
11. Under __Captura de segurança antecipada__ ("Early Security Capture"), choose how long you want the capture to take after the transaction approval and the antifraud analysis. You can also disable this function.
12. In __Use Anti-Fraud__, indicate whether you wish to use an anti-fraud system.
13. Click __Save__.

## Set up the payment condition
After following the steps indicated above, PagHiper will be configured in your store. Thus, while you're registering a ticket as a payment condition, it will be available in the __Process with affiliation__ field. 
To know how to enable the bank slip as a payment option for your clients, check [this Help article](/en/tutorial/how-to-configure-a-bank-slip).
