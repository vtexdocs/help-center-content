---
title: 'Repeated items in the purchase summary for carts with more than 20 items'
id: 2k76x4aStel8e4ItTHfhof
status: PUBLISHED
createdAt: 2022-08-24T17:26:32.083Z
updatedAt: 2022-11-25T21:50:13.790Z
publishedAt: 2022-11-25T21:50:13.790Z
firstPublishedAt: 2022-08-24T17:26:32.624Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: repeated-items-in-the-purchase-summary-for-carts-with-more-than-20-items
locale: en
kiStatus: Backlog
internalReference: 367339
---

## Summary


When arriving at the checkout with more than 20 items, the items shown in the purchase summary (top-right items list) may be duplicated. The totalizers and even the API are correct. The scenario doesn't happen on the main list of items (cart step).



## Simulation



- Create a cart with more than 20 items;
- Advance into some checkout setup (profile, shipping, or payment)
- Go back and forth between the checkout and cart pages using the UI buttons;
- The items will be duplicated.



## Workaround


N/A

