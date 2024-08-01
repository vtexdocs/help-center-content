---
title: 'My store order was not created'
id: 7xQZqkMHXkHCEEZl5UlX8I
status: PUBLISHED
createdAt: 2024-07-18T20:10:20.933Z
updatedAt: 2024-07-18T20:56:20.706Z
publishedAt: 2024-07-18T20:56:20.706Z
firstPublishedAt: 2024-07-18T20:56:20.706Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: my-store-order-was-not-created
locale: en
legacySlug: my-store-order-was-not-created
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags / Keywords:** order, order integration, XML integration, product configuration, negative inventory, out-of-stock.

When a customer tries to buy a product and an error occurs in creating the order, it can be due to different reasons, such as payment problems, logistics issues, or [backend integrations](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) with ERPs (Enterprise Resource Planning).

Before considering complex causes for errors with orders that were not created, try the troubleshooting processes presented in this article. Some of the most common error scenarios are:

* The item was not available in the [inventory](https://help.vtex.com/en/tutorial/inventory-management--tutorials_139), and the store was not configured to sell _out-of-stock_ products.
* The XML integration was not configured to send information about _out-of-stock_ products.

## Solutions

Consider the following troubleshooting processes for order creation errors:

* [Manage inventory](#manage-inventory): If you have no items for the product in your inventory and your store is not configured to sell _out-of-stock_ products.
* [Review XML integration](#review-xml-integration): If your XML integration is not configured to send information about products with no inventory.

### Manage inventory

There are two ways to manage your [inventory](https://help.vtex.com/en/tutorial/inventory-management--tutorials_139):

* **Via API:** Using the endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).
* **Via VTEX Admin:** Accessing _Catalog > Inventory > Inventory Management_.

The following solutions focus on inventory management via VTEX Admin:

* **Update inventory count:** In the line that corresponds to the desired SKU and warehouse, on the _Update Count_ column, type the number of items available for sales, and click `Save`. This number cannot be negative, otherwise you will have a [negative inventory](https://help.vtex.com/en/faq/why-is-my-stock-negative--frequentlyAskedQuestions_159).
* **Configure Infinite Inventory:** In the line that corresponds to the desired SKU and warehouse, on the _Infinite Inventory_ column, turn on the switch, and click `Save`. When this configuration is activated, the item is considered always available for sales and the store never runs _out-of-stock_ for it.

<div class = "alert alert-info">
To configure <i>out-of-stock</i> products to be displayed in your storefront, in your VTEX Admin access <b>Catalog > All Products</b>, and in the product configuration page, in the <b>Product</b> tab, select the checkbox <b>Yes</b> for <i>Show when out of stock</i>.
</div>

### Review XML integration

XML is a markup language that defines and stores data in a shareable manner. When your [store’s XML integration](https://help.vtex.com/en/tutorial/configurando-xml--tutorials_242) is not set for certain configurations, it might not be able to export a product information.

An error with product missing information can happen when the product has no inventory and the integration is not set for sending _out-of-stock_ products. To activate the configuration, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Channels > XML Integration** or type **XML Integration** in the search bar at the top of the page.
2. In the line of the desired XML integration, click `Edit`.
3. In the `Edit XML` tab, for the option **Show unavailable SKUs**, select the checkbox `Show out-of-stock (sold-out) SKUs in the results`.
4. Click `Save`.

<div class="alert alert-warning">
You can have invoicing errors when trying to invoice an order with incorrect or missing XML information.
</div>

