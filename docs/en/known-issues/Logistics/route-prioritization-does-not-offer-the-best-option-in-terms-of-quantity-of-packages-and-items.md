---
title: "Route prioritization does not offer the best option in terms of quantity of packages and items"
id: 4verafDuoFnC5vGDI4UV1m
status: PUBLISHED
createdAt: 2023-10-30T18:28:52.771Z
updatedAt: 2023-10-30T18:28:53.648Z
publishedAt: 2023-10-30T18:28:53.648Z
firstPublishedAt: 2023-10-30T18:28:53.648Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: route-prioritization-does-not-offer-the-best-option-in-terms-of-quantity-of-packages-and-items
locale: en
kiStatus: Backlog
internalReference: 927747
---

## Summary


In Logistics, the first tiebreaker criteria when the system is choosing the route (warehouse + dock + shipping policy), is related to the number of packages needed for this specific route, less package means that the route should be better.
Although, the system can't consider the relationship between the number of package and number of items in each package.
This means that for an example an order with 2 package and 2 items, can be prioritise when it has an available route that deliveries only 1 package with all the items.


##

## Simulation


There is no easy way to simulate this scenario, as this is very specific and the system can behave differently in each case, but we have an example very clear where the system choose the SLA that divides the package in 2 instead of offering the SLA with only 1 package.


##

## Workaround


The merchant can separate the warehouse + dock + shipping policy, with different shipping method name, in order to not depend on the prioritization of the route.




