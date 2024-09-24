---
title: 'Set up Mundi gateway'
id: 2yn9dKzvZOF5tn4RCX2Nbq
status: PUBLISHED
createdAt: 2019-04-04T21:12:48.808Z
updatedAt: 2024-01-23T19:02:29.463Z
publishedAt: 2024-01-23T19:02:29.463Z
firstPublishedAt: 2019-04-04T21:20:22.149Z
contentType: tutorial
productTeam: Financial
author: 3lcZDoqCF7Q4hYHye4y1YM
slugEN: set-up-mundi-gateway
locale: en
legacySlug: configurar-gateway-mundi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Mundi payment provider.

>⚠️ If you also want to use Mundi's anti-fraud, the settings for this function must be performed by the company's own hub. In case of doubts about this stage of the operation, consult Mundi's technical support.

To configure Mundi, follow the steps below:

<ui>1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.</ui>

<ui>2. On the providers screen, click the `New Provider` button.</ui>

<ui>3. Type the name __Mundi__ in the search bar and click on the name of the provider.</ui>

<ui>4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Mundi.</ui>

<ui>5. In the __Payment capture__ field, select one of the available options:</ui>

 - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.   
 - __Automatic Capture Immediately After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
 - __Automatic Capture Immediately After Anti-fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Automatic Capture Immediately After Payment Authorization__.  
 - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>6.Click on __Save__.</ui>

To configure the payment methods to be processed by Mundi, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/conditiones-especiales--tutorials_456?&utm_source=autocomplete).

After following the indicated steps, Mundi connector may take up to 10 minutes to appear at your store's checkout as a payment option.
