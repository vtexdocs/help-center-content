---
title: 'How to fill out the inventory spreadsheet'
id: 2EQ0XOe8aA0UyQso0k2kkA
status: ARCHIVED
createdAt: 2019-01-24T20:45:40.102Z
updatedAt: 2020-07-03T22:29:33.529Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:07:32.520Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: fill-out-the-stock-spreadsheet
locale: en
legacySlug: fill-out-the-stock-spreadsheet
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Using the inventory spreadsheet you can bulk insert any number of SKUs for each inventory in your store.

Each spreadsheet line corresponds to an SKU inventory, which that even if the same SKU is present in more than one inventory, it would appear once for each inventory.

In addition, correctly filling out the spreadsheet depends on two rules, as follows:

- Each spreadsheet column must either contain a number or a text;
- Updating the quantity of SKUs must be done through the __TotalQuantity__ column.

>ℹ️ **Notice**: If these rules are not followed, the system will either not accept importing the spreadsheet altogether or the item quantity available for sale may be incorrectly displayed.

Please refer to each inventory spreadsheet field's meaning below.

- __SkuId__ (text): SKU ID.
- __TotalQuantity__ (number): quantity of SKU units.
- __ReservedQuantity__ (number): amount of this SKU being reserved.
- __AvailableQuantity__ (number): amount of this SKU available for sale.
- __WarehouseId__ (text): Inventory ID, as registered in the logistics module.
- __WarehouseName__ (text): inventory name, as registered in the logistics module.
- __RefId__ (text): SKU reference code.
- __IsActive__ (text): indicates whether the SKU is active (`true`) or inactive (` false`) in the catalog.
- __UnlimitedQuantity__ (text): indicates whether the SKU inventory has been defined as infinite (`true`) or not (`false`).
- __LockIds__ (text): Reservation identification code.
- __DispatchedReservations__ (number): Number of SKU items that have already moved past the `Ready for Handling` status, meaning that their reservations have already been cancelled.
