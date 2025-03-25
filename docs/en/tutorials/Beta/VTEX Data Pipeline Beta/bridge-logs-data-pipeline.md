---
title: 'Bridge Logs Data Pipeline'
id: 2RFVJZL19nsWBSB4IXA0Z
status: PUBLISHED
createdAt: 2024-09-13T16:45:05.348Z
updatedAt: 2024-09-13T17:38:17.507Z
publishedAt: 2024-09-13T17:38:17.507Z
firstPublishedAt: 2024-09-13T17:17:56.608Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: bridge-logs-data-pipeline
locale: en
legacySlug: bridge-logs-data-pipeline
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The `bridge` dataset includes historical information on Bridge logs. 

>⚠️ Currently, the dataset only provides tracking and canceled order log information.

This section includes the following information:

- [Bridge data characteristics](#data-characteristics)
- [Table: order_status_change](#table-order-status-change)
- [Analyses with bridge data](#analyses-with-bridge)
- [Correlations with other data](#correlations-with-other-data)

#### Data characteristics

| **Characteristic** | **Description** |
|:---:|:---:|
| Data source | Obtained from information in the Bridge module. |
| Availability | VTEX Admin. |
| History | Data is maintained for two years, starting in 2024 for customers already using the VTEX platform. |
| Minimum update interval | One hour. |

#### Table: `order_status_change`

The table fields are described below:

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| main_account | character varying(100)	 | The VTEX main account associated with this account. |
| account_name | character varying(100) | Name of the store or child account responsible for the order. |
| marketplace | character varying(50) | The name of the marketplace from where this order originated. |
| bridge_order_id | character varying(300) | Order Identifier sent by the marketplace. |
| vtex_order_id | character varying(300) | The ID of the order on VTEX's OMS. This is usually the marketplace order ID with an affiliated ID prefix. |
| marketplace_order_id | character varying(300) | The ID of the order on the external marketplace. |
| bridge_log_type | character varying(25) | Indicates whether the update is from an order event (order input or approval) or tracking event (invoice, delivery status). |
| bridge_log_status | character varying(25) | Indicates the status of the log entry. The possible statuses are success, warning or error. |
| bridge_log_message | character varying(65535) | The message visible to the merchant in the bridge. |
| update_timestamp | timestamp without time zone | The time when the integration processed the update. |
| batch_id | character(13) | The ID of each batch of data. Keep in mind that this table has updates in its rows, which causes their batch_id to be bumped at the time of the update. |

#### Analyses with Bridge

Here are some of the analyses you can perform using the Bridge table:

- **Analysis of Marketplace Orders:** Understand the logs associated with your orders from external marketplaces.  
- **Insight into External Marketplace Logs:** Conduct batch analyses on messages from external marketplaces related to order tracking and cancellations.  

#### Correlations with other data

Bridge data closely ties with order data, providing a comprehensive analysis of purchases and sales. Here are an  examples:

- **Comprehensive analysis of orders made through external marketplaces:** Integrating this data model with the orders data provides a complete view of orders sold via Marketplace Out scenarios. Use the order_id to join both tables.

### Discover other Datasets

- [Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navigation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)
- [Payments](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)
- [Orders](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)
- [Promotions](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Gift cards](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
