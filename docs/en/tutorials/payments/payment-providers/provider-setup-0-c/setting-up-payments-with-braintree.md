---
title: 'Setting up payments with Braintree'
id: 3Is3N2MmTldXPa2FtiV8xy
status: PUBLISHED
createdAt: 2022-08-11T12:01:04.231Z
updatedAt: 2025-04-09T16:56:31.243Z
publishedAt: 2025-04-09T16:56:31.243Z
firstPublishedAt: 2022-08-11T12:27:01.656Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-braintree
legacySlug: setting-up-payments-with-braintree
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Braintree.
Through this provider, your store can make sales throughc credit and debit cards.

To configure Braintree-DCC, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Braintree-DCC** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the registration fields **App key** and **App token** with the data provided by Braintree.
5. If you wish to modify the identification name to be displayed for the Braintree provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Provider Fields**, select or complete the **Change Order Single Charge**, **PayPal Client ID (opcional)**, **Merchant Id (Braintree)**, **PayPal Secret (opcional)**, **PayPal Merchant ID (opcional)**, **Send line items?** and **Merchant Account Id (opcional)** fields with your Braintree account information.
9. Click `Save`.

To set up payment conditions, access [Configure special payment conditions](/en/tutorial/condicoes-de-pagamento).

After following the indicated steps, Braintree-DCC may take up to 10 minutes to appear at your store's checkout as a payment option.
