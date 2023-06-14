---
title: 'Event Inconsistency'
id: 2YnhehJXuJcsy3f3Rezn6X
status: CHANGED
createdAt: 2022-06-20T23:00:31.430Z
updatedAt: 2022-06-27T12:52:29.346Z
publishedAt: 2022-06-27T12:52:28.556Z
firstPublishedAt: 2022-06-20T23:00:31.899Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: event-inconsistency
kiStatus: Scheduled
internalReference: 267299
---

## Summary





When the user places an order in checkout, a new order flow is started. From this moment on, the VTEX gateway is consulted when the following order statuses are identified: "Payment pending" and "Verifying invoice". In the "Payment Pending" status, a payment notification is expected to be sent to the Orders module. During this period, some problems with event processing may occur.Although there is not only one root cause directly related to the processing event issue, any other internal or external issue linked to the notification system can cause the order flow to be blocked in "pending payment" status.

The message queue provides an asynchronous communication protocol, in which events are placed in a queue to be consumed at a predetermined time in the future. Thus, we've already mapped some scenarios where there is an inconsistency in this flow to categorize them and solve them one by one.


- Event loss/not generated;
- Event stuck and not processed;
- Processing errors that may cause database inconsistencies.

This KI refers explicitly to the scenarios mentioned above and is not intended to exhaust all possibilities of event processing problems that may occur. New root causes or related issues, such as bad responses from the provider (which happens regularly), can lead to situations where the order is stuck.Each case needs to be investigated individually in order to determine the root cause of the problem.



## Simulation





There's no way to simulate this behavior.



## Workaround





Please contact our support team to manually reprocess the event.

