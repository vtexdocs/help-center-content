---
title: 'Orders Seller 1 has no notifications on Hook type FromOrders for State Payment Approved'
id: 4FurUuRzROSdEckWPFXH1w
status: PUBLISHED
createdAt: 2022-08-18T18:04:03.821Z
updatedAt: 2022-11-25T22:01:47.345Z
publishedAt: 2022-11-25T22:01:47.345Z
firstPublishedAt: 2022-08-18T18:04:04.564Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: orders-seller-1-has-no-notifications-on-hook-type-fromorders-for-state-payment-approved
kiStatus: Backlog
internalReference: 640925
---

## Summary


Orders Seller 1, where the MKT an FFMT is in the same account, has no notifications on Hook type FromOrders for the state "Payment-Approved".

The S3 is not saving this status, and due that the notifications are not being sent.



## Simulation



Make sure that Hook setup has the type configured as FromOrders and the state payment-approved on filter.
Generate an order type seller 1.
No notifications will be sent.

Confirm on Splunk logs.



## Workaround


If possible the client can use the type "FromWorkflow". At this type the notification is OK.

