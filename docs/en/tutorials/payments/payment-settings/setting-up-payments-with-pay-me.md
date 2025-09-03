---
title: 'Setting up payments with Pay-me'
id: 17wyyNSVSQ9RYnuoCUWZIl
status: PUBLISHED
createdAt: 2024-10-18T18:38:17.444Z
updatedAt: 2025-01-09T20:03:22.289Z
publishedAt: 2025-01-09T20:03:22.289Z
firstPublishedAt: 2024-10-18T18:41:53.033Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pay-me
legacySlug: setting-up-payments-with-pay-me
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Pay-me payment provider. With this provider, your store can make sales through credit and debit cards, and Flex.

To configure Pay-me, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Pay-me__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Pay-me.
5. If you wish to modify the identification name to be displayed for the Pay-me provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the __Automatic settlement__ field, select one of the following option:
<br>
<ul>
<br>
    	<li>**Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li>**Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li>**Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>     
   		<li>**Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
8. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
9. In __Provider Fields__, configure the fields __Merchant Code__, __Aceptar pagos con Tarjetas__, __Aceptar pagos con Billeteras Móviles (QR)__, __Aceptar pagos con Yape__ , __Aceptar pagos con Cuotéalo__, __Aceptar pagos con Transferencia Bancaria__ and __Aceptar pagos con PagoEfectivo__ according to the provider's instructions.
10. Click `Save`.

To configure the payment methods to be processed by Pay-me, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Pay-me may take up to 10 minutes to appear at your store's checkout as a payment option.
