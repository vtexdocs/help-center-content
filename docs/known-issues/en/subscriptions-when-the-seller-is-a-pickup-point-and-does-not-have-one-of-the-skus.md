---
title: 'Subscriptions when the seller is a Pickup Point and does not have one of the SKUs.'
id: 4xIlZZQu8cK42otvvbjhMA
status: PUBLISHED
createdAt: 2022-10-03T12:50:59.047Z
updatedAt: 2022-11-25T22:01:08.292Z
publishedAt: 2022-11-25T22:01:08.292Z
firstPublishedAt: 2022-10-03T12:51:00.284Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: subscriptions-when-the-seller-is-a-pickup-point-and-does-not-have-one-of-the-skus
locale: en
kiStatus: Backlog
internalReference: 666701
---

## Summary



It was identified that in the request for recurrence of a signature with the following scenario:

The Subscription has more than one distinct product/sku, one of these products/sku has no stock and the seller is a pickup point, the following error will be displayed: No item fulfilled simulation conditions to place order.



This occurs because, in all subscription requests, a simulation is performed with the Checkout and in this simulation, we receive the checkout error that one of the products cannot be delivered.




## Simulation



To simulate this scenario, we will have to have a subscription with more than one distinct SKU, the Seller has a Pickup point and one of the SKUs must not have available stock.

1- When the subscription makes the simulation for the recurrence, it will have in the response the status= MISSING for the SKU's;



2- Checking the simulation at checkout, we will have an error that one of the SKUs cannot be delivered and the partial order will not be placed.



3- We will also see that it is not possible to place the order in a partial way.




## Workaround


We have no workaround at the moment.

