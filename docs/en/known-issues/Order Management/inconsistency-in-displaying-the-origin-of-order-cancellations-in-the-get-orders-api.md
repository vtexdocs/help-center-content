---
title: "Inconsistency in displaying the origin of order cancellations in the Get Orders API"
id: q1IZl1NguWHGzpNzro4le
status: PUBLISHED
createdAt: 2025-06-25T18:27:30.911Z
updatedAt: 2025-06-26T19:19:58.004Z
publishedAt: 2025-06-26T19:19:58.004Z
firstPublishedAt: 2025-06-25T18:27:31.540Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistency-in-displaying-the-origin-of-order-cancellations-in-the-get-orders-api
locale: en
kiStatus: Backlog
internalReference: 1249934
---

## Summary


In some cases of orders originating from the native flow between marketplace and seller, when the cancellation is initiated automatically by the system (e.g. payment failure or internal rules), the cancellation origin information may not be displayed correctly in the responses from the OMS Get Order and Orders APIs.

The cancellationData field, which historically identifies the origin of the cancellation (such as requestedByPaymentNotification), may contain generic information - such as fulfillment - or may not display any details. This is due to the process of merging cancellation information between marketplace and seller, which can overwrite relevant data depending on the order of events.


##

## Simulation



- Generate an order in an account with integration between seller and marketplace.

- Simulate an automatic cancellation, for example, due to payment authorization failure.

- Access the OMS Get Order API or Orders.

- Note that the `cancellationData` field may not clearly indicate that the cancellation was made by the payment module.

- If possible, compare it with the response from the SOS Orders API, where the origin usually appears correctly.


##

## Workaround


Currently, in order to correctly identify the origin of the cancellation in affected cases, support from the internal team is required.

We recommend opening a ticket to manually analyze the logs and validate the actual origin of the cancellation.





