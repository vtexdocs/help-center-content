---
title: The order doesn't progress after the status "Handling shipping"
id: 2yia6QhoLh204lHzEaIrnK
status: PUBLISHED
createdAt: 2025-02-07T14:22:07.199Z
updatedAt: 2025-02-07T17:20:26.154Z
publishedAt: 2025-02-07T17:20:26.154Z
firstPublishedAt: 2025-02-07T17:20:26.154Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-order-doesnt-progress-after-the-status-handling-shipping
legacySlug: the-order-doesnt-progress-after-the-status-handling-shipping
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Delivery
  - Orders
  - Order status
  - Integration
  - ERP
  - OMS
  - Handling shipping
---

The status `Handling shipping` occurs in the [order flow](/pt/tutorial/order-flow-on-the-oms--tutorials_196#fluxo-do-seller) shortly after the seller starts handling the items. At this point, VTEX must receive the order's invoice details, updating the flow with the `Invoiced` or `Canceled` status.

> ℹ️ You can't [cancel orders](/en/tutorial/canceling-orders--tutorials_186) that have already been [partially invoiced](/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). If the customer wants to replace or remove items, they can [change the order](/en/tutorial/changing-items-from-a-complete-order--tutorials_190).

An order remaining in the status `Handling shipping` longer than expected may be due to the invoices not being registered on VTEX.

## Solution

### Checking invoices in ERP integrations

The first action required is to contact the person responsible for your [ERP integration](https://developers.vtex.com/docs/guides/erp-integration-guide) and check whether the single invoice or all [partial invoices](/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) have already been registered via the [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice) endpoint.

After this confirmation, follow the steps below to check if the status has changed:

1. In the VTEX Admin, go to __Orders > All Orders__, or type __All Orders__ in the search bar at the top of the page.
2. Go to the desired order.
3. On the [order details page](/en/tutorial/order-details-page--2Y75n54Cc9VizrlG1N6ZNl), check if the order status changed to `Invoiced`.

> ⚠️ If the order still has the status `Handling shipping`, check if there's any inconsistency in the communication with the marketplace. Learn more in [The order was billed in the ERP but remains in the "Handling shipping" status. What to do?](/en/faq/the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status--4szpXviNMAkwOe2cCiMiMe).

### Adding invoices manually (optional)

Merchants can add invoices to the VTEX Admin via [manual order invoicing](/en/tutorial/how-to-manually-invoice-an-order--7p1h852V5t54KyscpgxE2v). This action allows the order status to be updated from `Handling shipping` to `Invoiced`.

To ensure that the order is invoiced correctly, the following requirements must be met:

- The invoice total must be equal to the sum of the item prices in the order and their respective shipping costs. If the invoice amount is lower than the total, you must add a [partial invoice](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) for the remaining amount.
- Each invoice issued, whether total or partial, must have a unique number.
- When you need to issue more than one invoice for an order, their combined total must equal the order's total amount.
- The total order amount will be updated if [items are changed or removed](/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

> ⚠️ If the order remains in the `Invoiced` status after manually adding invoices, open a ticket with [Suporte VTEX](https://help.vtex.com/en/support) for further assistance.
