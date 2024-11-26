---
title: 'The Fulfillment/Seller order flow progresses regardless of whether it has the incomplete order flag (isCompleted=false) in the Marketplace order'
id: 1wy7o9sS7qKnvVlaJd9Pq9
status: PUBLISHED
createdAt: 2024-11-21T18:39:13.496Z
updatedAt: 2024-11-21T19:56:54.571Z
publishedAt: 2024-11-21T19:56:54.571Z
firstPublishedAt: 2024-11-21T18:39:14.505Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-fulfillmentseller-order-flow-progresses-regardless-of-whether-it-has-the-incomplete-order-flag-iscompletedfalse-in-the-marketplace-order
locale: en
kiStatus: Backlog
internalReference: 345526
---

## Summary



In VTEX orders management scenarios, we will always have two orders and, in a certain way, independent workflows, these are the Marketplace order and the Fulfillment one.

In this case, the problem occurs when, for some reason, the **Marketplace** order is marked as incomplete (`"isCompleted": false`), however, the **Fulfillment** order is successfully created and remains in the "**Waiting for fulfillment authorization**" status, and Fulfillment only leaves this status in two situations, one being automatic, which is the correct one, when the Marketplace receives the payment notification and the marketplace itself notifies the fulfillment, allowing it to continue the flow, or the account itself can do this deliberately, and may not receive payment for the order that will be delivered. While the expected behavior is to cancel both orders.

Actions within the **Fulfillment order** such as "Start handling", or sending the invoice notification without first consulting the status of the **Marketplace order** (if it is complete or not), can lead to the **Fulfillment workflow** continuing regardless of having the **Marketplace** incomplete order.

The main problem is to make the fulfillment of the order without a complete Marketplace (main) order, and for sure without a correct payment process.


##

## Simulation



It is not a scenario that can be replicated, however, it is possible to validate the property in the JSON of the **Marketplace order** `"isCompleted:"` if it is currently with the value `false`, and the **Fulfillment order (Seller)** `"isCompleted:"` with value `true` and his workflow allowing to advance the order.

Example of **Marketplace order** property `"isCompleted": false`:
 ![](https://vtexhelp.zendesk.com/attachments/token/61ctwev8pXI4WHheLVtfnD0Sq/?name=inline1159444440.png)


##

## Workaround


The idea is to be able to prevent the order flow from being advanced if the Marketplace order is incomplete. The idea is to block any action to continue with the Fulfillment order, and ensure that it is cancelled, along with the payment, if both are active or not already cancelled.

On the other hand, the idea is that the client avoids taking any action on the order if the Marketplace order was marked as incomplete.

