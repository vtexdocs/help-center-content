---
title: Amazon integration stock reservations for KITS
id: 6ZEvHuGCOEcuQTya1oDOyu
status: PUBLISHED
createdAt: 2023-05-22T14:28:54.846Z
updatedAt: 2023-05-22T14:28:55.337Z
publishedAt: 2023-05-22T14:28:55.337Z
firstPublishedAt: 2023-05-22T14:28:55.337Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: amazon-integration-stock-reservations-for-kits
kiStatus: Backlog
internalReference: 829583
---

## Summary



We currently have an issue for stock reservation in Amazon integration, what happens is before creating the order we do a stock reservation, and for itens that are KITS we are have an issue in stock reservation, but when the Order is created the stock is being reserved with no error.


##

## Simulation



This will only be applied for KITS in Amazon Integration, and for stock reservation, inside the bridge - Orders menu. we can see a warning:

Order reservation failed: SLA not available


##

## Workaround



Once the order is created the stock is reservation with success.





