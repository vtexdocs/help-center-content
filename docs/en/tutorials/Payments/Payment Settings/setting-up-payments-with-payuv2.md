---
title: 'Setting up payments with PayUv2'
id: 7twMgKUZZtJGmR72wS1k3n
status: PUBLISHED
createdAt: 2024-03-08T18:30:40.587Z
updatedAt: 2024-03-13T15:35:06.533Z
publishedAt: 2024-03-13T15:35:06.533Z
firstPublishedAt: 2024-03-08T18:47:05.125Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payuv2
locale: en
legacySlug: setting-up-payments-with-payuv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PayUv2 payment provider. With this provider, your store can make sales through cards (credit, debit, private label, cob-branded), notes payable and bank slips.

To configure PayUv2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PayUv2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account PayUv2.
5. If you wish to modify the identification name to be displayed for the PayUv2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. If you want to use [payment split](/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
9. In __Provider Fields__, in the __Tipo Authorizacion__ field, select whether your payment transactions are executed in one- or two-step flows. For one-step flows, select __Autorizacion y Captura__. For two-step flows, select __Pre-Autorizacion__.
10. In __Public Key__, enter your PayU API key.
11. In __Idioma__, select which language should be used in the PayU system.
12. In __Expiración pago (días)__, select the period in which you want to configure the expiration of payments made by notes payable.
13. Click `Save`.

To configure the payment methods to be processed by PayUv2, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PayUv2 may take up to 10 minutes to appear at your store's checkout as a payment option.
