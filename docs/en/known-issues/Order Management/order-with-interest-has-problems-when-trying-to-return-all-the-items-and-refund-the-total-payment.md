---
title: "Order with interest has problems when trying to return all the items and refund the total payment"
id: 2J5XD9jjQfZWMVg0yYMzUa
status: PUBLISHED
createdAt: 2023-09-18T20:53:08.156Z
updatedAt: 2023-09-18T20:53:08.813Z
publishedAt: 2023-09-18T20:53:08.813Z
firstPublishedAt: 2023-09-18T20:53:08.813Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-interest-has-problems-when-trying-to-return-all-the-items-and-refund-the-total-payment
locale: en
kiStatus: Backlog
internalReference: 376077
---

## Summary


The platform prevents the chargeback of amounts greater than the total amount of the order. This becomes an issue for the chargeback of orders in which the payment method involves interest.
In addition to the **total amount**, orders have an **invoiced amount**, which, for legal reasons, may not include the interest applied based on a payment method.
Consequently, the platform returns an error with status 400 when an attempt is made to issue a chargeback invoice with an amount greater than the one previously invoiced.

###

###

## Simulation



1. In your store, create an order with interest applied to the payment;
2. Try performing a chargeback on the total amount paid via API with the invoice submission request;
3. Notice that the API returns an error with status 400, indicating that it is not possible to issue an invoice of type INPUT with an amount greater than the total amount of the order.

###

###

## Workaround


N/A




