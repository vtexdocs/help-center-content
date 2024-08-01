---
title: 'Prices Data Pipeline (Beta)'
id: 3NMGJ8dtv73Bwvo9PSz1fz
status: PUBLISHED
createdAt: 2024-06-21T14:58:43.084Z
updatedAt: 2024-06-21T16:20:22.452Z
publishedAt: 2024-06-21T16:20:22.452Z
firstPublishedAt: 2024-06-21T15:27:43.768Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: prices-data-pipeline-beta
locale: en
legacySlug: prices-data-pipeline-beta
subcategory: oMrzcOMVbBpH0reeMFHFg
---

The price dataset contains historical price information for each SKU in a merchant's store, enabling analysis of markup values and monthly price trends.  

This article includes the following information:  

- [Data characteristics](#data-characteristics)
- [Table: pricing_latest](#table-pricing-latest)
- [Table: pricing_historical](#table-pricing-historical)
- [Analyses with price data](#analyses-with-price-data)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics  

| **Feature** | **Description** |
|:-----------:|:---------------:|
| Data source | Prices module.  |
| Availability| VTEX Admin and Pricing APIs. Keep in mind that the data available through the API may not be structured exactly the same way as it is in the Data Pipeline dataset. |
| History    | Data history starts in August 2023. For clients already using the VTEX platform, data is retained for two years from 2024. |
| Minimum update interval | One hour. | 

## Table: pricing_latest  

The `pricing_latest` table contains current price data for the store's products. The table includes the following fields:  

| **Column name**  | **Column type** | **Column description** |
|:------------:|:---------------:|:---------------:|
| account_name | character varying(255) | Name of the account associated with the item. |
| last_date   | date  | Date and time of the last price change. |
| sku_id   | character varying(255) | SKU identifier.  |
| batch_id | character varying(255) 	| Identifier used when data is loaded into the table for quality control of data ingestion. |
| listPrice   | double precision   | SKU list price. |
| costPrice   | double precision   | SKU cost price. |
| markup   | double precision   | SKU markup.   |
| basePrice  | double precision | SKU base price. |
| fixedPrices| super   | Fixed price.  |

## Table: pricing_historical

The `pricing_historical` table provides a historical record of your store's prices. The table fields are described below:  

| **Column name**  | **Column type** | **Column description** |
|:------------:|:----------:|:-------------:|
| account_name | character varying(255) | Name of the account associated with the item. |
| date   | date   | Date and time of the last price change. |
| sku_id | character varying(255) 	| SKU identifier. |
| author_id | character varying(255) 	| Identifier of the user who made the price change. |
| batch_id  | character varying(255) 	| Identifier used when data is loaded into the table for quality control of data ingestion. |
| id  | character varying(255) 	| Price change ID. |
| listPrice | double precision  | SKU list price. |
| costPrice | double precision | SKU cost price. |
| markup    | double precision  | SKU markup.   |
| basePrice | double precision  | SKU base price. |
| fixedPrices | super  | Fixed price.  |

## Analyses with price data    

Price data can be used in the following analyses:  

- __Current SKU price:__ Assess the current price for a particular SKU or for a product range.  
- __SKU price history:__ Explore the price history for a particular SKU or for a product range.  
- __SKU price per account:__ For stores with multiple VTEX accounts, this data helps to compare prices across different stores.  
## Correlations with other data  

The price dataset has correlations with the following sets of the VTEX data ecosystem:  

- **Interaction with order data:** Combining order data provides insights into sales trends related to a product price, allowing price elasticity analysis.  
- **Relationship with inventory:** Integrating with inventory data enables you to assess the total value of your assets accurately.  
- **Impact on conversion rates:** By examining navigation and conversion funnel data, you can understand the influence of price on conversion rates.  

### Discover other Datasets

- [Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Navigation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Payments](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Orders](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Promotions](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
