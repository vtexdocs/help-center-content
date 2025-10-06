---
title: 'Setting up payments with ePayco'
id: 10YSD8qlJJmkX8rCgOYSEC
status: PUBLISHED
createdAt: 2024-12-10T20:09:18.746Z
updatedAt: 2025-07-02T20:17:06.460Z
publishedAt: 2025-07-02T20:17:06.460Z
firstPublishedAt: 2024-12-10T20:24:14.348Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-epayco
legacySlug: setting-up-payments-with-epayco
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the ePayco payment provider.

Through this provider, your store can make sales using different payment methods, such as Mastercard, Visa, American Express, Diners, Promissories, PSE, Efecty, Sured, Discover, JCB, Daviplata, Red Servi, Punto Red, Gana, EpaycoRedirect and EpaycoTransparent.

To configure ePayco, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **epayco** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account ePayco.
5. If you wish to modify the identification name to be displayed for the ePayco provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
<br>
<ul>
<br>
    	<li>**Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li>**Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
    	<li>**Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>
    	<li>**Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

8. In **Provider Fields**, complete the fields **PUBLIC_KEY** and **PRIVATE_KEY** according to the provider's  instructions.
9. Click `Save`.

To configure the payment methods to be processed by ePayco, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, ePayco may take up to 10 minutes to appear at your store's  checkout as a payment option.
