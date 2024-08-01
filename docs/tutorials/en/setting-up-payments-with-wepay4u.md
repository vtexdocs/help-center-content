---
title: 'Setting up payments with Wepay4u'
id: 7xbyIPpU7PAXQNCfpVBqGC
status: PUBLISHED
createdAt: 2024-02-05T20:19:10.668Z
updatedAt: 2024-03-13T15:09:57.098Z
publishedAt: 2024-03-13T15:09:57.098Z
firstPublishedAt: 2024-02-05T20:29:59.689Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-wepay4u
locale: en
legacySlug: setting-up-payments-with-wepay4u
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Wepay4u payment provider. With this provider, your store can make sales through Wepay4u.

To configure Wepay4u, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Wepay4u__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account Wepay4u.
5. If you wish to modify the identification name to be displayed for the Wepay4u provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. In __Provider Fields__, enter the __MerchantCode__ and __SecretKey__ information as per your Wepay4u account information.

9. In __Currency__, select the currency to be used in the payment transaction.

10. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __Wepay4u__.
4. Activate the condition in the __Status__ field.
5. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
6. Click `Save`.

After following the indicated steps, Wepay4u may take up to 10 minutes to appear at your store's checkout as a payment option.
