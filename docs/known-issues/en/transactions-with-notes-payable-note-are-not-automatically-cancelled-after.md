---
title: Transactions with notes payable note are not automatically cancelled after the payment expires
id: 5isjT9txiBYSQzZK00xjg3
status: PUBLISHED
createdAt: 2021-09-30T15:45:44.398Z
updatedAt: 2022-12-22T15:05:19.385Z
publishedAt: 2022-12-22T15:05:19.385Z
firstPublishedAt: 2021-10-25T13:26:15.596Z
contentType: knownIssue
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
tag: Payments
slug: transactions-with-notes-payable-note-are-not-automatically-cancelled-after
kiStatus: Backlog
internalReference: 
---

## Summary

If a customer places an order with the notes payable payment method and the payment is not made, the transaction is not cancelled by the gateway after the payment due date. Consequently, since the OMS cannot identify the cancellation event, the order is not cancelled.

## Simulation

1. In the Admin, go to the notes payable affiliation settings.
2. In the **expiration date** field, enter `1` and click __Save__.
3. Place an order with the notes payable payment method.
4. Note that the transaction is not automatically cancelled after the notes payable expires.

## Workaround

Currently, there is no workaround for this scenario.

