---
title: 'Nominal discount + More for Less + Split for second item --> incorrect discount'
id: 4hxRWUY6P8aDR9T1KHd3Yf
status: PUBLISHED
createdAt: 2024-07-25T16:48:26.511Z
updatedAt: 2024-07-25T16:48:27.336Z
publishedAt: 2024-07-25T16:48:27.336Z
firstPublishedAt: 2024-07-25T16:48:27.336Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: nominal-discount-more-for-less-split-for-second-item-incorrect-discount
locale: en
kiStatus: Backlog
internalReference: 1071119
---

## Summary


When setting up a nominal discount promotion accumulating with more for less promotion, when there's a discount in the more for less only for 1 out of 2 items, leads to an incorrect discount on the 2nd order item due to the checkout split.

For instance, let's say there is a 50% discount only for 1 out of 2 items in a buy and win and then a -$300 off, with both promotions accumulating.

Let's say the item costs $200 and 2 are inserted.

The **expected** discounts would be:

Item (1) ---> -$100 + -$100 --> the 2nd items is only $100 because there is no additional "room" to be reduced from its price.
Item (2) --> -$200 ---> the rest of the discount to compose the full -$300

However, the scenario that **currently happens** is:

Item (1) ---> -$100 + -$100 --> the 2nd items is only $100 because there is no additional "room" to be reduced from its price.
Item (2) --> **-$100 ---> the price of the 1st item, from the split is replicated**

This only happens if the discounted items are 2+ units of the same SKU and the "combo" of promotions specified above.


##

## Simulation


1 - create a percentual promotion
2 - create a buy and win promotion that gives discount for only the 2nd item
3 - insert 2 units of said item in the cart

OBS: the combination of prices and discounts must be in a way that the "amount to be discounted" from the price of the 1st item is not enough to compose 50%+ of the nominal discount value


##

## Workaround


-





