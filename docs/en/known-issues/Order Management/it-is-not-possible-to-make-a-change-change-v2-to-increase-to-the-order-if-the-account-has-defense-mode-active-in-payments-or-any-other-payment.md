---
title: "It is not possible to make a change (change v2) to increase to the order if the account has Defense Mode active in payments or any other payment!"
id: 2sKCyLWlSU4LDc1Q3ToB4C
status: PUBLISHED
createdAt: 2024-12-26T18:18:49.821Z
updatedAt: 2025-05-09T13:13:44.448Z
publishedAt: 2025-05-09T13:13:44.448Z
firstPublishedAt: 2024-12-26T18:18:50.932Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: it-is-not-possible-to-make-a-change-change-v2-to-increase-to-the-order-if-the-account-has-defense-mode-active-in-payments-or-any-other-payment
locale: en
kiStatus: Backlog
internalReference: 1155646
---

## Summary


When the account has DM (Defense Mode) activated in the payment module, and tries to make a change v2 to increase the value, it will not be possible to proceed with the operation, as the gateway enters retry mode, increasing the response time for SOS (SalesOrdemSystem), then SOS cancels the operation and tries again, there are 5 attempts until the change operation is completely canceled!.

This same scenario occurs when any payment method requires manual authorization from a user and increases and causes a delay in communication between the gateway and the SOS.


##

## Simulation


To simulate, the gateway must have defense mode activated and try to make a change v2 addition to the request!


##

## Workaround


There is no workaround for this scenario, it is necessary to disable DM for change v2 to follow!





