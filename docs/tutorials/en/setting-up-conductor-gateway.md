---
title: 'Setting up Conductor gateway'
id: Q5Ezi95TSEyE2GCQSs8ak
status: DRAFT
createdAt: 2018-05-02T17:09:15.090Z
updatedAt: 2024-03-18T18:11:12.675Z
publishedAt: 
firstPublishedAt: 2018-05-02T18:38:56.879Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-conductor-gateway
locale: en
legacySlug: setting-up-conductor-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

Conductor is a [payment gateway](/en/tutorial/what-is-a-payment-gateway) with [PCI certification](/en/faq/what-is-the-pci-ssc) that is more than 20 years old. In VTEX, it can be configured to process payments made with __credit cards with store brand__.

To enable Conductor in your store, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Conductor__ in the search bar and click on the name of the provider.
4. In the __External Service Url__ field, configure the external URL that will be associated with `/pvt/payments?an={AccoutName}`.
5. Fill in the registration fields with the data provided by Conductor (fields _appKey_ and _appToken_).
6. Under __Implements Installments Service__, choose whether you want to use external installment services or what the one configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. Under __External Cancellation Service__, set whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, indicate the text that will appear to identify the transactions made in your store.
10. In the __Early security capture__ field, choose how long you want the capture to take place after the transaction approval and the anti-fraud analysis. You can also disable this function.
11. In __Have an anti-fraud deal with this affiliation?__, inform whether or not you have an anti-fraud system set up on Conductor.
12. Click __Save__.

## Setting up custom payments
After following the indicated steps, Conductor will be configured in your store. Thus, when registering a __Store brand card__, it will be available in the __Process with the affiliation__ field. To learn how to register custom payments, visit [this article](/en/tutorial/how-to-configure-a-customized-payment).
