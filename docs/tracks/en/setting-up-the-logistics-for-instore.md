---
title: 'Setting up the logistics for inStore'
id: 2o05JmWXRe0WemM6IEgekA
status: DRAFT
createdAt: 2018-03-15T21:37:25.841Z
updatedAt: 2020-02-13T20:06:22.422Z
publishedAt: 
firstPublishedAt: 2018-03-15T21:37:39.581Z
contentType: trackArticle
productTeam: Shopping
slug: setting-up-the-logistics-for-instore
locale: en
trackId: 
trackSlugEN: 
---

In order for inStore to work properly, you should register a specific logistics route. inStore must be configured with a __pickup point__. The registration of logistics follows two stages:

- Warehouse dock registration
- Inventory registration

To set up inStore logistics, follow the steps below.

## Warehouse dock registration

- Enter the __Logistics__ module.
- Click the __Dashboard__ tab.
- Click the __New warehouse dock__ button.
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

- Enter the __Logistics__ module.
- Click the __Dashboard__ tab.
- Click the __New inventory__ button.
- Fill in the registration fields detailed below.
- Click __Save__.

### Registration fields

__Id (Optional)__: Inventory identifier field. If this is not filled, it will be created automatically.

__Name__: Name of the inventory.

__Delivering from__: Select the warehouse dock registered for inStore and click Include.
