---
title: 'Marketplace in Data Pipeline'
id: 4L3hlSqsnxGqVyxmoYvjTV
status: PUBLISHED
createdAt: 2024-11-22T18:54:14.211Z
updatedAt: 2025-02-11T12:01:02.324Z
publishedAt: 2025-03-07T11:30:02.324Z
firstPublishedAt: 2024-11-22T20:13:33.475Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: marketplace-in-data-pipeline
legacySlug: marketplace-in-data-pipeline
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The `marketplace_in` dataset contains historical information regarding every seller of a marketplace, and its most important information, such as orders and inventory.  
Only the `sellers_latest` table includes all sellers (External Sellers, Seller Portal, and VTEX Sellers). The other tables only include data for Seller Portal sellers.  

This section includes the following information:  

- [Marketplace in data characteristics](#data-characteristics)  
- [Table: sellers_latest](#table-sellers-latest)  
- [Table: sellers_inventory](#table-sellers-inventory)
- [Table: sellers_pricing](#table-sellers-pricing)  
- [Table: sellers_promotions](#table-sellers-promotions)  
- [Table: sellers_orders](#table-sellers-orders)  
- [Table: sellers_orders_items](#table-sellers-orders-items)  
- [Table: sellers_orders_rateandbenefitsidentifiers](#table-sellers-orders-rateandbenefitsidentifiers)  
- [Analyses with Marketplace in](#analyses-with-marketplace-in)  
- [Correlations with other data](#correlations-with-other-data)  

## Data characteristics

| **Characteristic** | **Description** |
|:-----:|:---:|
| Data source | Obtained from the marketplace module. |
| Availability| VTEX Admin.|
| History| The data history starts in September 2024. The data is retained for two years starting in 2024. |
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
| integration_type | character varying(25) | Integrations are classified as: VTEX Seller: The seller is another VTEX account. VTEX Seller Portal: The seller uses the VTEX Seller Portal. External Seller: The seller uses an external connection not related to VTEX. Not Configured: The seller has not configured integration yet.|
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
| sales_channel | character varying(16383) | Sales channel where the order was placed (online store, physical store, etc.).|
| marketplace_name | character varying(16383) | Name of the marketplace associated with the order.|
| creation_date | timestamp with time zone | Date and time when the order was created, including time zone.|
| authorized_date | timestamp with time zone | Date and time when the order was authorized.|
| invoiced_date | timestamp with time zone | Date and time when the order invoice was issued.|
| last_change | timestamp with time zone | Date and time of the last order update.|
| shippingdata_address_city | character varying(65535) | Order shipping city.|
| shippingdata_address_state | character varying(65535) | Order shipping state.|
| shippingdata_address_country | character varying(65535) | Order shipping country.|

## Table: sellers_orders_items

The *sellers_orders_items* table stores details of items in orders placed by VTEX Seller Portal sellers. The table fields are described below:

|**Column name** | **Column type** | **Column description**|
|:---:|:---:|:---:|
|item_id | character varying(65535) | Unique item identifier within the order. It can be associated with the sellers_inventory table for additional details.|
|product_id | character varying(65535) | Identifier of the product associated with the item.|
|order_id | character varying(16383) | Unique order identifier. It can be associated with the order tables for additional details.|
|seller_id | character varying | Seller identifier in `sellers_latest`.|
|main_account | character varying | Main account associated with the seller.|
|hostname | character varying(16383) | Host name associated with the order, indicating the server or domain managing the order.|
|marketplace_name | character varying(16383) | Marketplace name where the order was placed.|
|seller_integration_type | character varying | Seller integration type. In this table, it is always 'VTEX Seller Portal'.|
|seller_is_active | boolean | Indicates whether the seller is currently active.|
|status | character varying(16383) | Current order status.|
|tax | double precision | Tax value applied to the item (converted from cents to currency units).|
|quantity | integer | Quantity of the product in the order.|
|seller | character varying(65535) | Identifier or name of the seller for the product as recorded in the order.|
|sellersku | character varying(65535) | Product SKU as listed by the seller.|
|pricevaliduntil | timestamp with time zone | Date and time until the product price is valid.|
|name | character varying(65535) | Product name.|
|additionalinfo_brandname | character varying(65535) | Product brand.|
|additionalinfo_brandid | character varying(65535) | Product brand identifier.|
|additionalinfo_categoriesid | character varying(65535) | Identifiers of categories associated with the product.|
|additionalinfo_dimension_cubicweight | double precision | Product cubic weight for shipping.|
|additionalinfo_dimension_height | double precision | Product height.|
|additionalinfo_dimension_length | double precision | Product length.|
|additionalinfo_dimension_weight | double precision | Product weight.|
|additionalinfo_dimension_width | double precision | Product width.|
|price | double precision | Product price (converted from cents to currency units).|
|pricetags | super | Price tags associated with the product, including discounts and offers.|
|sellingprice | double precision | Product selling price (converted from cents to currency units).|
|listprice | double precision | Product list price (converted from cents to currency units).|
|imageurl | character varying(65535) | Product image URL.|
|measurementunit | character varying(65535) | Product measurement unit.|
|unitmultiplier | double precision | Product unit multiplier used in price and quantity calculations.|
|creationdate | timestamp with time zone | Date and time when the order was created, including time zone.|
|lastchange | timestamp with time zone | Date and time of the last order update.|
|batch_id | character varying(13) | Identifier used when data is loaded for ingestion quality control.|
|uniqueid | character varying(65535) | Unique item identifier that can be used to relate this row to other tables.|

## Table: sellers_orders_rateandbenefitsidentifiers

The *sellers_orders_rateandbenefitsidentifiers* table contains data about promotions applied to seller orders. The table fields are described below:

|**Column name** | **Column type** | **Column description**|
|:---:|:---:|:---:|
|orderid | character varying(16383) | Unique identifier of each order.|
|hostname | character varying(16383) | Host name associated with the order, indicating the server or domain managing the order.|
|marketplace_name | character varying(16383) | Marketplace name associated with the order.|
|creationdate | timestamp with time zone | Date and time when the order was created, including time zone.|
|lastchange | timestamp with time zone | Date and time of the last order update, reflecting the most recent status or content.|
|status | character varying(16383) | Current order status.|
|rateandbenefitsidentifiers_id | character varying(65535) | Unique identifier of the rate and benefits identifiers associated with the order.|
|rateandbenefitsidentifiers_name | character varying(65535) | Name of the rate and benefits identifiers, identifying the promotion or surcharge.|
|rateandbenefitsidentifiers_featured | boolean | Indicates whether the rate and benefits identifiers are featured or have any special attribute.|
|rateandbenefitsidentifiers_description | character varying(65535) | Detailed description of the rate and benefits identifiers and their benefits.|
|batch_id | character varying(13) | Identifier used when data is loaded into the table for ingestion quality control.|

## Analyses with Marketplace in

Some of the analyses that can be run using the pricing table are mentioned below:

- __Current list of sellers:__ Evaluate currently active sellers or determine how many are connected but not yet active.  
- __Top-performing sellers:__ Analyze the sellers with the highest number of orders and their respective Gross Merchandise Value (GMV).  
- __Seller inventory:__ Review the inventory of each active seller.  

## Correlations with other data

Marketplace in data is closely tied to order data, providing a deeper analysis of purchases and sales. An example is analyzing order data together with this table offers even more valuable insights into the details of orders placed by each seller.  

### Discover other Datasets

- [Catalog](/en/docs/tutorials/catalog-data-pipeline)
- [Inventory](/en/docs/tutorials/inventory-data-pipeline-beta)  
- [Navigation](/en/docs/tutorials/navigation-data-pipeline)  
- [Payments](/en/docs/tutorials/payments)  
- [Orders](/en/docs/tutorials/orders-data-pipeline-beta)  
- [Prices](/en/docs/tutorials/prices-data-pipeline-beta)  
- [Promotions](/en/docs/tutorials/promotions)  
- [Gift Cards](/en/docs/tutorials/gift-card-data-pipeline)  
- [Bridge Logs](/en/docs/tutorials/bridge-logs-data-pipeline)