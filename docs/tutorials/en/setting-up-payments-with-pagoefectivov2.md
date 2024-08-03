---
title: 'Setting up payments with PagoEfectivoV2'
id: 63Raoh7hlWoWbMJOAacfMV
status: PUBLISHED
createdAt: 2024-02-06T11:22:25.720Z
updatedAt: 2024-03-13T15:08:00.716Z
publishedAt: 2024-03-13T15:08:00.716Z
firstPublishedAt: 2024-02-06T11:40:45.294Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-pagoefectivov2
locale: en
legacySlug: setting-up-payments-with-pagoefectivov2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PagoEfectivoV2 payment provider. With this provider, your store can make sales through Cuotealo and PagoEfectivo.

To configure PagoEfectivoV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagoEfectivoV2__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account PagoEfectivoV2.
5. If you wish to modify the identification name to be displayed for the PagoEfectivoV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. In __Provider Fields__, enter the __TradeID__, __TradeName__, __TradeEmail__ and __MaxActiveCipTime__ information according to your PagoEfectivoV2 account information.

9. In __Country__, select the country where the payment transaction will be carried out.

10. In __Currency__, select the currency to be used in the payment transaction.

11. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __PagoEfectivo__ or __Cuotealo__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, PagoEfectivoV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
