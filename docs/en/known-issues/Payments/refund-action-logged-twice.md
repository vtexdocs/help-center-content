---
title: 'Refund action logged twice'
id: sentkBZJsQ9X954iNEyXh
status: PUBLISHED
createdAt: 2024-09-16T20:29:22.928Z
updatedAt: 2024-09-16T20:29:23.892Z
publishedAt: 2024-09-16T20:29:23.892Z
firstPublishedAt: 2024-09-16T20:29:23.892Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: refund-action-logged-twice
locale: en
kiStatus: Backlog
internalReference: 1099618
---

## Summary


In some cases two refund actions can happen in the transaction but none of them is sent to acquirer.

When a refund request fails there's no retry, a `CreateTaskAsyncRequest` sends an email notification to merchant about the error and a manual refund must be requested to acquirer. In this case the refund is logged with `type` = `email-notification`, a successful refund would be `online`, both should never happen in a normal scenario.


    https://.vtexpayments.com.br/api/pvt/transactions//refunds



##

## Simulation


We were not able to simulate.


##

## Workaround


Not available, a manual refund must be performed (merchant + acquirer).




