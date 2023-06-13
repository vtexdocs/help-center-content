---
title: Setting up payments with Digital River V2
id: 5dlXHutd9Ik6vtN3WP7GRP
status: PUBLISHED
createdAt: 2022-02-17T12:11:27.726Z
updatedAt: 2023-03-26T21:59:25.157Z
publishedAt: 2023-03-26T21:59:25.157Z
firstPublishedAt: 2022-02-17T13:44:17.095Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-digital-river-v2
legacySlug: setting-up-payments-with-digital-river-v2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Digital River V2 payment provider.  With this connector, your store can make sales through several [payment methods](https://www.digitalriver.com/payment-method-guide/).

To configure Digital River V2 affiliation, follow the steps below:

<ui>1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.</ui>

<ui>2. In the __Gateway affiliations__ tab, click on the __+__ button.</ui>

<ui>3. Click on the __DigitalRiverV2__ connector.</ui>

<ui>4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Digital River V2.</ui>

<ui>5. In the __Payment capture__ field, select one of the available options:</ui>

 - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.   
 - __Automatic Capture Immediately After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
 - __Automatic Capture Immediately After Anti-fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Automatic Capture Immediately After Payment Authorization__.  
 - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>6.Click on __Save__.</ui>

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the payment condition __DigitalRiver__.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Click on __Save__.

After following the indicated steps, Digital River V2 connector may take up to 10 minutes to appear at your store's checkout as a payment option.
