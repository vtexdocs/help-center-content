---
title: 'Promotions Data Pipeline '
id: 3WZ1syNucDFdvVhfKtA6Qd
status: PUBLISHED
createdAt: 2024-02-02T18:02:01.395Z
updatedAt: 2024-09-13T17:33:13.910Z
publishedAt: 2024-09-13T17:33:13.910Z
firstPublishedAt: 2024-05-27T19:26:59.739Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: promotions
locale: en
legacySlug: promotions
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The promotion dataset is composed of four tables: `promotion_archived`, `promotion_created`, `promotion_removed`, and `promotion_unarchived`. These four tables cover the entire lifecycle of promotional campaigns, from launch to archiving, reactivation, or removal, providing a complete view of the store's promotional strategies.

This section includes the following information:

- [Data characteristics](#data-characteristics)
- [Table: promotion_archived](#table-promotion-archived)
- [Table: promotion_created](#table-promotion-created)
- [Table: promotion_removed](#table-promotion-removed)
- [Table: promotion_unarchived](#table-promotion-unarchived)
- [Analyses with promotion data](#analyses-with-promotion-data)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

|**Characteristic**|**Description**|
| - | - |
|**Data source**|Obtained from the [Promotions module](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) in the VTEX Admin.|
|**Availability**|Promotion data can be accessed through the VTEX Admin and also via the [Promotions APIs](https://developers.vtex.com/docs/guides/promotions-overview).|
|**History**|The data is retained for two years, from 2024 for clients who already use the VTEX platform.|
|**Minimum update interval**|One hour.|

## Table: promotion_archived

The `promotion_archived` table contains all archived promotions. It includes details of promotions temporarily or permanently removed from active use, allowing a history and analysis of previous campaigns. The table fields are described below:

|**Column name**|**Column type**|**Column description**|
| - | - | - |
|version|character varying(16383)|Table data version, useful for version control and compatibility.|
|ingestion_time|timestamp without time zone|Date and time the data was added to the table.|
|payload|super|Dataset actually stored in the table, comprising various details.|
|batch_id|character varying(13)|Data batch identifier, used to track data ingestion and management.|

## Table: promotion_created

The `promotion_created` table contains information about newly created promotions. This table is very important for tracking new promotional campaign launches, offering insights into current marketing strategies and initiatives. The table fields are described below:

|**Column name**|**Column type**|**Column description**|
| - | - | - |
|version|character varying(16383)|Specifies the version of the table data.|
|ingestion_time|timestamp without time zone|The time the data was added to the table.|
|payload|super|Contains the dataset or information that are actually loaded to the table.|
|batch_id|character varying(13)|Unique identifier of the data batch, used to track and manage data ingestion.|

## Table: promotion_removed

The `promotion_removed` table contains promotions that have been deleted or deactivated, and allows analyzing promotions that have been discontinued and see the reasons behind their discontinuation. The table fields are described below:

|**Column name**|**Column type**|**Column description**|
| - | - | - |
|version|character varying(16383)|Data version.|
|ingestion_time|timestamp without time zone|Date and time of data ingestion.|
|payload|super|Content of the data that was added.|
|batch_id|character varying(13)|Control ID of the data batch.|

## Table: promotion_unarchived

The `promotion_unarchived` table contains promotions that have been reactivated or removed from the archive. It provides information about campaigns that have been reintroduced, which gives insights into strategies for reusing or revising previous promotions. The table fields are described below:

|**Column name**|**Column type**|**Column description**|
| - | - | - |
|version|character varying(16383)|Version of the table data.|
|ingestion_time|timestamp without time zone|Date and time the data was added to the table.|
|payload|super|Dataset actually stored in the table.|
|batch_id|character varying(13)|Identifier of the data batch added to the table.|

## Analyses with promotion data

The promotion dataset can be used for the following analyses:

- **Promotion lifecycle analysis:** Compare the frequency and duration of promotions to assess the longevity and success of campaigns.  
- **Promotion reactivation rate:** Analyze the number of promotions that are reactivated to determine the effectiveness of reusing or revising previous campaigns.  
- **Promotion removal trends:** Track the number and types of discontinued promotions to understand the removal reasons and adjust future strategies.  
- **Impact of new promotions:** Assess the immediate impact of new promotion launches by comparing them with changes in sales and traffic.  

## Correlations with other data

The promotion dataset has key relationships with other datasets, some of which are mentioned below:  

- **[Order](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) data:** Analyzing the influence of promotions on orders helps to understand their impact on sales.  
- **[Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2) data:** Correlating inventory data is important to guarantee the availability of promoted products.  
- **Marketing and advertising analyses:** Integrating this data allows measuring how effective promotions are in attracting traffic and engagement.  
- **Website [navigation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) data:** Analyzing the effect of promotions on navigation provides insights into customer behavior and the effectiveness of promotion display.  

### Discover other datasets

- [Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navigation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Orders](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Payments](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Prices](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz) 
- [Gift cards](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Bridge logs](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

