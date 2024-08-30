---
title: 'Payments Data Pipeline (Beta)'
id: 7LWkFaA1jPabzc5JAt1rGs
status: PUBLISHED
createdAt: 2024-02-02T17:53:35.949Z
updatedAt: 2024-06-21T16:28:44.958Z
publishedAt: 2024-06-21T16:28:44.958Z
firstPublishedAt: 2024-05-27T19:26:59.478Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: payments
locale: en
legacySlug: payments
subcategory: oMrzcOMVbBpH0reeMFHFg
---

The payment dataset is composed of two main tables: `payments_transitions` and `transaction_transitions`.

This section includes the following information:

- [Characteristics of payment data](#data-characteristics)
- [Table: payments_transitions](#table-payments_transitions)
- [Table: transaction_transitions](#table-transaction_transitions)
- [Analyses with payment data](#analyses-with-payment-data)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

|**Characteristic**|**Description**|
| - | - |
|**Data source**|The data in this set comes from the [VTEX Payments module](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB). It can be collected and organized to reflect the transactions and payments completed on the platform.|
|**Availability**|Navigation data can only be accessed through the VTEX Admin.|
|**History**|The data is retained for two years, from 2023 for clients who already use the VTEX platform. The data in the `transaction_interactions` table only has history since 07/05/24 (dd/mm/yy).|
|**Minimum update interval**|One hour.|

## Table: payments_transitions

The `payments_transitions` table stores detailed information about payments, including the provider and the payment method used in each transaction. The table fields are described below:

|**Column name**|**Field type**|**Description**|
| :-: | - | - |
|batch_id|character varying(13)|Control ID of the data ingestion batch.|
|event_date_ti me|timestamp with time zone|Date and time of transition, including time zone information.|
|account|character varying(128)|Account name, mapped to 'account_name' on VTEX License Manager.|
|account_id|character varying(36)|Account identifier, mapped to 'id' on VTEX License Manager after removing hyphens.|
|connector|character varying(1024)|Provider that processes the payment.|
|delta_value|double precision|Time in milliseconds spent in the 'from_transition' transition.|
|from_transiti on|character varying(64)|Payment status up to the date and time of the event.|
|to_transition|character varying(64)|New transaction status after the date and time of the event.|
|payment_id|character varying(32)|Unique payment identifier.|
|payment_sys tem|character varying(1024)|Payment type, such as credit card, debit card, etc.|
|transaction_i d|character varying(36)|Unique identifier of the transaction this payment belongs to.|
|tid|character varying(1024)|External code received from the operator, representing an identification number for an ecommerce transaction.|
|nsu|character varying(1024)|NSU (Número Sequencial Único) is a unique sequential number used in Brazil to identify a card sales transaction and is associated to each created invoice.|
|currency_cod e|character varying(1024)|Currency code that is represented using three capital letters.|
|value|integer|Payment amount multiplied by 100. For example, this amount will be 235 for a payment of $2.35.|

## Table: transaction_transitions

The `transaction_transitions` table stores the transactions from completed orders.
Each transaction has a set of payments and changes the status based on a predefined flow. 

The table fields are described below:

|**Column name**|**Field type**|**Description**|
| - | - | - |
|batch_id|character varying(13)|Control ID of the data ingestion batch.|
|event_date_tim e|timestamp with time zone|Date and time of transition, including time zone information.|
|account|character varying(128)|Maps to an 'account_name' on VTEX License Manager.|
|account_id|character varying(36)|Maps to an 'id' in the VTEX license management system after removing hyphens.|
|delta_value|double precision|Time in milliseconds spent in the 'from_transition' transition.|
|from_transition|character varying(64)|Transaction status up to the date and time of the event.|
|to_transition|character varying(64)|New transaction status after the date and time of the event.|
|transaction_id|character varying(36)|Unique identifier of the transaction.|

## Analyses with payment data

The payment dataset can be used for the following analyses:

- **Payment processor efficiency analysis:** Evaluate the performance of different payment providers by analyzing the average time spent on each transition to identify the most efficient and reliable ones.  
- **Monitoring payment status transitions:** Track changes in payment status over time to understand patterns and identify potential issues in the payment flow.  
- **Transaction volume analysis by account:** Determine the volume of transactions processed by each account to get insights about the demand for payment services on different accounts.  
- **Distribution of payment type:** Analyze the use distribution of different payment systems to assess customer preferences for different payment methods. 

## Correlations with other data

The payment data of the VTEX platform has correlations with other datasets which give more insight into the purchase cycle:  

- **Interaction with [order](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) data:** Analyzing payment data alongside orders offers insights into how payment methods influence order conversions and reveal trends in customer purchasing behavior.    
- **Financial and accounting analyses:** Integrating payment data with financial analyses contributes to more efficient cash flow management and enables more accurate financial forecasts, helping improve the company's financial health. 

### Discover other datasets

- [Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navigation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Orders](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Prices](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promotion](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  
