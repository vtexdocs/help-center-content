---
title: 'Setting up payments with EvoPayments'
id: 7CxSgoftps0DHsfR8otQMf
status: PUBLISHED
createdAt: 2024-03-11T17:36:12.910Z
updatedAt: 2024-03-14T16:37:46.611Z
publishedAt: 2024-03-14T16:37:46.611Z
firstPublishedAt: 2024-03-11T18:19:00.757Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-evopayments
legacySlug: setting-up-payments-with-evopayments
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the EVO Payments payment provider. With this provider, your store can make sales through credit, debit, private labels and cobranded cards, and bank invoices.

To configure EVO Payments, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **EvoPayments** in the search bar and click on the name of the provider.
4. Fill in the **App key** and **App token** fields with data provided by EVO Payments.
5. If you wish to modify the identification name to be displayed for the EVO Payments provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Habilitar autenticación 3DS**, select whether you want to enable 3DS security validation.
8. In **Habilitar autorización y captura**, select whether you want to activate this function.
9. In **Habilitar plan Iphone For Life**, select whether you want to activate this option.
10. Click `Save`.

To configure the payment methods to be processed by EVO Payments, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, EVO Payments may take up to 10 minutes to appear at your store's checkout as a payment option.
