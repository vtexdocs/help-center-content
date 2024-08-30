---
title: 'Setting up PagBrasil gateway'
id: 2vzj6MkFRuKm4KQAOOmWaa
status: DRAFT
createdAt: 2018-04-10T12:40:34.957Z
updatedAt: 2024-03-18T19:02:31.069Z
publishedAt: 
firstPublishedAt: 2018-04-10T12:50:24.707Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-pagbrasil-gateway
locale: en
legacySlug: setting-up-pagbrasil-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

PagBrasil is a gateway specialized in Brazilian payment methods, mainly credit and debit cards, online transfers, and bank vouchers.

To configure PagBrasil, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagBrasil__ in the search bar and click on the name of the provider.
4. In the __External Service Url__ field, you must configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by PagBrasil (fields _appKey_ and _appToken_).
6. In __Implements Installments Service__, choose whether you want to use external installment services or the one configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In __Installments Service Url__, you must set up the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate the text that will appear to identify the transactions made in your store.
10. In __Early security capture__, choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Use Anti-Fraud__, inform if you wish to use the anti-fraud system.
12. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, PagBrasil will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with PagBrasil). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
