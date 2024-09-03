---
title: "Payout and Transaction split don't work in the same order for Multilevel Omnichannel Inventory"
id: 3rFyqzEnSwx2czwdlgDovU
status: PUBLISHED
createdAt: 2023-03-23T19:03:22.498Z
updatedAt: 2024-02-16T20:25:26.525Z
publishedAt: 2024-02-16T20:25:26.525Z
firstPublishedAt: 2023-03-23T19:03:23.526Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: payout-and-transaction-split-dont-work-in-the-same-order-for-multilevel-omnichannel-inventory
locale: en
kiStatus: No Fix
internalReference: 777201
---

## Summary


In a marketplace with multi-level relationship (MOI) sellers, when a cart is assembled with at least one seller using transaction split and others using payout split, the transactions with payout split will be duplicated repeating the items from different sellers. This scenario will not allow placing the order, and the message "Sorry. Could not process the requested payments." will be shown.


##

## Simulation



- Configure a seller with checkout endpoint / to use multi-level relationship (MOI);
- Configure a seller with fulfillment endpoint and enable transaction split;
- Assemble a cart with those sellers;
- Place the order.


##

## Workaround


Use payout split for all sellers



