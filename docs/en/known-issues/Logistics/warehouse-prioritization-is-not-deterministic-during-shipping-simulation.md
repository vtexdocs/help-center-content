---
title: "Warehouse prioritization is not deterministic during shipping simulation"
id: 6nl1LuyYD9NhQEaDyFmdZU
status: PUBLISHED
createdAt: 2025-07-30T14:51:46.357Z
updatedAt: 2025-07-30T14:51:47.055Z
publishedAt: 2025-07-30T14:51:47.055Z
firstPublishedAt: 2025-07-30T14:51:47.055Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: warehouse-prioritization-is-not-deterministic-during-shipping-simulation
locale: en
kiStatus: Backlog
internalReference: 1268196
---

## Summary



Currently, the logistics does not always choose the warehouse with the best conditions, such as lowest processing time or shipping cost, when splitting quantities of the same SKU across multiple warehouses. Instead, the selection process for which warehouse will fulfill each item is based on the order in which warehouses appear in the system. This order comes from the availability service, which is itself unordered, making the selection non-deterministic. As a result, the simulator can select a warehouse with higher processing time and extra fee, even when better options are available (for example, preferring a warehouse with 3 processing days and an $5.00 extra fee over one with 2 days and an $1.00 extra fee).


##

## Simulation



To reproduce the issue:

- Set up inventory so that no single warehouse can fulfill the total requested quantity for a specific SKU (e.g., you need 3 units, but each warehouse only has 1 or 2 available).
- Prepare two or more warehouses eligible to fulfill the missing quantity, but with different processing times and shipping fees.
- Run a shipping simulation using the platform's logistics admin for this SKU/quantity.
- Observe that the simulator may select a warehouse with worse (higher) cost/time, even though a better option exists.


##

## Workaround


There is no workaround available.





