---
title: 'My store order was canceled'
id: 6qOCSBno1vS9TmHWWveOc
status: PUBLISHED
createdAt: 2025-02-04T13:04:34.645Z
updatedAt: 2025-02-04T13:30:15.393Z
publishedAt: 2025-02-04T13:30:15.393Z
firstPublishedAt: 2025-02-04T13:30:15.393Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: my-store-order-was-canceled
locale: en
legacySlug: my-store-order-was-canceled
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Orders, Order status, Cancellation
---

An order can be canceled at any stage before completing the expected flow. To identify the reason for cancellation, all communications between payment integrations must be checked. This is because, for a purchase to be invoiced, it goes through several stages that can lead to cancellation.

Smart Checkout supports the "Pre-Auth" feature from some acquirers. So the platform validates card data during checkout. If there's a problem, the user is notified to change their payment method, preventing the merchant to lose the sale.

In this process, an order is created, but if the operator denies, this transaction is automatically canceled.

## Solution

To identify the reason for the cancellation, you need to:

- [Check payment interactions](#checking-payment-interactions)
- [Check order interactions](#checking-order-interactions)

### Checking payment interactions

In the VTEX Admin, under **Orders > Transactions**, all payment interactions are recorded with the payment operator/gateway and with the anti-fraud solution, which are responsible for most cancellations.

When a cancellation occurs, a message is recorded in the order transaction events identifying the reason. To learn how to view these events, see [Viewing the order's details in Orders](/pt/tutorial/como-visualizar-detalhes-do-pedido/).

### Checking order interactions

In the **Orders** module of the VTEX Admin, you can find the source of the order cancellation — whether it was done by the marketplace or the merchant.

To view the interactions of an order, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Search for the order using the search bar and filters available in **All Orders**.
3. Click the order you want by going to the [Order details page](/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
4. In the **Order History** section, click `View Interactions`.

#### Cancellation by the marketplace

If the cancellation was made by the marketplace, it can be detected in the interactions by the key used in the cancellation request (`Cancel requested`), as in the following example: `vtexappkey-nomedomarketplace-keydomktp`.

When an order isn't canceled by the marketplace, the name of the user who made the action `Cancel requested` or the VTEX integration key (`Cancel requested by vtexappkey-appvtex`) will be displayed.

#### Cancellation by the store

In the **Orders** module of the VTEX Admin, orders can be canceled manually or via a cancellation request sent by the ERP.

Additionally, the customer can request the order cancellation to the merchant while it's in the status `Cancellation window`. In this case, the order first has the `Cancellation requested` status, and after approval, the status changes to `Canceled`.

All order changes can be viewed on the [Order details page](/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).

<div class="alert alert-warning"> <p> For orders originating from a marketplace but canceled by the store, the integration doesn't automatically notify the marketplace about the cancellation. In these cases, <b>you must manually cancel the order directly in the marketplace interface</b>.</p> </div>