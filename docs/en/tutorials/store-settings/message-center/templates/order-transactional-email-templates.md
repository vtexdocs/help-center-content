---
title: 'Order transactional email templates'
id: 3g2S2kqBOoSGcCaqMYK2my
status: PUBLISHED
createdAt: 2018-11-06T21:01:19.818Z
updatedAt: 2025-06-04T13:15:36.864Z
publishedAt: 2025-06-04T13:15:36.864Z
firstPublishedAt: 2018-11-07T18:11:42.445Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slugEN: order-transactional-email-templates
legacySlug: list-of-e-mail-templates-in-the-message-center
locale: en
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

The purpose of this article is to list the default transactional email templates that relate to the order flow. In addition, we will specify the triggers required to sent each email.

> ⚠️ Notice: fulfillment orders do not receive transactional emails from VTEX. In this case, the marketplace is reponsible for notification emails.

To view the available templates, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Email templates > Templates**, or type **Templates** in the search bar at the top of the page..
2. Click **Templates**.
3. Type the template name or key in the search bar. Check the list below for more information on each template.

| Template | Key | Description | Trigger |
| ---------- | ---------- | ---------- | ---------- |
| Order confirmation | vtexcommerce-new-order | Email is sent when the order is completed. | Checkout places a new order. |
| Replace Order | vtexcommerce-replace-order | Email is sent when the order was successfully replaced. | Checkout places a new order and informs OMS of the replacement. |
| Order change payment | vtexcommerce-order-change-payment | Notifies that the payment has been changed. | Customer changes the payment and Checkout notifies OMS that the payment has been changed. |
| Payment pending | vtexcommerce-payment-pending | Notifies of pending payment. | OMS sends the e-mail 48 hours after placing the order. |
| Payment approved | vtexcommerce-payment-approved | Notifies that payment was approved. | Order status changes to **Payment Approved**. |
| Change of information order | vtexcommerce-order-changed | Notifies that the [order has been changed](/en/docs/tutorials/changing-items-from-a-complete-order). | Checkout notifies of order changed event (discount, add item or remove item). |
| Change Order V2 | vtexcommerce-order-changed-v2 | Notification that [the order has been changed](/en/docs/tutorials/how-to-modify-orders). | Checkout notifies an order change event, such as a price increase or decrease, item addition, removal, replacement, or a change in order weight. |
| Order invoiced | vtexcommerce-order-invoiced | Notifies that the order was invoiced. | Order status changes to **Invoiced**. |
| Cancel billed request | vtexcommerce-order-invoiced-with-cancel-request | Notifies that the order can't be cancelled after being invoiced. | Seller denies a cancellation request when the order has the Handling Shipping status. |
| Cancel shipped order | vtexcommerce-order-shipped-with-cancel-request | Notifies that the order can't be canceled after it has been shipped. | Seller denies a cancellation request when the order has alraedy received a tracking number or tracking URL data. |
| Order shipped | vtexcommerce-order-shipped | Notify the order was shipped. | Order receives invoice with tracking number or tracking URL data. If sending for the first time, you will need to fill in both information: `trackingNumber` and `trackingURL`. |
| Shipping Update | vtexcommerce-order-shipping-update | Notification of delivery events, like "collected by the carrier" and "delivery route has started", for example. | The order must have the invoice and a tracking number and tracking URL attached to the invoice. It should also include delivery events, the main information of this template. |
| Order delivered | vtexcommerce-order-shipping-finished | Notifies that shipping is completed. | The order must have the invoice and a tracking number and tracking URL attached to the invoice. Seller confirms delivery. This action changes the field `isDelivered` value to `true` on the order json. |
| Order cancelled | vtexcommerce-order-cancelled | Order cancellation notification. | Order status changes to **Cancelled**. |
| [Order refund](/en/docs/tutorials/transactional-email-template-for-refunded-order) | vtexcommerce-order-refunded | Order refund notification. | Seller inserts invoice with the refund value through the [Order Invoice Notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice) API, with `input` as the value on the `type` field. In the Admin, this event is triggered when you click on the **Return items** button on the order details page. |
| Buyer Portal Sequential approval required (Buyer) | buyer-portal-buyer | Notification sent to the buyer when an order requires approval. | When an order doesn’t comply with the policies set by the organization, it must be manually approved by the buyer. The order status remains in waiting-for-authorization until it’s approved or denied. |
| Buyer Portal Sequential approval required (Approver) | buyer-portal-approver | Notification sent to the approver when an order requires approval. | When an order doesn’t comply with the policies set by the organization, it must be manually approved by the approver. The order status remains in waiting-for-authorization until it’s approved or denied. |
| Buyer Portal Order Denied (Buyer) | buyer-portal-order-denied-buyer | Notification sent to the buyer that the order was denied. | The approver denied the order according to the organization’s policies, updating the order status to `rejected`. |
