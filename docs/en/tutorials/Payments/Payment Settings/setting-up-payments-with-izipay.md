---
title: 'Setting up payments with Izipay'
id: 7bGGw6A9xidRfaOhOU1Ibd
status: PUBLISHED
createdAt: 2024-10-11T13:44:41.815Z
updatedAt: 2025-02-04T16:55:34.406Z
publishedAt: 2025-02-04T16:55:34.406Z
firstPublishedAt: 2024-10-11T14:23:38.542Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-izipay
locale: en
legacySlug: setting-up-payments-with-izipay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Izipay payment provider. With this provider, your store can make sales through izipay.

To configure Izipay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __izipay__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Izipay.
5. If you wish to modify the identification name to be displayed for the Izipay provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the __Automatic settlement__ field, select one of the following option:
<ul>
    	<li><b>Use behavior recommended by the payment processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform`s default behavior).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
    	<li><b>Automatic capture immediately after anti-fraud analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>
    	<li><b>Disabled</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

8. If you want to use [payment split](/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
9. In __Provider Fields__, configure the fields __pay.method__, __url.notification__, __language__, __appearance.logo__,  __appearance.customTheme.colors.backgroundColor__, __appearance.customTheme.colors.textColor__ and __modalidad__ according to the provider's instructions.
10. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __izipay__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, Izipay may take up to 10 minutes to appear at your store's checkout as a payment option.
