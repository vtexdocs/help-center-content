---
title: 'Setting up payments with Braintree'
id: 3Is3N2MmTldXPa2FtiV8xy
status: PUBLISHED
createdAt: 2022-08-11T12:01:04.231Z
updatedAt: 2025-04-09T16:56:31.243Z
publishedAt: 2025-04-09T16:56:31.243Z
firstPublishedAt: 2022-08-11T12:27:01.656Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-braintree
locale: en
legacySlug: setting-up-payments-with-braintree
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Braintree.
Through this provider, your store can make sales throughc credit and debit cards.

To configure Braintree-DCC, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Braintree-DCC__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the registration fields __App key__ and __App token__ with the data provided by Braintree.
5. If you wish to modify the identification name to be displayed for the Braintree provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. In __Provider Fields__, select or complete the __Change Order Single Charge__, __PayPal Client ID (opcional)__, __Merchant Id (Braintree)__, __PayPal Secret (opcional)__, __PayPal Merchant ID (opcional)__, __Send line items?__ and __Merchant Account Id (opcional)__ fields with your Braintree account information.
9. Click `Save`.

To set up payment conditions, access [Configure special payment conditions](/en/tutorial/condicoes-de-pagamento).

After following the indicated steps, Braintree-DCC may take up to 10 minutes to appear at your store's checkout as a payment option.
