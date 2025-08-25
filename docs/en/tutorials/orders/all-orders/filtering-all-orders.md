---
title: 'Filtering orders on All Orders'
id: tutorials_192
status: PUBLISHED
createdAt: 2017-04-27T22:15:05.494Z
updatedAt: 2024-11-12T15:08:02.463Z
publishedAt: 2024-11-12T15:08:02.463Z
firstPublishedAt: 2017-04-27T23:00:47.449Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: filtering-all-orders
legacySlug: filtering-orders-in-oms, filtering-orders-on-the-oms
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

> ℹ️ You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

In the **Orders** module, the **All Orders** page allows you to access your store's orders, search and filter them, as shown in the image below:

![search_bar_EN](//images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/c5d9141fa1eb3389ff779b8f169d4d59/search_bar_EN.png)

This article explains how to use these resources, and it is divided into:

- [Search bar](#search-bar)
- [Filters](#filters)
- [Filter by Status](#filter-by-status)
- [Created](#created)

Besides searching for orders in **Orders > All Orders**, you can search for orders from any page in the VTEX Admin using the global search bar at the top bar. By default, the search is configured as `Pages`. To search for an order, click on the bar, select `Orders`, and use one of the following criteria:

- Order ID
- Customer name
- Customer email
- Customer document

> ℹ️ When applying multiple filters to different searches, the total number of orders viewed in the filtering window may differ from the total displayed on the **All Orders** page due to a platform limitation. However, that does not impact the validity of the results displayed after filtering.

## Search bar

To search using the search bar, type in the desired term and press the `enter` key. You can search by:

- Customer name
- Customer document
- Customer email
- Order ID
- Sequence

[Sequence](https://help.vtex.com/en/tutorial/cuidados-ao-definir-a-numeracao-de-pedido--VAKKptfcaOxFxM8gfPobu) is a six-digit string displayed in your VTEX Admin right after the order ID. For example, in order `1268540501456-01 (501456)`, the order ID is `1268540501456`, the `-01` indicates that a seller will handle fulfillment, and the sequence is `501456`. 

> ℹ️ In addition to the list above, it is possible to activate other search criteria, as you will see in the [Other](https://help.vtex.com/en/tutorial/filtrar-todos-pedidos--tutorials_192#filters-other) section.

By default, the **All orders** page has the orders created **Today** filter activated. To search by other dates, use the filters available under [Filters: Date](#filters-date) or [Created](#created).

You can [search on all orders](#search-on-all-orders) or [search by combining filters](#search-by-combining-filters). 

### Search on all orders

Searching on All orders returns all orders related to the criteria used, regardless of their creation date. You can, for example, view a customer's full purchase history using the customer's name, email, or document.

Enter the desired term in the search bar to search on All orders. This will make <i class="fas fa-toggle-on"></i> `Remove date limit` option visible. Then, activate it to search.

![search_bar_without_time_limit_EN](//images.ctfassets.net/alneenqid6w5/2ii9VFh5uRpG4Ad0nwIIN0/c861b2b825068d861850bce56660aa30/search_bar_without_time_limit_EN.png)

> ❗ The search on All orders cannot be combined with other filters. So, once you remove the date limit from the search, any active filters become inactive. If the search term is removed or the <i class="fas fa-toggle-off"></i> **Remove date limit** is disabled, the previously configured filters become active again.

### Search by combining filters

Searching by associated filters allows you to combine different filters, which are described in: 

- [Filters](#filters)
- [Filter by Status](#filter-by-status)
- [Created](#created)

## Filters

On the **Orders > All Orders** page, there is `Filters` option, as shown in the image below: 

![search_bar_EN](//images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/c5d9141fa1eb3389ff779b8f169d4d59/search_bar_EN.png)

When you click `Filters`, a modal is displayed with the following options:

- [Date](#filters-date)
- [Channel](#filters-channel)
- [Status](#filters-status)
- [Other](#filters-other)

Select the desired option and click 'Apply' to apply a filter to the search. To remove applied filters, click **Clear Filters > Apply**.

> ℹ️ By default, the <i class="fas fa-toggle-on"></i> **My time zone: GMT-3** option appears enabled for all filters. When disabled, the time zone reference changes to GMT-0 and, if re-enabled, becomes the time zone adopted by the user's browser.

If there is no match for the filter combination used in the search, the search won't provide any results.

Below, you will find a description of the filters available under `Filters`.

### Filters: Date

You can use the filters under **Date** to sort by dates and periods, such as when an order will be delivered or approved. When you click `Filters`, by default, **Date** is already available as the option. 

You can find the desired option using the search bar or by clicking the dropdown <i class="fas fa-angle-down"></i> next to the options below:

* **Shipping estimate:** The estimated order shipping period:
    * Next 7 days
    * Tomorrow
    * Today
    * Late
* **Invoiced date: **The date on which the order was invoiced:
    * Today
    * Yesterday
    * Last 7 days
    * Current month
    * Last 30 days
    * Custom
* **Order date:** The date the order was made:
    * Today
    * Yesterday
    * Last 7 days
    * Current month
    * Last 30 days
    * Custom
* **Authorized date:** The date on which the payment operator/gateway approved the order:
    * Today
    * Yesterday
    * Last 7 days
    * Current month
    * Last 30 days
    * Custom

After selecting the desired filters, click `Apply`.

### Filters: Channel

You can use the filters under **Channel** to sort by sales channels and other aspects of the order. Click `Filters` to use them and select **Channel**. Depending on your store settings, some options listed may not appear in your VTEX Admin.

You can find the desired filter option by using the search bar or by clicking the dropdown <i class="fas fa-angle-down"></i> next to the following options:

* **Seller:** Displays the [seller ID](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392) in your store and filters by the seller fulfilling the order. 
* **Trade policy:** Displays your store's [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) and filters by the one used in the order.
* **Campaign:** Displays your store's [campaign target audiences](https://help.vtex.com/en/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m) and filters by a promotion's target audience.
* **Call center operator:** Displays your store's [call center](https://help.vtex.com/en/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS) operators.
* **UTM source:** Displays [UTM source](https://help.vtex.com/en/tutorial/o-que-sao-utm-source-utm-campaign-e-utm-medium--2wTz7QJ8KUG6skGAoAQuii) options configured in your store. UTM (Urchin Tracking Modules) are URL parameters commonly used in marketing and promotional contexts to track traffic to a website.

After selecting the desired filters, click `Apply`.

### Filters: Status

You can use the filters under **Status** to sort by order status at the time of the search related to the [order flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196) or errors. Click `Filters` to use them and select **Status**. You can find the desired option using the search bar or by clicking the dropdown <i class="fas fa-angle-down"></i> next to the options below: 

* **Order status:** Order step in the [order flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196). The options that appear correspond to the status of orders in your store. For example, if there are no canceled orders among your orders, this option will not be visible. These are some examples of order status filters: 
    * Payment approved
    * Payment pending
    * Awaiting fulfillment
    * Ready for handling
    * Waiting for seller change
* **Completed status:** Whether an order has all the necessary information to be completed on the platform or if it is [incomplete](https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294):
    * Incomplete
* **Error status:** Displays the errors:
    * Permanent error
    * Temporary error
    * Any error

After selecting the desired filters, click `Apply`.

### Filters: Other

You can use the filters under **Other** for different topics, some of which will vary depending on your store settings. Therefore, some of the options listed below may not be available in your VTEX Admin. 

Click `Filters` to use these filters and select **Other**. You can find the option you want using the search bar or by clicking the dropdown <i class="fas fa-angle-down"></i> next to the following options:

* **Other fields:** Fields that can be used to filter results. After selecting the field, you need to type the value in the search bar <i class="fas fa-search"></i> `Search in Other`.
    * Order ID
    * SKU ID
    * Gift list ID
    * Transaction ID (TID)
    * PCI connector transaction ID (TID)
    * Payment ID (PID)
    * Connector NSU (Brazil)
* **Payment type:** Displays the [payment methods](https://help.vtex.com/en/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) configured in your store. 
* **Promotions:** Displays the promotions added to your store.
* **Currency:** Displays the currencies configured in the [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) and that have been used in orders. 
* **Hostname:** Displays your [account name](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC), which is your company ID in the VTEX system. 
* **B2B:** Select `true` to filter by orders from [B2B](https://help.vtex.com/en/tutorial/b2b-visao-geral--5vb9SNXhX2bZnkpAh7ADdC) stores or `false` for orders from other business models. 
* **inStore:** Select `true` to filter by orders made using [inStore](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) or `false` for non-inStore orders. 
* **Delivery channel:** Displays the type of order delivery, whether it will be delivered or picked up at a [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). The pickup option appears only for stores that have configured this feature.
* **Country:** Displays the country where the order was made.
* **Has return invoice:** Identifies whether the orders have a return invoice - `true` - or not - `false`.
* **Has invoice:** Identifies whether the orders are invoiced - `true` - or not - `false`.

## Filter by Status

On the **Orders > All Orders** page, there is the `Filter by Status` <i class="fas fa-angle-down"></i> option, as shown in the image below:

![search_bar_EN](//images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/c5d9141fa1eb3389ff779b8f169d4d59/search_bar_EN.png)

When clicking `Filter by Status` <i class="fas fa-angle-down"></i>, your store's [order status](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196) options are displayed. For example, if among all your orders, there are no canceled ones, this option will not be visible. 

> ℹ️ For more status filter options, go to the section [Filters: Status](https://help.vtex.com/en/tutorial/filtrar-todos-pedidos--tutorials_192#filters-status). If you want to check all existing order status, read the article [Order flow and status](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

## Created

On the **Orders > All Orders** page, there is the option `Created: Today` <i class="fas fa-angle-down"></i>, as shown in the image below:

![search_bar_EN](//images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/c5d9141fa1eb3389ff779b8f169d4d59/search_bar_EN.png)

This filter has the **Today** date enabled by default, but by clicking it, the following options are displayed:

* Today
* Yesterday
* Last 7 days
* Current month
* Last 30 days

> ℹ️ By default, the <i class="fas fa-toggle-on"></i> **My time zone: GMT-3** option is enabled. When disabled, the time zone reference changes to GMT-0 and, if re-enabled, becomes the time zone used in the user's browser.

For more date and period filter options, visit the [Filters: Date](#filters-date) section. 
