---
title: "Orders stuck in completed with on-order-completed status in fulfillment and Approved Payment status in Marketplace"
id: 2mKGSIgqSpnGX1tb2Fiaff
status: PUBLISHED
createdAt: 2025-04-30T20:21:50.865Z
updatedAt: 2025-07-30T16:58:47.603Z
publishedAt: 2025-07-30T16:58:47.603Z
firstPublishedAt: 2025-04-30T20:21:51.539Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-completed-with-onordercompleted-status-in-fulfillment-and-approved-payment-status-in-marketplace
locale: en
kiStatus: Backlog
internalReference: 1218615
---

## Summary


In some cases, an order may get stuck in its initial statuses (`on-order-completed-ffm`, `on-order-completed` Or `processing`) even after being seemingly created successfully, this happens when one of the internal steps in the order creation flow fails silently, causing a **workflow desynchronization** that prevents the order from progressing normally.




##

## Simulation


At the moment, this scenario cannot be reliably simulated, as it depends on intermittent or specific failures in isolated parts of the order creation process.




##

## Workaround


There is currently no way to prevent this type of scenario, but the technical team can manually apply corrective actions to affected orders, allowing them to proceed normally through the workflow.






