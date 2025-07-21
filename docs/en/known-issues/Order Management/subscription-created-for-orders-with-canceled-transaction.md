---
title: "Subscription created for orders with canceled transaction"
id: 3kDIxoThA1INR2JugY0NpO
status: PUBLISHED
createdAt: 2024-11-25T13:48:05.316Z
updatedAt: 2024-11-25T13:49:09.625Z
publishedAt: 2024-11-25T13:49:09.625Z
firstPublishedAt: 2024-11-25T13:48:06.281Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscription-created-for-orders-with-canceled-transaction
locale: en
kiStatus: Backlog
internalReference: 1139745
---

## Summary


When we close an order containing an item for subscription, the system that generates the subscription is triggered to create the signature whenever the order receives notice that the payment has been made, but it can still happen that the transaction for this order is canceled later due to analysis by the anti-fraud system, but even before the transaction is created, the signature has already been created and is activated, which means that it will be executed in the next cycle even though the order that originated it has not advanced.


##

## Simulation


To simulate this scenario, you need to

Create an order whose item has a subscription attached

Close the purchase with a card, but at this point you need to ensure that the transaction is authorized and then sent to the anti-fraud system;

In the anti-fraud system, you must deny approval of this transaction.

Look at the order details in the OMS and see that the subscription has been created and is active, even though the order transaction and the order have been canceled.


##

## Workaround


N/A





