---
title: 'VTEX Pick and Pack: Fulfillment'
id: 1zGUEItEEVsal6cuBEBNcA
status: PUBLISHED
createdAt: 2023-04-10T15:43:59.687Z
updatedAt: 2023-08-31T19:52:23.529Z
publishedAt: 2023-08-31T19:52:23.529Z
firstPublishedAt: 2023-04-10T17:57:34.714Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: vtex-pick-and-pack-fulfillment
locale: en
legacySlug: vtex-pick-and-pack-fulfillment
subcategory: 7Kllu6CmeLNV3tYXlCFvOt
---

>ℹ️ If you are interested in implementing for your business, fill out our [form](https://vtex.com/us-en/contact/) and indicate the name of the desired product in the `Comments` section.

[VTEX Pick and Pack](https://help.vtex.com/en/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU) is a solution to streamline stores’ fulfillment processes by optimizing orders’ picking and packing, and the last-mile delivery. The solution is composed of the [Last Mile](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-last-mile--HN7WKV0xoq2ssVjsJlfzr) and **VTEX Pick and Pack Fulfillment** features, and appears in your VTEX Admin in **Apps**.

The **VTEX Pick and Pack Fulfillment** module is related to the order handling process and has the following sections:

* [Picking and Packing](#picking-and-packing)
* [Insights](#insights)
* [Settings](#settings)
* [Users](#users)

>❗ **VTEX Pick and Pack** is not an invoicing system. After picking and packing, the order must be invoiced and updated as `Invoiced` in the OMS, so that **VTEX Fulfillment** can end the picking and packing flow and proceed to shipping.

## Picking and Packing

This is the order management interface, with two main pages:

* [Picking and Packing list page](#picking-and-packing-list-page)
* [Picking and Packing details page](#picking-and-packing-details-page)

### Picking and Packing list page

When you access **Fulfillment > Picking and Packing**, you find a page listing all the orders that had the payment confirmed and are on the [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) `ready for handling`, as in the image below:

The table below contains a description of the columns:

| **Column** | **Description** |
| ---------- | ---------- |
| Created date | Order placement date and time. |
| Delivery date | Order shipping deadline, according to the Service Level Agreement (SLA) defined between the store and the customer. |
| Delivery method | Order shipping type, which can be delivery, send to customer’s address, or pickup from [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R). |
| Order number | Unique ID that identifies an order, the same one used in the Order Management System (OMS). |
| Picker | Name of the picker assigned to the order. The picker is the person responsible for the picking process. The default value is `Unassigned` until a picker is assigned. |
| Status | Order status, which can be: <ul><li><b>Ready for handling:</b> Orders are ready for handling, but were not yet assigned to a picker.</li><li><b>Ready for picking:</b> The order was assigned to a picker and is depending on the picker’s confirmation to move to the next status.</li><li><b>Picking:</b> The picker is collecting the order items.</li><li><b>Ready for packing:</b> The picker has finished the picking process and the order is ready to be packed.</li><li><b>Packing:</b> The order’s items are being packed in bags or packages determined by the store.</li><li><b>Ready for invoicing:</b> The order can be invoiced. <i>VTEX Pick and Pack</i> solution does not invoice orders.</li><li><b>Invoiced:</b> The order was invoiced.</li><li><b>Prepare services:</b> Shipping services are ready to be created.</li><li><b>Ready for shipping:</b> The order is ready for shipping.</li><li><b>Delivered:</b> The order was delivered to the customer address or pickup point.</li><li><b>Idle:</b> The order was an external fulfillment, and <i>VTEX Pick and Pack</i> will not be able to process it. If the order is invoiced in OMS in a status different from <code>Ready for invoicing</code>, the system will also consider it an external fulfillment and change the order status to <code>Idle</code>.</li><li><b>Canceled:</b> The order was ready for handling, but was canceled.</li></ul> |

To view more details about an order, select one from the list and the information below will appear:

| **Column** | **Description** |
| ---------- | ---------- |
| Customer information | Customer’s name, email and contact number. |
| Delivery information | Customer’s address for delivery or pickup point address, when the customer is picking up from the store. |
| Delivery window | Shows the date the order was placed and the date the customer should receive it. |
| Order items | Number of items and their categories. |
| Payment method | Order's total amount and the [payment method](https://help.vtex.com/en/tutorial/difference-between-payment-methods-and-payment-conditions--3azJenhGFyUy2gsocms42Q) used, like credit or debit cards. |

You can perform the following actions in the Picking and Packing page:

* [Search](#search)
* [Filter](#filter)
* [Import](#import)
* [Export](#export)
* [Print receipt](#print-receipt)
* [Assign/Reassign picker](#assign-reassign-picker)

#### Search

On the top of the page, there is a search box with the magnifier icon <i class="fas fa-search"></i> in which you can search for orders using the following criteria:

* Order ID
* Customer name
* Store operator managing the order

#### Filter

You can filter orders using different criteria, and when you click `Filters`, a modal displays these options:

* **Sort Ascending/Descending:** Ascending sort makes the orders with the most recent delivery date and time set by customers at checkout appear first in the list. Descending sort organizes the list in the opposite way.
* **Order date:** Set a range to filter orders created within the chosen start and end date.
* **Due date:** Delivery deadlines occur within the chosen start and end date.
* **Status:** One or more selected [order status](#picking-and-packing-list-page).
* **Order total:** Order’s cost range, which can go from $0 to $5 millions.
* **Number of items:** Number of orders’ items, which can go from 0 to 99.
* **Carrier:** The [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) assigned to the delivery.
* **Payment method:** The [payment method](https://help.vtex.com/en/tutorial/difference-between-payment-methods-and-payment-conditions--3azJenhGFyUy2gsocms42Q) used by the customer, like credit or debit cards.
* **Picker:** Picker assigned for the order picking process. Use available pickers’ emails.
* **Categories:** Orders items' categories, for example, _Beverage_ or _Clothes_. It depends on the store’s category tree configured in the Catalog.

If you wish to remove the selected filters, click `Filters`, and then click `Clear filters`.

#### Import

By default, orders in the `ready for handling` status should be automatically imported from OMS to Picking and Packing. If an order is not appearing on the fulfillment module, although is `ready for handling`, it could be due to manual changes to the order’s status in the OMS, and you can import it manually.

To import an order manually, follow the steps below:

1. Click `Import`.
2. Enter the Order ID.
3. Select the checkbox _“Only orders that did not download automatically will be imported”_.
4. Click `Import`.

#### Export

You can export a list of orders following the steps below:

1. Click `Export`.
2. Add the desired filters.
    > It is not possible to export all orders. You can duplicate or delete filters in the menu <i class="fas fa-ellipsis-v"></i>. The available filters are:
    * Picker
    * Categories
    * Carrier
    * Start date
    * End date
    * City
3. Click `Export`.

#### Print receipt

The receipt is a report that contains what the picker has collected and the order's total amount. It may count as an invoice in some countries, but that is not a rule.

To print an order receipt, click on the menu <i class="fas fa-ellipsis-v"></i> of the row that corresponds to the order and select `Print receipt`.

#### Assign/Reassign picker

To assign or reassign a picker, on the row of the desired order, click the menu <i class="fas fa-ellipsis-v"></i> and select  `Assign` or  `Reassign`. It will open a modal where you will choose the name of the picker.

You can also assign or reassign a picker in the [Picking and Packing details page](#picking-and-packing-details-page), by clicking on the pencil icon <i class="fas fa-pencil-alt"></i> and selecting the picker.

### Picking and Packing details page

To access an order details page, on the **Picking and Packing list page** click on the menu <i class="fas fa-ellipsis-v"></i> button at the row of the order you want to see more information about and select `See details`. You will find a page like the one below:

In the details page, you can do the actions below. The actions available on the **Picking and Packing details page** will change according to the order status on the [Picking and Packing list page](#picking-and-packing-list-page).

* [Picking](#picking)* 
* [Add item](#add-item)*
* [Create personalized product](#create-personalized-product)
* [Replace with recommended item (Suggestions)](#replace-with-recommended-item-suggestions)*
* [Replace item (Search)](#replace-item-search)*
* [Change price](#change-price)*
* [Delete item](#delete-item)*
* [Finish picking/confirm pickup](#finish-picking-confirm-pickup)*
* [Packing](#packing)*
* [Print receipt and voucher](#print-receipt-and-voucher)
* [Add shipping service](#add-shipping-service)
* [Track order](#track-order)

>❗ Although the actions above can be performed by [users](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#users) with access to the Admin, typically the actions with an ***** (asterisk) should be executed only by pickers using their mobile devices, without any access to the store's Admin.

#### Picking

In the natural flow, the picking is made by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to perform this action.

In the product row, as in the image below, you can pick a product and perform other actions.

To pick a product, follow the steps below:

1. On the **Quantity** column, select the desired number of items.
2. Click the check button <i class="far fa-check-circle"></i> at the end of the row.
3. Click `Confirm`.

In case you need to undo the picking, click on the menu <i class="fas fa-ellipsis-v"></i> in the product's row and select `Restore`.

#### Add item

In the natural flow, adding items is done by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to perform this action.

You can add another product by following the steps below:

1. On the menu <i class="fas fa-ellipsis-v"></i> on the same row of the Order ID, click `+Add item`.
2. Search for the desired product.
3. Click `Select`.
4. Click `Add products`.

#### Create personalized product

You can create a personalized product by following the steps below:

1. On the menu <i class="fas fa-ellipsis-v"></i> on the same row of the Order ID, click on `+Add item`.
2. Click the icon with a <i class="fas fa-plus"></i> plus sign.
3. Fill in the following fields:
    * Name
    * Price
    * Refid
    * Ean
4. Select a category.
5. Click `Add`.
6. Click `Add products`.

#### Search: replace item

In the natural flow, the replacement of items is made by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to perform this action.

You can replace a product by doing the following:

1. On the row corresponding to a product that was not picked, click on the menu <i class="fas fa-ellipsis-v"></i>.
2. Click `Search`.
3. Search for the desired product.
4. Click `Select`.
5. Click `Confirm`.
6. In the modal that opens, select a reason for the replacement.
    > The reasons have to be configured, as explained in the [Picking settings](#picking-settings) section.
7. Fill in the field **Notes** with a brief explanation for the replacement (required).
8. Click `Confirm`.

#### Suggestions: replace with recommended item

In the natural flow, the replacement of items is made by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to perform this action.

You can replace an item for another one based on a recommendation. The option displayed depends on what your settings are in [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb). 

To replace an item for a recommendation, follow the steps below:

1. On the row corresponding to a product that was not picked, click on the menu <i class="fas fa-ellipsis-v"></i>.
2. Click `Suggestions`.
3. Add the product that appears by clicking on `Select`.
4. Click `Confirm`.
5. In the modal that opens, select a reason for the replacement.
    > The reasons have to be configured, as explained in the [Picking settings](#picking-settings) section.
6. Fill in the field **Notes** with a brief explanation for the replacement (required).
7. Click `Confirm`.

You can also search manually for a product, by doing the following:

1. On the menu <i class="fas fa-ellipsis-v"></i>, click `Suggestions`.
2. Click `Search manually`.
3. Search for the desired product.
4. Click `Select`.
5. Click `Confirm`. 
6. In the modal that opens, select a reason for the replacement.
    > The reasons have to be configured, as explained in the [Picking settings](#picking-settings) section.
7. Fill in the field **Notes** with a brief explanation for the replacement (required).
8. Click `Confirm`.

#### Change price

In the natural flow, the price change is made by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to perform this action.

In order to change the price of an item, follow the steps below:

1. On the row corresponding to a product that was not picked, click on the menu <i class="fas fa-ellipsis-v"></i>. 
2. Click `Change price`.
3. In the modal that opens, fill in the fields:
    * New price
    * Reason
    * Notes
4. Click `Change price`.

#### Delete item

In the natural flow, deleting items is made by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to perform this action.

You can reject a product by following the steps below:

1. On the menu <i class="fas fa-ellipsis-v"></i>, click `Delete item`.
2. In the modal that opens, select a reason for the rejection.
3. Fill in the field **Notes** with a brief explanation for the deletion (required).
4. Click `Confirm`.

In case you need to restore the product, click on the menu &lt;insert_icon> and select `Restore`.

#### Finish picking/confirm pickup

In the natural flow, this is made by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to do it.

Depending on the order status displayed on the [Picking and Packing list page](#picking-and-packing-list-page), in the **Status** section you will find different buttons for specific actions, like the `Finish Picking` in the image below:

The button options and the actions you perform by clicking on them can be one of the following:

* `Finish picking`: All items were picked, and you conclude the picking, moving to the packing process.
* `Confirm pickup`: If it is a delivery, you confirm pickup when the packages are ready to be delivered, and a carrier has picked them up. If the customer will get the order at a pickup point, you confirm pickup after the customer receives the packages.

#### Packing 

In the natural flow, the packing is made by pickers using their mobile devices. This section shows how to do it via Admin, in case [other users](#users) need to perform this action.

Once you have finished the picking process, you have to create the packages and indicate which item goes in each package. The [packages’ settings](#packages-settings) of how to configure bags and any kind of packages will be seen in the next sections.

To create a new package, follow the steps below:

1. Click on the icon in the section **Package List**.
2. Select the package type.
3. Click `Create package`.

You can add a single product to a package or all products at once. After all products are packed, click `Close Packages`. Once you close packages, you are no longer able to add items or make any kind of change.

>❗ **VTEX Pick and Pack** is not an invoicing system. Once the order gets to `Ready for invoicing` status, it must be invoiced and updated as `Invoiced` in OMS. Only after that, **VTEX Fulfillment** will end the picking and packing flow and proceed to shipping.
> If the order is invoiced in a status different from `Ready for invoicing`, the system will consider it an external fulfillment and change the order status to `Idle`, unabling **VTEX Pick and Pack** to process it.

#### Print receipt and voucher

On the top of the details page, on the left side of **Status**, you will find a menu <i class="fas fa-ellipsis-v"></i> and when you click on it, it displays the following options:

* **Receipt:** print the order’s receipt regarding all items.
* **Voucher:** print the voucher, a report for customers that contains general information and that can be signed by them.
* **Receipt picked items:** print the order’s receipt related only to items already picked.
* **Voucher picked items:** print the voucher related only to items already picked.
* **+ Add item:** [add a new product](#add-item) or create a [personalized product](#create-personalized-product).

#### Add shipping service

When the order picking, packing and invoicing is complete, and the order is in the `Prepare services` status, you can add a shipping service following the steps below:

1. Click the `Add service` button.
2. Select the **day** and **time** when the order will be dispatched.
3. Select the **day** and **time** when the order will be shipped.
4. Choose a carrier.
5. Select a Service Type.
6. Select a payment method.
7. Select the packages that will be shipped.
8. Click `Confirm shipments`.

You will receive a message of success and the order will move to the _Ready for shipping_ status.

#### Track order

Once the order gets to the _Ready for shipping_ or _Delivered_ status, the `Go to tracking` button will appear in the [Picking and Packing details page](#picking-and-packing-details-page). When you click it, you will be redirected to [Last Mile](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-last-mile--HN7WKV0xoq2ssVjsJlfzr) to track the order.

Or you can go to **Last Mile** directly in the store’s Admin, accessing **Apps > Last Mile > Shipping Services**.

## Insights

In **VTEX Pick and Pack**, the **Insights** page provides data and analytics about your orders during the fulfillment process. In that page, you will see two tabs: 

* [Picking and Packing](#insights-picking-and-packing)
* [Operation](#insights-operation)

>⚠️ To be able to access **Insights**, you need to have a VTEX Fulfillment Admin user profile, that is different from [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). For more information, see the [Users](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#users) section.

### Insights: Picking and Packing

**Total orders** is a real time chart where you see information about all orders during a period in comparison to another. You can use multiple [filters](#insights-filters) to get different results.

#### Insights: Filters

You can combine multiple filters to filter the information you want to see in the charts, by accessing `Filters` on the top of the page. You can filter by the following criteria:

* Picker
* Delivery method
* Carrier
* City
* Seller

>ℹ️ The filter **Seller** is visible only for the account that operates as a marketplace. [White label sellers](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) do not have that filter option in **Insights**.

Besides the **Total orders** chart, there is a sequence of charts where you obtain data about _Payment methods_ and orders that were:

* Picked
* Shipped
* Delivered
* Cancelled

You can apply multiple filters to get different results.

#### Insights: Performance of categories and products

Below **Total orders**, you will find a chart about the number of orders and units bought and to what category they belong to. You can choose to group by `Categories` or `Products`.

### Insights: Operation

In the tab **Operation**, you will see the Picking and Packing **Order flow**, a chart with the total amount of orders distributed per day in the last seven days. The darker the blue, the more orders, the lighter the blue, the less.

>ℹ️ The Picking and Packing **Order flow** chart is calculated taking into account all orders of the last 7 days, and distributes them in hours, going from 0 to 23. Even if you change the period to 15 days, for example, the chart will remain fixed considering 7 days.

Below the **Order flow**, there is another chart with orders data filtered by picker. You will see information about:

* Orders
* Products
* Rejected products
* Fulfillment rate
* Average time

The page also provides charts related to the following topics:

* **Picked orders:** number of orders picked in the selected period.
* **Fulfillment rate:** percentage of orders picked within the minimum delivery due date. 
* **Time:** average time of the picking process.
* **Rejection reasons:** explanation of why a product was rejected.
* **Replacement reasons:** explanation of why a product was replaced.
* **Price change reason:** explanation of why a product has a price change.

## Settings

In order to configure **VTEX Pick and Pack** for your store, in your Admin, go to **Apps > Fulfillment > Settings.** You will a page with the following tabs:

* [General](#general-settings)
* [Picking](#picking-settings)
* [Categories](#categories-settings)
* [Packages](#packages-settings)
* [Shipping](#shipping-settings)
* [Printing](#printing-settings)
* [Webhooks](#webhooks-settings)

>⚠️ To be able to access **Settings**, you need to be a [VTEX Fulfillment admin user](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#users) or a customer service user.

### General settings

In this tab, you can configure the store you are adding **VTEX Pick and Pack** to. You can choose a store by clicking on the pencil <i class="fas fa-pencil-alt"></i> at the top of the page and selecting the desired one.

To configure a store, follow the steps below:

1. Fill in the boxes next to the map with the information of the store’s address.
2. In **Contact information**, fill in with data about the person who is going to be contacted, if necessary.
3. In **Work Schedules**, set up the starting and ending hour of the days of the week when the store’s picking can be performed.
4. In **Units of measure**, select which unit is going to be the default to measure the length of items and packages, for example.
5. Click the `Save` button.

### Picking settings

In this tab, you can configure some of the main aspects and preferences of the picking process, for example, rejection reasons and [pickers](#users-and-license-manager-in-vtex-fulfillment).

To determine the picking settings, follow the steps below:

1. In **Picker Assignation**, select if the store will assign pickers manually (`manual`), by an [Admin User](#users-and-license-manager-in-vtex-fulfillment), or automatically (`automatic`), based on the pickers’ availability.
2. In **Packing Path**, select the moment you want the packing process to start, which can be:
    * After picking
    * After invoice
    * From invoice
3. In **Picking app**, enable the toggles <i class="fas fa-toggle-on"></i> related to the preferences of what pickers will be able to see and perform through the mobile application. It is not mandatory to enable them, and the options are the following:
    * Show customer information
    * Allow price change
    * Allow product replacement
    * Allow rejecting products
    * Limit collection item quantity
    * Allow mobile packing
4. In **Reasons**, under _Replacement reasons_, fill in the box with the name of the label that will identify a valid replacement reason and press `enter`. Repeat the process to add as many labels as you want.
5. Under _Changes price reasons_, fill in the box with the name of the label that will identify the reason for price changes and press `enter`. Repeat the process to add as many labels as you want.
6. Fill in the box under _Limits for changes_ with the number of how many changes can be performed per order.
7. In **Priority order**, choose the level of priority in the category tree level to sort items in the picking process. You can choose between `1` (main categories), or `2` (children categories).
8. Click the `Save` button.

### Categories settings

In this tab, you will find categories and subcategories that should be listed according to the store’s business model priorities.

The actions you can do are the following:

* **Change priority:** Click the category and drag it to the position you want. 
* **Delete category:** Click the trash icon <i class="far fa-trash-alt"></i> and click `Yes, delete`. This action will make the category disappear from the list and appear on the side, under _Collection / Category priority_.
* **Add category:** If one category was deleted, it will appear under _Collection / Category priority_, and you can add them to the list by clicking on it.

After changing the priorities list, you need to click `Save`.

### Packages settings

In this tab, you can control the packages used to deliver the order and can create or delete a package.

To create a package, do the following:

1. Click `Add new`.
2. Fill in the name that will identify the package.
3. Fill in with the package’s measures: height, width and length, using numbers only. 

  >ℹ️ The measurement unit is the one configured in the tab General, in **Units of measure**.

4. Click `Add`.

To delete a package, click on the row that corresponds to it and then click `Yes, delete`.

### Shipping settings

In this tab, you can associate a [Last Mile](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-last-mile--HN7WKV0xoq2ssVjsJlfzr) service to your store, which allows you to have status and location tracking with real-time updates, while your in-house courier’s fleet delivers orders to customers.

If the **Last Mile** toggle <i class="fas fa-toggle-off"></i>is disabled, there are no setting options. To start using **Last Mile**, do the following:

1. Enable the toggle by clicking on it <i class="fas fa-toggle-on"></i>.
2. In **Associated carrier**, select the name of the carrier.
3. If you do not want to enable automatic courier assignment when creating shipping services, leave the toggle disabled <i class="fas fa-toggle-off"></i> and click `Save`.
4. If you want to enable automatic courier assignment, enable the toggle <i class="fas fa-toggle-on"></i> `Automatic courier assignment`.
5. In _Type of assignment_, select the assignment rule for choosing carriers, which can be:
    * **One at a time:** The task notification is sent to the courier that is closest to the collecting point. If the first courier does not accept the task within the request expiration time, the task is sent to the second nearest courier and so on. If no courier accepts the task, it remains unassigned.
    * **Send to all:** All the couriers available in the task time zone receive the notification, limited to a maximum of 500 couriers. The task is assigned to the first courier that accepts it, and it stays unassigned until someone accepts it.
    * **Round robin:** Within a certain radius, a round robin — an algorithm for scheduling and assigning resources — is assigned to the courier, and you can select the following options:
        * Assign services to disconnected users
        * Restart assignment if the service is rejected
        * Prioritize couriers without services
        * Prioritize couriers with shorter delivery time
    * **The nearest one:** The task assignment is given to the available courier that is closest to the point where the order will be collected.
6. Fill in the field _Expires in (seconds)_ with x, using numbers only. 
7. Fill in the field _Number of reattempts_ with x, using numbers only. 
8. Click `Save`.

### Printing settings

In this tab, you can configure [printing](#print-receipt) preferences, organized in the following sections:

* **Receipt:** Order’s receipt.
* **Package label:** Label to identify a package, with bar codes for scanning.
* **Shipping label:** Label with the shipping address.

In each one of those sections, you have to enable the toggle <i class="fas fa-toggle-on"></i> for the configuration to be valid. 

Once you are done with the printing settings, click `Save`.

### Webhook settings

In this tab, you can configure a webhook to be notified about orders’ status changes and to get information about a given order. 

>ℹ️ For more information, see our VTEX [Pick and Pack documentation](https://developers.vtex.com/docs/guides/vtex-pick-and-pack-get-order-status-and-information-api) for developers.

## Users

In **VTEX Pick and Pack**, the **Users** page allows you to manage the profiles involved in the fulfillment process, called _users_. There are three types of users:

| **User** | **Description** | **Permission** |
| ---------- | ---------- | ---------- |
| Picker | Person responsible for the picking. | <ul><li>Access the app, whether in mobile or web version (does not work offline).</li><li>Do not have access to the Admin.</li></ul> |
| Customer Service | The store’s operator responsible for the order, the customer support with access to the Admin. | <ul><li>Access all orders in Admin.</li><li>Track orders.</li><li>Communicate with pickers.</li></ul> |
| Admin | The admin role has access to check pickers, manage all settings, and order flow, including canceling orders if necessary. | All the permissions given to <i>Customer Service user</i>, plus: <ul><li>Manage all settings.</li><li>Manage order flow, including canceling orders.</li></ul> |

### Users and License Manager in VTEX Fulfillment

The **VTEX Pick and Pack** concept of _user_ is different from the common meaning of the term in VTEX. In **VTEX Fulfillment**, there are three types of users that participate in the fulfillment process - picker, customer service and admin. Usually, in VTEX, users are related to [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) and [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

To access the **VTEX Fulfillment**, the admin and customer service users must have permissions related to License Manager resources. We recommend [creating a role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) identified as “_Fulfillment admin_”, which must have at least the following products and resources associated with it:

| **Product** | **Associated Resources** |
| ---------- | ---------- |
| Insights | <ul><li>Insights metrics</li></ul> |
| License Manager | <ul><li>Get account by identifier</li><li>Get applications</li><li>Find user by email</li><li>View users with account access</li><li>View all admin users</li><li>Get resource by key</li><li>Get role Get paged roles</li><li>Get paged users</li><li>Get admin status</li><li>Get accounts</li><li>Get accounts by host</li></ul> |

### Actions in the Users page

In the page **Users**, you can perform the following actions:

* [Add a picker user](#add-a-picker-user)
* [Add a customer service user](#add-a-customer-service-user)
* [Add an admin user](#add-an-admin-user)
* [Edit users](#edit-users)
* [Generate Api-Key](#generate-api-key)
* [Delete](#delete)

#### Add a picker user

To create a new _picker_, follow the steps below:

1. In your Admin, go to **Apps > Fulfillment > Users**.
2. On the top menu <i class="fas fa-ellipsis-v"></i>, click `Add picker`.
3. Fill in the following information:
    * **Name:** Picker’s complete name.
    * **Email:** Picker’s email.
    * **User:** Username that will identify the picker.
    * **Password:** The password the picker will need to identify and authenticate himself in the app. The password must have at least:
        * One uppercase letter
        * One lowercase letter
        * One number
    * **Stores:** Select the environment the picker will be associated with. Each environment can have multiple [white label sellers](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) associated with it.
    * **Categories:** Select up to four categories related to the products the picker will collect.

  >ℹ️ The categories related to the picker optimize the algorithm when determining which picker will get the order. However, it is not a limitation, any picker can be assigned to tasks from all categories.

4. Click `Save user`.

#### Add a Customer Service user

Only [admin users](#users-and-license-manager-in-vtex-fulfillment) can create new _customer service users_. To do so, follow the steps below:

1. In your VTEX Admin, go to **Apps > Fulfillment > Users**.
2. On the top menu <i class="fas fa-ellipsis-v"></i>, click `Add customer service user`.
3. In the box, search by typing the user’s name, email or Id.
4. Click `Confirm`.

#### Add an Admin user

Only an [admin user](#users-and-license-manager-in-vtex-fulfillment) can create another _admin user_. To do so, follow the steps below:

1. In your VTEX Admin, go to **Apps > Fulfillment > Users**.
2. On the top menu <i class="fas fa-ellipsis-v"></i>, click `Add admin`.
3. In the box, search by typing the user’s name, email or Id.
4. Click `Confirm`.

#### Edit users

You can edit any kind of user to change the information listed below:

* Name
* Password
* Categories
* Store

To edit a user, follow these steps:

1. In your VTEX Admin, go to **Apps > Fulfillment > Users**.
2. On the row that corresponds to the user you want to edit, click on the menu <i class="fas fa-ellipsis-v"></i>.
3. Select the option `Edit`.
4. Change the fields you want.
5. Insert the password.
6. Click `Save`.

#### Generate Api-Key

[Admin users](#users-and-license-manager-in-vtex-fulfillment) can generate Api-Keys to use VTEX Pick and Pack APIs. For more information, see our [documentation for developers](https://developers.vtex.com/docs/guides/vtex-pick-and-pack-get-order-status-and-information-api#webhook).

To generate an Api-Key, follow the steps below:

1. In your VTEX Admin, go to **Apps > Fulfillment > Users**.
2. On the row that corresponds to an admin user, click the menu <i class="fas fa-ellipsis-v"></i>.
3. Select the option `Edit`.
4. Click `Generate`.
5. Save the Api-Key in a safe place.

  >❗ You only see the Api-Key once, you will not be able to access this information again, so make sure it is in a safe place.

6. Enter the password.
7. Click `Save`.

#### Delete users

Only admin users can delete other users, by following the steps below:

1. In your VTEX Admin, go to **Apps > Fulfillment > Users**.
2. On the row that corresponds to the user you want to edit, click on the menu <i class="fas fa-ellipsis-v"></i>.
3. Select the option `Delete`.
4. Click `Save`.
