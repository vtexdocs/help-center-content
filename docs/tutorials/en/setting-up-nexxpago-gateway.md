---
title: 'Setting up Nexxpago gateway'
id: 28Fgmof1WYEeAcM8MkOcWm
status: PUBLISHED
createdAt: 2018-04-18T15:46:11.611Z
updatedAt: 2023-03-29T01:08:32.601Z
publishedAt: 2023-03-29T01:08:32.601Z
firstPublishedAt: 2018-04-18T16:05:40.588Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-nexxpago-gateway
locale: en
legacySlug: setting-up-nexxpago-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Nexxpago is a [PCI-certified](/en/faq/what-is-the-pci-ssc) company that offers a variety of payment solutions. The main one is a [payment gateway](/en/tutorial/what-is-a-payment-gateway) that allows processing payments through bank and credit cards.

To configure Nexxpago, follow the steps below:

## Setting up NexxPago gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Nexxpago__ connector.
4. In the __External Service Url__ field, you must configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by Nexxpago (fields _appKey_ and _appToken_).
6. In __Implements Installments Service__, choose whether you want to use external installment services or the one configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, set the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate the text that will appear to identify transactions made in your store.
10. In __Early security capture__, choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Use Anti-fraude__, inform if you wish to use the anti-fraud system.
12. Click __Save__.

## Setting up the payment condition
After following the indicated steps, Nexxpago will be configured in your store. So while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with Nexxpaago). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
