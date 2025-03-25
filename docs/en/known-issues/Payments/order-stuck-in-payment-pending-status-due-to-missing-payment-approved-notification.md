---
title: 'Order stuck in Payment Pending status due to missing payment approved notification'
id: 1yM3alrrYhrpdZhBPLslZC
status: PUBLISHED
createdAt: 2024-05-24T15:04:47.795Z
updatedAt: 2024-05-24T15:04:48.820Z
publishedAt: 2024-05-24T15:04:48.820Z
firstPublishedAt: 2024-05-24T15:04:48.820Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-status-due-to-missing-payment-approved-notification
locale: en
kiStatus: Backlog
internalReference: 1031035
---

## Summary



In the "Payment Pending" status, a payment notification is expected to be sent to the Orders module. During this period, some problems with event processing may occur.
The message queue provides an asynchronous communication protocol, in which events are placed in a queue to be consumed at a predetermined time in the future.
This KI refers explicitly to the scenarios with PPP connectors and is not intended to exhaust all possibilities of event processing problems that may occur.


##

## Simulation



There's no way to simulate this behavior.


##

## Workaround



Please contact our support team to manually reprocess the event.





