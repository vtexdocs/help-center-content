---
title: When an error occurs after Firstdata approves a settlement, the transaction cannot be completed.
id: 7MITAqam9KWVXrUiNX5Jh0
status: PUBLISHED
createdAt: 2023-02-27T15:48:31.356Z
updatedAt: 2023-02-27T15:48:31.973Z
publishedAt: 2023-02-27T15:48:31.973Z
firstPublishedAt: 2023-02-27T15:48:31.973Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: when-an-error-occurs-after-firstdata-approves-a-settlement-the-transaction-cannot-be-completed
kiStatus: Backlog
internalReference: 760458
---

## Summary


At times, errors may occur while processing our operations through the gateway. In the case of Firstdata's connector, an error may arise immediately after the settlement approval on our side. To sort out this, we need to request a settlement again. However, due to idempotency, the provider does not send an "approved" response again, which can cause the transaction to become stuck in a "settling" status until a new status update is provided.


##

## Simulation


It's not possible to reproduce because it's intermittent.


##

## Workaround


There's no workaround available





