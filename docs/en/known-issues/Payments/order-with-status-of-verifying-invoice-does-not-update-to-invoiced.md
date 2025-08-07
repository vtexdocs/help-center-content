---
title: "Order with Status of Verifying Invoice does not update to Invoiced."
id: 2FRiGkhLT3JID4I5MvoGo6
status: PUBLISHED
createdAt: 2022-03-03T18:37:58.724Z
updatedAt: 2025-02-24T15:20:26.097Z
publishedAt: 2025-02-24T15:20:26.097Z
firstPublishedAt: 2022-03-03T18:37:59.222Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-with-status-of-verifying-invoice-does-not-update-to-invoiced
locale: en
kiStatus: Backlog
internalReference: 500245
---

## Summary


Sometimes, the total value of the transaction is already captured, but its status doesn't update do "settled" or "finished". This can happen when there is an inconsistency between what was **actually captured** by the external provider and what was registered by the gateway as **requested for capture**. Making it impossible to advance the transaction and invoice the order. The order will be stuck in "verifying invoice".


##

## Simulation


It is not possible to simulate this problem, but we can see that it exists by checking with the API `https://.myvtex.com/api/payments/pvt/transactions//settlements` the difference between requests array and actions array.
If there is a divergence between those 2 total values, then we can confirm the inconsistency.


##

## Workaround


Open a ticket to Product Support - Payments, in order to manually proceed with the transaction flow.




