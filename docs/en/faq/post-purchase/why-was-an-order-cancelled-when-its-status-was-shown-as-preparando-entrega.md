---
title: 'Why an order was cancelled when its status “Ready for Handling”?'
id: LDgtkquNEssyQMYUGcYeO
status: PUBLISHED
createdAt: 2017-05-16T23:08:29.742Z
updatedAt: 2023-03-20T18:38:44.805Z
publishedAt: 2023-03-20T18:38:44.805Z
firstPublishedAt: 2017-05-18T19:20:59.326Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_59
slugEN: why-was-an-order-cancelled-when-its-status-was-shown-as-preparando-entrega
locale: en
legacySlug: why-was-an-order-cancelled-when-its-status-was-shown-as-preparando-entrega
---

Any order can be cancelled before it is shown as `Invoiced`.

When cancellation happens, the user is notified through [VTEX DO](/en/docs/tutorials/vtex-do-interface). Thus, depending on the stage of the delivery, the user can confirm or reverse cancellation: 

1) If you want to confirm the cancellation, in **Orders > All Orders**, click the desired order and click **Cancel Order**.

2) If you want to go ahead with fulfillment, follow with the invoicing, informing the customer that the order cannot be canceled.

> ❗ Under `Cancellation Window` status, only the customer’s cancellation request is unilateral, and the store does not confirm. In all other statuses, the store will be informed of the request through VTEX DO.

