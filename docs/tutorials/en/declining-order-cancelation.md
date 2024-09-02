---
title: 'Declining order cancelation'
id: F2n0h1TeQ5td540Gjyff4
status: PUBLISHED
createdAt: 2023-09-21T02:29:56.663Z
updatedAt: 2024-04-01T15:47:27.833Z
publishedAt: 2024-04-01T15:47:27.833Z
firstPublishedAt: 2023-09-21T16:08:07.567Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: declining-order-cancelation
locale: en
legacySlug: order-cancellation-denial
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

There are many scenarios where canceling an order is necessary, whether on behalf of sellers, marketplaces, or customers. However, there are situations where canceling an order would bring significant financial loss to a seller so that the seller can decline an order cancellation request.

The order flow has a [cancellation window](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) – or grace period – in which the customer can automatically cancel an order. Except for that period, the seller can decline an order cancellation request, regardless of whether the customer or the marketplace initiated it.

> **Example:** A seller sells customizable products in a marketplace and a customer contacts the marketplace to cancel an order after the cancellation window. If the marketplace cancels the order, the seller would incur a financial loss since it would be hard to sell the customized product to another customer. Therefore, the seller chooses to decline the cancellation request.

For developer’s content, see [Order canceling improvements](https://developers.vtex.com/docs/guides/order-canceling-improvements).

<div class = "alert alert-info">
In this article, the terms marketplace and seller refer to <a href="https://help.vtex.com/en/tutorial/marketplace-strategies-at-vtex--tutorials_402#being-a-vtex-marketplace">VTEX marketplace</a> and <a href="https://help.vtex.com/en/tutorial/marketplace-strategies-at-vtex--tutorials_402#being-a-vtex-marketplace">VTEX seller</a>. The decline cancellation request feature is not available for external sellers and marketplaces.
</div>

<div class = "alert alert-warning">
Orders with <a href="https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">partial invoices</a> cannot be <a href="https://help.vtex.com/en/tutorial/como-cancelar-pedido--tutorials_186">canceled</a>. If the customer wants to replace or remove items from the order, it is possible to <a href="https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190">change the order</a>.
</div>

## Order cancellation declined diagram

The following image shows the flow of declining an order’s cancellation request outside the cancellation window:

![cancel_api_improvements_help_center_EN](https://images.ctfassets.net/alneenqid6w5/6qU0tP4gQxa2qh6JLjleoK/abdfe44471ce04c695bc0b1c50463afb/cancel_api_improvements_help_center_EN.png)

The description of each step is the following:

1. The customer contacts the marketplace to cancel an order or does it via [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
2. The marketplace sends a cancellation request to the seller. At this point, the [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) for the marketplace is `waiting for seller decision`.
3. If the order is within the cancellation window, the order is automatically canceled, which is the platform’s default behavior. The next steps apply after the cancellation window is over.
4. The seller receives the cancel order request and decides whether to accept it. The next steps apply when the seller decides not to cancel the order.

  <div class="alert alert-danger">
To decline an order cancellation request, the order status in the marketplace and seller must be the following:
<ul>
<li><b>Marketplace status:</b> waiting for seller decision.</li>
<li><b>Seller status:</b> cancellation requested.</li>
</ul>
</div>

5. The seller declines the order cancellation and notifies the marketplace.
6. After the marketplace receives the declined request, the order moves on in the order workflow.

## Declining an order cancellation request

The request to cancel an order can be made by the marketplace, or by the customer via **My Account.** When made directly through [My account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), the customer receives a confirmation message that the request was successfully submitted.

After that, the order will remain in the [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) `cancellation requested` for the marketplace and `waiting for seller decision` for the seller until the seller takes action, and accepts or declines the request.

<div class="alert alert-warning">
If within 30 days the seller takes no action regarding a cancellation order request, the order is automatically canceled by the VTEX platform.
</div>

To decline an order cancellation request via the VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type [All Orders](https://help.vtex.com/en/tutorial/all-orders--2QTduKHAJMFIZ3BAsi6Pi) in the search bar at the top of the page.
2. Select the desired order to access the [Order Details page](https://help.vtex.com/en/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl).
3. At the top of the page, click `Decline`.

  ![deny_cancel_request_EN](https://images.ctfassets.net/alneenqid6w5/3TpCmA2PEdtVb5ru8Ed2va/253a91677769d1b3617f6a8714fc3603/deny_cancel_request_EN.png)

4. Complete the **Cancellation Request** box with the reason why the cancel order request has been declined.

  ![deny_cancel_request_reason_EN](https://images.ctfassets.net/alneenqid6w5/5UUueX5kuj7OkBCHVhe0oL/022f068cefdd1e6588560d5bcba94ea3/deny_cancel_request_reason_EN.png)

  <div class="alert alert-warning">
Keep in mind that the message written in this field can be displayed to the customer via <a href="https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh">My Account</a>, or sent by the marketplace.
</div>

5. Click `Decline Request`.

After that, the request to cancel order is declined, and the order moves on in the order workflow to the following status:

- **For the marketplace:** `payment approved`.
- **For the seller:** `ready for handling` or `handling`, depending on which was the status before the cancel request.
