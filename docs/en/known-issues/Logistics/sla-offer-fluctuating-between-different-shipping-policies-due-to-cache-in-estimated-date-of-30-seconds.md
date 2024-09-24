---
title: 'SLA offer fluctuating between different shipping policies due to cache in estimated date of 30 seconds'
id: 2uN3bVrxHhj6Xs6TeQTJDr
status: PUBLISHED
createdAt: 2024-05-21T19:34:50.437Z
updatedAt: 2024-05-21T19:38:10.682Z
publishedAt: 2024-05-21T19:38:10.682Z
firstPublishedAt: 2024-05-21T19:34:53.918Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: sla-offer-fluctuating-between-different-shipping-policies-due-to-cache-in-estimated-date-of-30-seconds
locale: en
kiStatus: Backlog
internalReference: 1036916
---

## Summary


The logistics simulation can oscillate between offering SLAs if the client has shipping policies with the same price, delivery time, SlaType, dock cost and warehouse configuration, but different dock priority.
We have a cache that stores the delivery time for 30 seconds, so when a new simulation is made, another shipping policy with the same configurations that has a longer dock time may be offered when it shouldn't be.



##

## Simulation


Shipping policies A and B with the same total delivery time (1 day for example), price, dock cost and warehouse, but with different dock priorities.
Make a quote at 16:00:00 where shipping policy A with lower dock priority will be offered, then the estimate result would be for the next day at 16:01:00, this data is cached for 30 seconds;
When making a new quote at 16:00:10 for example, shipping policy B with a higher dock priority will be offered, because in the first quote the delivery time would be for example at 16:01:00 cached for 30 seconds, while the second quote B is chosen because it also has the estimate for the next day but at 16:00:00.



##

## Workaround


There is no workaround for a scenario with the same settings as described above.





