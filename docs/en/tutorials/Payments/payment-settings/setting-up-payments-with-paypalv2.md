---
title: 'Setting up payments with PayPalV2'
id: 2nGiQVk3YKvOAu8Zg4RKFr
status: PUBLISHED
createdAt: 2024-03-14T18:53:09.449Z
updatedAt: 2025-07-16T22:42:18.769Z
publishedAt: 2025-07-16T22:42:18.769Z
firstPublishedAt: 2024-03-14T19:02:53.958Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paypalv2
legacySlug: setting-up-payments-with-paypalv2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider PayPalV2. Through this provider, your store can make sales via PayPalCP, PayPal, PayPalBCDC and PIX.

To configure PayPalV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __paypal-v2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by PayPalV2. In the Paypal environment, the __App key__ corresponds to the __Client ID__, and the __App token__ refers to the __Secret__.
5. If you wish to modify the identification name to be displayed for the PayPalV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Automatic Settlement__ field, select one of the following options:
<br>
<ul>
<br>
    	<li><b>Use behavior recommended by the payment processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic capture immediately after anti-fraud analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>     
   		<li><b>Disabled</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
8. Click __Save__.

To configure the payment methods to be processed by PayPalV2, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PayPalV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
