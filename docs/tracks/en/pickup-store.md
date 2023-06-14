---
title: 'Pickup store'
id: 43NDZ5mCzCSagk880MeYIC
status: DRAFT
createdAt: 2018-06-22T14:41:52.415Z
updatedAt: 2020-08-03T19:56:41.373Z
publishedAt: 
firstPublishedAt: 2018-06-22T17:08:22.081Z
contentType: trackArticle
productTeam: Shopping
slug: pickup-store
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

<div class="alert alert-info">
Warning: This documentation is being updated to reflect the concept change from Pannels to <a href="https://help.vtex.com/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl">shipping strategy</a>.
</div>


To set up the inStore with __Delivery at Home__, that is, to consider the inventory of your physical store, you need to do two things:

- Set up the logistics for inStore
- Set up the checkin in inStore

## Setting up the logistics for inStore

In order for inStore to work properly, you need to register a logistics specific to it. The inStore must be configured with a __Pickup point__. The registration of logistics follows two stages:

- Pickup points registration
- Inventory registration

To configure inStore logistics, follow the steps below.

### Warehouse Registration

- Access the __Logistics__ module.
- Click the __Dashboard__ tab.
- Click the __New Warehouse__ button.
- Fill in the registration fields detailed below.
- Click __Save__.

#### Registration Fields

__Id (optional)__: Warehouse identifier field. If it's not filled, it will be created automatically.

__New warehouse__: Fill in the name of the warehouse.

__Trade Policy__: Select the inStore trade policy and click Add.

Check the box __Set as a pickup point__. A box will open for you to fill in the data for your inStore store.

In __Delivery Type__, fill in the delivery type of the orders placed in your store. In case of inStore, as the orders will be made in the store itself, we suggest that you fill in terms like "Self-Service", "Store Pickup" or "Immediate Pickup".

In __Store__, select the store where the sale will be made. This is the store registered in Master Data.

In __Instructions for pickup__, fill in the necessary guidelines so that your client can make the purchase.

### Inventory Registration

- Access the __Logistics__ module.
- Click the __Dashboard__ tab.
- Click the __New Inventory__ button.
- Fill in the registration fields detailed below.
- Click __Save__.

#### Registration Fields

__Id (Optional)__: Inventory identifier field. If it's not filled, it will be created automatically.

__Name__: Name of the inventory.

__Document__: Select the registered warehouse for the inStore and click the Add button.

## Setting up the checkIn in inStore

If you configured your store according to the Easy Setup flow, your inStore already has registered and enabled stores that work as points of sale and product pickup - also known as Pickup Points.

Next, you'll need to configure CheckIn. This step consists of associating a store's sales to a specific Pickup Point.

Once you complete this step, the system will display an option in inStore called "Items to take away", allowing the consumer to pick a product up from the store right after completing payment.

<div class=“alert alert-info”>
<strong>Warning</strong>: if your chosen Pickup Point is registered to a franchise account, you'll also need to add the seller ID in the store's admin settings.
</div>

To enable this integration, follow the steps below:

* Access __https://accountname.myvtex.com/admin/vtable__;
* Select the __Stores admin__ option;
* Next to the line's number, click on the blue __pencil__ icon;
* Insert the chosen __Pickup Point's__ ID, according to how it's configured in the Logistics system;
* If necessary, fill in the __Franchise Account__ field with the seller's ID, following the explanations in the last paragraph;
* Click on the gray __x__ icon to exit the edit section;
* Click on the blue __Save__ button.

If Logistics if properly configured, inStore will function in the __Pickup from store__ mode.


## Pickup Points

This is one of the new features that __Checkout V6__ provides. With it enabled in the inStore, a customer can buy products in a physical store and pick them up in another store.

To enable this feature, contact the VTEX team.
