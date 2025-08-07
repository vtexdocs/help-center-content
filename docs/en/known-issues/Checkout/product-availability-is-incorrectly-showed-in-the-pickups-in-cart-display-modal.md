---
title: "Product availability is incorrectly showed in the pickups in cart display modal"
id: 6aoRWAMSGDwcuUPvGd8bI9
status: PUBLISHED
createdAt: 2022-03-30T17:24:21.013Z
updatedAt: 2024-02-16T20:28:45.041Z
publishedAt: 2024-02-16T20:28:45.041Z
firstPublishedAt: 2022-03-30T17:24:21.669Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: product-availability-is-incorrectly-showed-in-the-pickups-in-cart-display-modal
locale: en
kiStatus: No Fix
internalReference: 552875
---

## Summary



In the shipping preview, after entering location, the pickups selection modal incorrectly informs the availability of items in their respective stores. For example, Store X has all available items, but in the modal the information is that one of the items is unavailable. When arriving at the checkout, the information is displayed correctly, both in the shipping stage and also in the pickups modal (when there is a division of the items in several different pickups).



## Simulation



In this specific case, there were three items in the cart, each item came from a different seller, but it was the same SLA for withdrawing all items in just 1 pickup. And with that, in the cart pickup modal, it appeared that two items were unavailable, even though they were available. Upon reaching the checkout stage, the package division was correct with the withdrawal in the single SLA that was equivalent for everyone.




## Workaround


N/A

