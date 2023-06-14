---
title: 'Issue with full chargeback of orders with interest'
id: 5q0okPuWiGe8O4o9FEQCnI
status: PUBLISHED
createdAt: 2021-09-17T14:06:59.342Z
updatedAt: 2022-12-22T14:52:27.138Z
publishedAt: 2022-12-22T14:52:27.138Z
firstPublishedAt: 2021-09-17T14:13:21.966Z
contentType: knownIssue
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
tag: Order Management
slug: issue-with-full-chargeback-of-orders-with-interest
kiStatus: Backlog
internalReference: 
---

## Summary

The platform prevents the chargeback of amounts greater than the total amount of the order. This becomes an issue for the chargeback of orders in which the payment method involves interest.

In addition to the **total amount**, orders have an **invoiced amount**, which, for legal reasons, may not include the interest applied based on a payment method.

Consequently, the platform returns an error with `status 400` when an attempt is made to issue a chargeback invoice with an amount greater than the one previously invoiced.

## Simulation

1. In your store, create an order with interest applied to the payment;
2. Try performing a chargeback on the total amount paid via API with the [invoice submission request](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification);
3. Notice that the API returns an error with `status 400`, indicating that it is not possible to issue an invoice of type `INPUT` with an amount greater than the total amount of the order.

## Workaround

You can first issue a chargeback invoice with the invoiced amount (without interest), and then another one with the interest amount.

