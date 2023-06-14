---
title: 'UI does not update best SLA choice in cart'
id: 5H05jLUJA0gmSDTO6nMsPE
status: PUBLISHED
createdAt: 2022-03-26T02:30:36.692Z
updatedAt: 2022-11-25T21:54:03.143Z
publishedAt: 2022-11-25T21:54:03.143Z
firstPublishedAt: 2022-03-26T02:30:37.014Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-does-not-update-best-sla-choice-in-cart
kiStatus: Backlog
internalReference: 550201
---

## Summary


When we have two SKUs in the cart whose SLAID of the items has an intersection, this is the SLA that will be offered in the cart with leanShipping active;
However, if one of these SKUs is removed and the best sla of the SKU left in the cart is other than the one chosen previously, the UI does not recalculate to show it as an option for the user, the UI will continue to show the chosen SLA when there were still other items in the cart;



## Simulation


To simulate this scenario, it is necessary that we have two SKUs in a cart;
These two SKUS must have at least one SLA that is the intersection between them;
One of these SKUs must have two SLA's, one with better terms and prices in addition to the SLA that it shares with the other SKU;

When placing them in the cart it is possible to see that the cart will display it as an option because it is the intersection value for the two;
When removing the SKU that has only one SLA, the system will not reselect the best SLA, keeping the previous choice



## Workaround


N/A

