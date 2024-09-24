---
title: 'Setting up payments with Scalapay'
id: 6SCh3WUqjeqIrOl209MENA
status: PUBLISHED
createdAt: 2022-08-12T19:31:38.569Z
updatedAt: 2024-01-25T18:03:45.856Z
publishedAt: 2024-01-25T18:03:45.856Z
firstPublishedAt: 2022-08-12T19:39:58.598Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-scalapay
locale: en
legacySlug: setting-up-payments-with-scalapay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Scalapay payment provider. With this provider, your store can make sales through credit card and Scalapay.

To configure Scalapay, follow the steps below:

<ui>1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.</ui>

<ui>2. On the providers screen, click the `New Provider` button.</ui>

<ui>3. Type the name __Scalapay__ in the search bar and click on the name of the provider.</ui>

<ui>4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Scalapay.</ui>

<ui>5. In the __Payment capture__ field, select one of the available options:</ui>

 - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.   
 - __Automatic Capture Immediately After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
 - __Automatic Capture Immediately After Anti-fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Automatic Capture Immediately After Payment Authorization__.  
 - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>6.Click `Save`.</ui>

To set up payment conditions, access [Configure special payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento). For the credit card option, select the __vtex-integration-scalapay-v0__ affiliation.

After following the indicated steps, Scalapay may take up to 10 minutes to appear at your store's checkout as a payment option.
