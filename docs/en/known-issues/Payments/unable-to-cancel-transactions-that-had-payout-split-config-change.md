---
title: 'Unable to cancel transactions that had payout split config change'
id: 2bhsI5119DLOhNjk2cb6q
status: PUBLISHED
createdAt: 2022-06-28T16:44:10.992Z
updatedAt: 2024-02-16T20:24:09.734Z
publishedAt: 2024-02-16T20:24:09.734Z
firstPublishedAt: 2022-06-28T16:44:11.460Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: unable-to-cancel-transactions-that-had-payout-split-config-change
locale: en
kiStatus: No Fix
internalReference: 364382
---

## Summary


When there is a change in the configuration, adding the payout split, and this causes new transactions to have information that was not available before and will now be used in the cancellation operation, which makes the transactions created before this configuration not are getting cancelled..



## Simulation



1. Make a transaction without the payout split being correctly configured.
2. Before the transaction is finalized, configure the payout split.
3. Try canceling the transaction via the UI or API.



## Workaround


We currently do not have a workaround. Transactions will not be able to be canceled until we have a fix. What is indicated is that the customer waits until the pre-configuration split transactions are completed before registering.

