---
title: 'Setting up payments with Culqi'
id: 6LUOpYBpg48XSL8X0Le6e3
status: PUBLISHED
createdAt: 2023-11-16T13:31:38.132Z
updatedAt: 2024-01-25T19:01:02.616Z
publishedAt: 2024-01-25T19:01:02.616Z
firstPublishedAt: 2023-11-16T14:54:41.647Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-culqi
legacySlug: setting-up-payments-with-culqi
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Culqi payment provider. With this provider, your store can make sales through the Culqi.

To configure Culqi, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Culqi__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__, __Application Token__ and __Public Key__ fields with the data provided by Culqi.
5. In the __Payment settlement__ field, select one of the following option:
<br>
<ul>
<br>
    	<li><b>Use Behavior Recommended By The Payment Processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li><b>Automatic Capture Immediately After Payment Authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic Capture Immediately After Anti-fraud Analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic Capture Immediately After Payment Authorization".</li>
   		<li><b>Scheduled: Schedules The Automatic Capture</b>: By selecting this option, the field <b>Scheduled time frame in hours for automatic capture</b> will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.</li>        
   		<li><b>Deactivated: Not Automatically Captured</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
6. In __Aceptar tarjetas de crédito__, select whether you want to accept credit cards as a payment method.
7. In __Aceptar YAPE__, select whether you want to accept [YAPE](https://www.yape.com.pe/) as a payment method.
8. In __Aceptar billeteras móviles__, select whether you want to accept digital wallets as a payment method.
9. In __Aceptar banca móvil o internet__, select whether you want to accept payments via mobile devices and internet banking.
10. In __Aceptar agentes y bodegas__, select whether you want to accept payments via agents and bodegas (warehouses).
11. In __Aceptar cuotéalo BCP__, select whether you want to accept payments in installments via [cuotéalo BCP](https://www.viabcp.com/cuotealo).
12. In __Tiempo de expiración de pago__, select the period (in days) for payments to expire.
13. In the __URL de logo__, __Tema elegido__, __RSA Id__, __Llave pública RSA__, __Usuario Webhook__ and __Password Webhook__ fields, enter the information provided by Culqi.
14. In __Ativar divisão e enviar recebedores?__, select whether split payments will be available for the marketplace and sellers.
15. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings__ > __Payment__ > __Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Choose the payment condition __Culqi__.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Click `Save`.

After following the indicated steps, Culqi may take up to 10 minutes to appear at your store's checkout as a payment option.
