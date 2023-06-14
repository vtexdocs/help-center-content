---
title: 'Why doesn’t the order status update?'
id: frequentlyAskedQuestions_712
status: PUBLISHED
createdAt: 2017-04-27T22:28:34.393Z
updatedAt: 2019-12-31T14:24:04.173Z
publishedAt: 2019-12-31T14:24:04.173Z
firstPublishedAt: 2017-04-27T23:02:34.080Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slug: why-doesnt-the-order-status-update
legacySlug: why-doesnt-the-order-status-update
---

This scenario may occur with três statuses, two in VTEX and one on the marketplace. A description follows below.

## Waiting for authorization to dispatch

This status arises when the marketplace has not yet confirmed payment. The status will only be altered when this information has been updated in the marketplace, that is, only when payment is confirmed.

## Ready for handling

At this point, the order is waiting to move down to the ERP. Until this happens, the order will remain in this status.

[Read our tutorial about orders locked in ready for handling.](/en/faq/meus-pedidos-estao-travados-em-pronto-para-manuseio)

## Billed in the marketplace

[Read our manual](/en/faq/why-isnt-the-order-invoiced-on-the-marketplace).

## Preparing Delivery

At this point, the order is already integrated with the ERP of the store, awaiting the entire process of separation, packaging, billing and delivery to the carrier. Once the process is complete, the integration must send the invoice data as well as the tracking data to VTEX.

If the value reported in the invoice is not the same as the total value of the order, the order status will not be changed to **Invoiced**. In this case, VTEX understands that a partial billing has occurred and the status will only change to **Invoiced** when the sum of the invoices is equal to the total value of the order.
