---
title: "Tax Service doesn't consider nominal promotions when placing orders"
id: 1vCs62opRc2iDw0NmYqlT7
status: PUBLISHED
createdAt: 2023-09-14T17:48:37.761Z
updatedAt: 2023-09-14T17:48:38.630Z
publishedAt: 2023-09-14T17:48:38.630Z
firstPublishedAt: 2023-09-14T17:48:38.630Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: tax-service-doesnt-consider-nominal-promotions-when-placing-orders
locale: en
kiStatus: Backlog
internalReference: 900120
---

## Summary


When using tax service, if there is a nominal promotion applied in the cart and an item split happens, the request checkout doesn't have the nominal promotion applied, not allowing to finish the purchase, and the message "The requested order could not be created. Please try again" will be shown.


##

## Simulation



- Create a nominal promotion;
- Add items to the cart, make sure the items split;
- Try to finish the purchase.


##

## Workaround


N/A




