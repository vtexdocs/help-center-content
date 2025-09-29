---
title: The order doesn't progress after the status "Ready for handling"
id: 1Esx82dbr5RHYPOHgEjRGg
status: PUBLISHED
createdAt: 2025-02-03T17:59:30.111Z
updatedAt: 2025-02-03T18:59:58.956Z
publishedAt: 2025-02-03T18:59:58.956Z
firstPublishedAt: 2025-02-03T18:59:58.956Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-order-doesnt-progress-after-the-status-ready-for-handling
legacySlug: the-order-doesnt-progress-after-the-status-ready-for-handling
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Handling
  - Orders
  - Order status
  - Integration
  - ERP
  - OMS
---

The `Ready for handling` status occurs in the [order flow](/en/tutorial/order-flow-and-status--tutorials_196#seller-flow) right after the cancellation window is closed. At this point, VTEX should receive information from the [ERP system](https://developers.vtex.com/docs/guides/erp-integration-guide) indicating that the order has been integrated and the item stock has been updated, allowing the flow to proceed to the `Handling shipment` status.

Until VTEX receives this confirmation, the order remains in the `Ready for handling` status.

## Solution

The first required action is to contact the person in charge of your [ERP integration](https://developers.vtex.com/docs/guides/erp-integration-guide) and confirm that the order has been released via the [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling) endpoint. Once this is confirmed, follow the steps below:

1. In the VTEX Admin, go to __Orders > All Orders__, or type __All Orders__ in the search bar at the top of the page.
2. Go to the desired order.
3. On the [order details page](/en/tutorial/order-details-page--2Y75n54Cc9VizrlG1N6ZNl), check if the order status has changed to `Handling shipment`.

> ⚠️ If the order remains in the status `Ready for handling`, request more information by opening a ticket with [VTEX Support](https://help.vtex.com/en/support).

### Updating the order manually (optional)

The merchant can [manually update](/en/tutorial/moving-order-to-start-handling-shipping--tutorials_198#through-vtex-admin) the order status to `Handling shipment` via Admin VTEX, if desired. However, to perform this action, they must have a [role with OMS - Full access permission](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#roles). 

> ❗ By manually updating the status and confirming the start of handling, the seller assumes responsibility for [reserving items](/en/tutorial/how-does-reservation-work--tutorials_92), gensuring there is sufficient stock, and that the sold items are deducted from the inventory. Manually updated orders can't be integrated into the ERP system later.

> ⚠️ If the order remains in the status `Ready for handling` after the manual update attempt, request more information by opening a ticket with [VTEX Support](https://help.vtex.com/en/support).

In addition to the error scenario related to the ERP system, there may be situations in which two different statuses are displayed for the same order: one in the list on the __All Orders__ page and another on the respective [order details page](/en/tutorial/order-details-page--2Y75n54Cc9VizrlG1N6ZNl). For more information about this scenario, see the known issue [Status in the order list is different from the current order status](/en/known-issues/status-in-the-order-list-is-different-from-the-current-order-status--2UBFdtXWtCIygv0SiObCTN).
