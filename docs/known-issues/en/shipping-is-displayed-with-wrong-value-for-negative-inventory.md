---
title: Shipping is displayed with wrong value for negative inventory
id: 3EwZH688kMiS8uyugOk4uw
status: PUBLISHED
createdAt: 2017-08-23T13:13:48.362Z
updatedAt: 2022-12-22T20:46:20.542Z
publishedAt: 2022-12-22T20:46:20.542Z
firstPublishedAt: 2017-08-23T18:05:42.039Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: shipping-is-displayed-with-wrong-value-for-negative-inventory
kiStatus: Backlog
internalReference: 
---

## Summary

If only one unit of a product is available in the inventory, but another inventory has a negative quantity of that same product, adding two units for purchase to the shopping cart will result in shipping being incorrectly displayed after the message "Item #### is not available in the desired quantity".

The problem only occurs momentarily, and if the order is placed while this error is happening, the value is changed to the correct one.

## Simulation

Place a SKU in two inventories of the same warehouse dock, leaving on inventory with *1* as quantity, while choosing *-1* for the other.
Add this product to the cart, add a postal code served by a carrier, and try to purchase two units of that product.

## Workaround

There is no workaround.

