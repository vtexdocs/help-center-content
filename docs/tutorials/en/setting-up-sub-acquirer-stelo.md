---
title: 'Setting up sub-acquirer Stelo'
id: 3gHWiaK9wQg08wOsoysciQ
status: DRAFT
createdAt: 2018-03-02T17:43:45.957Z
updatedAt: 2024-03-18T20:16:43.458Z
publishedAt: 
firstPublishedAt: 2018-03-02T20:17:14.474Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-sub-acquirer-stelo
locale: en
legacySlug: setting-up-sub-acquirer-stelo
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

Stelo is a [sub-acquirer](/en/tutorial/what-is-a-sub-acquirer) that facilitates the integration of payment methods into your store.

To set up Stelo, follow the steps below:

## Setting up Stelo gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Affiliations__ tab, click the __+__ button.
3. Click the __Stelo__ connector.
4. In the __External Service Url__ field, you should set up the external URL that will be associated with `/pvt/payments?an={{AccountName}}`.
5. Fill in the registration fields with the data provided by Stelo (_appKey_ and _appToken_ fields).
6. In __Implements Installments Service__, choose whether you want to use external installment services or the one configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, you must configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate what will be shown to identify the transaction made in your store.
10. In the __Captura de segurança antecipada__ field ("Advanced Security Capture"), choose how long you want the capture to take place after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Use Anti-Fraud__, inform whether you have Stelo's anti-fraud.
12. Click __Save__.

## Setting up the payment condition

After following the steps indicated above, Stelo will be configured in your store. So while you are registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with Stelo). To learn how to set payment conditions, visit [this article](/en/tutorial/how-to-configure-payment-conditions).
