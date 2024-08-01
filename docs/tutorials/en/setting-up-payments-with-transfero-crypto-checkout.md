---
title: 'Setting up payments with Transfero Crypto Checkout'
id: 29ZW22EW09zQDWZlPdyZ1T
status: PUBLISHED
createdAt: 2024-04-17T18:14:15.873Z
updatedAt: 2024-04-17T18:44:01.978Z
publishedAt: 2024-04-17T18:44:01.978Z
firstPublishedAt: 2024-04-17T18:44:01.978Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-transfero-crypto-checkout
locale: en
legacySlug: setting-up-payments-with-transfero-crypto-checkout
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Transfero Crypto Checkout payment processor. Through it, your store can make sales through cryptocurrencies and PIX, and receive in [Fiat money](https://en.wikipedia.org/wiki/Fiat_money).

To configure Transfero Crypto Checkout, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __CryptoCheckout__ in the search bar and click on the name of the processor.
4. Fill in the __App key__ and __App token__ fields with data provided by your account [Transfero Crypto Checkout](https://onboarding.transfero.com/).
5. If you wish to modify the identification name to be displayed for the Transfero Crypto Checkout processor on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the processor in a test environment by clicking __Enable test mode__.
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

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __Transfero Checkout__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Transfero Crypto Checkout processor may take up to 10 minutes to appear at your store's checkout as a payment option.
