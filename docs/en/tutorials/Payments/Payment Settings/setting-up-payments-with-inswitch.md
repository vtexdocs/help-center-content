---
title: 'Setting up payments with Inswitch'
id: XxY7tbpg4GMrexGQfto6Q
status: PUBLISHED
createdAt: 2023-07-14T17:56:24.581Z
updatedAt: 2024-01-24T17:44:57.275Z
publishedAt: 2024-01-24T17:44:57.275Z
firstPublishedAt: 2023-07-14T18:11:24.293Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-inswitch
locale: en
legacySlug: setting-up-payments-with-inswitch
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Inswitch payment provider. With this provider, your store can make sales through the Inswitch.

To configure Inswitch, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Inswitch__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with the data provided by Inswitch.
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
6. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings__ > __Payment__ > __Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Choose the payment condition __Inswitch__.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Click `Save`.

After following the indicated steps, Inswitch may take up to 10 minutes to appear at your store's checkout as a payment option.
