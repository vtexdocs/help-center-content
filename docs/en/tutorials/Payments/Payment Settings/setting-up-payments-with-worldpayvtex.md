---
title: 'Setting up payments with WorldpayVTEX'
id: 5nZrKD1lrQK1WdhTz8CtB2
status: PUBLISHED
createdAt: 2025-04-10T14:29:52.395Z
updatedAt: 2025-05-30T14:34:58.337Z
publishedAt: 2025-05-30T14:34:58.337Z
firstPublishedAt: 2025-04-10T14:39:07.914Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-worldpayvtex
locale: en
legacySlug: setting-up-payments-with-worldpayvtex
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the WorldpayVTEX payment provider. With this provider, your store can make sales through credit and debit cards, Wordlpay, Carnet e ApplePay.

To configure WorldpayVTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __WorldpayVTEX__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account WorldpayVTEX.
5. If you wish to modify the identification name to be displayed for the WorldpayVTEX provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the __Automatic settlement__ field, select one of the following option:
<ul>
    	<li><b>Use behavior recommended by the payment processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform`s default behavior).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
    	<li><b>Automatic capture immediately after anti-fraud analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>
    	<li><b>Disabled</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

8. Click `Save`.

To configure the payment methods to be processed by WorldpayVTEX, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, WorldpayVTEX may take up to 10 minutes to appear at your store's checkout as a payment option.
