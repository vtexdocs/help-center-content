---
title: 'Returned Itens with same SkuId on different UniqueId arrays it is not visible properly'
id: 65uUpH4uSicaDzruCIBaTq
status: PUBLISHED
createdAt: 2024-06-14T20:48:37.328Z
updatedAt: 2024-06-14T20:48:38.207Z
publishedAt: 2024-06-14T20:48:38.207Z
firstPublishedAt: 2024-06-14T20:48:38.207Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: returned-itens-with-same-skuid-on-different-uniqueid-arrays-it-is-not-visible-properly
locale: en
kiStatus: Backlog
internalReference: 1050294
---

## Summary


Our integrated systems (OMS/SNO/UI) was not designed to use the same info for correlation to shows the correct information when an iten with the same SKU was crated on different uniqueid array. It happens because some systems uses skuid and others itemindex.


##

## Simulation


Create an order with a more than one quantity items, creating an order with more than one array of itens with same skuid. Invoice the order and on return pages will be possible to see that the item has no information about diferences between each one.


##

## Workaround


There is no workarround for that.





