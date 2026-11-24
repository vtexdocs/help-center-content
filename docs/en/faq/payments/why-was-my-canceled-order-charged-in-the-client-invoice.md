---
title: 'Why was my canceled order charged on the customer invoice?'
excerpt: "If the connector refuses automatic reversal after approval, Payments emails you to refund the charge manually in the provider."
id: frequentlyAskedQuestions_492
status: PUBLISHED
createdAt: 2017-04-27T22:34:48.023Z
updatedAt: 2024-08-13T18:57:07.052Z
publishedAt: 2024-08-13T18:57:07.052Z
firstPublishedAt: 2017-04-27T23:02:22.399Z
contentType: frequentlyAskedQuestion
productTeam: Payments
author: authors_84
slugEN: why-was-my-canceled-order-charged-in-the-client-invoice
locale: en
legacySlug: why-was-my-cancelled-order-charged-in-the-client-invoice
---

When an order is canceled, Orders asks Payments to cancel the order. If payment was already approved, Payments asks the connector for an automatic reversal so the charge does not appear on the customer's invoice.

The connector may refuse that automatic reversal. In that case, Payments emails the address registered in the VTEX Admin under **Store Settings > Payments > Settings**, on the **Notifications** tab. The email asks you to reverse the transaction manually in the connector. Payments also creates a task in [VTEX DO](/en/docs/tutorials/vtex-do-interface), which you can open in Payments or in Orders.

When Payments sends that email, the transaction interaction includes this message:

Source Message: `The e-mail with subject gateway-manual-reversal-requested has been successfully sent to user@store.com`.

If you see this message after a cancel-and-reverse attempt on a transaction that was already approved or settled, the connector did not complete an automatic reversal. You must reverse it manually.
