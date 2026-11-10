---
title: 'Configuring Tuna gateway affiliation'
id: 5Db0j4pE76ma9pUvYuAhfF
status: PUBLISHED
createdAt: 2021-07-07T14:47:34.162Z
updatedAt: 2024-01-23T21:47:01.684Z
publishedAt: 2024-01-23T21:47:01.684Z
firstPublishedAt: 2021-07-07T14:57:45.358Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-tuna-gateway-affiliation
legacySlug: configuring-tuna-gateway-affiliation
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can configure your store with the Tuna gateway to receive payments through: bank invoice, debit and credit cards, PIX, Bitcoin, Privatelabels, Google Pay, Apple Pay, OXXO and Pagaleve options.

> ⚠️ You can integrate your store with Tuna via **App Key** and **App token**. To receive this information, you need to create your account first. To do so, please fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLScWk5fsmkIfGaW2Z6qhdGH-JJ5iU6Fv5TGghUR1Pod5dY5Z2Q/viewform) and wait to be contacted by Tuna with more details.

Once you have created your account and obtained the **App Key** and **Application Token**, follow the steps below to configure Tuna in your store:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Tuna** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App token** fields with data provided by Tuna.
5. If you wish to modify the identification name to be displayed for the Tuna provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor:** Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization:** Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis:** Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled:** Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

7. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option Enable payout split and send payment recipients and indicate the Accountable for payment processing charges and Accountable for chargebacks (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

After completing the configuration steps on the VTEX platform, access the Tuna [Console](https://dev.tuna.uy/console?utm_medium=docs&utm_source=vtex&utm_content=console&utm_campaign=docs) and create at least one payment flow. This is necessary to start processing payments using the solution.

For more details about this configuration, see Tuna’s [documentation](https://dev.tuna.uy/docs/console/).

## Configuring a payment condition

Once you have completed the steps above, Tuna will be ready to be used in your store. It will be available in the **Process with provider** field — provided that the payment method is compatible with **Tuna** — when creating a payment condition.

Learn more in the article [Configuring payment conditions](/en/tutorial/condicoes-de-pagamento).
