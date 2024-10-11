---
title: 'Setting up the logistics for inStore'
id: 2T24PlQ69WswwYKmwc2MSI
status: ARCHIVED
createdAt: 2018-03-15T14:45:36.523Z
updatedAt: 2020-08-20T18:55:46.235Z
publishedAt: 
firstPublishedAt: 2018-03-15T15:20:36.982Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: setting-up-the-logistics-for-instore
locale: en
legacySlug: setting-up-the-logistics-for-instore
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

>ℹ️ Warning: This documentation is being updated to reflect the concept change from Dashboards to [shipping strategy](https://help.vtex.com/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl).


In order for inStore to work properly, you should create a specific logistics configuration. inStore must be configured with a __pickup point__. The process registering this pickup point consists of two steps:

- Warehouse dock registration
- Inventory registration

To set up inStore logistics, follow the steps below.

## Warehouse dock registration

- Click on __Inventory & Shipping__.
- Click on __Dashboard__.
- Click on the __New warehouse dock__ button.
- Fill in the registration fields detailed below.
- Click __Save__.

### Registration fields

__Id (optional)__: Dock identifier field. If it's not filled, it will be created automatically.

__New warehouse dock__: Fill in the name of the dock.

__Sales Policy__: Select the inStore sales policy and click __Include__.

Check the __Configure a pickup in store__ box. A box will open so you may fill in the data for your inStore.

In __Freight type__, fill in the shipping type of the orders. Here, as the orders will be made in-store, we suggest that you fill in terms like "Self-Service", "Store Pickup" or "Immediate Pickup."

In __Store__, select the store where the sale will be made. This is the store registered in Master Data.

In __Additional info__, fill in the necessary guidelines so that your client can make the purchase.

## Inventory registration

- Click on __Inventory & Shipping__.
- Click on __Dashboard__.
- Click the __New inventory__ button.
- Fill in the registration fields detailed below.
- Click __Save__.

### Registration fields

__Id (Optional)__: Inventory identifier field. If this is not filled, it will be created automatically.

__Name__: Name of the inventory.

__Delivering from__: Select the warehouse dock registered for inStore and click Include.
