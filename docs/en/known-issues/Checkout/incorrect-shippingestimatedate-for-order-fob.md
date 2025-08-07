---
title: "Incorrect ShippingEstimateDate for order FOB"
id: 3WLcrdw0tEdOvlMCYx9uyd
status: PUBLISHED
createdAt: 2023-01-05T20:26:07.074Z
updatedAt: 2024-02-16T20:23:32.848Z
publishedAt: 2024-02-16T20:23:32.848Z
firstPublishedAt: 2023-01-05T20:26:07.500Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-shippingestimatedate-for-order-fob
locale: en
kiStatus: No Fix
internalReference: 269104
---

## Summary

"shippingEstimateDate" is incorrectly calculated for orders with the type FOB


##

## Simulation



- Create an order via API sending the parameter `"isFOB": true` in the "shippingData"
- Do a Get Order and check that the parameter "ShippingEstimateDate" is not considering the "shippingEstimate" sent by the marketplace


##

## Workaround


N/A




