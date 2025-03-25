---
title: 'Setting up payments with MSC Payment'
id: 6hPTXSe57DSCuo7i2r3cjV
status: ARCHIVED
createdAt: 2023-09-11T14:04:54.926Z
updatedAt: 2024-10-03T15:22:05.758Z
publishedAt: 
firstPublishedAt: 2023-09-11T14:17:31.484Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-msc-payment
locale: en
legacySlug: setting-up-payments-with-msc-payment
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the MSC Payment payment provider. With this provider, your store can make sales through the MSC Payment.

To configure MSC Payment, follow the steps below:

1. In the VTEX Admin, go to __Store Settings__ > __Payment__ > __Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the __"+"__ button.
3. Click on the __MSC-Payment__ connector.
4. Fill in the __Application Key__, __Application Token__ and __tasaCambio__ fields with the data provided by MSC Payment.
5. In the __Payment capture__ field, select one of the following option:
<br>
<ul>
<br>
    	<li><b>Use Behavior Recommended By The Payment Processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li><b>Automatic Capture Immediately After Payment Authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic Capture Immediately After Anti-fraud Analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic Capture Immediately After Payment Authorization".</li>
   		<li><b>Scheduled: Schedules The Automatic Capture</b>: By selecting this option, the field <b>Scheduled time frame in hours for automatic capture</b> will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.</li>        
   		<li><b>Deactivated: Not Automatically Captured</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

6. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.

7. Click on the __Save__ button.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings__ > __Payment__ > __Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the payment condition __MSC Payment__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on __Save__.

After following the indicated steps, MSC Payment may take up to 10 minutes to appear at your store's checkout as a payment option.
