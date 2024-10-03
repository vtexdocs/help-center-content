---
title: "Checkout UI is not automatically using 'lean shipping' for items with no common shipping methods"
id: 2LXp8VCAay7Ic9MBfbtirT
status: PUBLISHED
createdAt: 2024-04-02T15:27:23.003Z
updatedAt: 2024-04-02T15:27:24.004Z
publishedAt: 2024-04-02T15:27:24.004Z
firstPublishedAt: 2024-04-02T15:27:24.004Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-is-not-automatically-using-lean-shipping-for-items-with-no-common-shipping-methods
locale: en
kiStatus: Backlog
internalReference: 329846
---

## Summary


The Checkout UI settings allow you to disable lean shipping (delivery mode optimizations), but this is only possible if all items in the cart have the same delivery methods in common. Otherwise, lean shipping must appear forcefully in the cart even with the option turned off.
However, in some scenarios, the behavior reported above does not happen, and all available delivery methods are presented individually to the buyer.

As a result, as there is no way to select a different delivery method for each item, no delivery displayed corresponds to a single delivery option for the entire cart, with nonsense options and packages being presented.


##

## Simulation



- Deactivate the **Optimized Shipping Options****;**
- Assemble a cart where not all items have the same delivery method;
- It is also necessary that the store has "allowMultipleDeliveries" enabled;
- The reported scenario will show the options openly instead of lean shipping.


##

## Workaround


N/A




