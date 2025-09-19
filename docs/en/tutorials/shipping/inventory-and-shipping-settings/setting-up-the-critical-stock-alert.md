---
title: 'Setting up the Low Inventory Alert'
id: 6FD0GHeQPCsKIMgkQ88SGu
status: PUBLISHED
createdAt: 2017-07-20T22:00:33.917Z
updatedAt: 2023-03-29T17:51:04.547Z
publishedAt: 2023-03-29T17:51:04.547Z
firstPublishedAt: 2017-07-20T22:18:34.892Z
contentType: tutorial
productTeam: Post-purchase
author: authors_39
slugEN: setting-up-the-critical-stock-alert
legacySlug: setting-up-the-critical-stock-alert
locale: en
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

The critical inventory alert is a logistics functionality whose purpose is to alert the retailer in case items in the store are almost out of inventory.

## Low Inventory Alert configuration

1. In the VTEX Admin, go to **Store Settings > Shipping > Settings**, or type *Shipping* in the search bar at the top of the page and select *Store Settings / Shipping*.    
2. Fill in the field **Low Inventory Alert** with the desired quantity of units or percentage of total quantity.  
3. Click **Save**.

## How the Alert works

When the inventory of the item reaches the minimum amount configured, a task will be created on [VTEX DO](/en/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu). It will be triggered whenever the reservation of the order is made, that is, when the order is closed, and can take from 1 to 5 minutes to show up on the VTEX DO.

If the reservation is canceled, for example, because a customer has canceled an order, the task will be automatically closed.

If the inventory of the item is updated, the task will also be closed. But, if another reservation is made, a new task will be created.

## Frequently asked questions

### If the product is part of 2 inventories and only 1 of them reaches the minimum quantity, is the alert triggered?     
Yes, the alert is considered by inventory, separately.

### Does this alert serve for items in the Sellers’ inventory?  
No, it only verifies the inventories available in the store.

### Where can I see these alerts? How can I access the VTEX DO?  
The alerts are logged in [VTEX DO](/en/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu) and, for now, can only be accessed using the Orders Management. However, we also provide an [API](https://developers.vtex.com/docs/api-reference/vtex-do-api) in case you want to search or allocate a task to someone, for example.
