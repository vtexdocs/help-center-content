---
title: 'Declining order cancellation'
id: F2n0h1TeQ5td540Gjyff4
status: PUBLISHED
createdAt: 2023-09-21T02:29:56.663Z
updatedAt: 2024-10-11T21:30:57.446Z
publishedAt: 2024-10-11T21:30:57.446Z
firstPublishedAt: 2023-09-21T16:08:07.567Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: declining-order-cancellation
legacySlug: order-cancellation-denial
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

There are many scenarios where canceling an order is necessary, whether on behalf of sellers, marketplaces, or customers. However, there are situations where canceling an order would bring significant financial loss to a seller so that the seller can decline an order cancellation request.

The order flow has a [cancellation window](/en/docs/tutorials/order-flow-and-status) – or grace period – in which the customer can automatically cancel an order. Except for that period, the seller can decline an order cancellation request, regardless of whether the customer or the marketplace initiated it.

> **Example:** A seller sells customizable products in a marketplace and a customer contacts the marketplace to cancel an order after the cancellation window. If the marketplace cancels the order, the seller would incur a financial loss since it would be hard to sell the customized product to another customer. Therefore, the seller chooses to decline the cancellation request.

For developer’s content, see [Order canceling improvements](https://developers.vtex.com/docs/guides/order-canceling-improvements).

> ℹ️ In this article, the terms marketplace and seller refer to [VTEX marketplace](/en/tutorial/marketplace-strategies-at-vtex--tutorials_402#being-a-vtex-marketplace) and [VTEX seller](/en/tutorial/marketplace-strategies-at-vtex--tutorials_402#being-a-vtex-marketplace). The decline cancellation request feature is not available for external sellers and marketplaces.

> ⚠️ Orders with [partial invoices](/en/docs/tracks/partial-invoices) cannot be [canceled](/en/docs/tutorials/canceling-orders). If the customer wants to replace or remove items from the order, it is possible to [change the order](/en/docs/tutorials/changing-items-from-a-complete-order).

## Order cancellation declined diagram

The following image shows the flow of declining an order’s cancellation request outside the cancellation window:

![cancel_api_improvements_help_center_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/declining-order-cancellation_1.png)

The description of each step is the following:

1. The customer contacts the marketplace to cancel an order or does it via [My Account](/en/docs/tutorials/how-my-account-works).
2. The marketplace sends a cancellation request to the seller. At this point, the [order status](/en/docs/tutorials/order-flow-and-status) for the marketplace is `waiting for seller decision`.
3. If the order is within the cancellation window, the order is automatically canceled, which is the platform’s default behavior. The next steps apply after the cancellation window is over.
4. The seller receives the cancel order request and decides whether to accept it. The next steps apply when the seller decides not to cancel the order.

  > ❗ To decline an order cancellation request, the order status in the marketplace and seller must be the following: <ul> <li>**Marketplace status:** waiting for seller decision.</li> <li>**Seller status:** cancellation requested.</li> </ul>

5. The seller declines the order cancellation and notifies the marketplace.
6. After the marketplace receives the declined request, the order moves on in the order workflow.

## Declining an order cancellation request

The request to cancel an order can be made by the marketplace, or by the customer via **My Account.** When made directly through [My account](/en/docs/tutorials/how-my-account-works), the customer receives a confirmation message that the request was successfully submitted.

After that, the order will remain in the [order status](/en/docs/tutorials/order-flow-and-status) `cancellation requested` for the marketplace and `waiting for seller decision` for the seller until the seller takes action, and accepts or declines the request.

> ⚠️ If within 30 days the seller takes no action regarding a cancellation order request, the order is automatically canceled by the VTEX platform.

To decline an order cancellation request via the VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type [All Orders](/en/docs/tutorials/all-orders) in the search bar at the top of the page.
2. Select the desired order to access the [Order Details page](/en/docs/tutorials/order-details-page).
3. At the top of the page, click `Decline`.

  ![deny_cancel_request_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/declining-order-cancellation_2.png)

4. Complete the **Cancellation Request** box with the reason why the cancel order request has been declined.

  ![deny_cancel_request_reason_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/declining-order-cancellation_3.png)

  > ⚠️ Keep in mind that the message written in this field can be displayed to the customer via [My Account](/en/docs/tutorials/how-my-account-works), or sent by the marketplace.

5. Click `Decline Request`.

After that, the request to cancel order is declined, and the order moves on in the order workflow to the following status:

- **For the marketplace:** `payment approved`.
- **For the seller:** `ready for handling` or `handling`, depending on which was the status before the cancel request.
