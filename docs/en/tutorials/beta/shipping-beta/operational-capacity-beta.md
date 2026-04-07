---
title: 'Operational capacity (Beta)'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2025-01-23T12:00:02.987Z
publishedAt: 2025-01-23T12:00:02.987Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: operational-capacity-beta
legacySlug: locations-module
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> This feature is in beta, which means we're working on improving it. If you have any questions, contact [our Support team](https://supporticket.vtex.com/support).

> ⚠️ To use this feature, your [main account](/en/docs/tracks/accounts-and-architecture) must have linked [franchise accounts](/en/docs/tutorials/what-is-a-franchise-account).

The **Operational capacity (Beta)** module allows you to manage sellers' capacity to receive and prepare store orders, optimizing your logistics network. You can monitor order allocation between sellers and [perform actions](#actions-on-the-seller-capacity-details-page) to improve it.

The **Operational Capacity (Beta)** module does not manage order delivery. This management is handled by the [**Delivery capacity**](https://help.vtex.com/en/docs/tutorials/managing-delivery-capacity) module.

Good management of seller operational capacity leads to the following advantages:

* Better allocation of product demand between different seller warehouses.
* Optimized order shipping times by avoiding overloading sellers.
* Improved shopping experience for customers, who receive their orders on time.

> ℹ️ To activate and manage **Operational capacity (Beta)**, your [role](/en/docs/tutorials/roles) in the VTEX Admin must include the _Logistics full_ access resource in [License Manager](/en/docs/tutorials/license-manager-resources).

## Enabling the Operational capability (Beta) module

To start using the feature, you must enable Operational capacity (Beta) in the VTEX Admin. When not enabled, the module has no effect and doesn't allow you to manage seller capacity.

> ⚠️ Before enabling the module, we recommend configuring the operational capacity of your sellers. That way, before the feature starts working, you'll have a clear view of how the capacity of each seller is consumed, and you can adjust your settings to meet the demands of your operation.

To enable the **Operational capacity (Beta)** module, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Operational capacity**, or type **Operational capacity** in the search bar at the top of the page.
2. At the top of the page, find the callout message: "_Module disabled: Enable it so the settings you've configured are applied and used by the VTEX platform_".
3. In the callout, click `Enable`.

If you want to stop using the feature, you can [disable Operational capacity (Beta)](#disable-operational-capacity-module-beta) at any time. However, we recommend considering other strategies, as explained in [Choosing between editing seller operational capacity, making it unlimited, pausing the seller, or disabling the module](#choosing-between-editing-seller-operational-capacity-making-it-unlimited-pausing-the-seller-or-disabling-the-module).

## Introducing the Operational capacity (Beta) module

In the VTEX Admin, go to **Shipping > Operational capacity**, or type **Operational capacity** in the search bar to see the following page:

![operational_capacity_image_1_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/operational-capacity-beta_1.png)

> ⚠️ The interface will display the sellers that are part of your operation, previously configured by our team. To add a new seller, contact [our Support](https://support.vtex.com/hc/en-us/requests).

The chart shows the following information:

* **Total sellers:** Total number of sellers in your operation.
* **Active:** Number of sellers who are receiving new orders, whether they have a configured capacity limit or unlimited capacity.
* **Paused:** Number of sellers who are paused and not receiving new orders.
* **Number of sellers that exceeded capacity:** Number of sellers that received more orders than their configured limit. You can view results from the last `7 days` or `28 days`.

The **Operational capacity (Beta)** page displays the following information:

| **Column** | **Description** |
|:---:|:---|
| Seller | Identification of the [seller](/en/docs/tutorials/what-is-a-seller) to which operational capacity applies to. |
| Segmentation | Identification of the type of segmentation used for operational capacity. There are two types of segmentation: by sellers or by [sales channel](https://help.vtex.com/en/docs/tutorials/how-trade-policies-work). To enable segmentation by sales channel, contact [our Support](https://supporticket.vtex.com/support). |
| Capacity usage | Percentage of the seller operational capacity used that day. **Example:** If a seller with a daily capacity of 100 orders has used 80% of their capacity, they can only receive 20 more new orders that day. In this column, an alert icon is displayed when the seller reaches 100% of their capacity, so they can't receive any new orders that day. You can [edit sellers' operational capacity](#editing-the-operational-capacity-unit-of-sellers) individually or in bulk. |
| Status | The current status of the seller's operational capacity, which can be: <ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i>**Active:** The toggle switch is on, and the seller can receive new orders — either within the configured capacity limit or with unlimited capacity.</li><li><i class="fas fa-toggle-off"></i> **Paused:** The toggle switch is off, and the seller can't receive new orders.</li>To choose when to pause a seller, see the section [Choosing between editing seller operational capacity, making it unlimited, or pausing the seller](#choosing-between-editing-seller-operational-capacity-making-it-unlimited-pausing-the-seller-or-disabling-the-module). |

When you click a seller, you're redirected to the [seller capacity details page](#actions-on-the-seller-capacity-details-page), which will be described later.

## Actions in the Operational capacity (Beta) module

On the **Shipping > Operational capacity** page of the VTEX Admin, you can do the following:

### Searching for sellers

Using the search bar, you can search for sellers by name.

> ℹ️ You can combine the search with the [status filter](/en/docs/tutorials/operational-capacity-beta). If your search returned no results, check if any filters are active.

### Filtering sellers

You can filter sellers displayed in the list by clicking `Status` and selecting `Active` or `Paused`. Then click `Apply`.

To clear applied filters, click **Status > Clear**.

### Activating and pausing the operational capacity of sellers

A seller will be <i class="fas fa-toggle-on"></i> `Active` if the toggle switch is activated, and <i class="fas fa-toggle-off"></i> `Paused` if the toggle switch is deactivated. To change the operational capacity status of a single seller, click the toggle on the corresponding row and confirm the operation by clicking `Pause`/`Activate`.

To activate or pause the operational capacity of multiple sellers, follow these steps:

1. In the VTEX Admin, go to **Shipping > Operational capacity**, or type **Operational capacity** in the search bar at the top of the page.
2. Select the sellers you want by checking the boxes next to their names. You can select all sellers by checking a box and then clicking `Select all`.
3. Click `More actions`.
4. Click `Activate` or `Pause`, as desired.
5. Confirm by clicking `Activate` or `Pause`, as desired.

### Editing the operational capacity unit of sellers

The seller's operational capacity can be measured by number of orders or order items. To edit the operational capacity of one or more sellers, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2. Select the sellers you want by checking the boxes next to their names. You can select all the sellers by checking a box and then clicking `Select all`.
3. Click `Edit capacity`.
4. Choose the **Operational capacity unit**:
   - **Number of orders:** The seller's operational capacity will be counted by the number of orders.
   - **Number of items:** The seller's operational capacity will be based on the number of items in an order.
5. Click `Save Changes`.

> ⚠️ The platform has some restrictions regarding [comprehensive sellers](/en/docs/tutorials/comprehensive-seller). Learn more in the [Comprehensive seller behavior](#comprehensive-seller-behavior) section.

## Disabling the Operational capacity (Beta) Module

To disable the **Operational capacity (Beta)** module, follow these steps:

1. In VTEX Admin, go to **Shipping > Operational capacity**, or type **Operational capacity** in the search bar at the top of the page.
2. Click the <i class="fa-solid fa-ellipsis-vertical"></i> button.
3. Click on <i class="fa-regular fa-circle-xmark"></i> `Disable module`.

## Actions on the seller capacity page

On the **Shipping > Operational capacity** page of the VTEX Admin, when you click the seller name, you're redirected to their capacity details page, where you can do the following:

* [Activate and pause seller operational capacity](#activating-and-pausing-seller-operational-capacity)
* [Monitor used capacity](#monitor-used-capacity)
* [Edit seller operational capacity](#edit-seller-operational-capacity)
* [Set unlimited capacity for the seller](#setting-unlimited-capacity-for-the-seller)
* [Edit the address associated with the seller](#editing-the-address-associated-with-the-seller)

### Activating and pausing seller operational capacity

At the top right of the seller's details page, you'll find a toggle switch to activate or pause their operational capacity:

* **Activate:** Toggle the switch to `Active` and click `Activate`.
* **Deactivate:** Toggle the switch to `Paused` and click `Pause`.

> ⚠️ The platform has some restrictions regarding [comprehensive sellers](/en/docs/tutorials/comprehensive-seller). Learn more in the [Comprehensive seller behavior](#comprehensive-seller-behavior) section.

### Monitoring capacity usage

The **Operational Capacity Status** chart shows, in real time, the percentage of the seller's capacity that has already been used that day and over the next three days, as in the image below:

![operational_capacity_image_2_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/operational-capacity-beta_2.png)

If you configure the seller with the [rule](#iii-rule) _Continue to receive orders by consuming the capacity of the following days_, the chart will show the percentage of operational capacity of the following days that has already been consumed by orders from previous days. Learn more in [Editing seller operational capacity](#editing-seller-operational-capacity).

![operational_capacity_image_3_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/operational-capacity-beta_3.png)

### Editing seller operational capacity

In the **Operational capacity** section, you can see the seller's current operational capacity settings for each day of the week. To change these settings, follow the steps below:

1. On the seller capacity details page, find the **Operational capacity** section.
2. Click `Edit`.
3. Change the desired options:
   - [I - Operational capacity unit](#i-operational-capacity-unit)
   - [II - Capacity](#ii-capacity)
   - [III - Rule](#iii-rule)
4. Click `+ Add capacity by sales channel` to configure operational capacity segmentation by sales channel. Select the sales channels you want to include in the **Sales channel segmentation** section.
5. Click `Save changes`.

Below are the descriptions of the fields mentioned in the instructions.

#### I - Operational capacity unit

Choose whether operational capacity will be defined by the number of _orders_ or _items_. The number of items considers the items across all orders placed on that day.

#### II - Capacity

Set the seller's operational capacity limit for each day of the week. There is no maximum value for this limit.

When the configured limit is reached, your store continues receiving new orders, which can be allocated to other sellers or to the same seller, provided there is capacity for the following days. This will depend on the rule you choose.

#### III - Rule

Choose the rule for when the seller reaches maximum capacity for the day:

* **Continue to receive orders by consuming the capacity of the following days:** The seller keeps receiving new orders when the capacity is reached, which are allocated to the capacity of the following days. The delivery promise for the next orders is adjusted at checkout for customers. You can't configure this period in hours because it automatically adjusts to correspond to the number of following days allocated.
  - If you choose this rule, determine the number of following days to allocate orders that exceed the current day's capacity.
  > **Example:** A seller sells chocolates, and their operational capacity for today has been fully consumed. The seller keeps receiving new orders, but they will be handled the next day, as the team can only handle orders already scheduled for today. At checkout, the delivery promise for new orders now displays a day later, as the orders will be handled tomorrow. If tomorrow's capacity is consumed today, new orders will be allocated for the day after tomorrow and handled in two days. This is because the store has set up a period of three days to receive orders by using the capacity of the following days.
* **Pause this seller until the end of the day:** Once the seller reaches their capacity limit for the day, they stop receiving new orders that day, which are allocated to other sellers.

### Setting unlimited capacity for the seller

In the **Operational capacity** section, you can also enable unlimited capacity for a seller. This allows them to receive orders without restrictions, meaning the module will not manage their operational capacity.

To configure the seller's unlimited capacity, follow the steps below:

1. On the seller capacity details page, find the **Operational capacity** section.
2. Click **Settings**.
3. In the **Operational Capacity** section, click <i class="fa fa-link" aria-hidden="true"></i> `Set as unlimited`.
4. Click `Confirm`.

> ℹ️ Seller unlimited capacity is the default behavior for sellers in stores that don't use **Operational capacity (Beta)**. When the seller is configured with unlimited capacity, the module doesn't calculate the operational capacity usage.

To know when it's best to choose each strategy, see the section [Choosing between editing seller operational capacity, making it unlimited, or pausing the seller](#choosing-between-editing-seller-operational-capacity-making-it-unlimited-or-pausing-the-seller-or-disabling-the-module).

### Editing the address associated with the seller

To edit the seller's address or identification name in **Operational capacity**, follow the steps below:

1. On the seller capacity details page, find the **Basic information** section.
2. Click `Edit basic information`.
3. Change the desired information.
4. Click `Save changes`.

## Comprehensive seller behavior

When customers don't enter their location, they can see products from your store (seller 1) and those from [comprehensive sellers](/en/docs/tutorials/comprehensive-seller).

Due to a platform limitation, when you deactivate the operational capacity of a comprehensive seller, their products are still displayed on the store, but customers can't buy them. Therefore, we recommend leaving the operational capacity of comprehensive sellers enabled at all times.

## Choosing between editing seller operational capacity, making it unlimited, pausing the seller, or disabling the module

To define the best strategy for your business in different situations, it's important to understand the following:

* **[Paused seller](#activating-and-pausing-seller-operational-capacity):** Sellers stop receiving new orders until reactivated. Even if the rule to _Continue to receive orders by consuming the capacity of the following days_ is configured, new orders are not accepted.
  > **Example:** The seller's store had problems with its facilities, and order handling was compromised for new orders. In this case, it's a strategic decision to pause the seller and only reactivate them once they can handle orders again.
* **[Seller with capacity limit reached](#monitor-used-capacity):** The seller with 100% of capacity consumed stops receiving new orders that day. However, the next day, their operational capacity is cleared again, and they automatically receive new orders.
  > **Example:** On Christmas Eve, the seller reached the maximum limit of their capacity for the day and wouldn't be able to handle any more orders, so it wouldn't be useful to [increase the seller's operational capacity](#editing-seller-operational-capacity). Since new orders can be handled the next day, there's no need to edit the seller, as their capacity will reset and be available to receive new orders again.
* **[Seller with unlimited capacity](#setting-unlimited-capacity-for-the-seller):** The seller receives orders without restrictions, so there's no need to manage the operational capacity limit for this seller. This is the platform's default behavior for sellers from stores not using **Operational capacity (Beta)**.
  > **Example:** A seller only sells digital items that don't require handling and shipping time. In this case, it would be optimal for them to have unlimited operational capacity.
* **[Disabled module](#disabling-the-operational-capacity-beta-module)**: When Operational capacity (Beta) isn't enabled, the module has no effect, and you can't manage the operational capacity of sellers. However, when you disable the module, the seller's operational capacity settings aren't lost and will work again when the module is enabled.
  > **Example:** Due to an unforeseen event in your operation, if you prefer to temporarily stop using the Operational capacity (Beta) module, you can disable it.

## Disabling the Operational capacity (Beta) module

If you want to stop using the Operational capacity (Beta) and suspend the effects of capacity settings for all sellers, you can disable the module. When you do this, you don't lose the seller capacity settings you configured, but they are no longer effective.

To disable the Operational capacity (Beta) module, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2. In the menu at the top right of the page, click `Disable module`.
3. In the modal, click `Disable`.

> ⚠️ At any time, you can [enable the Operational capacity (Beta) module](/en/docs/tutorials/operational-capacity-beta) to manage the capacity of your sellers.
