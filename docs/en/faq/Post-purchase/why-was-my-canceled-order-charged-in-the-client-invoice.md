---
title: 'Why was my canceled order charged in the client invoice?'
id: frequentlyAskedQuestions_492
status: PUBLISHED
createdAt: 2017-04-27T22:34:48.023Z
updatedAt: 2024-08-13T18:57:07.052Z
publishedAt: 2024-08-13T18:57:07.052Z
firstPublishedAt: 2017-04-27T23:02:22.399Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-was-my-canceled-order-charged-in-the-client-invoice
locale: en
legacySlug: why-was-my-cancelled-order-charged-in-the-client-invoice
---

Usually, when an order is cancelled, the orders module communicates with the payments module for cancellation of the order. When this occurs after the payment has been approved, the payments module communicates with the connector requesting an automatic reversal of the payment, so that it is not charged in the client’s invoice.

However, the connector may not always authorize the automatic reversal and return this information to the module. So, the payments module sends an email to the user registered in VTEX Admin in **Store Settings > Payments > Settings**, in the  **Notifications** tab. The email informs the need to make the manual reversal in the connector through which the transaction had been processed. Additionally, a task will also be created on [VTEX DO](/en/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu), which can be viewed in the payments module or on orders module.

When the payments module sends an email informing about the need to make the reversal manually, the following message will be shown in the transaction interaction:

Source Message: `The e-mail with subject gateway-manual-reversal-requested has been successfully sent to user@store.com`. 

If this message appears in the interaction after an attempt to cancel and reverse a transaction whose payment had been approved and/or settled, this means that the automatic online reversal has not been made with the connector, and the reversal will have to be made manually.
