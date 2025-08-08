---
title: 'Product remains available in stock after the order has been invoiced'
id: 5kQ3sJTo7hxIjysT7f9EvD
status: PUBLISHED
createdAt: 2024-10-29T16:42:28.787Z
updatedAt: 2024-11-08T19:36:08.007Z
publishedAt: 2024-11-08T19:36:08.007Z
firstPublishedAt: 2024-10-29T16:51:27.322Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: product-remains-available-in-stock-after-the-order-has-been-invoiced
legacySlug: product-remains-available-in-stock-after-the-order-has-been-invoiced
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Stock
  - Reservation
---

Reservations are an essential feature that ensures the product sold is not made available to another customer until the order has been fully processed. However, a common question among merchants is why the reservation remains active even after the order has been invoiced.

After a product is sold, it undergoes the following statuses in the store inventory, reflecting the order's progress:

1. [Authorized reservation](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-autorizada): Occurs immediately after the order is completed and created.

2. [Confirmed reservation](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92#confirmed-reservation): Status reached once the order payment has been approved.

3. [Acknowledged reservation](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92): The order goes into the "Awaiting fulfillment" status, indicating that the product is about to be shipped.

Products are only withdrawn from inventory when the order reaches the **Awaiting fulfillment** status. The [removal from inventory](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92#removal-from-inventory), which updates the number of available items, can be done manually by the merchant or automatically through the ERP. This process is carried out via [inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) or the endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

## Solutions

Consider the following processes for updating the inventory when orders are in the **Awaiting fulfillment** status:

- [Update inventory manually](#updating-inventory-manually): Adjust the number of in-stock items manually to reflect the actual available and reserved products, if applicable.

- [Configure ERP](#configuring-your-erp-to-update-inventory): Make sure ERP is configured to update the inventory automatically when the order status changes, removing reserved items.

### Updating inventory manually

To manually update the inventory count, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Inventory > Inventory Management**, or type **Inventory Management** in the search bar at the top of the page.

2. Click **Inventory Management**.

3. Search for the desired SKU.

4. In the **Update Count** column, enter the correct number of items in stock, considering the sum of the available items plus the reserved ones.

5. Click **Save**.

### Configuring your ERP to update inventory

When an order reaches the **Awaiting fulfillment** status, it's essential that the inventory system updates the product, removing it from reserved status and adjusting the available quantity. To do this, the ERP must synchronize the number of products in stock, deducting the number of products reserved for orders in progress.

Merchants must configure and integrate their ERP. This process can be automated through the [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-) endpoint, which allows communication between the ERP system and the store inventory, ensuring the information is always up to date.
