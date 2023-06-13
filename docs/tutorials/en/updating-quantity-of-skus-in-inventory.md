---
title: Updating quantity of SKUs in inventory
id: IKMWjOjMcMqKusSGko8c0
status: DRAFT
createdAt: 2018-10-02T19:10:45.879Z
updatedAt: 2022-01-11T19:32:49.878Z
publishedAt: 
firstPublishedAt: 2018-10-03T18:56:12.298Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: updating-quantity-of-skus-in-inventory
legacySlug: updating-quantity-of-skus-in-stock
subcategory: 3PQwnyOcNyYgawy06oe6gE
---

Depending on the store, it's possible that inventory quantity changes are made by an __ERP__ using [VTEX APIs](https://developers.vtex.com/reference/logistics-api-overview). The purpose of this article is to teach you how to update the SKU inventory information using VTEX Admin.

In the "Inventory & Shipping" module, then in “Inventory”, the "Manage items in Inventory" tool allows you to control and edit your store’s inventory. You can filter by available quantity as well as check the SKU’s movements among all store inventories, or even list the orders that have an SKU reservation. There are three ways to **update the SKU quantities in stock** by using the VTEX admin:  

- Individually, updating a specific SKU.  
- Filtering by quantity, updating SKUs that have inventory below a certain quantity.   
- In bulk, updating several SKUs via spreadsheet.   

## How to update SKUs individually 

 1. Access **Inventory & Shipping module**.  
 2. Click on the **Inventory** tab.  
 3. Search for a **Product**.  
*When searching for an ID whose number is between 1 and 9, add 0 in front. Example: 07*.
 4. On the *Update Inventory* screen, fill in the **Update count** field with the SKU real available quantity.  
*Always fill in this value with the number of available items in your inventory, namely those items that do physically exist for shipping.*
 5. Click on **Save**. 

## How to update SKUs filtering by quantity

 1. Access the Inventory & Shipping module.  
 2. Click on the Inventory tab.  
 3. Search for **Items in inventory below**.    
 4. Select the desired SKUs and click on **Edit selected**.   
*If the search only shows a single SKU in stock below the informed one, you will be redirected to the Update Inventory screen.*     
 5. On the *Update Inventory* screen, fill in the **Update count** with the SKUs in stock quantity.   
*This value must always be filled in with the number of available items in your inventory, namely those items that do physically exist for shipping.*  
 6. Click on **Save**.  


### Update Inventory table fields

- **Last count**: refers to the last number added to the Update count field.  
- **Reserved items**: refers to the number of SKUs booked for an order. 
Remember that an order can have an active product reservation. If this product has not been shipped, it will be considered a booked item.  Find out more about issued orders and reservations. Orders containing booked items will continue listed as booked and will be unavailable for sale.
- **Items being processed**: refers to items that are being processed, having an accepted reservation.
- **Quantity for sale**: is the result of subtracting the number of  *Reserved items* and the number of *Items being processed* from the number of SKUs given at the last SKU count. 


Order containing booked items will continue to be listed as reserved and will not be available for sale. In the example given below, we have ten Gatorade units booked but not yet invoiced. As we update inventory item availability, the system gives the results in real-time. In our example,  we may end up with a negative inventory of up to 10 items, since the ongoing reserved orders will continue to be listed. [Find out more about reservations](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona/). 

![Atualizar Estoque GIF](//images.contentful.com/alneenqid6w5/1lorbuip9ewo8gY8qg8wU0/07e97e612b4711f0f21c205b50e74867/InventoryUpdate.gif)



## SKUs bulk update by spreadsheet
In order to bulk edit several SKUs from an inventory, follow the steps in the article [import and export an inventory spreadsheet](https://help.vtex.com/en/tutorial/importando-e-exportando-planilha-de-estoque--tutorials_2034).


## Why is my inventory negative?
The calculation of an item’s available quantity is carried out as follows:

`in stock - reserve = available`

When the available quantity is displayed as negative, it means that there are more booked items than the amount in the inventory. Thus, after reservations were made, the inventory was updated to zero or to less than zero. When attempting to hide an item from the order while it is processed as booked by the system, there is a negative inventory. The system understands that the inventory item will be hidden only after it goes through the *Preparing Delivery* status. After this status, the reservation is acknowledged. Before this status, the system will understand that the hidden item is not a booked one, so it will update the inventory incorrectly.   

