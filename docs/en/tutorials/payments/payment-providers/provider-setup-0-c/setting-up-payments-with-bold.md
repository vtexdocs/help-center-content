---
title: 'Setting up payments with Bold'
createdAt: 2026-07-26T00:00:00.000Z
updatedAt: 2026-07-26T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-bold
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Bold payment provider. With this provider, your store can make sales through Paga en línea con Bold.

To configure Bold, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Bold** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Bold.
5. If you wish to modify the identification name to be displayed for the Bold provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.
8. In **Provider Fields**, select or complete the fields **account_name** according to the provider's  instructions.
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the __+__ button.
3. Click on **Paga en línea con Bold**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/docs/tutorials/special-conditions).
7. Click `Save`.

After following the indicated steps, Bold may take up to 10 minutes to appear at your store's checkout as a payment option.
