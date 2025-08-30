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

The dataset of the `item_inventory` table provides information about the availability of items in the inventory, specifying the total quantity of available items, active reservations, unlimited inventory option, as well as SKU and inventory IDs. This table also records updates with timestamps and control IDs.  

This section includes the following information:  

- [Inventory data characteristics](#data-characteristics)
- [Table: item_inventory](#table-item_inventory)
- [Analyses with item_inventory](#analyses-with-inventory)
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
|parent_account_name | character varying(200) | Name of the main account associated with the fundamental entity to which the inventory belongs.|
| main_account | character varying(200)| Name of the Merchant's main account in License Manager.|
| account_name| character varying(200)| Name of the account to whom the inventory belongs.|
| quantity| bigint| The total quantity of items available in stock.|
| reserved_quantity | bigint| Number of active reservations for an item. |
| is_unlimited_quantity | boolean| Indicates whether the item can have infinite stock (True/False).|
| batch_id| character(13)| Identifies the last ingestion batch that updated this row.|
| warehouse_id| character varying(400)| ID of the warehouse where the stock is located.|
| item_id| character varying(300)| Identifies the item whose stock is being quantified. |
| last_update | timestamp without time zone  | The last time this particular item stock was updated. |
| warehouse_status | varchar(8) | Display the current status of the warehouse where this inventory is stored. Accepted values are: active, inactive, or deleted. |

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
- [Gift cards](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Bridge logs](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
