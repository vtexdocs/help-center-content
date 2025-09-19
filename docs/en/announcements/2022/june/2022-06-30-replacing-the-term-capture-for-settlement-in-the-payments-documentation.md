---
title: 'Replacing the term “capture” for “settlement” in the Payments documentation'
id: 5tHBUvz9YtE030Hp81LVXS
status: PUBLISHED
createdAt: 2022-06-30T20:10:32.273Z
updatedAt: 2022-07-19T19:15:52.201Z
publishedAt: 2022-07-19T19:15:52.201Z
contentType: updates
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2022-06-30-replacing-the-term-capture-for-settlement-in-the-payments-documentation
locale: en
legacySlug: replacing-the-term-capture-for-settlement-in-the-payments-documentation
announcementImageID: 'undefined'
announcementSynopsisEN: 'The "capture" term was replaced by "settlement" throughout the documentation in the Payments context'
---

The term “capture” (and variants like: “to capture,” “captured”) was replaced with “settlement” (and the equivalent variants like: “to settle,” “settled”) throughout the Payments documentation to better align the text with platform behavior.

## Why did we make this change?

The term “capture” is used in the market to refer to the moment in which a card payment is captured, as in the billing in the credit card invoice. In a card payment, the payment authorization happens first, which is when funds are reserved. After that, the capture of the reserved funds takes place, in other words, the amount transferred.

The settlement process on the VTEX side ([Settle Payment](https://developers.vtex.com/vtex-rest-api/reference/settlepayment) endpoint) does not actually do a capture, i.e., it does not transfer the payment amount, but it does verify if the transfer was completed by the payment provider.

With other payment methods, like Pix or _boleto_ (Brazilian offline payment method), the amount transfer happens in the platform, but it is not processed as a capture because the funds were not reserved during the authorization step. We are using the term “settlement” to encompass all these different scenarios, as well as to convey that our platform only verifies if the process was completed.

This replacement reflects the changes that were applied to the Developer Portal. For more information, check our[ release note](https://developers.vtex.com/vtex-developer-docs/changelog/replace-capture-term-for-settlement-in-the-payment-provider-protocol) about the update.

## What needs to be done?

No action is required. It is only a change in the documentation. Nothing changed in how the platform works. You can continue your activities as usual.

There is more information available about how settlement works in Payments in the article[ Transaction flow in Payments](/pt/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ).
