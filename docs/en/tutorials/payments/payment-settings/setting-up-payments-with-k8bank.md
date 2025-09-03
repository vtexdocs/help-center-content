---
title: 'Setting up payments with K8Bank'
id: 1ewZll1fwjClvp5Wl1uES1
status: PUBLISHED
createdAt: 2023-09-18T13:14:17.375Z
updatedAt: 2024-01-23T17:56:32.780Z
publishedAt: 2024-01-23T17:56:32.780Z
firstPublishedAt: 2023-09-18T13:48:29.694Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-k8bank
legacySlug: setting-up-payments-with-k8bank
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the K8Bank payment provider. With this provider, your store can make sales through a credit, debit, private labels and cobranded cards, bank invoices and PIX.

To configure K8Bank, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __K8Bank__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__, __Application Token__, __cnpj__ and __CobrancasClientId__ fields with the data provided by K8Bank.
5. In the __Payment capture__ field, select one of the following option:
<br>
<ul>
<br>
    	<li>**Use Behavior Recommended By The Payment Processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li>**Immediate: Automatic Capture Immediately After Payment Authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li>**Immediate: Automatic Capture Immediately After Anti-fraud Analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic Capture Immediately After Payment Authorization".</li>
   		<li>**Scheduled: Schedules The Automatic Capture**: By selecting this option, the field **Scheduled time frame in hours for automatic capture** will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.</li>        
   		<li>**Deactivated: Not Automatically Captured**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
6. In __Enable payout split and sending payment recipients?__, select whether split payments will be available for the marketplace and sellers.

7. Click on the `Save` button.

To configure the payment methods to be processed by K8Bank, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, K8Bank connector may take up to 10 minutes to appear at your store's checkout as a payment option.
