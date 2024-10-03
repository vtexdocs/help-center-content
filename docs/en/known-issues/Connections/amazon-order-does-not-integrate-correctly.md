---
title: 'Amazon order does not integrate correctly'
id: 76AsvaidpYs285YXs3GkyJ
status: PUBLISHED
createdAt: 2024-10-02T13:52:36.821Z
updatedAt: 2024-10-02T13:52:37.755Z
publishedAt: 2024-10-02T13:52:37.755Z
firstPublishedAt: 2024-10-02T13:52:37.755Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-order-does-not-integrate-correctly
locale: en
kiStatus: Backlog
internalReference: 1109828
---

## Summary


Amazon order is not sent to OMS correctly or it does not follow the entire workflow correctly getting stuck at some stage.


##

## Simulation


In order to make the reservation for Amazon orders, the integration does not setup the deliveryChannel information.

Most of the times the lack of this info has no impacts on the order, but in some error scenarios (like timeout to confirm the reservation) the logistics system needs this information to reprocess the order.



##

## Workaround


N/A





