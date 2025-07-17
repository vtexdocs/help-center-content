---
title: 'Setting up payments with Worldline Global Online Pay'
id: 5LAfBIreDXYspNC0OScnL9
status: PUBLISHED
createdAt: 2025-07-02T14:54:36.207Z
updatedAt: 2025-07-02T18:05:48.881Z
publishedAt: 2025-07-02T18:05:48.881Z
firstPublishedAt: 2025-07-02T18:05:48.881Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-worldline-global-online-pay
locale: en
legacySlug: setting-up-payments-with-worldline-global-online-pay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Worldline Global Online Pay payment provider. With this provider, your store can make sales through credit cards, PayPal, Worldline Global Online Pay, MultiBanco, Bizum, Klarna Pay Later, Klarna, and Klarna Pay Now.

To configure Worldline Global Online Pay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Worldline Global Online Pay__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Worldline Global Online Pay.
5. If you wish to modify the identification name to be displayed for the Worldline Global Online Pay provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the **Automatic settlement** field, select one of the following option:
<ul>
    	<li><b>Use behavior recommended by the payment processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform`s default behavior).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
    	<li><b>Automatic capture immediately after anti-fraud analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>
    	<li><b>Disabled</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

8. In **Provider Fields**, select or complete the fields **Environment, Merchant ID, Webhooks Key, Webhooks Secret, Payment action, Automatic capture, Enable 3-D secure authentication, Request authentication exemption for low-value baskets, Enforce strong customer authentication for every payment, Enable group cards, Template file name, Oney3x4x payment option, Session Timeout, Direct Debit Recurrence Type, Direct Debit Signature Type, Bank transfer by Worldline Instant payment only** according to the provider`s instructions.
9. Click `Save`.

To configure the payment methods to be processed by Worldline Global Online Pay, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Worldline Global Online Pay may take up to 10 minutes to appear at your store's checkout as a payment option.
