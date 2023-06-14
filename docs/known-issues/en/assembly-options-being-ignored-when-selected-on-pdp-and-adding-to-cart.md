---
title: 'Assembly options being ignored when selected on PDP and adding to cart'
id: 2u0qbC98EK6vPskprYOsnd
status: PUBLISHED
createdAt: 2023-01-31T16:00:13.354Z
updatedAt: 2023-04-05T21:24:34.525Z
publishedAt: 2023-04-05T21:24:34.525Z
firstPublishedAt: 2023-01-31T16:00:14.091Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: assembly-options-being-ignored-when-selected-on-pdp-and-adding-to-cart
kiStatus: Fixed
internalReference: 743529
---

## Summary


In an assembly options PDP, when the user selects different quantities for a single item and goes to the Checkout’s cart the selection is ignored and the quantities are reset to the initial quantity. But if the user increases, for **all** items, in 1 quantity at least the selection is persisted.


##

## Simulation



- Login into the account;
- Access the PDP in a product with assembly;
- The items will be displayed with the initial quantities;
- Increase in 1 the quantity of any of the items and click on “Add to cart" button;
- Then go to the checkout’s cart and you’ll notice the initial quantities, which means that the previous selection was ignored.


##

## Workaround


Define the Minimum quantity of items that can be selected from the group to 0 via Attachment settings, for example: [_**0**_-3]#10000[1-7][1]pricetable1;#20000[2-8][2]pricetable2;#30000[3-6][3]pricetable3



