---
title: 'My inventory is negative'
id: JSFHaWsASXbnrX9dgNEeP
status: PUBLISHED
createdAt: 2024-06-10T11:08:39.990Z
updatedAt: 2024-11-08T18:37:40.459Z
publishedAt: 2024-11-08T18:37:40.459Z
firstPublishedAt: 2024-06-10T17:21:47.755Z
contentType: tutorial
productTeam: Post-purchase
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: my-inventory-is-negative
legacySlug: my-inventory-is-negative
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags** Inventory, Reservation, Trade policy, VTEX Admin

When the product available quantity is displayed as negative, it may indicate that the number of items [reserved](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92) exceeds the total quantity in stock. This problem usually happens when an order item is deducted from the inventory while still being reserved by the system.

## Solution

The item's inventory information must be updated to reflect the items in stock. Thus, the recorded value of available items should be the sum of available items plus the items that are reserved and not yet in the **Handling Shipping** status.

To update the number of available items, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Inventory > Inventory Management**, or type **Inventory Management** in the search bar at the top of the page.
2. Click **Inventory Management**.
3. Search for the desired SKU.
4. In the **Update Count** column, enter the correct number of items in stock, considering the sum of the available items plus the reserved ones.
5. Click **Save**.

When two or more inventories use the same [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV), and one has a negative number of items, the SKU will be unavailable for sale, even if items are available in one of the [inventories](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139).
