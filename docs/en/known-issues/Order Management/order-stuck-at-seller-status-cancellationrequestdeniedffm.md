---
title: 'Order stuck at seller status cancellation-request-denied-ffm'
id: 5hBeTQMKmo5C63QRAOSvT2
status: PUBLISHED
createdAt: 2024-03-22T17:50:37.946Z
updatedAt: 2024-03-22T17:50:38.822Z
publishedAt: 2024-03-22T17:50:38.822Z
firstPublishedAt: 2024-03-22T17:50:38.822Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-at-seller-status-cancellationrequestdeniedffm
locale: en
kiStatus: Backlog
internalReference: 1004978
---

## Summary


We identified that some sellers, in the VTEX seller and marketplace structure, when requesting cancellation, then refuse this cancellation via the UI, or call the API "cancellation-request-denied-ffm", this is as if they were denying the request itself of cancellation, for some reason, the request to deny the cancellation overlaps with the request to cancel.
As a result, the order is stuck at the seller, in the "cancellation-request-denied-ffm" status.
And in some cases, the marketplace itself tries to request cancellation, as a result, the marketplace is also stuck in the "request cancellation" status.
On the other hand, we have the case where the marketplace does not receive this cancellation notification and continues with your order until the Invoiced status!
In all cases, we are unable to change the status of these orders.


##

## Simulation


1- Create an order, with seller whiteLabel;
2- In the seller's order, advance the status to "handling";
3- Still at the seller, request the cancellation of the order;
4- On the seller's request, we will have the message, "accept or refuse cancellation", click on the refuse option on the seller or use the API, you will see that the seller's request will go to the status "cancellation-request-denied-ffm".
5- In the Marketplace order, click cancel;
6- The Marketplace request will be stuck at "Request-Cancel";

It may happen that the Marketplace order continues with the order and goes to invoice, when it sends the invoice.


##

## Workaround


This is not a workaround, but guidance to accounts, once the seller requests cancellation, do not refuse the request itself.





