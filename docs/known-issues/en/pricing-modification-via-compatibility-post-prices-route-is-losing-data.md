---
title: Pricing modification via compatibility post prices route is losing data
id: 4VqqNOUcRIGiZhxyVU4Ite
status: PUBLISHED
createdAt: 2022-03-29T19:12:47.179Z
updatedAt: 2022-11-25T22:12:44.964Z
publishedAt: 2022-11-25T22:12:44.964Z
firstPublishedAt: 2022-03-29T19:12:47.781Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: pricing-modification-via-compatibility-post-prices-route-is-losing-data
kiStatus: No Fix
internalReference: 487698
---

## Summary


We've identified a problem in the compatibility post prices route when sending too many requests in a small window we are not using the most updated price

We strongly recommend that all accounts stop using our pricing v1 apis.



## Simulation


Send a batch of prices updates and follow up the splunk logs



## Workaround


1- we recommend the use of the pricing v2 apis
2- better distribute the requests, wait like 30s between them.

