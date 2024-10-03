---
title: "Seller's order invoiced with problem in the payment capture"
id: 59M66kN7D6qy8ErLnbdT9r
status: PUBLISHED
createdAt: 2024-01-29T16:51:46.993Z
updatedAt: 2024-01-29T16:51:47.674Z
publishedAt: 2024-01-29T16:51:47.674Z
firstPublishedAt: 2024-01-29T16:51:47.674Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: sellers-order-invoiced-with-problem-in-the-payment-capture
locale: en
kiStatus: Backlog
internalReference: 376646
---

## Summary


Right now, the way our architecture is built, both Seller and Marketplace are two totally different entities. The way it works is, Marketplace is responsible for receiving the money from the client and the Seller is responsible for all the logistics up to when it delivers the client its goods.

The “receiving money” part is divided into Authorization and Capture. Both are separate actions in the Gateway and are executed in two distinct moments. The first one is when the client makes the purchase and the second one is when an invoice is inserted into the system. After the Authorization process, the Marketplace “tells” the Seller that it can proceed to prepare and send the client its goods. Since there is a gap in time between the Authorization and Capture and since they are separate actions, there is no guarantee that the Capture action will execute properly.

This leaves us with the problem that the Seller received a notification to send the goods, inserted an invoice notification into the system, and the Marketplace had a problem in trying to make the Capture action.

In these cases of Authorization and Capture notification, the Gateway always initially notifies the Marketplace which in turn notifies the Seller.

The problem is that the flow of the Seller is not stopped by problems it may have in the Capture of payment, but it is reflected in the flow of the Marketplace.


##

## Simulation


We do not have a step by step to replicate, however, it is possible to validate an example order.

We can see that the Marketplace order reported a problem in the capture and was unable to complete the flow, displaying the error: "Settlement operation has returned Failed"

In the flow, the order status in the Marketplace will be "Verifying invoice" and in the interactions the message: "Settlement operation has returned Failed" will be displayed.

In transaction events, the message: "Error: Response was Entity_Declined" will be displayed.

While the Seller's order reached Invoiced, because, for the Seller in the current architecture, the capture of the payment is not their responsibility even being the owner of the payment.



##

## Workaround


At this moment we do not have a workaround to complete the Marketplace flow, as this depends on the capture being carried out correctly. Without confirmation from the Gateway, the order will not be able to advance. Unfortunately, the way out of this type of inconsistency is to cancel the MKT order and try to do a new one manually.

It is important to always validate that the payment capture is completed before delivering the products





