---
title: 'Setting up payments with Malga'
id: 4rhkRcYGdsaEcHDYkOsmVX
status: PUBLISHED
createdAt: 2024-08-12T11:25:25.261Z
updatedAt: 2024-08-13T18:26:40.412Z
publishedAt: 2024-08-13T18:26:40.412Z
firstPublishedAt: 2024-08-12T11:35:39.422Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-malga
locale: en
legacySlug: setting-up-payments-with-malga
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Malga payment provider. With this provider, your store can make sales through credit cards, PIX and bank invoices.

<div class="alert alert-info">
If you would like more information about the integration of Malga into VTEX, access the <a href="https://docs.malga.io/sdks/plugins/vtex-connector">Malga external documentation</a>.
</div>

To configure Malga, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Malga__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Malga.
5. If you wish to modify the identification name to be displayed for the Malga provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the __Automatic settlement__ field, select one of the following option:
<br>
<ul>
<br>
    	<li><b>Use behavior recommended by the payment processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic capture immediately after anti-fraud analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>     
   		<li><b>Disabled</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
8. Click `Save`.

To configure the payment methods to be processed by Malga, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Malga may take up to 10 minutes to appear at your store's checkout as a payment option.
