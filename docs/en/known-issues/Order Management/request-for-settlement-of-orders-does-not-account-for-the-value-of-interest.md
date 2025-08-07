---
title: "Request for Settlement of Orders Does Not Account for the Value of Interest"
id: 149FG86c1f7sok1NJ7PWAQ
status: PUBLISHED
createdAt: 2024-11-05T17:51:29.058Z
updatedAt: 2024-11-05T17:51:29.841Z
publishedAt: 2024-11-05T17:51:29.841Z
firstPublishedAt: 2024-11-05T17:51:29.841Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: request-for-settlement-of-orders-does-not-account-for-the-value-of-interest
locale: en
kiStatus: Backlog
internalReference: 1130035
---

## Summary


When an order has interest applied, the total value of the transaction ends up being higher than the original value of the order. However, during the process of sending the settlement request from the order system to the payment gateway, the system only sends the order amount, without taking interest into account, which results in a settlement request with an amount lower than the total transaction amount, which can prevent the transaction from being completely captured.
In some cases, the transaction may remain in “Capturing” status indefinitely.


##

## Simulation


Create an order using a payment method that has interest calculation configured.

After finalizing the purchase, follow the normal order handling flow and send the invoice with the total amount of the order, including interest.

In the transaction details on the gateway, you will see that the capture request will be sent with the order amount, without accounting for interest.


##

## Workaround


To avoid new cases:
The merchant can enable automatic capture on connectors that accept interest. This way, the capture will be carried out directly on the connector, using the total amount of the transaction, including interest, and eliminating the dependence on the amount sent by the order system.

To adjust orders already in “Settlement” status:
For orders that are already in “Settlement” status and are waiting for the amount to be updated with interest, the solution is to explicitly call the settlement APIs from the payments area to adjust the transaction amount.





