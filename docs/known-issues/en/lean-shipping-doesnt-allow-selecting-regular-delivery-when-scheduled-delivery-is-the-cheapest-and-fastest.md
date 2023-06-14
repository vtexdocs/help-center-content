---
title: "Lean shipping doesn't allow selecting regular delivery when scheduled delivery is the cheapest and fastest"
id: 4foQfCWNbU4280gcG9G4Of
status: PUBLISHED
createdAt: 2023-06-12T12:40:32.241Z
updatedAt: 2023-06-12T12:40:33.041Z
publishedAt: 2023-06-12T12:40:33.041Z
firstPublishedAt: 2023-06-12T12:40:33.041Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: lean-shipping-doesnt-allow-selecting-regular-delivery-when-scheduled-delivery-is-the-cheapest-and-fastest
kiStatus: Backlog
internalReference: 842018
---

## Summary


In carts where there is a scheduled delivery and a regular delivery, and Lean Shipping is activated; if the cheapest and fastest option is the scheduled delivery, the UI will show the toggle normally, but when deselecting, nothing will happen, and the scheduled delivery will still be selected.


##

## Simulation



- Register scheduled delivery and a regular delivery;
- Make sure the scheduled delivery is the cheapest and fastest between both;
- Activate lean shipping;
- In the shipping step, select scheduled delivery and deselect; nothing will change.


##

## Workaround


Deactivate the lean shipping.




