---
title: 'New UI do not shows on orders the correct delivery Window estimated'
id: 5YG6dpMbOX3DK1fSWEyAzJ
status: PUBLISHED
createdAt: 2023-01-09T13:18:30.970Z
updatedAt: 2023-02-28T16:55:18.969Z
publishedAt: 2023-02-28T16:55:18.969Z
firstPublishedAt: 2023-01-09T13:18:31.481Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: new-ui-do-not-shows-on-orders-the-correct-delivery-window-estimated
locale: en
kiStatus: Backlog
internalReference: 620668
---

## Summary


On new UI some orders dont shows correctly the delivery windown estimated.

When there is an error divergence between order api and oms api it can happen or if there are more itens the New UI takes the EstimateDate from itemIndex 0 disregarding the Delivery Window.

## Simulation


Set a purchase with more them one item with shippingEstimateDate and Delivery Window populated them check the new interface.

## Workaround


The workaround is check using the old UI (user interface).




