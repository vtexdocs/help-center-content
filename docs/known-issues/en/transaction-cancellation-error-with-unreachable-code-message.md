---
title: "Transaction cancellation error with 'Unreachable code' message"
id: 2Y4joZlyDhbNWU9ycw32U3
status: PUBLISHED
createdAt: 2024-03-12T16:34:10.113Z
updatedAt: 2024-03-12T16:34:11.037Z
publishedAt: 2024-03-12T16:34:11.037Z
firstPublishedAt: 2024-03-12T16:34:11.037Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transaction-cancellation-error-with-unreachable-code-message
locale: en
kiStatus: Backlog
internalReference: 998435
---

## Summary


A full transaction cancellation can fail returning the message `Unreachable code` (only visible via API).

This error happens in payment split scenario, in the UI you can see the cancellation attempt logs but no response.


##

## Simulation


We were not able to simulate this error.


##

## Workaround


It's possible to cancel the payments separately (starting with the lowest value).




