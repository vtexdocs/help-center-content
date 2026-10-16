---
title: 'Setting up payments with PoleCMS'
id: 12Wyet40HSrq5ImonyRDRu
status: PUBLISHED
createdAt: 2025-05-30T16:44:23.741Z
updatedAt: 2025-08-18T15:10:32.788Z
publishedAt: 2025-08-18T15:10:32.788Z
firstPublishedAt: 2025-05-30T17:05:56.692Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-polecms
legacySlug: setting-up-payments-with-polecms
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the PoleCMS payment provider. With this provider, your store can make sales through PayZen.

To configure PoleCMS, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the **New Provider** button.
3. Type the name **PoleCMS** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with with your PoleCMS account information.
5. If you wish to modify the identification name to be displayed for the PoleCMS provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Provider Fields**, select or complete the fields **Clave pública**, **Clave HMAC-SHA-256**, **Pago por token**, **Modo de ingreso de datos de pago**, **Número de intentos de pago con tarjeta**, **Tema**, and **Modo compacto** according to the provider's  instructions.
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the __+__ button.
3. Click on **PayZen**.
4. Activate the condition in the **Status** field.
5. Under **Process with provider**, select the **PoleCMS** option.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
7. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Click on `Save`.

After following the indicated steps, PoleCMS may take up to 10 minutes to appear at your store's  checkout as a payment option.
