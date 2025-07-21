---
title: 'Setting up payments with Klap'
id: 7B4TwOrNX4R1AIpHpekdGH
status: PUBLISHED
createdAt: 2024-12-09T14:45:46.693Z
updatedAt: 2024-12-09T16:54:46.681Z
publishedAt: 2024-12-09T16:54:46.681Z
firstPublishedAt: 2024-12-09T15:18:39.203Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-klap
locale: en
legacySlug: setting-up-payments-with-klap
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Klap payment provider.

Through this provider, your store can make sales using different payment methods, such as Klap.

To configure Klap, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **klap** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account klap.
5. If you wish to modify the identification name to be displayed for the Klap provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the __Automatic settlement__ field, select one of the following option:
<br>
<ul>
<br>
    	<li><b>Use behavior recommended by the payment processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic capture immediately after anti-fraud analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>     
   		<li><b>Disabled</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
8. In **Provider Fields**, configure the fields **Modo**, **Api key**, and **URL Tienda** according to the provider`s instructions.
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click **Klap**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, klap may take up to 10 minutes to appear at your store`s checkout as a payment option.

