---
title: "Inconsistency in order statuses between OMS and Pick and Pack"
id: 2qI7W8nPArA4JQKI3K3Hwx
status: PUBLISHED
createdAt: 2025-07-14T19:00:35.543Z
updatedAt: 2025-07-14T19:00:36.132Z
publishedAt: 2025-07-14T19:00:36.132Z
firstPublishedAt: 2025-07-14T19:00:36.132Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistency-in-order-statuses-between-oms-and-pick-and-pack
locale: en
kiStatus: Backlog
internalReference: 1259680
---

## Summary



In some scenarios, orders that have been canceled in the OMS continue to be displayed as "Ready for Handling" in the Pick and Pack order list instead of being automatically updated to a canceled status.

This leads to operational confusion, since the same order can show divergent statuses between the OMS and Pick and Pack modules. This behavior has been reported and is associated with intermittent synchronization issues between OMS and Pick and Pack, historically linked to errors (such as timeouts or event stream failures) in the infrastructure responsible for propagating status updates.


##

## Simulation



To reproduce the issue:


1. Create an order in a VTEX account with Pick and Pack enabled.
2. In OMS, cancel the order following the standard cancellation flow.
3. Check the same order in the Pick and Pack dashboard to see if it still appears as "Ready for Handling".
4. Compare the order status between OMS and Pick and Pack.
5. In cases where this bug occurs, the order is canceled in OMS but remains "Ready for Handling" in Pick and Pack.


##

## Workaround



We don't have a workaround for this behavior. Currently, only the product/engineering side can resolve the discrepancy.

A product ticket must be opened to take the necessary actions.





