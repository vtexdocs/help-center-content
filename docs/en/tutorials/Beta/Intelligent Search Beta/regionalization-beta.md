---
title: 'Regionalization (Beta)'
id: 72fwxdSLvjKC7ZAT58vlqf
status: PUBLISHED
createdAt: 2021-10-25T19:22:23.686Z
updatedAt: 2023-05-05T19:32:28.974Z
publishedAt: 2023-05-05T19:32:28.974Z
firstPublishedAt: 2021-10-25T20:06:30.150Z
contentType: tutorial
productTeam: VTEX IO
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: regionalization-beta
locale: en
legacySlug: regionalization-beta
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
<p>This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href="https://support.vtex.com/hc/en-us/requests">our Support</a>.</p>
</div>

Regionalization is a feature of [VTEX Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) that allows for the optimization of search results according to the availability of sellers in the customer's region. To install and configure VTEX Intelligent Search in your store, read our article about [Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search).

Regionalization uses a behavior from VTEX Intelligent Search called [Availability](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/7LMQbWK5nElIkXo0NK8Kux). It searches for products available in the inventory of sellers that serve a particular region.

Stores that have more than one registered white label seller usually have specific inventories for each region. This is the case for supermarkets, for example.

With the Regionalization feature enabled, if a customer enters their ZIP code while browsing the store (before checkout), only products available in the corresponding region will be displayed in the search results.

To start using the Regionalization feature, you must follow the steps described in this article.

1. [Seller configuration](#1-seller-configuration)
    - [Seller 1](#seller-1)
    - [White label seller](#white-label-seller)
    - [Comprehensive seller](#comprehensive-seller)
2. [Request to activate the Regionalization feature](#2-request-to-activate-the-regionalization-feature)
3. [Configuration in VTEX IO](#3-configuration-in-vtex-io)

<div class="alert alert-warning">
  <p>While regionalized stores display only products available in a certain region on the product list page, filters do not take regionalization into account. This means that store customers may select filter values that result in products not being available in their region.</p>
</div>

## 1. Seller configuration

First, you must understand which [seller](/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w) scenario applies to your store. See below for possible scenarios.

### Seller 1

By default, the architecture of all VTEX stores allows them to operate as both seller and [marketplace](/en/tutorial/marketplace-strategies-at-vtex--tutorials_402) simultaneously. This means that your VTEX store will be the seller with ID number 1, as it can operate as a seller in its own environment.

This seller is automatically created in the store account, and it represents your own inventory. This applies both to marketplaces that sell their own products and to stores that are not marketplaces, but combine checkout and [fulfillment](/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06#fulfillment) in their ecommerce.

### White label seller

A [white label seller](/en/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa) is a type of seller that the end customers do not choose or acknowledge at any point in the purchase process.

When the consumer adds a product to the cart and simulates shipping, the system automatically selects the white label seller that has that product in stock and displays the delivery methods of the sellers that offer the best conditions. To learn more about the white label seller selection algorithm, please refer to this [article](/en/tutorial/white-label-sellers-selection-algorithm--3MemNQ4pKkWCpMdzI27AHa).

VTEX Intelligent Search checks the availability of products in the inventory of white label sellers in each region to determine which products will be displayed to the customer, which means you must configure at least one white label seller in your store.

### Comprehensive seller

A comprehensive seller is a type of seller that makes items available to customers who do not use location-defined navigation. This configuration prevents products from being displayed to customers who are outside the seller's coverage area. To this end, the comprehensive sellers must have a delivery area that is significant to your store operation.

## 2. Request to activate the Regionalization feature

The second step in configuring the Regionalization feature is to request the VTEX team to enable it in your store. To do this, please contact [our Support team](https://support.vtex.com/hc/en-us/requests).

## 3. Configuration in VTEX IO

To learn about the seller configuration requirements necessary to enable Regionalization, please refer to our [Regionalization](https://developers.vtex.com/vtex-developer-docs/docs/regionalization-beta) guide.

After configuration, your store will be ready to use the Regionalization feature. Now, when a customer informs their region while browsing, the search results will be displayed considering this information.

