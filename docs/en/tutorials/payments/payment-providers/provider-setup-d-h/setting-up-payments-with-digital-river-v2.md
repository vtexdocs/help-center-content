---
title: 'Setting up payments with Digital River V2'
id: 5dlXHutd9Ik6vtN3WP7GRP
status: PUBLISHED
createdAt: 2022-02-17T12:11:27.726Z
updatedAt: 2025-08-26T18:33:22.831Z
publishedAt: 2025-08-26T18:33:22.831Z
firstPublishedAt: 2022-02-17T13:44:17.095Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-digital-river-v2
legacySlug: setting-up-payments-with-digital-river-v2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Digital River V2 payment provider.  With this provider, your store can make sales through several [payment methods](https://www.digitalriver.com/payment-method-guide/).

To configure Digital River V2, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **DigitalRiverV2** in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by Digital River V2.
5. If you wish to modify the identification name to be displayed for the Digital River V2 provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Choose the payment condition **DigitalRiver**.
4. Fill the **Rule Name** field with a name of your choice for identification.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud**.
7. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Click `Save`.

After following the indicated steps, Digital River V2 connector may take up to 10 minutes to appear at your store's checkout as a payment option.
