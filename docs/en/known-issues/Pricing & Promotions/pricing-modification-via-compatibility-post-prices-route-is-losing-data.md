---
title: "Pricing modification via compatibility post prices route is losing data"
id: 4VqqNOUcRIGiZhxyVU4Ite
status: PUBLISHED
createdAt: 2022-03-29T19:12:47.179Z
updatedAt: 2024-12-19T19:50:09.968Z
publishedAt: 2024-12-19T19:50:09.968Z
firstPublishedAt: 2022-03-29T19:12:47.781Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-modification-via-compatibility-post-prices-route-is-losing-data
locale: en
kiStatus: No Fix
internalReference: 487698
---

## Summary


We've identified an issue with the compatibility post prices route. When multiple price update requests are sent within a short timeframe, the system might not process the most up-to-date price. This can result in outdated or incorrect prices being applied.


##

## Simulation



1. Use the compatibility post prices route to send a batch of price updates.
2. Monitor the process using Audit logs to track whether all updates are correctly applied.
3. Repeat the test with different batch sizes and intervals between requests. Note that the issue does not consistently occur in every test.


##

## Workaround



- Transition to using the Pricing V2 APIs, which do not exhibit this issue.
- Distribute the requests more evenly by introducing delays, such as waiting at least 30 seconds between consecutive batches.




