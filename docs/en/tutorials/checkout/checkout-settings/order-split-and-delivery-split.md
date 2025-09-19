---
title: 'Order split and delivery split'
id: jQvzA6QgSd51e2p6bthoV
status: PUBLISHED
createdAt: 2021-09-27T21:06:59.520Z
updatedAt: 2023-09-23T01:00:23.558Z
publishedAt: 2023-09-23T01:00:23.558Z
firstPublishedAt: 2021-09-27T21:12:55.418Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-split-and-delivery-split
legacySlug: order-split-and-delivery-split
locale: en
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

On the VTEX platform, there are scenarios in which the end customer receives their order in different packages. This article provides an overview of **package splits (or delivery splits)** and **order splits**, and indicates the configurations that can be made by the retailer.

See below for the main differences between order split and package split scenarios.

* **[Order split](#order-split)**: occurs when more than one seller fulfills the same purchase. This means that if a single purchase will be fulfilled by three sellers, three orders will be generated.
* **[Delivery split](#package-split-delivery-split)**: occurs when there is more than one delivery for an order. For example, when a single seller is responsible for delivery, but the order is delivered in more than one shipment.

> ℹ️ Whenever there is an order split, there is a delivery split. In addition, a seller may choose to split the same order into more than one package; thus, at the end of the purchase, the number of packages will always be greater than or equal to the number of orders generated.

To facilitate the identification of cases in which there are order splits and delivery splits, see some examples below:

## Order split

When more than one seller is required to fulfill the order.

### Examples

* **The customer selects different sellers:** when making a purchase, the customer intentionally selects items from different stores. They may select products from the marketplace and from one seller, or from two or more sellers.

    In this case, there will be separate deliveries for the same order — _order and delivery splits_ — and the platform automatically splits the order for the retailer, as each seller is responsible for their delivery.

* **Different White Label Sellers:** the customer makes the purchases, but the platform chooses who will deliver the order. The choice of which seller will deliver the items will be based on priority criteria. In this case, the customer does not purposely choose items from different sellers, nor do they have information on which sellers will deliver the order.

    When this happens, at the end of the purchase, the retailer sees the _order split and the delivery split_. The choice of seller is made automatically. If you want to know how it is performed, please refer to the article [White Label Sellers selection algorithm](/en/tutorial/algoritmo-de-selecao-de-white-label-sellers--3MemNQ4pKkWCpMdzI27AHa).

## Package split (delivery split)

The order is fulfilled by a single seller, but more than one delivery is required for all the items to reach the recipient.

### Examples:

* **Different delivery methods:** this occurs, for example, when a single cart contains an item with express delivery and another one with regular delivery. In this case, the platform _splits the delivery_ so that the sale can be completed and as many as possible can be delivered.

    This split is done automatically and natively for stores that have Checkout V6, through the `allowMultipleDeliveries` field indicated as `true` in the API [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). The configuration is enabled by default so that it is possible to make purchases with different delivery methods in the same cart.

> ❗ We do not recommend operating the store with the `allowMultipleDeliveries` field indicated as *false*. In this configuration, when there are items in the cart that do not have any delivery method in common, that is, the SLAIDs are different, and the cart has a pickup-point, it will not be possible to complete the order.

* **Different loading docks:** a single store offers all the items in an order, but in the calculated logistic route they are related to different docks. Then, _the delivery packages must be split_, but without splitting the order between different stores. The platform does this automatically.
