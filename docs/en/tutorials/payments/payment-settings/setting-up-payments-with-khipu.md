---
title: 'Setting up payments with Khipu'
id: RcHQjURWDXa0doL15DiUj
status: PUBLISHED
createdAt: 2023-03-24T19:34:06.675Z
updatedAt: 2024-01-24T17:53:53.676Z
publishedAt: 2024-01-24T17:53:53.676Z
firstPublishedAt: 2023-03-30T14:08:54.819Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-khipu
legacySlug: setting-up-payments-with-khipu
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Khipu payment provider. With this provider, your store can make sales through Notes Payable.

To configure Khipu, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Khipu**  in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App token** fields with data provided by Khipu.
5. If you wish to modify the identification name to be displayed for the Khipu provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. Click `Save`.

## Setting up Notes Payable

If you have not yet configured the Notes Payable as a payment method in other connectors in your store, go to [Setting up payments with Notes Payable](/en/tutorial/setting-up-payments-with-notes-payable).

## Setting up payment condition 

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the Notes Payable payment method (configured in the previous section).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __srconsultores-khipu-v0__.
6. If you wish, you can also configure [payment special conditionso](/en/docs/tutorials/special-conditions).
7. Click on `Save`.

After following the indicated steps, Khipu may take up to 10 minutes to appear at your store's checkout as a payment option.
