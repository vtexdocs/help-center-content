---
title: "UI doesn't show delivery window selection for pick-up points when an item from a seller is between items for pick-up from another seller"
id: 5SyIw04UtNiZhmy0ELNLCD
status: PUBLISHED
createdAt: 2023-12-15T20:18:48.433Z
updatedAt: 2023-12-15T20:18:49.218Z
publishedAt: 2023-12-15T20:18:49.218Z
firstPublishedAt: 2023-12-15T20:18:49.218Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-doesnt-show-delivery-window-selection-for-pickup-points-when-an-item-from-a-seller-is-between-items-for-pickup-from-another-seller
locale: en
kiStatus: Backlog
internalReference: 954108
---

## Summary


In a cart with at least three products, where the item orders are: 1st is for scheduled pick-up 1, 2nd for scheduled pick-up 2 (different seller), and 3rd is for scheduled pick-up 1, the UI will not show the delivery windows to select the date/hour for the 2nd pickup. This happens because the API will group the 1st item and 3rd item since it's the same SLA.

It's not possible to go to the payment step and finish the purchase.


##

## Simulation



- Add an item to the cart for pick-up from seller A;
- Add an item to the cart for pick-up from seller B;
- Add another item to the cart for pick-up from seller A;
- In the shipping step, the pick-up delivery windows to select the date/hour won't be shown.


##

## Workaround


N/A




