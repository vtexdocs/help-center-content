---
title: 'Setting up payments with e-Sitef'
id: 6UEi0QAlU6BXz5RgWj34Ac
status: PUBLISHED
createdAt: 2021-12-06T14:51:20.250Z
updatedAt: 2024-03-14T16:59:21.753Z
publishedAt: 2024-03-14T16:59:21.753Z
firstPublishedAt: 2021-12-06T17:37:55.667Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-e-sitef
legacySlug: setting-up-payments-with-e-sitef
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the e-Sitef payment provider. With this provider, your store can make sales through credit, debit, private labels and cobranded cards, and PIX.

To configure e-Sitef, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __ESITEF__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by e-Sitef.
5. If you wish to modify the identification name to be displayed for the e-Sitef provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
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
8. In __Captura antecipada (em horas)__, choose how long you want the capture to take place (after the transaction is approved). You can also disable the function.
9. In __Alterar tempo máximo para captura automática (em dias)__, fill in the maximum period of days in which the auto-capture should take place.
10. In __Soft Descriptor__, you can enter a custom string (characters) which will be printed on the customer's invoice.
11. In __Habilitar Pré-autorização__, select if you want orders made with a credit card to have the reserved amount (capture pre-authorized after transaction approval).
12. In the __Captura antecipada após anti-fraude (em horas)__ field, choose how long you want the capture to take place (after anti-fraud analysis). You can also disable the function.
13. Click `Save`.

To configure the payment methods to be processed by e-Sitef, access [Configuring payment conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, e-Sitef may take up to 10 minutes to appear at your store's checkout as a payment option.
