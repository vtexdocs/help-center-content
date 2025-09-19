---
title: 'Setting up payments with Bamboo-Payments'
id: 33TDZBp1wmgzJdiZtvu1xY
status: PUBLISHED
createdAt: 2022-08-12T20:06:37.117Z
updatedAt: 2025-02-26T15:02:53.268Z
publishedAt: 2025-02-26T15:02:53.268Z
firstPublishedAt: 2022-08-12T20:13:31.863Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-bamboo-payments
legacySlug: setting-up-payments-with-bamboo-payments
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Bamboo-Payments provider. With this provider, your store can make sales through a credit, debit, private labels and cobranded cards, and bank invoices.

To configure Bamboo-Payments, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Bamboo-Payments__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Bamboo-Payments.
5. If you wish to modify the identification name to be displayed for the Bamboo-Payments provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. In __Provider Fields__, fill in the __Ingrese su llave privada__ field with your Bamboo-Payments account information.
9. In __Habilitar autorización y captura__, __País de operación__, __Límite Superior de Captura Permitido (%)__ and __Límite Inferior de Captura Permitido (%)__ select the desired options.
10. Click __Save__.

To configure the payment methods to be processed by Bamboo-Payments, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Bamboo-Payments may take up to 10 minutes to appear at your store's checkout as a payment option.
