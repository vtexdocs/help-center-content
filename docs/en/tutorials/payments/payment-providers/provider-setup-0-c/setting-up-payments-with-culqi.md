---
title: 'Setting up payments with Culqi'
id: 6LUOpYBpg48XSL8X0Le6e3
status: PUBLISHED
createdAt: 2023-11-16T13:31:38.132Z
updatedAt: 2025-08-26T18:27:28.927Z
publishedAt: 2025-08-26T18:27:28.927Z
firstPublishedAt: 2023-11-16T14:54:41.647Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-culqi
legacySlug: setting-up-payments-with-culqi
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Culqi payment provider. With this provider, your store can make sales through the Culqi.

To configure Culqi, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Culqi** in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by Culqi.
5. If you wish to modify the identification name to be displayed for the Culqi provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Provider Fields**, complete the field **platform** according to the provider's  instructions.
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Choose the payment condition **Culqi**.
4. Fill the **Rule Name** field with a name of your choice for identification.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud**.
7. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Click `Save`.

After following the indicated steps, Culqi may take up to 10 minutes to appear at your store's checkout as a payment option.
