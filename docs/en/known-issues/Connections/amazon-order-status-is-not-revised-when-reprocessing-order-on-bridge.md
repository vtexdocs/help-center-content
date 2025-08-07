---
title: "Amazon Order Status is not revised when reprocessing order on bridge"
id: 6t7R49BcUjC9LU8UWLvwdh
status: PUBLISHED
createdAt: 2024-10-18T12:18:00.080Z
updatedAt: 2024-10-18T12:18:01.014Z
publishedAt: 2024-10-18T12:18:01.014Z
firstPublishedAt: 2024-10-18T12:18:01.014Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-order-status-is-not-revised-when-reprocessing-order-on-bridge
locale: en
kiStatus: Backlog
internalReference: 1119618
---

## Summary


Amazon orders that had some kind of error go to the bridge area with the error message and the status of the order at the time it was first processed.
However, even if the status update on Amazon (like getting canceled) the bridge status remain the same.
With that, if an order is reprocessed on bridge, it's status is no revised at the marketplace and it could cause errors of integrating orders with the wrong status.


##

## Simulation



1. Get an order with error on bridge;
2. Check if it's status is cancelled on Amazon;
3. Reprocess the order on bridge and check it is integrated successfully.


##

## Workaround


N/A





