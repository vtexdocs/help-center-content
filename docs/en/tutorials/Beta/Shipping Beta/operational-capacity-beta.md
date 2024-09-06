---
title: 'Operational Capacity (Beta)'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2024-04-08T18:59:56.706Z
publishedAt: 2024-04-08T18:59:56.706Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: operational-capacity-beta
locale: en
legacySlug: locations-module
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ This feature is in beta, which means that we are working to improve it. To use **Operational Capability (Beta)**, fill out the [contact form](https://docs.google.com/forms/d/e/1FAIpQLScgmHPJEnVfd1EK9znevW-bcdxL2WVqzNZdrwri9auKayZDJA/viewform). To use the feature, it is required to have [franchise accounts](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) associated with the [main account](https://help.vtex.com/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#vtex-account-types).

The **Operational Capacity** page allows you to manage the sellers' capacity to receive and handle the store's orders to optimize your logistics network. You can monitor the order allocation between sellers and perform [actions](#acoes-na-pagina-de-detalhes-do-seller) to improve order allocation between them.

A good seller operational capacity management leads to the following advantages:

- Better reallocates product demand between different sellers' warehouses.
- Optimizes order shipping times by avoiding overloading sellers.
- Improves the shopping experience for customers, who receive their orders on time.

When you go to the VTEX Admin under **Shipping > Operational Capacity**, you will find a page like the one below:

![operational_capacity_image1_EN](https://images.ctfassets.net/alneenqid6w5/5k7wWTuVZk7Ylc2IHpNE5C/87f03e4f1a667a76349095e450244602/operational_capacity_image1_EN.png)

>⚠️ The sellers displayed on the interface are your operation's sellers, previously configured by our team. To add a new seller, contact [our Support](https://help.vtex.com/en/support) team.

The chart shows the following data:

- **Total sellers:** Total number of sellers in your operation.
- **Active:** Number of sellers receiving new orders.
- **Paused:** Number of sellers who are paused and not receiving new orders.
- **Number of sellers that exceeded capacity:** Number of sellers that received more orders than their configured limit. You can view results from the last `7 days` or `28 days`.

The **Operational Capacity** page displays the following information:

| **Column** | **Description** |
| :----------: | :---------- |
| Name | Identification of the <a href="https://help.vtex.com/en/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w">seller</a> to which the operational capacity refers. |
| Capacity Usage | <p>Percentage of operational capacity used on the day.</p><p><b>Example:</b> A seller with the capacity to handle 100 orders has used 80% of its capacity for the day. Therefore, they can only receive 20 more new orders that day.</p><p>In this column, an alert icon is displayed when the seller reaches 100% of their capacity, so they cannot receive any new orders for the day.</p><p>You can <a href="https://help.vtex.com/en/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#editing-the-sellers-operational-capacity">edit the operational capacity of sellers</a> individually or in bulk, as detailed in the Editing operational capacity of sellers section.</p> |
| Status | <p>Status of the seller's operational capacity, which can be of two types:</p><p><ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i> <b>Active:</b> The toggle switch is activated, and the seller can receive new orders.</li><li><i class="fas fa-toggle-off" aria-hidden="true"></i><b>Paused:</b> The toggle switch is deactivated, and the seller cannot receive new orders.</li></ul></p><p>To choose when to pause a seller, see the section <a href="https://help.vtex.com/en/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#choosing-between-pausing-or-increasing-operational-capacity">Choosing between pausing or increasing operational capacity</a>.</p> |

When you click a seller, you are redirected to the [seller's details page](#actions-on-the-seller-details-page), which will be seen below.

## Operational Capacity actions

In the VTEX Admin, under **Shipping > Operational Capacity**, you can do the following:

- [Search for sellers](#searching-for-sellers)
- [Filter sellers](#filtering-sellers)
- [Activate and pause sellers' operational capacity](#activating-and-pausing-the-operational-capacity-of-sellers)
- [Edit the seller's operational capacity unit](#editing-the-sellers-operational-capacity-unit)

### Searching for sellers

Using the search bar, you can search for sellers by their name.

>ℹ️ You can associate the search for sellers with the [filter by status](https://help.vtex.com/en/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#filtering-sellers). If your search did not return any results, make sure no filters are active.

### Filtering sellers

You can filter the listed sellers by their status by clicking `Status` and selecting `Active` or `Paused`. Then click `Apply`.

To clear the applied filters, click **Status > Clear**.

### Activating and pausing the operational capacity of sellers

A seller will have the <i class="fas fa-toggle-on" aria-hidden="true"></i> `Active` status if the toggle switch is activated, and the <i class="fas fa-toggle-off" aria-hidden="true"></i> `Paused` status if the toggle switch is deactivated. To change the operational capacity status of a single seller, click the toggle switch in the corresponding row and confirm the change by clicking `Pause`/`Activate`. 

To activate or pause the operational capacity of multiple sellers, follow these steps:

1. In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2. Select the sellers you want by clicking the checkboxes next to their names. You can select all the sellers by clicking a checkbox and then clicking `Select all`.
3. Click `More actions`.
4. Click `Activate` or `Pause`, as desired.
5. Confirm by clicking `Activate` or `Pause`, as desired.

### Editing the seller's operational capacity unit

The seller's operational capacity considers the number of orders or order items. To edit the operational capacity of one or more sellers, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Operational Capacity**, or type **Operational Capacity** in the search bar at the top of the page.
2. Select the sellers you want by clicking the checkboxes next to their names. You can select all the sellers by clicking a checkbox and then clicking `Select all`.
3. Click `Edit Capacity`.
4. Choose the **Operational Capacity unit**:
    - **Number of orders:** The seller's operational capacity will be based on the number of orders.
    - **Number of items:** The seller's operational capacity will be based on the number of items in an order.
5. Click `Save Changes`.

>⚠️ The platform has some restrictions regarding [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). Learn more in the [Comprehensive seller operational capacity](https://help.vtex.com/en/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#comprehensive-seller-operational-capacity) section.

## Actions on the seller details page

In the VTEX Admin, under **Shipping > Operational Capacity**, when you click a seller, you are redirected to their details page, where you can:

- [Pause and activate the seller's operational capacity](#pause-and-activate-the-sellers-operational-capacity)
- [Monitor capacity usage](#monitoring-capacity-usage)
- [Edit the address associated with the seller](#editing-the-address-associated-with-the-seller)
- [Edit the seller's operational capacity](#editing-the-sellers-operational-capacity)

### Pause and activate the seller's operational capacity

At the top right of the seller's details page, you'll find a toggle switch to activate or pause their operational capacity:

- **Activate:** Enable the toggle switch for `Active` and click `Activate`.
- **Pause:** Toggle the switch for `Paused` and click `Pause`.

>⚠️ The platform has some restrictions regarding [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). Learn more in the [Comprehensive seller operational capacity](https://help.vtex.com/en/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#comprehensive-seller-operational-capacity) section.

### Monitoring capacity usage

The **Operational Capacity Status** chart shows, in real time, the percentage of the seller's capacity that has already been used, as in the image below:

![operational_capacity_image2_EN](https://images.ctfassets.net/alneenqid6w5/510RtT3ugOksM3YD5tYSGc/0bed6fad834c5b5ab6d22ce713abd11d/operational_capacity_image2_EN.png)

The chart shows the following periods:

- Today
- Tomorrow
- Date of the next two days

If you set up the _Continue to receive orders by consuming the capacity of the following days_ [rule](https://help.vtex.com/en/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#iii-rule) for the seller, the chart will display the percentage of operational capacity for the following days already used for orders from previous days. Learn more in [Editing the seller's operational capacity](#editing-the-sellers-operational-capacity).

### Editing the address associated with the seller

To edit the seller's address or identification name in **Operational Capacity**, follow the steps below:

1. In the **Basic Information** section, click `Edit Basic Information`.
2. Change the desired information.
3. Click `Save Changes`.

### Editing the seller's operational capacity

In the **Operational Capacity** section, you can see the seller's current operational capacity settings for each day of the week, as in the following image:

![operational_capacity_image3_EN](https://images.ctfassets.net/alneenqid6w5/70kbPFFifh8ykCHvIj6vEZ/7aa99cf4ff1a7deb322671c5e1961537/operational_capacity_image3_EN.png)

To change these settings, follow the steps below:

1. In the **Operational Capacity** section, click `Edit`.
2. Change the desired options:
    - [I - Operational Capacity Unit](#i-operational-capacity-unit)
    - [II - Capacity](#ii-capacity)
    - [III - Rule](#iii-rule)
3. Click `Save Changes`.

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

## Choosing between pausing or increasing operational capacity

To decide whether the best strategy for your business is to [edit a seller's operational capacity](#-editing-the-sellers-operational-capacity) or [pause](#pause-and-activate-the-sellers-operational-capacity) them, it's important to understand the following:

- **Paused seller:** The seller stops receiving new orders until they are reactivated. Even if the rule _Continue to receive orders by consuming the capacity of the following days_ is configured, new orders are not accepted.
  > **Example:** The seller's store had problems with their facilities, affecting the handling of new orders. In this case, it is strategic to pause the seller and only reactivate them once they are able to handle orders again.
- **Seller reached the maximum limit:** When the seller reaches 100% capacity, they stop receiving new orders for that day. However, their operational capacity becomes fully available the next day, and they automatically receive new orders.
  > **Example:** On Christmas Eve, the seller reached its maximum capacity for the day and could not handle more orders, so it would not be worth [increasing the seller's operational capacity](#editing-the-sellers-operational-capacity). Since new orders can be handled the next day, there's no need to edit the seller, as their capacity will reset and be available to receive new orders again.

### Comprehensive seller operational capacity

When customers don't enter their location on your store, they can see your store's products (seller 1) and those from [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI).

Due to a platform limitation, when you deactivate the operational capacity of a comprehensive seller, their products are still displayed on the store, but customers can't buy them. 
We therefore recommend leaving the comprehensive sellers' operational capacity enabled at all times.
