---
title: 'Marketplace in Data Pipeline'
id: 4L3hlSqsnxGqVyxmoYvjTV
status: PUBLISHED
createdAt: 2024-11-22T18:54:14.211Z
updatedAt: 2025-03-07T11:30:02.324Z
publishedAt: 2025-03-07T11:30:02.324Z
firstPublishedAt: 2024-11-22T20:13:33.475Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: marketplace-in-data-pipeline
locale: en
legacySlug: marketplace-in-data-pipeline
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The `marketplace_in` dataset contains historical information regarding every seller of a marketplace, and its most important information, such as orders and inventory.  

This section includes the following information:  

- [Marketplace in data characteristics](#data-characteristics)  
- [Table: sellers_latest](#table-sellers-latest)  
- [Table: sellers_inventory](#table-sellers-inventory)
- [Table: sellers_pricing](#table-sellers-pricing)  
- [Table: sellers_orders](#table-sellers-orders)  
- [Analyses with Marketplace in](#analyses-with-marketplace-in)  
- [Correlations with other data](#correlations-with-other-data)  

## Data characteristics

| **Characteristic** | **Description** |
|:-----:|:---:|
| Data source | Obtained from the marketplace module. |
| Availability| VTEX Admin.|
| History| The data history starts in September 2024. For clients already using the VTEX platform, data is retained for two years starting in 2024. |
| Minimum update interval| One hour.|

## Table: sellers_latest

The table fields are described below:

| **Column name** | **Column type** | **Column description**|
|:----:|:---:|:----:|
| pk| bigint | Primary key that uniquely identifies each row. |
| main_account | character varying(100)| The name of the main account to whom the seller is associated.|
| seller_id | character varying(100) | The ID of the seller.|
| seller_name | character varying(200)| The name of the seller.|
| is_better_scope| boolean | Only relevant for whitelabel sellers. Defines whether a whitelabel seller is comprehensive (true) or not (false). A comprehensive seller is one that is not limited to a location, which means that if a store is accessed without defining a location, only comprehensive sellers will be considered. |
| is_active | boolean| Tells if the seller is active (true) or not (false).|
| allow_hybrid_payments| boolean | Indicates if customers can use gift cards from the seller to buy their products on the marketplace (true) or not (false). If true, it identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
| seller_type | character varying(25) | Determines whether the seller is default or whitelabel. |
| trust_policy| character varying(50)| Trust policy used by the seller. |
| sales_channels| character varying(65535)| The seller's sales channels.|
| integration| character varying(50)| The name of the integration used by the seller.|
| integration_type | character varying(25) | Integrations are classified as: VTEX Seller, VTEX Seller Portal, External Seller, Not Configured.|
| created_at | timestamp without time zone| The timestamp of the seller creation. |
| updated_at| timestamp without time zone | The timestamp of the last time the seller was updated.|
| batch_id| character(13)| The ID of the batch where this data arrived. Allows you to know when this data was delivered.|

## Table: sellers_inventory

The table fields are described below:

| **Column name** | **Column type**| **Column description**|
|:----:|:----:|:----:|
| main_account | character varying(100)| The name of the main account to whom the seller is associated.|
| seller_id | character varying(100)| The ID of the seller.|
| seller_is_active | boolean | Tells if the seller is active (true) or not (false).|
| warehouse_id | character varying(400)| The id of the warehouse |
| item_id| character varying(400)| Item’s identifier.|
| is_unlimited_quantity| boolean| Flag that indicates whether a sku is always available regardless of its quantity.|
| quantity| bigint| SKU quantity on stock.|
| reserved_quantity | bigint| Reserved SKU units. Orders for these reservations have not yet been approved for payment. |
| last_update| timestamp without time zone | The timestamp of the last time the inventory was updated. |
| batch_id | character(13)| The ID of the batch where this data arrived. Allows you to know when this data was delivered.|

## Table: sellers_pricing

The table fields are described below:

| **Column name** | **Column type**| **Column description**|
|:-----:|:-----:|:-----:|
| main_account| character varying(100)| The name of the main account to whom the seller is associated.|
| seller_id| character varying(100)| The ID of the seller.|
| seller_is_active | boolean| Tells if the seller is active (true) or not (false).|
| item_id | character varying(255)| Item’s identifier.|
| list_price| double precision| SKU’s list price.|
| cost_price| double precision| SKU’s cost price.|
| base_price| double precision| SKU’s base price.|
| fixed_price| super| SKU’s fixed price.|
| markup| double precision| SKU’s markup.|
| last_date| date| The timestamp of the last time the pricing was updated.|
| batch_id| character(13)| The ID of the batch where this data arrived. Allows you to know when this data was delivered.|

## Table: sellers_promotions

The table fields are described below:

| **Column name**| **Column type**| **Column description** |
|:-----:|:-----:|:-----:|
| main_account| character varying(100)| The name of the main account to whom the seller is associated.|
| seller_id| character varying(100) | The ID of the seller.|
| seller_is_active| boolean | Tells if the seller is active (true) or not (false).|
| id_calculator_configuration| character varying(256)| The id of the promotion.|
| begin_date_utc| timestamp without time zone | Start date of the given promotion. |
| end_date_utc| timestamp without time zone | End date of the given promotion.|
| last_modified| timestamp without time zone | The timestamp of the last time the promotion was updated.|
| is_active| boolean| True if the promotion is currently active.|
| is_archived | boolean| True if the promotion is currently archived.|
| is_featured | boolean| True if the promotion is currently featured.|
| offset| numeric(18,0) | The offset to be applied to the promotion's start and end dates.|
| cumulative| boolean| Determines if the promotion can stack with other promotions of the same discount type.|
| apply_to_all_shippings| boolean | Specifies whether the promotion applies to all shipping methods or only to the cheapest one.|
| total_value_mode| character varying(256)| Defines which items are considered for calculating the cart’s total value.|
| item_max_price| numeric(18,0)| The configuration of the maximum price for an item to activate the promotion. |
| item_min_price| numeric(18,0)| The configuration of the minimum price for an item to activate the promotion.|
| is_first_buy | boolean| Indicates if the promotion is valid only for the user's first purchase.|
| batch_id | character(13)| The ID of the batch where this data arrived. Allows you to know when this data was delivered.|

## Table: sellers_orders

The table fields are described below:

| **Column name**| **Column type**| **Column description**|
|:---:|:---:|:----:|
| main_account| character varying(100)| The name of the main account to whom the seller is associated.|
| seller_id| character varying(100)| The ID of the seller.|
| seller_is_active| boolean| Tells if the seller is active (true) or not (false).|
| hostname| character varying(16383) | Name of the host related to the order.|
| order_id | character varying(16383)| Unique identifier of the order.|
| seller_order_id| character varying(16383)| Unique identifier of the order, within a given seller.|
| order_group | character varying(16383)| Order group this order belongs to.|
| value | double precision | Total monetary value of the order. It may include taxes, discounts, and shipping costs.|
| is_completed | boolean| Specifies whether the order was completed.|
| status| character varying(16383)| Current status of the order, such as __pending, shipped,__ __or invoiced.__|
| order_date| timestamp without time zone | Date and time when the order was placed.|
| payment_method| character varying(100)| Payment method used to purchase the order.|
| shipping_cost| double precision| Cost of shipping for the order.|
| item_ids| character varying(1000)| List of items in the order.|
| batch_id| character(13)| The ID of the batch where this data arrived. Allows you to know when this data was delivered.|

## Analyses with Marketplace in

Some of the analyses that can be run using the pricing table are mentioned below:

- __Current list of sellers:__ Evaluate currently active sellers or determine how many are connected but not yet active.  
- __Top-performing sellers:__ Analyze the sellers with the highest number of orders and their respective Gross Merchandise Value (GMV).  
- __Seller inventory:__ Review the inventory of each active seller.  

## Correlations with other data

Marketplace in data is closely tied to order data, providing a deeper analysis of purchases and sales. An example is analyzing order data together with this table offers even more valuable insights into the details of orders placed by each seller.  

### Discover other Datasets

[Inventory](/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
[Navigation](/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)  
[Payments](/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
[Orders](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
[Prices](/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
[Promotions](/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  
[Gift Cards](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)  
[Bridge Logs](/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

