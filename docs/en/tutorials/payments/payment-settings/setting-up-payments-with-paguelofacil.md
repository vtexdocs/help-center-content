---
title: 'Setting up payments with Paguelofacil'
createdAt: 2026-07-09T00:00:00.000Z
createdAt: 2026-07-09T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-paguelofacil
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Paguelofacil payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard e Paguelofacil.

To configure Paguelofacil, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Paguelofacil** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Paguelofacil.
5. If you wish to modify the identification name to be displayed for the Paguelofacil provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Provider Fields**, complete the field **WEB_CODE** according to the provider's instructions.
9. Click `Save`.

To configure the payment methods to be processed by Paguelofacil, access [Configuring Payment Conditions](https://help.vtex.com/pt/docs/tutorials/condicoes-de-pagamento).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/docs/tutorials/special-conditions).

After following the indicated steps, Paguelofacil may take up to 10 minutes to appear at your store's checkout as a payment option.
