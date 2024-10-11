---
title: 'Refund function when item is returned'
id: frequentlyAskedQuestions_298
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.904Z
updatedAt: 2024-02-28T17:25:13.906Z
publishedAt: 2024-02-28T17:25:13.906Z
firstPublishedAt: 2019-01-24T21:55:16.859Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-do-reversals-work-when-an-item-is-returned
locale: en
legacySlug: how-do-reversals-work-when-an-item-is-returned
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

When a request is made for the [partial or total return of items](/en/tutorial/returning-order-items) in orders paid using a credit card or other payments **except "boleto"** (popular Brazilian off-line payment method), the Orders Management contacts Payments requesting the chargeback for the items to be returned.

In such cases, VTEX sends the refund to the acquirer when the value has already been billed (`Invoiced` status). It works in the following way: VTEX gets in touch with the acquirer and tries to solve the refund online as soon as possible.

However, if this operation is not successful, an [e-mail notification](/en/tutorial/how-to-configure-notifications/) will be sent, informing the retailer to get in touch with the acquirer in order to make the automatic refund.

For more on this, [click here](/en/faq/why-was-my-cancelled-order-charged-in-the-client-invoice).

## The exception of the "boleto" (popular Brazilian off-line payment method)

When payment is made using a "boleto", it is necessary to manually generate a voucher or, if the customer prefers, transfer the respective amount to the customer’s account, as it is impossible to reverse a "boleto". 

Ideally, you should contact the consumer in order to agree the best method for returning the amount due.

_When the return is made before [acknowledgement of the reservation](/en/tutorial/how-does-reservation-work), the item returns to its inventory of origin, becoming available for a new sale, without the retailer having to enter this unit manually using a spreadsheet or through a API. If the return takes place after the reservation has been acknowledged, it is necessary to return the unit to the inventory, updating this information manually using a spreadsheet or API._
