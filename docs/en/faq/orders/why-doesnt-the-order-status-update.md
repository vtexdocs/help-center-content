---
title: "Why doesn't the order status update?"
excerpt: "Status can stall while waiting for marketplace payment, ERP handling, or marketplace invoicing. Each lock has a different next step."
id: frequentlyAskedQuestions_712
status: PUBLISHED
createdAt: 2017-04-27T22:28:34.393Z
updatedAt: 2019-12-31T14:24:04.173Z
publishedAt: 2019-12-31T14:24:04.173Z
firstPublishedAt: 2017-04-27T23:02:34.080Z
contentType: frequentlyAskedQuestion
productTeam: Orders
author: authors_3
slugEN: why-doesnt-the-order-status-update
locale: en
legacySlug: why-doesnt-the-order-status-update
---

This can happen in the statuses below.

## Waiting for authorization to dispatch

This status means the marketplace has not confirmed payment yet. The order moves forward only after the marketplace confirms payment.

## Ready for handling

The order is waiting to be sent to the ERP. Until that happens, it stays in this status.

See [Why has my order stopped on “Ready for Handling”?](/en/docs/faq/why-has-my-order-stopped-on-ready-for-handling).

## Billed on the marketplace

The invoice may already be in VTEX while the marketplace still shows an earlier status. See [Why isn't the order invoiced on the marketplace?](/en/docs/faq/why-isnt-the-order-invoiced-on-the-marketplace).

## Preparing Delivery

The order is already in the store's ERP and is waiting for picking, packing, invoicing, and handover to the carrier. When that process is complete, the integration must send the invoice and tracking data to VTEX.

If the invoice amount does not match the order total, the status does not change to **Invoiced**. VTEX treats this as a partial invoice. The status changes to **Invoiced** only when the sum of the invoices equals the order total.
