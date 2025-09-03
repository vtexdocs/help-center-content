---
title: 'Importing and exporting an inventory spreadsheet'
id: tutorials_2034
status: PUBLISHED
createdAt: 2017-04-27T21:55:43.488Z
updatedAt: 2024-11-04T21:14:43.597Z
publishedAt: 2024-11-04T21:14:43.597Z
firstPublishedAt: 2017-04-27T23:03:50.695Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: importing-and-exporting-an-inventory-spreadsheet
legacySlug: importing-and-exporting-an-inventory-spreadsheet
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Before importing an inventory, you must export a spreadsheet. Even without an existing inventory, the correct spreadsheet model used for import is obtained by first downloading/exporting a spreadsheet. By following the steps below, you will receive by email a file with the exported spreadsheet.  

## How to export an inventory

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
3. Click on the **Warehouses** tab.  
4. Click on the `:` button next to *Create warehouse*.  
5. Click on the **Export items** option.  
6. An email will be sent with the exported file.   

If you have more than one existing inventory, this same action also allows you to concomitantly export a spreadsheet containing items from all store inventories. If your inventory is very extensive, this file will be split into more than one spreadsheet. You will also receive an email with the corresponding link to each spreadsheet.   

## How to import an inventory

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.    
2. Click on **Warehouses** tab.  
3. Click on :` button next to *Create warehouse*.  
4. Click on the **Import items** option.  
5. Choose a file from your computer and drag it into the box.  
6. Click on **Import**. 

<div class=”alert alert-warning”>
If these indicators are not respected, the system may not accept the spreadsheet import or the number of available items may be incorrect.
Importing the inventory will overwrite the current values on your existing one. Import only if you want to replace the SKU data present in the Admin.
</div>

Using an inventory spreadsheet, you can bulk insert the number of SKUs for each of your store's inventories. Importing an inventory spreadsheet is the easiest way to bulk add the SKUs to your store.   

Each spreadsheet row therefore applies to a SKU per inventory, which means that if a single SKU is present in more than one inventory, it will appear once in each one of those. The spreadsheet contains all inventory product variations added to your store.    

This import is done using an .xls format spreadsheet, in which the format is the same as the exported one. In case your file is over 10 MB, you need to use a .zip compressed file. 

In addition, for the spreadsheet to be correctly filled out, two following rules must be adhered to:  

- Each spreadsheet row must contain a number or text.  
- Updating SKU quantities must only be done in the TotalQuantity column.  

## Inventory spreadsheet fields  

Check the meaning of each of the inventory spreadsheet fields.

- **SkuId** (text): SKU ID.  
- **TotalQuantity** (number): quantity of SKU units.  
- **ReservedQuantity** (number): automatically filled in when exporting a spreadsheet. It takes the number of reserved SKUs into account.   
- **AvailableQuantity** (number):automatically filled in when exporting a spreadsheet. Displays the quantity of SKU available for purchase. Is calculated by subtracting the reserved quantity from the total amount.  
- **WarehouseId** (text): inventory ID as added to the Shipping Strategy module.  
- **WarehouseName** (text): inventory name as added to the Shipping Strategy module.   
- **RefId** (text): SKU reference code.  
- **IsActive** (text): shows whether the SKU is active (`true`) or inactive (`false`) in the catalog.  
- **UnlimitedQuantity** (text): shows if the SKU inventory was defined as unlimited (`true`) or not (`false`).  
- **LockIds** (text): Booking identification code.  
- **DispatchedReservations** (number): number of SKU items that have already moved beyond the `Item received for processing` status and whose booking is no longer valid. 
- 
> ℹ️ To include an item with Unlimited inventory, you must fill in the **TotalQuantity** field with the value `1000000` and change the **UnlimitedQuantity** field to `True`.
