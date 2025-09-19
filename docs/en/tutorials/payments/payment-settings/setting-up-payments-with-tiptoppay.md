---
title: 'Setting up payments with TipTopPay'
id: 6dCm2Qe7Xe9qWs7Vb7DC73
status: PUBLISHED
createdAt: 2024-12-11T18:35:47.682Z
updatedAt: 2024-12-11T18:42:33.314Z
publishedAt: 2024-12-11T18:42:33.314Z
firstPublishedAt: 2024-12-11T18:42:33.314Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-tiptoppay
legacySlug: setting-up-payments-with-tiptoppay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the TipTopPay payment provider.

Through this provider, your store can make sales using different payment methods, such as TipTopPay.

To configure TipTopPay, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **TipTopPay** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account TipTopPay.
5. If you wish to modify the identification name to be displayed for the TipTopPay provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
<ul>
    	<li>**Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform`s default behavior).</li>
    	<li>**Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
    	<li>**Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>
    	<li>**Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

8. In **Provider Fields**, select or complete the fields **Public ID** y **API Password** according to the provider`s instructions.
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __TipTopPay__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, TipTopPay may take up to 10 minutes to appear at your store's checkout as a payment option.
