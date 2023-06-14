---
title: 'Items with assembly options are shown as unavailable for delivery'
id: uDN6ZTQgbLlZul7eLP5SQ
status: PUBLISHED
createdAt: 2021-09-27T20:09:20.031Z
updatedAt: 2022-12-22T20:41:04.858Z
publishedAt: 2022-12-22T20:41:04.858Z
firstPublishedAt: 2021-09-27T20:12:58.022Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: items-with-assembly-options-are-shown-as-unavailable-for-delivery
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When items with assembly options are added to the cart, they are shown to the customer as unavailable for delivery until the shipping cost is calculated.

This is because the [orderForm](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview) – the data structure corresponding to the cart – is missing information in the `logisticsInfo.deliveryChannel` field.

When an address is entered and the shipping cost is calculated, the items no longer are shown as unavailable for delivery.


## Simulation

To perform this simulation, you need to have an item with assembly options in your store catalog.

1. In the store, add an item with assembly options to the cart;
2. Add the assembly option to the item;
3. Notice that the item is shown as unavailable for delivery;
4. Enter an address and calculate shipping costs;
5. Notice that the item is shown as available for delivery.


## Workaround

To work around the problem, you can hide the message that is displayed before an address is entered. This option is available under the ".shp-alert-shipping-unavailable" selector, but you must check if the message may be necessary in other scenarios, such as when the item has no delivery option, only pickup.

