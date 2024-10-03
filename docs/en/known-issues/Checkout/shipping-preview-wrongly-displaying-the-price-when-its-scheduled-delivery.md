---
title: "Shipping Preview wrongly displaying the price when it's scheduled delivery"
id: 1348f4mDxoxAT7pTKBxm29
status: PUBLISHED
createdAt: 2023-01-31T19:16:25.118Z
updatedAt: 2024-03-27T15:40:02.745Z
publishedAt: 2024-03-27T15:40:02.745Z
firstPublishedAt: 2023-01-31T19:16:25.874Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-when-its-scheduled-delivery
locale: en
kiStatus: Fixed
internalReference: 532487
---

## Summary


Delivery price displayed in shipping-preview (cart) is incorrect when items are scheduled delivery and all these items leave in the same SLA. Even with the API returning the correct value, the UI does not reflect this information and displays the incorrect value.


##

## Simulation


Add two or more items in the cart with scheduled delivery, the UI will show a different value than the API return


##

## Workaround


N/A




