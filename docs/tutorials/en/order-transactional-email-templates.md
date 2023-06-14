---
title: 'Order transactional email templates'
id: 3g2S2kqBOoSGcCaqMYK2my
status: PUBLISHED
createdAt: 2018-11-06T21:01:19.818Z
updatedAt: 2023-02-28T01:10:27.048Z
publishedAt: 2023-02-28T01:10:27.048Z
firstPublishedAt: 2018-11-07T18:11:42.445Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slug: order-transactional-email-templates
locale: en
legacySlug: list-of-e-mail-templates-in-the-message-center
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

The purpose of this article is to list the default transactional email templates that relate to the order flow. In addition, we will specify the triggers required to sent each email.

<div class="alert alert-warning">
Notice: fulfillment orders do not receive transactional emails from VTEX. In this case, the marketplace is reponsible for notification emails.
</div>

To view the available templates, follow the steps below:

1. On the admin sidebar, click __Message Center__.
2. Click __Templates__.
3. Type the template name or key in the search bar. Check the list below for more information on each template.

| Template   | Key        | Description| Trigger    |
| ---------- | ---------- | ---------- | ---------- |
| Order confirmation | vtexcommerce-new-order | Email is sent when the order is completed | Checkout places a new order |
| Replace Order | vtexcommerce-replace-order | Email is sent when the order was successfully replaced | Checkout places a new order and informs OMS of the replacement |
| Order change payment | vtexcommerce-order-change-payment | Notifies that the payment has been changed | Customer changes the payment and Checkout notifies OMS that the payment has been changed |
| Payment pending | vtexcommerce-payment-pending | Notifies of pending payment  | OMS sends the e-mail 2 days before the boleto expires |
| Payment approved | vtexcommerce-payment-approved | Notifies that payment was approved | Order status changes to __Payment Approved__ |
| Change of information order | vtexcommerce-order-changed | Notifies that the [order has been changed](https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190) | Checkout notifies of order changed event (discount, add item or remove item) |
| Order invoiced | vtexcommerce-order-invoiced | Notifies that the order was invoiced | Order status changes to __Invoiced__ |
| Cancel billed request | vtexcommerce-order-invoiced-with-cancel-request | Notifies that the order can't be cancelled after being invoiced | Seller denies a cancellation request when the order has the Handling Shipping status |
| Cancel shipped order | vtexcommerce-order-shipped-with-cancel-request | Notifies that the order can't be canceled after it has been shipped | Seller denies a cancellation request when the order has alraedy received a tracking number or tracking URL data |
| Order shipped | vtexcommerce-order-shipped | Notify the order was shipped | Order receives invoice with tracking number or tracking URL data |
| Shipping Update | vtexcommerce-order-shipping-update | Notification of delivery events, like "collected by the carrier" and "delivery route has started", for example. | The order must have the invoice and a tracking number or tracking URL attached to the invoice. It should also include delivery events, the main information of this template |
| Order delivered | vtexcommerce-order-shipping-finished | Notifies that shipping is completed. The order must have the invoice and a tracking number or tracking URL attached to the invoice. | Seller confirms delivery. This action changes the field `isDelivered` value to `true` on the order json. |
| Order cancelled | vtexcommerce-order-cancelled | Order cancellation notification | Order status changes to __Cancelled__ |
| [Order refund](https://help.vtex.com/en/tutorial/template-de-e-mail-transacional-para-pedido-estornado--5uy6FCBb6DLyIJlSDeM10G) | vtexcommerce-order-refunded | Order refund notification | Seller inserts invoice with the refund value through the [Order Invoice Notification]() API, with `input` as the value on the `type` field. In the Admin, this event is triggered when you click on the __Return items__ button on the order details page |
