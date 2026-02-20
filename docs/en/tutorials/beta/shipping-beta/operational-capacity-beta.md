---
title: 'Operational Capacity (Beta)'
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

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact [our Support](https://supporticket.vtex.com/support).

> ⚠️ To use the feature, it is required to have [franchise accounts](/en/docs/tutorials/what-is-a-franchise-account) associated with the [main account](/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#vtex-account-types).

The **Operational Capacity (Beta)** page allows you to manage the sellers' capacity to receive and handle the store's orders to optimize your logistics network. You can monitor the order allocation between sellers and perform [actions](#actions-on-the-capacity-details-page-of-the-seller) to improve order allocation between them.

Good management of seller operational capacity leads to the following advantages:

- Better allocation of product demand between different seller warehouses.
- Optimized order shipping times by avoiding overloading sellers.
- Improved shopping experience for customers, who receive their orders on time.

This article describes how to use **Operational Capacity (Beta)** and is structured as follows:

- [Enabling the Operational Capability (Beta) module](#enabling-the-operational-capability-beta-module)
- [Getting started with Operational Capacity (Beta)](#getting-started-with-operational-capacity-beta)
- [Operational Capacity (Beta) actions](#operational-capacity-beta-actions)
- [Actions on the capacity details page of the seller](#actions-on-the-capacity-details-page-of-the-seller)
- [Comprehensive seller behavior](#comprehensive-seller-behavior)
- [Choosing between editing seller operational capacity, making it unlimited or pausing the seller, or disabling the module](#choosing-between-editing-seller-operational-capacity-making-it-unlimited-or-pausing-the-seller-or-disabling-the-module)
- [Disabling the Operational Capacity (Beta) module](#disabling-the-operational-capacity-beta-module)

> ℹ️ To manage **Operational Capacity (Beta)**, your VTEX Admin [role](/en/docs/tutorials/roles) must be associated with the *Logistics full access* [License Manager resource](/en/docs/tutorials/license-manager-resources).

## Enabling the Operational Capability (Beta) module

To start using the feature, you need to enable **Operational Capacity (Beta)** through the VTEX Admin. When not enabled, the module has no effect and doesn't allow you to manage seller capacity.

> ⚠️ Before enabling the module, we recommend configuring the operational capacity of your sellers. That way, before the feature starts working, you will have a clear view of how the capacity of each seller is consumed, and you can adjust your settings to meet the demands of your operation.

To enable the **Operational Capability (Beta)** module, follow the steps below:

1.	In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2.	At the top of the page, find the callout message: “*Module disabled: Enable it so the settings you've configured are applied and used by the VTEX platform*”.
3.	In the callout, click `Enable`.

If you want to stop using the feature, you can [disable Operational Capacity (Beta)](#disabling-the-operational-capacity-beta-module) at any time. However, it is worth considering other strategies, as mentioned in [Choosing between editing seller operational capacity, making it unlimited, pausing the seller, or disabling the module](#choosing-between-editing-seller-operational-capacity-making-it-unlimited-or-pausing-the-seller-or-disabling-the-module).

## Getting started with Operational Capacity (Beta)

In the VTEX Admin, go to **Shipping > Operational capacity**, or type **Operational capacity** in the search bar to see the following page:

![operational_capacity_image_1_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/operational-capacity-beta_1.png)

> ⚠️ The interface will display the sellers that are part of your operation, previously configured by our team. To add a new seller, contact our [Support team](https://supporticket.vtex.com/support).

The chart shows the following information:

- **Total sellers:** Total number of sellers in your operation.
- **Active:** Number of sellers who are receiving new orders, whether they have a configured capacity limit or unlimited capacity.
- **Paused:** Number of sellers who are paused and not receiving new orders.
- **Number of sellers that exceeded capacity:** Number of sellers that received more orders than their configured limit. You can view results from the last `7 days` or `28 days`.

The **Operational Capacity (Beta)** page displays the following information:

| **Column** | **Description** |
| :----------: | :---------- |
| Seller | Identification of the [seller](/en/docs/tutorials/what-is-a-seller) to which the operational capacity refers. |
| Capacity Usage | Percentage of the seller operational capacity used on the day.**Example:** A seller with the capacity to handle 100 orders daily has used 80% of its capacity for the day. Therefore, they can only receive 20 more new orders that day.In this column, an alert icon is displayed when the seller reaches 100% of their capacity, so they cannot receive any new orders for the day.You can [edit the operational capacity of sellers](#editing-the-sellers-operational-capacity) individually or in bulk. |
| Status | Status of the seller's operational capacity, which can be of two types:<ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i> **Active:** The toggle switch is activated, and the seller can receive new orders, either because it is within the capacity limit that has been set, or because the seller has unlimited capacity.</li><li><i class="fas fa-toggle-off" aria-hidden="true"></i>**Paused:** The toggle switch is deactivated, and the seller cannot receive new orders.</li></ul>To choose when to pause a seller, see the section [Choosing between pausing or increasing operational capacity](#choosing-between-editing-seller-operational-capacity-making-it-unlimited-or-pausing-the-seller-or-disabling-the-module). |

When you click a seller, you are redirected to the [seller's capacity details page](#actions-on-the-capacity-details-page-of-the-seller), which will be seen below.

## Operational Capacity (Beta) actions

In the VTEX Admin, in the **Shipping > Operational Capacity**, you can do the following:

- [Search for sellers](#searching-for-sellers)
- [Filter sellers](#filtering-sellers)
- [Activate and pause the operational capacity of sellers](#activate-and-pause-the-operational-capacity-of-sellers)
- [Edit the operational capacity unit of sellers](#edit-the-operational-capacity-unit-of-sellers)

### Searching for sellers

Using the search bar, you can search for sellers by their name.

> ℹ️ You can associate the search for sellers with the [filter by status](#filtering-sellers). If your search did not return any results, make sure no filters are active.

### Filtering sellers

You can filter the listed sellers by their status by clicking `Status` and selecting `Active` or `Paused`. Then click `Apply`.

To clear the applied filters, click **Status > Clear**.

### Activate and pause the operational capacity of sellers

A seller will have the <i class="fas fa-toggle-on" aria-hidden="true"></i> `Active` status if the toggle switch is activated, and the <i class="fas fa-toggle-off" aria-hidden="true"></i> `Paused` status if the toggle switch is deactivated. To change the operational capacity status of a single seller, click the toggle switch in the corresponding row and confirm the change by clicking `Pause`/`Activate`. 

To activate or pause the operational capacity of multiple sellers, follow these steps:

1. In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2. Select the sellers you want by clicking the checkboxes next to their names. You can select all the sellers by clicking a checkbox and then clicking `Select all`.
3. Click `More actions`.
4. Click `Activate` or `Pause`, as desired.
5. Confirm by clicking `Activate` or `Pause`, as desired.

### Edit the operational capacity unit of sellers

The seller's operational capacity considers the number of orders or order items. To edit the operational capacity of one or more sellers, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2. Select the sellers you want by clicking the checkboxes next to their names. You can select all the sellers by clicking a checkbox and then clicking `Select all`.
3. Click `Edit Capacity`.
4. Choose the **Operational Capacity unit**:
    - **Number of orders:** The seller's operational capacity will be based on the number of orders.
    - **Number of items:** The seller's operational capacity will be based on the number of items in an order.
5. Click `Save Changes`.

> ⚠️ The platform has some restrictions regarding [comprehensive sellers](/en/docs/tutorials/comprehensive-seller). Learn more in the [Comprehensive seller behavior](#comprehensive-seller-behavior) section.

## Actions on the capacity details page of the seller

In the VTEX Admin, under **Shipping > Operational Capacity**, when you click the seller name, you are redirected to the capacity details page, where you can:

- [Pause and activate the seller's operational capacity](#pausing-and-activating-the-sellers-operational-capacity)
- [Monitor capacity usage](#monitoring-capacity-usage)
- [Edit the seller's operational capacity](#editing-the-sellers-operational-capacity)
- [Configure the seller's unlimited capacity](#configuring-the-sellers-unlimited-capacity)
- [Edit the address associated with the seller](#editing-the-address-associated-with-the-seller)

### Pausing and activating the seller's operational capacity

At the top right of the seller's details page, you'll find a toggle switch to activate or pause their operational capacity:

- **Activate:** Enable the toggle switch for `Active` and click `Activate`.
- **Pause:** Toggle the switch for `Paused` and click `Pause`.

> ⚠️ The platform has some restrictions regarding [comprehensive sellers](/en/docs/tutorials/comprehensive-seller). Learn more in the [Comprehensive seller behavior](#comprehensive-seller-behavior) section.

### Monitoring capacity usage

The **Operational Capacity Status** shows, in real time, the percentage of the seller's capacity that has already been used that day and over the next three days, as in the image below:

![operational_capacity_image_2_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/operational-capacity-beta_2.png)

If you set up the _Continue to receive orders by consuming the capacity of the following days_ [rule](#iii-rule) for the seller, the chart will display the percentage of operational capacity for the following days already used for orders from previous days. Learn more in [Editing the seller's operational capacity](#editing-the-sellers-operational-capacity).

### Editing the seller's operational capacity

In the **Operational Capacity** section, you can see the seller's current operational capacity settings for each day of the week. To change these settings, follow the steps below:

1. On the seller capacity details page, find the **Operational Capacity** section.
2. Click `Edit`.
3. Change the desired options:
    - [I - Operational Capacity Unit](#i-operational-capacity-unit)
    - [II - Capacity](#ii-capacity)
    - [III - Rule](#iii-rule)
4. Click `Save Changes`.

Below are the field descriptions mentioned in the instructions.

#### I - Operational Capacity Unit

Choose whether operational capacity is defined by the number of _orders_ or _items_. The number of items considers the items of all the orders placed that day.

#### II - Capacity

Set the seller's operational capacity limit for each day of the week. The system does not set a maximum value.

When the configured limit is reached, your store keeps receiving new orders, which can be allocated to other sellers or to the same seller but within the capacity for the following days. This will depend on the rule you choose.

#### III - Rule

Choose the rule for when the seller reaches maximum capacity for the day:

- **Continue to receive orders by consuming the capacity of the following days:** The seller keeps receiving new orders when the capacity is reached, which are allocated to the capacity of the following days. The delivery promise for the next orders is adjusted at checkout. You can't configure this period in hours because it automatically adjusts to correspond to the number of following days allocated.
  - If you choose this rule, determine the number of following days to allocate orders that exceed the current day's capacity.
  > **Example:** A seller sells chocolates, and its operational capacity today reached 100%. The seller keeps receiving new orders, but they will be handled the next day, as the team can only handle orders already scheduled for today. At checkout, the delivery promise for new orders now displays a day later, as the orders will be handled tomorrow. If tomorrow's capacity is consumed today, new orders will be allocated for the day after tomorrow and handled in two days. This is because the store has set up a period of three days to receive orders by using the following days' capacity.
- **Pause this seller until the end of the day:** Once a seller reaches their capacity limit for the day, they stop receiving new orders, which are allocated to other sellers.

### Configuring the seller's unlimited capacity

Also in the **Operational Capacity** section, you can configure unlimited capacity for the seller. This allows them to receive orders with no restrictions, meaning that the operational capacity is not managed.

To configure the seller's unlimited capacity, follow the steps below:

1. On the seller capacity details page, find the **Operational Capacity** section.
2. Click `Make Capacity Unlimited`.
3. Click `Continue`.

> ℹ️ Seller unlimited capacity is the default seller behavior for stores that don't use **Operational capacity (Beta)**. When the seller is configured with unlimited capacity, the module doesn't calculate the operational capacity usage.

To learn about applying different strategies, see the section [Choosing between editing seller operational capacity, making it unlimited or pausing the seller](#choosing-between-editing-seller-operational-capacity-making-it-unlimited-or-pausing-the-seller-or-disabling-the-module).

### Editing the address associated with the seller

To edit the seller's address or identification name in **Operational Capacity (Beta)**, follow the steps below:

1. On the seller capacity details page, find the **Basic Information** section.
2. Click `Edit Basic Information`.
3. Change the desired information.
4. Click `Save Changes`.

## Comprehensive seller behavior

When customers don't enter their location on your store, they can see your store's products (seller 1) and those from [comprehensive sellers](/en/docs/tutorials/comprehensive-seller).

Due to a platform limitation, when you deactivate the operational capacity of a comprehensive seller, their products are still displayed on the store, but customers can't buy them. 
We therefore recommend leaving the comprehensive sellers' operational capacity enabled at all times.

## Choosing between editing seller operational capacity, making it unlimited or pausing the seller, or disabling the module

To define the best strategy for your business in different situations, it's important to understand the following:

- **[Paused seller](#pausing-and-activating-the-sellers-operational-capacity):** The seller stops receiving new orders until they are reactivated. Even if the rule _Continue to receive orders by consuming the capacity of the following days_ is configured, new orders are not accepted.
  > **Example:** The seller's store had problems with their facilities, affecting the handling of new orders. In this case, it is strategic to pause the seller and only reactivate them once they are able to handle orders again.
- **[Seller reached the maximum limit](#monitoring-capacity-usage):** The seller that reached 100% of operational capacity stops receiving new orders that day. However, the next day, their operational capacity is cleared again and they automatically receive new orders.
  > **Example:** On Christmas Eve, the seller reached the maximum limit of their capacity for the day and wouldn't be able to handle any more orders, so it wouldn't be useful to [edit the operational capacity](#editing-the-sellers-operational-capacity). The next day, new orders could be handled, so it would be preferable not to increase the seller capacity, as the next day their capacity will be cleared to receive new orders.
- **[Seller with unlimited capacity](#configuring-the-sellers-unlimited-capacity):** The seller receives orders without restrictions, so there's no need to manage the operational capacity limit of this seller. This is the platform's default behavior for sellers from stores not using **Operational Capacity (Beta)**.
  > **Example:** A seller only sells digital items that don't require handling and delivery time. In this case, it would be optimal for them to have unlimited operational capacity.
* **[Disabled module](#disabling-the-operational-capacity-beta-module)**: When Operational Capacity (Beta) is not enabled, the module has no effect and you can't manage the operational capacity of sellers. However, when you disable the module, the seller operational capacity settings are not lost and will work again when the module is enabled.
  > **Example:** If you want to stop using the Operational Capacity (Beta) module for any reason, you can disable it.

## Disabling the Operational Capacity (Beta) module

If you want to stop using the **Operational Capacity (Beta)** and suspend the effects of capacity settings for all sellers, you can disable the module. When you do this, you don't lose the seller capacity settings you configured, but they are no longer effective.

To disable the **Operational Capability (Beta)** module, follow the steps below:

1.	In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2.	In the menu at the top right of the page, click `Disable Module`.
3.	In the modal, click `Disable`.

> ⚠️ You can [enable the Operational Capacity (Beta)](/en/docs/tutorials/operational-capacity-beta#enabling-the-operational-capability-beta-module) module to manage seller capacity at any time.

