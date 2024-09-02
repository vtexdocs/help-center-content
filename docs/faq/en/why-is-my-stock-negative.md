---
title: 'Why is my inventory negative?'
id: frequentlyAskedQuestions_159
status: PUBLISHED
createdAt: 2017-04-27T22:39:51.880Z
updatedAt: 2024-04-18T14:18:13.634Z
publishedAt: 2024-04-18T14:18:13.634Z
firstPublishedAt: 2017-04-27T23:01:42.612Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: why-is-my-stock-negative
locale: en
legacySlug: why-is-my-stock-negative
---

Calculating the available quantity of an item is done as follows:

`in stock - reservation = available`

An item quantity in inventory can be edited by the store.

When the quantity available is negative, this means __that there are more reserved items than the total quantity put into inventory__. So we see that the inventory has been updated to zero or to an amount less than zero after reservations were made.

The negative inventory scenario happens __when you attempt to write off an order item when this item is still reserved by the system__. This scenario occurs when you try to decrease the quantity of an item when it was purchased, but the item is still reserved by the system and can not have its stock lowered.

## Inventory write-off

The correct flow predicts that the write-off happens only after the __Preparing Delivery__ status. After this status, the reservation is already recognized. Prior to this, the system will understand that the item being lowered is not the item in reserve, updating the inventory incorrectly.

To adjust it, the item stock must be updated with the quantity of physical items in inventory. This way, the value of the items in stock must be the sum of the available items plus the items that are reserved and that are not yet in the __Preparing Delivery__ status. Te correction can be done by following the steps below:

1. In the VTEX Admin, go to __Catalog > Inventory__, or type __Inventory__ in the search bar at the top of the page.
2. Click __Inventory Management__.
3. Search for the SKU you want and click on the search result.
4. In the __Update Count__ column, fill in the value indicated in the description above.
5. Click __Save__.

<div class="alert alert-warning">
When two or more warehouses use the same <a href="https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV">trade policy</a>, and there is a negative number of items in stock for a given SKU in one of these warehouses, the SKU becomes unavailable for sale, even though the  <a href="https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139">inventory</a> quantity is positive in another warehouse.
</div>
