---
title: 'Setting up payments with Transbank Webpay'
id: 3uVwZ1gUx2g5TXGt0CHb44
status: PUBLISHED
createdAt: 2024-10-02T19:33:04.455Z
updatedAt: 2024-10-02T20:02:35.481Z
publishedAt: 2024-10-02T20:02:35.481Z
firstPublishedAt: 2024-10-02T20:02:35.481Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-transbank-webpay
legacySlug: setting-up-payments-with-transbank-webpay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Transbank Webpay. Through this provider, your store can make sales via Webpay.

To configure Transbank Webpay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Transbank Webpay__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Transbank Webpay.
5. If you wish to modify the identification name to be displayed for the Transbank Webpay provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Automatic Settlement__ field, select one of the following options:
<br>
<ul>
<br>
    	<li>**Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li>**Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li>**Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>     
   		<li>**Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
8. In __Provider Fields__, fill in the __Codigo-de-Comercio__ and __Api-Key-Secret__ fields with your Transbank Webpay account information.
9. In __MODO__ and __3DS Enabled__ select the desired options.
10. Click __Save__.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __Webpay__.
4. Activate the condition in the __Status__ field.
5. Under __Process with provider__, select the option __transbank__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Transbank Webpay may take up to 10 minutes to appear at your store's checkout as a payment option.
