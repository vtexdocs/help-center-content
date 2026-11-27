---
title: 'How the minimum availability rule works'
id: tutorials_394
status: PUBLISHED
createdAt: 2017-04-27T22:07:07.997Z
updatedAt: 2025-08-26T15:30:31.865Z
publishedAt: 2025-08-26T15:30:31.865Z
firstPublishedAt: 2017-04-27T23:03:22.711Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: understanding-the-minimum-availability-rule
legacySlug: understanding-the-minimum-availability-rule
locale: en
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

The minimum availability rule is a functionality associated with the inventory query process that affords correct information about availability without constant updating of the quantity in stock.

## How it works

Whenever a cart is set up in the **marketplace**, several queries are made to the VTEX system, including as to the availability of the products selected. 

This query does not depend on the quantity in stock that was previously informed to the marketplace, in other words, even with information about the quantity in stock, the query takes place when the purchase is concluded. 

This happens to ensure that the inventory information is as up-to-date as possible.

On account of this, there is a minimum availability rule which states that changes in numbers in stock to be notified to the marketplaces are those that change items which, before or after updating, have up to five items in stock. 

That is, if a change is made in the stock of an item, from 50 to 20 units, this change will not be notified to the partner This will only happen when the pre- or post-change quantity is of up to five items.

## Examples

**Before updating:** 16 items
**After updating:** 60 items
This change will **not** be notified.

**Before updating:** 0 items
**After updating:** 23 items
This change will be notified.

**Before updating:** 15 items
**After updating:** 2 items
This change will be notified.

_We wish to stress that this behavior has no impact on the purchase flow, where availability will always be checked when the order is closed._
