---
title: 'Scheduled delivery window change for all items when selecting a common one in the cart with multiple sellers'
id: 1Dkdy8fr6AcV766gDgYgqp
status: PUBLISHED
createdAt: 2024-08-30T17:20:33.623Z
updatedAt: 2024-08-30T17:20:34.491Z
publishedAt: 2024-08-30T17:20:34.491Z
firstPublishedAt: 2024-08-30T17:20:34.491Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: scheduled-delivery-window-change-for-all-items-when-selecting-a-common-one-in-the-cart-with-multiple-sellers
locale: en
kiStatus: Backlog
internalReference: 1089806
---

## Summary


When two items from different sellers with scheduled delivery are in a cart, their delivery windows may overlap. If the date selected for the first item is earlier than the overlapped period, the Checkout UI will consider the second item's date instead. For example:

Item 1 offers August 30th and August 31st as delivery window;
Item 2 offers August 31st as a delivery window;
If you select August 30th for item 1 and August 31st for item 2, Checkout UI will consider August 31st since both items can be shipped on that date.


##

## Simulation



- Add two items to the cart from different sellers;
- Both sellers must offer scheduled delivery, but the 1st item must have at least an option earlier (take a look at the example in Summary);
- Select the earlier delivery windows for the 1st item;
- Select a common delivery window between both items for the 2nd item;
- Go to Payment and see that both items will be shipped on the same date, selected for the 2nd item.


##

## Workaround


N/A




