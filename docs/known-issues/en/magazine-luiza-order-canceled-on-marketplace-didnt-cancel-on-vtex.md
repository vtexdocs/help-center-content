---
title: [Magazine Luiza] [Order canceled on Marketplace didn't cancel on VTEX]
id: 2HVJfeuKd74BYRpUKlpsQN
status: PUBLISHED
createdAt: 2023-04-18T16:53:18.470Z
updatedAt: 2023-04-18T16:53:19.166Z
publishedAt: 2023-04-18T16:53:19.166Z
firstPublishedAt: 2023-04-18T16:53:19.166Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: magazine-luiza-order-canceled-on-marketplace-didnt-cancel-on-vtex
kiStatus: Backlog
internalReference: 792618
---

## Summary


Order was canceled on the marketplace, but on OMS it was canceled and is still in the status "Waiting for authorization to dispatch"


##

## Simulation


- Order canceled on Makertplace;
- Order status was not updated to Canceled in OMS;
- Log does not show any errors in the flow;
- Bridge does not show any error;

We need to review the flow for canceled orders and the worker that fetches the status of these orders from the marketplace.


##

## Workaround


Is it possible to cancel the order using an internal route




