---
title: 'Endless Aisle'
id: 40KMlmGI5tN0r0KPCDWgGn
status: PUBLISHED
createdAt: 2020-06-30T21:32:21.143Z
updatedAt: 2023-07-26T18:46:19.274Z
publishedAt: 2023-07-26T18:46:19.274Z
firstPublishedAt: 2020-06-30T21:36:39.077Z
contentType: trackArticle
productTeam: Shopping
slugEN: endless-aisle
locale: en
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugEN: unified-commerce-strategies
order: 3
---

Endless Aisle is the strategy that allows customers to buy products in a channel (usually a physical store) even though these products do not exist in the stock of that channel. The order can be closed because the store can access the catalog shared by all inventories and physical stores of the brand, and delivery can be made from any of these stocks.

This is a basic concept of Omnichannel strategies, and essential for a real Unified Commerce experience. Availability in local stock is no longer an impediment to closing the purchase, removing barriers in the interaction with the end customer - raising your conversion rate -, and unifying the entire management of this process in a single system.

## Prerequisites

First of all, you must consider the prerequisites that your store needs to ensure in order to start implementing an Endless Aisle strategy. Check our article on [Prerequisites for using VTEX Sales App](/en/docs/tracks/prerequisites-for-using-vtex-sales-app).

## Adding physical stores to VTEX Sales App

To implement an Endless Aisle strategy, you must add your physical stores to the VTEX platform.

To do this, follow the steps in the article [Managing physical stores and sales associates in VTEX Sales App](/en/docs/tracks/managing-physical-stores-in-vtex-sales-app).

An important point of attention when registering a new store is the [Trade Policy](/en/docs/tutorials/creating-a-trade-policy) applied to it. It defines which assortment of products will be valid for the store.

If the store's main Trade Policy is also used to sell on marketplaces, you must use a different Trade Policy for VTEX Sales App. Otherwise, the payment methods `Direct Selling Debit` and `Direct Selling Credit`, configured for VTEX Sales App, will also be displayed at the checkout of marketplaces.

If, on the other hand, your store uses a Trade Policy dedicated to VTEX Sales App, make sure that:
- Your products are priced according to this dedicated Trade Policy.
- The dedicated Trade Policy is applied to the products that should serve the store where VTEX Sales App will be used.

The Franchise-account and Pickup Point fields, in the store registration, should only be filled in if you want to work with product pickup in physical stores. If this is the case for you, also read the [Pickup Points Setup guide](/en/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e).

When you are finished filling in the store details, click on the `Save` button.
