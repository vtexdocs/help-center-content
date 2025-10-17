---
title: 'Setting up payments with Payway'
id: wHkvX7olfPPsAdeFq7obp
status: PUBLISHED
createdAt: 2024-03-07T17:04:59.563Z
updatedAt: 2025-10-17T13:16:58.271Z
publishedAt: 2025-10-17T13:16:58.271Z
firstPublishedAt: 2024-03-07T19:10:55.092Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payway
legacySlug: setting-up-payments-with-payway
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Payway payment provider. With this provider, your store can make sales through PayWay, cards (credit, debit, private label, co-branded), notes payable and bank slips.

To configure Payway, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Payway__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account Payway.
5. If you wish to modify the identification name to be displayed for the Payway provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. In __Provider Fields__, configure the fields __Site ID__, __Api Key Public__, __Api Key Private__, __Payment type__, __Do you use Cybersource?__, __Cuotas MiPyme__, __Plan Z__, __Límite Superior de Captura Permitido (%)__ and __Límite Inferior de Captura Permitido (%)__ according to the provider's instructions.
9. Click `Save`.

To configure the payment methods to be processed by Payway, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Payway may take up to 10 minutes to appear at your store's checkout as a payment option.
