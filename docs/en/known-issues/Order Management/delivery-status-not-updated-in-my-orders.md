---
title: "Delivery status not updated in My orders"
id: 1AChJOd9t73SXZsyuGHqTB
status: PUBLISHED
createdAt: 2025-01-15T14:20:23.070Z
updatedAt: 2025-01-15T14:20:23.741Z
publishedAt: 2025-01-15T14:20:23.741Z
firstPublishedAt: 2025-01-15T14:20:23.741Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delivery-status-not-updated-in-my-orders
locale: en
kiStatus: Backlog
internalReference: 1163668
---

## Summary


The problem occurs when displaying the delivery status in My Orders, especially for orders with single notes that use item inference.
These notes do not have items physically listed, which causes inconsistencies in the `isAllDelivered` property, and as a result, delivered orders can be displayed incorrectly, impacting the accurate identification of the delivery status in the My Orders listing.


##

## Simulation



- Create an order with normal items.
- Generate a single bill for the order without associating items directly.
- Make sure that the total value of the note is consistent with the total value of the order.
- Mark the note as “`Finished`”.
Check the My Orders page: In the detailed preview `(/orders/{id})`, the status should appear as `Delivered`.

In the list of Orders (/user/orders), the status is incorrectly displayed as `Order Dispatched`.


##

## Workaround


In My Orders, whenever in doubt about the delivery status, instruct users to click on the order to open the detailed preview, this will ensure that the inference rule is applied correctly, displaying the exact status.





