---
title: "Regionalized navigation to the list of selected sellers that do not fulfill the SKU associated with a gift."
id: K0njkHYwYPIPCpnXFM5O2
status: PUBLISHED
createdAt: 2025-01-22T13:58:43.805Z
updatedAt: 2025-01-22T13:58:44.533Z
publishedAt: 2025-01-22T13:58:44.533Z
firstPublishedAt: 2025-01-22T13:58:44.533Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: regionalized-navigation-to-the-list-of-selected-sellers-that-do-not-fulfill-the-sku-associated-with-a-gift
locale: en
kiStatus: Backlog
internalReference: 1167349
---

## Summary



For regionalized navigation in cases where there are gift SKUs associated with the base item that do not have availability at the same sellers as the gift, it is possible that the heuristic will create a seller list that results in the base item being unavailable in the cart.


##

## Simulation



In an account whose navigation is based on region;

Create a buy-one-get-one-free promotion, this freebie must be a SKU and not be stocked by the same sellers as the base SKU.

Now, possibly when you validate the list of elected sellers, you will see that they have no availability for the base item.


##

## Workaround


To avoid this scenario, all you need to do is ensure that the gift SKU is available from the same sellers as the base SKU.





