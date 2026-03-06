---
title: 'Inventory Data Pipeline'
id: 2IvKMZV9SNrE6ipBRQr8h2
status: PUBLISHED
createdAt: 2024-02-02T17:41:24.979Z
updatedAt: 2025-04-15T14:02:23.916Z
publishedAt: 2025-04-15T14:02:23.916Z
firstPublishedAt: 2024-05-27T19:26:59.588Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: inventory-data-pipeline-beta
legacySlug: inventory
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The inventory dataset is composed of two tables: `item_inventory` and `warehouses_latest`. Together, they provide information about item availability, reservations, stock configuration, account metadata, and warehouse attributes.  

This section includes the following information:  

- [Inventory data characteristics](#data-characteristics)
- [Table: item_inventory](#table-item_inventory)
- [Table: warehouses_latest](#table-warehouses_latest)
- [Analyses with inventory data](#analyses-with-inventory-data)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

| **Characteristic** | **Description** |
|:---:|:---:|
| **Data source** | Obtained from information in the logistics module. |
| **Availability** | VTEX Admin. |
| **History** | We have made historical data available since June 2022. For customers who already use the VTEX platform, data is retained for two years starting in 2024. |
| **Minimum update interval** | One hour. |

## Table: item_inventory

The table fields are described below:

| **Column Name**| **Column Type**| **Description**|
|--------|------------|---------------|
| main_account | character varying(200) | Name of the merchant's main account. Identifies the top-level VTEX account that the store/entity belongs to. |
| account_name | character varying(200) | Name of the account to which the inventory belongs. Together with `warehouse_id` and `item_id`, it uniquely identifies an inventory record. |
| warehouse_id | character varying(400) | ID of the warehouse where the stock is located. |
| item_id | character varying(300) | Identifies the item whose stock is being quantified (SKU ID). Part of the natural key for the inventory record. |
| is_unlimited_quantity | boolean | Indicates whether the item can have infinite stock (`true`) or not (`false`). |
| quantity | bigint | Total quantity of items in stock for the item in the warehouse (physical quantity). |
| reserved_quantity | bigint | Number of active reservations for the item. |
| last_update | timestamp without time zone | The last time this specific item stock was updated. |
| parent_account_name | character varying(200) | Name of the parent account. It is the topmost account in the hierarchy; it falls back to `main_account` when parent data is unavailable. |
| batch_id | character varying(13) | Identifies the last ingestion batch that updated this row. Used for traceability and data quality. |
| record_created_at | timestamp without time zone | Timestamp when the record was first inserted in the Lake House. |
| record_updated_at | timestamp without time zone | Timestamp when the record was last updated in the Lake House. |

## Table: warehouses_latest

The table fields are described below:

| **Column Name**| **Column Type**| **Description**|
|--------|------------|---------------|
| warehouse_id | character varying(100) | Identifier for the warehouse. |
| warehouse_name | character varying(200) | Warehouse name as defined in Admin. |
| account_id | character varying(38) | Identifier for the account. |
| account_name | character varying(100) | Account name. |
| is_active | boolean | Indicates whether the warehouse is active. |
| warehouse_docks | super | Docks linked to the warehouse. |
| pickup_point_ids | super | Pickup points linked to the warehouse. |
| priority | integer | Tiebreaker criterion used when warehouses have the same route score. |
| is_deleted | boolean | Indicates whether the warehouse was deleted. |
| record_created_at | timestamp without time zone | Internal log of when the warehouse entity was first created. |
| record_updated_at | timestamp without time zone | Internal log of when the warehouse entity was last updated. |
| parent_account_name | character varying(50) | Name of the parent account. It is the topmost account in the hierarchy; it falls back to `main_account` when parent data is unavailable. |

## Analyses with inventory data

Some of the analyses that can be run using inventory data are listed below:

- **Inventory level analysis:** Assess whether the inventory meets demand and identify items at risk of running out of stock.
- **Inventory reservation trends:** Analyze the number of items that have been reserved over time to identify patterns and adjust inventory management strategies.
- **Inventory distribution analysis by account:** Optimize inventory management across multiple accounts and understand how inventory is distributed.

## Correlations with other data

Inventory data correlates with order and product sets, and provides a more comprehensive analysis for purchases, sales, and marketing. Some examples are: 

- **Interaction with order data:** Joint analysis with order data offers insights about how efficiently is customer demand being met and helps forecast restocking needs.
- **Relationship with SKUs:** Integration with SKU data helps manage inventory based on product popularity and availability.
- **Purchase and supplier data:** Coordination with purchase data allows you to maintain an ideal inventory balance, which avoids overstocking or shortages.
- **Sales and marketing analysis:** Understanding inventory directly impacts marketing and sales strategies, which allows aligning promotions and campaigns with product availability.

### Discover other Datasets

- [Navigation](/en/docs/tutorials/navigation-data-pipeline)   
- [Payments](/en/docs/tutorials/payments)  
- [Orders](/en/docs/tutorials/orders-data-pipeline-beta) 
- [Prices](/en/docs/tutorials/prices-data-pipeline-beta)
- [Promotions](/en/docs/tutorials/promotions)
- [Gift cards](/en/docs/tutorials/gift-card-data-pipeline)
- [Bridge logs](/en/docs/tutorials/bridge-logs-data-pipeline)
