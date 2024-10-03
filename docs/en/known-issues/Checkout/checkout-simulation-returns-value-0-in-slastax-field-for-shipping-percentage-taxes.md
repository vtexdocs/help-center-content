---
title: "Checkout Simulation returns value 0 in 'slas.tax' field for Shipping Percentage taxes"
id: 54Mtsj8EKuo0SaQCoWyYzj
status: PUBLISHED
createdAt: 2024-04-05T18:55:32.183Z
updatedAt: 2024-04-05T18:55:33.336Z
publishedAt: 2024-04-05T18:55:33.336Z
firstPublishedAt: 2024-04-05T18:55:33.336Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-simulation-returns-value-0-in-slastax-field-for-shipping-percentage-taxes
locale: en
kiStatus: Backlog
internalReference: 1012724
---

## Summary


Shipping Percentage taxes are not returned in the `logisticsInfo.slas.tax` field when performing a checkout simulation even though individual taxes information are available in the `items.priceTags` field.


##

## Simulation



- Configure a Shipping Percentage Tax
- Make a cart simulation request with selected SLA
- The `tax` field returns value `0`


##

## Workaround


N/A



