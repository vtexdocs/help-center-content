---
title: 'Setting up payments with Credimarcas'
id: 78855lTT6A1vX2wFURmxV
status: PUBLISHED
createdAt: 2023-12-18T13:12:50.542Z
updatedAt: 2023-12-18T14:09:15.538Z
publishedAt: 2023-12-18T14:09:15.538Z
firstPublishedAt: 2023-12-18T14:09:15.538Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-credimarcas
legacySlug: setting-up-payments-with-credimarcas
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Credimarcas payment provider. With this connector, your store can make sales through Notes Payable and Private Labels cards.

To configure Credimarcas provider, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **credimarcas** in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by Credimarcas.
5. If you wish to modify the identification name to be displayed for the Credimarcas provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Type Payment**, select whether the payment will be made via "Payment App" or "Redirect".
9. If an alert message appears indicating the need to install the app, click on the **Install app** button and follow the installation instructions.
10. Click `Save`.

## Setting up Notes Payable

> ⚠️ If you have not yet configured the Notes Payable as a payment method in other connectors in your store, go to [Setting up payments with Notes Payable](/en/docs/tutorials/setting-up-payments-with-notes-payable).

To use Credimarcas with notes payable, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. On **Custom Payment**, click the button corresponding to the name used for the Notes Payable payment method (previously configured).
4. Activate the condition in the **Status** field.
5. On **Process with affiliation**, select **confepartnerco-credimarcas-v0**.
6. If you wish, you can also configure [payment special conditions](/en/docs/tutorials/special-conditions).
7. Click on `Save`.

## Setting up Private label

To use Credimarcas with private labels cards, access [Setting up Private Label payments](/en/docs/tutorials/setting-up-private-label-payments).

After following the indicated steps, Credimarcas connector may take up to 10 minutes to appear at your store's checkout as a payment option.
