---
title: 'Setting up payments with PayU South Africa'
id: 2OSeDkC70CFS8k0pWTMMxM
status: ARCHIVED
createdAt: 2022-08-12T20:27:45.058Z
updatedAt: 2022-12-23T20:42:21.455Z
publishedAt: 
firstPublishedAt: 2022-08-12T21:39:25.215Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payu-south-africa
locale: en
legacySlug: setting-up-payments-with-payu-south-africa
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PayU South Africa payment provider. With this connector, your store can make sales through credit and debit cards, OsowEFT and bank transfer.

To configure PayU South Africa affiliation, follow the steps below:

<ui>1. Access the __Admin__ VTEX.</ui>

<ui>2. Click on __Payments__.</ui>

<ui>3. Then, click on __Settings__.</ui>

<ui>4. In the __Gateway affiliations__ tab, click on the __+__ button.</ui>

<ui>5. Click on the __PayU-SouthAfrica__ connector.</ui>

<ui>6. Fill in the __Application Key__, __Application Token__, __Public API Key__ and __Soft descriptor__ fields with data provided by PayU South Africa.</ui>

<ui>7. In the __Payment capture__ field, select one of the available options:</ui>

 - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.   
 - __Automatic Capture Immediately After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
 - __Automatic Capture Immediately After Anti-fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Automatic Capture Immediately After Payment Authorization__.  
 - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>8.Click on __Save__.</ui>

To set up payment conditions, access [Configure special payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento). For the credit card option, select the __vtex-integration-payu-southafrica-v0__ affiliation.

After following the indicated steps, PayU South Africa connector may take up to 10 minutes to appear at your store's checkout as a payment option.
