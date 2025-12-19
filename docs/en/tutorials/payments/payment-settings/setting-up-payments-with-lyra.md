---
title: 'Setting up payments with LyraNetwork'
id: 1FlJmbVEqF8KJ5ueZUpCWM
status: PUBLISHED
createdAt: 2022-10-18T13:23:05.314Z
updatedAt: 2025-10-17T14:02:46.504Z
publishedAt: 2025-10-17T14:02:46.504Z
firstPublishedAt: 2022-10-18T16:31:23.474Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-lyra
legacySlug: setting-up-payments-with-lyra
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the LyraNetwork payment provider.Through this provider, your store can make sales using Lyra.

To configure LyraNetwork, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **LyraNetwork** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Lyra.
5. If you wish to modify the identification name to be displayed for the Lyra provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Provider Fields**, select or complete the fields **Clave pública, Clave HMAC-SHA-256, Pago por token, Modo de ingreso de datos de pago, Número de intentos de pago con tarjeta, Tema, Modo compacto** according to the provider's instructions.
9. Click `Save`.

## Setting up Lyra payment condition 

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click __Lyra__ option.
4. On the configuration page, activate the condition by clicking __Status__.
5. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
6. If necessary, you can also [configure special payment conditions](/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Lyra may take up to 10 minutes to appear at your store's checkout as a payment option.
