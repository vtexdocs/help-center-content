---
title: 'AvailableQuantity value inconsistent due to the large number of routes created to deliver the item'
id: 4kKVjSNsIEU8ZVGcpwvzQw
status: PUBLISHED
createdAt: 2024-05-16T12:14:20.776Z
updatedAt: 2024-05-16T12:15:36.200Z
publishedAt: 2024-05-16T12:15:36.200Z
firstPublishedAt: 2024-05-16T12:14:21.778Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: availablequantity-value-inconsistent-due-to-the-large-number-of-routes-created-to-deliver-the-item
locale: en
kiStatus: Backlog
internalReference: 1034211
---

## Summary


During the indexing pipeline of an item, a simulation is carried out without the use of a postal code to validate availability, this simulation, when it reaches the logistics system, carries out a validation combining all the docks, warehouses and shipping policies available for a sales channel, the response to this calculation determines the availability of the item, however this response has a read limit of 10,000 routes, so when a calculation results in more than 10,000, the remaining routes are disregarded, which can cause the system to return an inconsistent response.


##

## Simulation


There is no simple way to simulate such a scenario, as you need to have numerous logistics configurations in place.


##

## Workaround


Remove unused configurations from the sales channel (Docks, Warehouses and Shipping policies), thus reducing the number of routes created by the system during calculation, bringing the number of routes below the limit recommended by the system (10,000).





