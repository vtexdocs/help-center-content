---
title: 'Price swapped if the same item is in the cart twice and one is from Assembly Options'
id: 6ASEyEYPt9wjj4eSzMqdc0
status: PUBLISHED
createdAt: 2024-07-24T14:51:12.922Z
updatedAt: 2024-07-24T14:51:13.713Z
publishedAt: 2024-07-24T14:51:13.713Z
firstPublishedAt: 2024-07-24T14:51:13.713Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: price-swapped-if-the-same-item-is-in-the-cart-twice-and-one-is-from-assembly-options
locale: en
kiStatus: Backlog
internalReference: 1070336
---

## Summary


If an item is added to the cart as an option (also known as child) from Assembly Options, and the same item is added to the cart as a regular item; the prices are mixed up, and each is applied to the incorrect one.

For example:

- Item as an option with a price of 0;
- Item as regular with a price of 100.
In the order, the item as the option will have the price of 100 and the regular one with the price of 0.


##

## Simulation



- Add an item with an assembly option to the cart, and make sure one of the options has a different price list in the configuration;
- Add the same item as the option.


##

## Workaround


N/A



