---
title: 'Inventory update history'
id: 5AM7xbmMzmKSEQewakamc2
status: PUBLISHED
createdAt: 2017-08-01T15:03:08.876Z
updatedAt: 2024-04-02T18:24:14.768Z
publishedAt: 2024-04-02T18:24:14.768Z
firstPublishedAt: 2017-08-01T15:06:58.792Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: inventory-update-history
legacySlug: how-to-analyze-the-stock-movement-history
locale: en
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

The inventory contains information about the products available in a store and in which [warehouse](/en/docs/tutorials/warehouse) they are stored. You can use the inventory to keep track of the updates for each SKU: the number of items available, who made the changes, the dates when they were made, and the number of SKUs before the update.

This article contains instructions for accessing the inventory update history in the VTEX Admin. 

> ℹ️ Don't forget the difference between warehouse and inventory: **[Warehouse:**](/en/docs/tutorials/warehouse) Name given to the store's storage locations. **Inventory:** List of SKUs and warehouses in which they are stored.

To view the update history of a SKU, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Inventory > Inventory management**, or type *Inventory management* in the search bar at the top of the page. 
2. Select the SKU of which you want to see the history. To learn how to use the filters and search, check out the article [Inventory management](/en/docs/tutorials/managing-stock-items).
3. In the **Last update** column, click the blue number.
4. The **Update Logs** window will open with all the changes. Each row corresponds to an update, and the columns contain:
  * The user who made the change.	
  * Last updated date and time.
  * The quantity of items before the update.
  * The quantity of itemsafter the update.

> ⚠️ You can only see the last 50 updates in the update log of a given SKU.

The total quantity of items on the [Inventory Management](/en/docs/tutorials/managing-stock-items) page is updated in real-time, but it may take up to 1 hour to reflect in the inventory history.

