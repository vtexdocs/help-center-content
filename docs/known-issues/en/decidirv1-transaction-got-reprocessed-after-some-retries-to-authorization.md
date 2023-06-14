---
title: DecidirV1 transaction got "reprocessed" after some retries to authorization
id: 2fxfg1IlnFUxAjo9E47HPq
status: PUBLISHED
createdAt: 2022-03-03T21:19:22.471Z
updatedAt: 2022-11-25T22:04:50.821Z
publishedAt: 2022-11-25T22:04:50.821Z
firstPublishedAt: 2022-03-03T21:19:23.075Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: decidirv1-transaction-got-reprocessed-after-some-retries-to-authorization
kiStatus: Backlog
internalReference: 384009
---

## Summary


This happens when a transaction gets the status 480 which means "REVIEW", and starts to retry until it receives a null payload. So, after that, we "reprocessed" the transaction which causes a failure and cancelation.



## Simulation


There's no way to simulate this.



## Workaround


No workaround is available at this time

