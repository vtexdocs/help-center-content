---
title: 'Setting up PagHiper gateway'
id: I3KXAIIJG0oyyg4A4MykE
status: DRAFT
createdAt: 2018-04-09T22:06:11.621Z
updatedAt: 2024-03-18T19:04:40.079Z
publishedAt: 
firstPublishedAt: 2018-04-09T22:43:35.309Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-paghiper-gateway
locale: en
legacySlug: setting-up-paghiper-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

PagHiper is a [gateway](/en/tutorial/what-is-a-payment-gateway) specialized in the processing of purchases made through bank slips.

To set up PagHiper, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagHiper__ in the search bar and click on the name of the provider.
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
