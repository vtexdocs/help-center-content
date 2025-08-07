---
title: "Price updates with cache on end applications"
id: 1ZDl8C3DDoACmxRqRlYDJo
status: PUBLISHED
createdAt: 2023-09-08T16:08:24.445Z
updatedAt: 2023-09-08T16:08:25.900Z
publishedAt: 2023-09-08T16:08:25.900Z
firstPublishedAt: 2023-09-08T16:08:25.900Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: price-updates-with-cache-on-end-applications
locale: en
kiStatus: Backlog
internalReference: 896520
---

## Summary


The price modifications made on the account update almost real time on price APIs. However, checkout simulations take about 5min have the most updated price on the product due to cache. This is expected.

However, on end applications such as external affiliates or marketplace integrations like google shopping the prices can, **sometimes**, be delivered wrong.

This happens because the price module notifies all internal systems that the price was updated as soon as the action happens, not giving enough time for the end applications that consults checkout simulations to get the price without cache.


##

## Simulation



1. Update the price on a sku;
2. Check on the bridge logs if the price sent to marketplace integrations was the must updated one or the old value.


##

## Workaround


N/A





