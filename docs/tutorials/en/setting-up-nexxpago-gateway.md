---
title: 'Setting up Nexxpago gateway'
id: 28Fgmof1WYEeAcM8MkOcWm
status: DRAFT
createdAt: 2018-04-18T15:46:11.611Z
updatedAt: 2024-03-18T18:58:03.614Z
publishedAt: 
firstPublishedAt: 2018-04-18T16:05:40.588Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-nexxpago-gateway
locale: en
legacySlug: setting-up-nexxpago-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

Nexxpago is a [PCI-certified](/en/faq/what-is-the-pci-ssc) company that offers a variety of payment solutions. The main one is a [payment gateway](/en/tutorial/what-is-a-payment-gateway) that allows processing payments through bank and credit cards.

To configure Nexxpago, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Nexxpago__ in the search bar and click on the name of the provider.
4. In the __External Service Url__ field, you must configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by Nexxpago (fields _appKey_ and _appToken_).
6. In __Implements Installments Service__, choose whether you want to use external installment services or the one configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, you must define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, set the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate the text that will appear to identify transactions made in your store.
10. In __Early security capture__, choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Use Anti-fraude__, inform if you wish to use the anti-fraud system.
12. Click `Save`.

To configure the payment methods to be processed by Nexxpago, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Nexxpago may take up to 10 minutes to appear at your store's checkout as a payment option.
