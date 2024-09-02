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
slug: configuring-tuna-gateway-affiliation
locale: en
legacySlug: configuring-tuna-gateway-affiliation
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can configure your store with the Tuna gateway to receive payments through: bank invoice, debit and credit cards, PIX and Bitcoin.

<div class="alert alert-warning">
  You can integrate your store with Tuna via <b>Application Key</b> and <b>Application Token.</b> To receive this information, you need to create your account first. To do so, please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLScWk5fsmkIfGaW2Z6qhdGH-JJ5iU6Fv5TGghUR1Pod5dY5Z2Q/viewform">this form</a> and wait to be contacted by Tuna with more details.
  </div>

Once you have created your account and obtained the __Application Key__ and __Application Token__, follow the steps below to configure Tuna in your store:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Tuna__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Tuna.
5. In __Payment capture__, select one of the following options:

    - __Use behavior recommended by the payment processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior.)
    - __Automatic capture immediately after payment authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
    - __Automatic capture immediately after anti-fraud analysis__: capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in *Automatic capture immediately after payment authorization*.
    - __Deactivated: Not automatically captured__: capture takes place only when the order is invoiced. Please note that the payment will not be processed if invoicing is delayed and exceeds the capture period agreed with the payment provider.

<ui>
6. Click on <b>Save.</b>
 </ui>

After completing the configuration steps on the VTEX platform, access the Tuna [Console](https://dev.tuna.uy/console?utm_medium=docs&utm_source=vtex&utm_content=console&utm_campaign=docs) and create at least one payment flow. This is necessary to start processing payments using the solution.

For more details about this configuration, see Tuna’s [documentation](https://dev.tuna.uy/docs/console/).

## Configuring a payment condition

Once you have completed the steps above, Tuna will be ready to be used in your store. It will be available in the __Process with affiliation__ field — provided that the payment method is compatible with Tuna — when creating a payment condition. 

Learn more in the article [Configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).
