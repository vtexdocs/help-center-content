---
title: 'Setting up payments with argonPAY'
id: 6Pktml6MJpdc7dNvJ4zwzI
status: PUBLISHED
createdAt: 2023-12-18T14:51:00.261Z
updatedAt: 2023-12-18T15:02:08.524Z
publishedAt: 2023-12-18T15:02:08.524Z
firstPublishedAt: 2023-12-18T15:02:08.524Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-argonpay
legacySlug: setting-up-payments-with-argonpay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the argonPAY payment provider. With this connector, your store can make sales through the argonPAY.

To configure argonPAY provider, follow the steps below:

1. In the VTEX Admin, go to __Store Settings__ > __Payment__ > __Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __ArgonPay__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with the data provided by argonPAY.
5. In the __Payment capture__ field, select one of the following option:
<br>
<ul>
<br>
    	<li>**Use Behavior Recommended By The Payment Processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li>**Automatic Capture Immediately After Payment Authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li>**Automatic Capture Immediately After Anti-fraud Analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic Capture Immediately After Payment Authorization".</li>
   		<li>**Scheduled: Schedules The Automatic Capture**: By selecting this option, the field **Scheduled time frame in hours for automatic capture** will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.</li>        
   		<li>**Deactivated: Not Automatically Captured**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

6. In __Enable payout split and send payment recipients?__, select whether split payments will be available for the marketplace and sellers.
7. Click on the `Save` button.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings__ > __Payment__ > __Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Choose the payment condition __ArgonPay__.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, argonPAY connector may take up to 10 minutes to appear at your store's checkout as a payment option.
