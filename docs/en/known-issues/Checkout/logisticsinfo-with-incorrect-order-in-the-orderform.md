---
title: "logisticsInfo with incorrect order in the orderForm"
id: 3rrMW0ekZcgROOkTyxWCIJ
status: PUBLISHED
createdAt: 2025-01-28T14:43:31.712Z
updatedAt: 2025-01-29T14:39:39.473Z
publishedAt: 2025-01-29T14:39:39.473Z
firstPublishedAt: 2025-01-28T14:43:32.566Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: logisticsinfo-with-incorrect-order-in-the-orderform
locale: en
kiStatus: Backlog
internalReference: 1170225
---

## Summary


Items in `shippingData.logisticsInfo` are not ordered according to the `itemIndex` property, causing inconsistencies only in the checkout UI, but placing the order is still possible.


##

## Simulation


There is no straightforward step-by-step process for replicating this scenario, but checking the orderForm via API.


##

## Workaround


N/A




