---
title: "Shipping preview shows pick-up postal code for shipping when there is package split for pick-up and shipping"
id: 7gGu9EUZGGXp4dRCCGipsA
status: PUBLISHED
createdAt: 2024-06-26T20:36:39.627Z
updatedAt: 2024-06-26T20:36:40.541Z
publishedAt: 2024-06-26T20:36:40.541Z
firstPublishedAt: 2024-06-26T20:36:40.541Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-shows-pickup-postal-code-for-shipping-when-there-is-package-split-for-pickup-and-shipping
locale: en
kiStatus: Backlog
internalReference: 938124
---

## Summary


In the shipping preview, when selecting pick up in store, but not all items are available for that pick-up, the address displayed for shipping is from the chosen pick-up, and it's not possible to change it. In the orderForm, the selected address for shipping is correct though.


##

## Simulation



- Add items to the cart where at least one is not available for pickup;
- Add a postal code to the cart;
- Change to pick up in store;
- The postal code shown for shipping is from the chosen pick-up.


##

## Workaround


Change the postal code in the shipping step.



