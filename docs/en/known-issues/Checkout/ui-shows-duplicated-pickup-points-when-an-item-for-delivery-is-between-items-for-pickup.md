---
title: "UI shows duplicated pick-up points when an item for delivery is between items for pick-up"
id: lIP6kRDsi23lNQd7RzNfY
status: PUBLISHED
createdAt: 2023-09-25T13:50:27.481Z
updatedAt: 2023-10-18T14:36:11.434Z
publishedAt: 2023-10-18T14:36:11.434Z
firstPublishedAt: 2023-09-25T13:50:28.066Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-shows-duplicated-pickup-points-when-an-item-for-delivery-is-between-items-for-pickup
locale: en
kiStatus: Backlog
internalReference: 906549
---

## Summary


In a cart with at least three products, where the item orders are: 1st is for pick-up, 2nd is for delivery, and 3rd is for pick-up, the UI will show the pick-up point duplicated. This happens because the API will group the 1st item and 3rd item since it's the same SLA.

It's possible to go to the payment step and finish the purchase.


##

## Simulation



- Add an item to the cart for pick-up;
- Add an item to the cart for delivery;
- Add another item to the cart for pick-up;
- In the shipping step, the pick-up will be duplicated


##

## Workaround


N/A




