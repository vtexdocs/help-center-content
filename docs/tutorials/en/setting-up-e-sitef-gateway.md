---
title: Setting up e-Sitef gateway
id: 6UEi0QAlU6BXz5RgWj34Ac
status: PUBLISHED
createdAt: 2021-12-06T14:51:20.250Z
updatedAt: 2023-03-23T15:04:33.914Z
publishedAt: 2023-03-23T15:04:33.914Z
firstPublishedAt: 2021-12-06T17:37:55.667Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-e-sitef-gateway
legacySlug: setting-up-e-sitef-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can use the e-Sitef gateway to receive payments by credit cards, debit cards, and PIX. To configure this gateway, follow the steps below:

## Setting up e-SiTef gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
4. In the __Gateway affiliations__ tab, click on the __"+"__ button.
5. Click on the __ESITEF__ connector.
6. Fill in the __Application Key__ and __Application Token__ fields with the data provided by e-SiTef.
7. In the __Payment capture__ field, select one of the following option:
<br>
<ul>
<br>
    	<li><b>Use Behavior Recommended By The Payment Processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li><b>Automatic Capture Immediately After Payment Authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic Capture Immediately After Anti-fraud Analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic Capture Immediately After Payment Authorization".</li>
   		<li><b>Scheduled: Schedules The Automatic Capture</b>: By selecting this option, the field <b>Scheduled time frame in hours for automatic capture</b> will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.</li>        
   		<li><b>Deactivated: Not Automatically Captured</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
8. In the __Captura antecipada (em horas)__ field, choose how long you want the capture to take place (after the transaction is approved). You can also disable the function.
9. In the __Alterar tempo máximo para captura automática (em dias)__ field, fill in the maximum period of days in which the auto-capture should take place.
10. In __Soft Descriptor__, you can enter a custom string (characters) which will be printed on the customer's invoice.
11. In __Habilitar Pré-autorização__, select if you want orders made with a credit card to have the reserved amount (capture pre-authorized after transaction approval).
12. In the __Captura antecipada após anti-fraude (em horas)__ field, choose how long you want the capture to take place (after anti-fraud analysis). You can also disable the function.
13. Click on the __Save__ button.

## Setting up the payment condition
After following the steps indicated above, e-SiTef will be configured in your store. Thus, while you're registering a payment condition, it will be available in the Process with affiliation field (provided that the payment method is compatible with e-SiTef). 

For more on how to set up payment conditions, access [Configuring payment conditions](/en/tutorial/condicoes-de-pagamento).
