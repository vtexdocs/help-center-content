---
title: "UI doesn't show window selection for pick-up points when an item from a seller is between items for pick-up from another seller"
id: 7uDtst6o01FV405luUQ3Ok
status: PUBLISHED
createdAt: 2024-08-07T18:26:30.702Z
updatedAt: 2024-08-07T18:26:31.693Z
publishedAt: 2024-08-07T18:26:31.693Z
firstPublishedAt: 2024-08-07T18:26:31.693Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-doesnt-show-window-selection-for-pickup-points-when-an-item-from-a-seller-is-between-items-for-pickup-from-another-seller
locale: en
kiStatus: Backlog
internalReference: 1077568
---

## Summary


In a cart with at least three products, where the item orders are: 1st is for pick-up 1, 2nd for pick-up 2 (different seller), and 3rd is for pick-up 1, the UI will not allow a SLA selection for the 2nd item.

It's possible to go to the payment step but due to the lack of a selected SLA for the 2nd item it's not possible to finish the purchase.


##

## Simulation



- Add an item to the cart for pick-up from seller A;
- Add an item to the cart for pick-up from seller B;
- Add another item to the cart for pick-up from seller A;
- In the shipping step, the seccond SLA selection window won't be shown.


##

## Workaround


Adding the item from seller B first in the cart and then adding the itens from seller B is makes it so the SLA selection is possible as is the purchase.





