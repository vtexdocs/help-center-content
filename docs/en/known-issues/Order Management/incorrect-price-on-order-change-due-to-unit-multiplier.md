---
title: 'Incorrect price on order change due to unit multiplier'
id: 50OfQDGWS0XTWEGsBdIOmV
status: PUBLISHED
createdAt: 2022-05-30T19:26:35.327Z
updatedAt: 2022-12-15T19:33:22.546Z
publishedAt: 2022-12-15T19:33:22.546Z
firstPublishedAt: 2022-05-30T19:26:36.303Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: incorrect-price-on-order-change-due-to-unit-multiplier
locale: en
kiStatus: Fixed
internalReference: 371066
---

## Summary


If you add or remove a SKU from an existing order (the change order process) and the SKU has a multiplier unit different from 1, the unit multiplier is not considered for calculating the new order value.


##

## Simulation


- Add or remove the sku with a unit multiplier different from 1 to an existing order. You can check out more about the process here: Changing items from a completed order.
- Notice that the unit multiplier is not considered when calculating the SKU value and the total order value.


##

## Workaround


The change order can be done via API "Register change on order", and the store is responsible for entering the values correctly, according to value and unit multiplier.

