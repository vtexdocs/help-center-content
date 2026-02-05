---
title: 'Loading dock'
id: 5DY8xHEjOLYDVL41Urd5qj
status: PUBLISHED
createdAt: 2021-09-23T20:48:21.165Z
updatedAt: 2024-11-05T18:08:12.885Z
publishedAt: 2024-11-05T18:08:12.885Z
firstPublishedAt: 2021-09-23T21:20:17.177Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: loading-dock
legacySlug: loading-dock
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---


The loading dock is part of the logistics system and usually acts as an intermediate point between the warehouse and the carriers, who pick up items at the loading dock to deliver them to the recipients. 

On VTEX, the loading dock is an intermediary between storing items and delivering orders. The loading dock integrates the necessary parts for your store’s logistics system: [Warehouse](/en/docs/tutorials/warehouse), [Trade policy](/en/docs/tutorials/how-trade-policies-work) and [Shipping policy](/en/docs/tutorials/shipping-policy).

![Doca EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/loading-dock_1.svg)

> ℹ️ The Warehouse is the physical storage for the goods sold by the store; the Trade policy is the configuration of the store's sales strategies; and the Shipping policy is a set of rules that define the shipping options and conditions. For the logistics system to work as expected, we suggest that you configure it in the following order: <ul><li>[Shipping policy](/en/docs/tutorials/shipping-policy)</li><li>Loading dock</li><li>[Warehouse](/en/docs/tutorials/warehouse)</li></ul>

## Use cases

The creation and configuration of the loading docks on the platform meet different logistics scenarios. The configuration of the loading docks will depend on your store's logistics strategy.

A single store may have different loading dock use cases, and different stores may use this feature in different ways.

For instance: if a farm produces fruits and vegetables and sells to different types of stores, the farm storehouse can function as a warehouse, and different loading docks can be configured to serve a single warehouse and distribute the production. It would be possible to define, for example, a specific loading dock for fruits and another for vegetables.

The main use cases for loading docks are:

* When a store has different outlets for a single warehouse. You can add a warehouse and multiple loading docks on the platform, the warehouse that supplies each loading dock, and the carrier (Shipping policy) that will deliver.
* When the loading docks function as distribution centers. In this case, the loading dock is not only the transit point for the delivery of items, but also acts as a temporary storage.
* When the loading dock and the warehouse are the same place. This happens when there is no distinction between the storage location and the place from which the items are transported.
* When a loading dock has no physical location and the concept is used only to delimit the times of items withdrawal from the warehouse by the carrier. Even in this case, it is necessary to add the loading dock on the VTEX platform, as delivery routes are only possible if the loading docks are configured.
* When you need to calculate the cost of handling items from the warehouse to the carrier.

To learn how to manage a loading dock in the VTEX Admin, check out the article [Manage Loading Dock](/en/docs/tutorials/managing-loading-docks).

