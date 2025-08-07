---
title: 'Why has my order stopped on “Ready for Handling”?'
id: frequentlyAskedQuestions_301
status: PUBLISHED
createdAt: 2017-04-27T22:38:27.319Z
updatedAt: 2023-03-20T18:45:54.181Z
publishedAt: 2023-03-20T18:45:54.181Z
firstPublishedAt: 2017-04-27T23:01:44.420Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-has-my-order-stopped-on-ready-for-handling
locale: en
legacySlug: why-has-my-order-stopped-on-ready-for-handling
---

`Ready for Handling` is an order flow status awaiting registration the tax receipt in order to invoice it. The order will remain in this status until it is [invoiced](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), which means the invoice has been added to the order.

## Invoicing on Orders module

To change the order status, you need to add the invoice via the [Order Invoice Notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification) API or [manually](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) through the VTEX Admin.

Pay attention to the following information to ensure that the invoice is generated correctly:

- The invoice must contain the total order amount, including shipping costs.  
- If the invoice already has the correct total order amount, you must resend the invoice.  
- If the invoice does not contain the full amount, you must add a new [partial invoice](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) with the missing amount. This new invoice must have a different number than the one already in the purchase order.    

### Marketplace integration 

If an order has been successfully invoiced in your ERP but is still stuck in the Awaiting fulfillment status, products may be unavailable in the marketplace API. In this case, please read the article [The order was billed in the ERP but remains in "Awaiting fulfillment" status. What to do?](/en/faq/the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status).
