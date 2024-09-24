---
title: 'Setting up payments with Worldpay-Payments-Via-WPG'
id: 7GCtigwhNYMi604UM0KeO6
status: PUBLISHED
createdAt: 2018-02-28T22:09:45.321Z
updatedAt: 2024-03-18T17:20:43.467Z
publishedAt: 2024-03-18T17:20:43.467Z
firstPublishedAt: 2018-02-28T22:38:14.737Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-the-worldpay-acquirer
locale: en
legacySlug: setting-up-the-worldpay-acquirer
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Worldpay is a global [acquirer](/en/tutorial/what-is-an-acquirer) which can process payments on various types of currencies and cards.

To configure Worldpay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Worldpay-Payments-Via-WPG__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account Worldpay.
5. If you wish to modify the identification name to be displayed for the Worldpay provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).

9. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.

10. Click `Save`.

To configure the payment methods to be processed by Worldpay, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Worldpay may take up to 10 minutes to appear at your store's checkout as a payment option.
