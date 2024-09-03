---
title: 'Inventory Data Pipeline '
id: 2IvKMZV9SNrE6ipBRQr8h2
status: PUBLISHED
createdAt: 2024-02-02T17:41:24.979Z
updatedAt: 2024-09-02T19:28:13.286Z
publishedAt: 2024-09-02T19:28:13.286Z
firstPublishedAt: 2024-05-27T19:26:59.588Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: inventory-data-pipeline-beta
locale: en
legacySlug: inventory
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The dataset of the `item_inventory` table provides information about the availability of items in the inventory, specifying the total quantity of available items, active reservations, unlimited inventory option, as well as SKU and inventory IDs. This table also records updates with timestamps and control IDs.  

This section includes the following information:  

- [Inventory data characteristics](#data-characteristics)
- [Table: item_update_latest](#table-item-update-latest)
- [Table: item_update_historical](#table-item-update-historical)
- [Analyses with item_inventory](#analyses-with-inventory)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

| **Characteristic** | **Description** |
|:---:|:---:|
| **Data source** | Obtained from information in the logistics module. |
| **Availability** | VTEX Admin. |
| **History** | The data is retained for two years, from 2024 for clients who already use the VTEX platform. |
| **Minimum update interval** | One hour. |

## Table: item_update_latest

The table fields are described below:

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| **batch_id** | character varying(13) | Identifier used when data is loaded into the table for quality control of data ingestion. |
| **last_date** | timestamp without time zone | Date and time of the last change to the inventory. |
| **item_availabilty_id** | character varying(65535) | SKU inventory schema's id. |
| **item_id** | character varying(65535)	 | Item’s identifier. |
| **main_account_name** | character varying(65535)	 | Name of the parent account associated with the item. |
| **account_name** | character varying(65535)	 | Name of the account related to the item. |
| **is_unlimited_quantity** | boolean | Boolean flag that indicates whether a sku is always available regardless of its quantity. |
| **quantity** | integer | SKU quantity on stock. |
| **reserved_quantity** | integer | Reserved SKU units. Orders for these reservations have not yet been approved for payment. |
| **reservation_id** | character varying(65535) | Identification of a reserve for that item. |

## Table: item_update_historical

The table fields are described below:

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| **batch_id** | character varying(13) | Identifier used when data is loaded into the table for quality control of data ingestion. |
| **created_at** | timestamp without time zone | Date and time of the change to the inventory. |
| **item_availabilty_id** | character varying(65535) | SKU inventory schema's id |
| **item_id** | character varying(65535)	 | Item’s identifier |
| **main_account_name** | character varying(65535)	 | Name of the parent account associated with the item. |
| **account_name** | character varying(65535)	 | Name of the account related to the item. |
| **author_id** | character varying(65535) | Author of the inventory change |
| **event_type** | character varying(65535) | Type of availability change (e.g. reservation-create, reservation-cancel, item-availability-update) |
| **metadata_created_at** | timestamp without time zone | Time an event was generated |
| **is_unlimited_quantity** | boolean | Boolean flag that indicates whether a sku is always available regardless of its quantity |
| **quantity** | integer | SKU quantity on stock |
| **reserved_quantity** | integer | Reserved SKU units. Orders for these reservations have not yet been approved for payment. |
| **reservation_id** | character varying(65535) | Identification of a reserve for that item |

## Analyses with inventory

Some of the analyses that can be run using the inventory table are mentioned below:

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

- [Navigation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Payments](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Orders](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Prices](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)
- [Promotions](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
