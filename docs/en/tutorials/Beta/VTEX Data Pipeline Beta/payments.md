---
title: 'Payments Data Pipeline '
id: 7LWkFaA1jPabzc5JAt1rGs
status: PUBLISHED
createdAt: 2024-02-02T17:53:35.949Z
updatedAt: 2025-04-15T14:55:06.016Z
publishedAt: 2025-04-15T14:55:06.016Z
firstPublishedAt: 2024-05-27T19:26:59.478Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: payments
locale: en
legacySlug: payments
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The payment dataset is composed of two main tables: `payments_transitions` and `transaction_transitions`.

This section includes the following information:

- [Characteristics of payment data](#data-characteristics)
- [Table: payments_transitions](#table-payments_transitions)
- [Table: transaction_transitions](#table-transaction_transitions)
- [Table: transactions_interactions](#table-transactions_interactions)
- [Table: authorizations_consolidated](#table-authorizations_consolidated)
- [Table: transaction_consolidation](#table_transaction_consolidation)
- [Analyses with payment data](#analyses-with-payment-data)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

|**Characteristic**|**Description**|
| - | - |
|**Data source**|The data in this set comes from the [VTEX Payments module](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB). It can be collected and organized to reflect the transactions and payments completed on the platform.|
|**Availability**|Navigation data can only be accessed through the VTEX Admin.|
|**History**|The data is retained for two years, from 2023 for clients who already use the VTEX platform. <p>The data in the `transaction_interactions` table only has history since May 2024 and the data in `authorizations_consolidated` only since June 2023.</p>|
|**Minimum update interval**|One hour.|

## Table: payments_transitions

The `payments_transitions` table stores detailed information about payments, including the provider and the payment method used in each transaction. The table fields are described below:

|**Column name**|**Field type**|**Column description**|
| :-: |:-: | - |
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

|**Column name**|**Column type**|**Column description**|
| :-:| :-: | - |
|batch_id|character varying(13)|Control ID of the data ingestion batch.|
|event_date_tim e|timestamp with time zone|Date and time of transition, including time zone information.|
|account|character varying(128)|Maps to an 'account_name' on VTEX License Manager.|
|account_id|character varying(36)|Maps to an 'id' in the VTEX license management system after removing hyphens.|
|delta_value|double precision|Time in milliseconds spent in the 'from_transition' transition.|
|from_transition|character varying(64)|Transaction status up to the date and time of the event.|
|to_transition|character varying(64)|New transaction status after the date and time of the event.|
|transaction_id|character varying(36)|Unique identifier of the transaction.|

## Table: transactions_interactions

This table tracks updates to transactions through some interactions. Below is a detailed description of each field:

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|---|
| key_id | character varying(35)	 | Interaction Id |
| key_transaction_id | character varying(35) | Transaction Id |
| payment_id | character varying(120) | Unique id for payment. Not Required. |
| source | character varying(120) | It indicates which code called the interaction update or what that interaction represents; possible values can be function name or business rules. It doesn't have a pattern. Required. |
| status | character varying(60) | Transaction status update. Required |
| date | timestamp without time zone	 | Date-time when transaction was happened. Required. |
| message | character varying(65535) | Detailed information about transaction update. Non structured field. Required. |
| ticks | character varying(60) | Payment tick id. Required. |
| batch_id | character varying(13) | Indicate datetime when job that ingested data happened. YYYY_MM_DD_hh. |
| account | character varying(60) | Account name where the given transaction has taken place. Required. |

## Table: authorizations_consolidated

This table consolidates details about payment authorizations, tracking key information about each transaction, including risk assessment, payment details, and ingestion control. Below is a description of each field:

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|---|
| account | character varying(63) | Account name where the given transaction has taken place (will always be the same as the merchant_name) |
| merchant_name | character varying(63) | Merchant name where the given transaction has taken place (will always be the same as the merchant_name) |
| transaction_start_date | timestamp with time zone | Date and time of authorization, including time zone information. |
| connector | character varying(80) | Name of the connector that took part of the given transaction. |
| payment_id | character varying(255) | Unique payment identifier. |
| payment_system | character varying(255) | Payment type, such as credit card, debit card, etc. |
| transaction_id | character varying(63) | Unique identifier of the transaction this payment belongs to. |
| currency | character varying(4) | Currency code that is represented using three capital letters. |
| payment_value | double precision | Payment amount multiplied by 100. For example, this amount will be 235 for a payment of $2.35. |
| authorized | boolean | Defined whether the transaction was authorized or not (true or false) |
| installments | integer | Number of installments of the given transaction |
| recipients_count | integer | Number of recipients of the given transaction |
| risk_level | character varying(100) | Risk level associated with that transaction |
| return_code | character varying(255) | Return code, sent by the payment provider (normally indicates why a transaction was rejected) |
| affiliation_id | character varying(37) | Unique identifier of the affiliation associated with this transaction. |
| antifraud_affiliation_id | character varying(37) | Unique identifier of the antifraud affiliation associated with this transaction. |
| ingestion_time | timestamp with time zone | Date and time when this row was included on the table |
| batch_id | character varying(13) | Control ID of the data ingestion batch. |

## Table: transaction_consolidation

This table contains payment transaction metadata, including detailed information about amounts, status, affiliates, payment connectors, fraud analysis, installments, and source data.  

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|---|
| id | character varying(65535)	 | Unique Transaction ID this Payment belongs to. |
| transaction_value | double precision	 | Payment value with the decimal format. |
| status_transaction | character varying(65535)	 | The last state of the Transaction |
| reference_key | character varying(65535)	 | Internal identifier used for reconciliation or as a transaction reference. The reference_key is a field sent by Checkout to the Payments when requesting the creation of a transaction. |
| merchant_name | character varying(65535)	 | Account name that includes: main account, sub accounts, child accounts, etc. |
| account_name | character varying(16383)	 | Account name that includes: main account, sub accounts, child accounts, etc. |
| main_account_name | character varying(16383)	 | Show the main account name. |
| is_active | boolean | Indicates whether the transaction is authorized or not. |
| is_operating | boolean | Indicates whether the account or connector is operational at the transaction moment. |
| recipients_count | integer | Number of splits, sellers receiving the payment in case of a split, and total merchants receiving the payment including the main account. |
| date | date | The last date of the transition. |
| account_verification_only | boolean | Indicates whether the transaction was performed solely to verify the account or payment method, without a real monetary value. |
| payment_id | character varying(65535)	 | Unique Payment ID. |
| value_payment | double precision | Monetary value of the first payment associated with the transaction. |
| status_payment | character varying(65535)	 | Final status of the first payment associated with the transaction (e.g., approved, canceled). |
| currency_code | character varying(65535)	 | Uppercase three-letters currency code. |
| connector_name | character varying(65535)	 | The connector is who processes the payment. |
| affiliation_id | character varying(65535)	 | The affiliation_id represents a payment connector instance linked to a specific account. When configuring a store with a payment connector (e.g., CIELO), it becomes an affiliation, meaning the connector is instantiated for that account. |
| affiliation_name | character varying(65535)	 | Descriptive name of the connector affiliation used for the first payment. |
| is_legacy_connector | boolean | Indicate if this connector is a legacy or not. |
| payment_system | integer | Payment code type i.e. 1, 2, 3, and etc. |
| installments | integer | Number of installments. |
| payment_system_name | character varying(65535)	 | Payment type i.e. credit cart, debit cart, etc. |
| return_code | character varying(65535) | Anything that the payment connector returns to us. |
| antifraud_affiliation_id | character varying(65535)	 | Unique identifier for the antifraud service instance associated with the first payment. |
| antifraud_affiliation_name | character varying(65535)	 | The antifraud_affiliation_id represents the instance of an anti-fraud service linked to a specific account. When configuring an anti-fraud provider (e.g., Sherlock) for a store, it becomes an affiliation, meaning the service is instantiated for that account. |
| antifraud_provider_name | character varying(65535)	 | Descriptive name of the antifraud service affiliation used in the first payment. |
| antifraud_analysis_result | character varying(65535)	 | The result of the antifraud analysis. |
| pan_type | character varying(65535)	 | Type of card used in the first payment (e.g., credit, debit, prepaid). |
| payment_origin | character varying(65535)	 | Origin or channel through which the first payment was made (e.g., physical store, website, app). |
| is_3ds_required | boolean | Indicates whether the first payment required 3D Secure protocol authentication. |
| payment_id_2 | character varying(65535)	 | Unique Payment ID, for the second payments, when applicable. |
| value_payment_2 | double precision | Monetary value of the second payment associated with the transaction (when applicable). |
| status_payment_2 | character varying(65535)	 | Final status of the second payment associated with the transaction (e.g., approved, canceled). |
| currency_code_2 | character varying(65535)	 | Uppercase three-letters currency code. |
| connector_name_2 | character varying(65535)	 | The connector is who processes the second payment, if exists. |
| affiliation_id_2 | character varying(65535)	 | The affiliation_id represents a payment connector used for the second payment instance linked to a specific account. When configuring a store with a payment connector (e.g., CIELO), it becomes an affiliation, meaning the connector is instantiated for that account. |
| affiliation_name_2 | character varying(65535)	 | Descriptive name of the connector affiliation used for the second payment (when applicable). |
| is_legacy_connector_2 | boolean | Indicate if this second connector used is a legacy or not. |
| installments_2 | integer | Number of installments of the second payment, when applicable. |
| payment_system_2 | integer | Numeric code of the payment method used in the second payment. |
| payment_system_name_2 | character varying(65535)	 | Name of the payment method used in the second payment (e.g., credit card, Pix). |
| return_code_2 | character varying(65535)	 | Return code provided by the connector regarding the second payment. |
| antifraud_affiliation_id_2 | character varying(65535)	 | Unique identifier for the antifraud service instance associated with the second payment. |
| antifraud_affiliation_name_2 | character varying(65535)	 | Descriptive name of the antifraud service affiliation used in the second payment (when applicable). |
| antifraud_provider_name_2 | character varying(65535)	 | Name of the antifraud service provider used for the second payment (when applicable). |
| antifraud_analysis_result_2 | character varying(65535)	 | Detailed result of the antifraud analysis for the second payment (e.g., approved, rejected, pending). |
| pan_type_2 | character varying(65535)	 | Type of card used in the first payment (e.g., credit, debit, prepaid). (when applicable) |
| payment_origin_2 | character varying(65535)	 | Origin or channel through which the second payment was made (e.g., physical store, website, app). |
| is_3ds_required_2 | boolean | Indicates whether the second payment required 3D Secure protocol authentication. |
| transaction_value_usd | double precision | This USD value is FX Neutral, meaning that is always considered the dollar of the day each payment was made. This conversion information is taken from the analytics_bi.currencies table, through the fromcurrency field. |
| value_payment_usd | double precision | This USD value is FX Neutral, meaning that is always considered the dollar of the day each payment was made. This conversion information is taken from the analytics_bi.currencies table, through the fromcurrency field. |
| value_payment_2_usd | double precision | This USD value is FX Neutral, meaning that is always considered the dollar of the day each payment was made. This conversion information is taken from the analytics_bi.currencies table, through the fromcurrency field. |
| batch_id | character varying(13) | Data ingestion batch control ID. |

## Analyses with payment data

The payment dataset can be used for the following analyses:

- **Payment processor efficiency analysis:** Evaluate the performance of different payment providers by analyzing the average time spent on each transition to identify the most efficient and reliable ones.  
- **Monitoring payment status transitions:** Track changes in payment status over time to understand patterns and identify potential issues in the payment flow.  
- **Transaction volume analysis by account:** Determine the volume of transactions processed by each account to get insights about the demand for payment services on different accounts.  
- **Distribution of payment type:** Analyze the use distribution of different payment systems to assess customer preferences for different payment methods. 

## Correlations with other data

The payment data of the VTEX platform has correlations with other datasets which give more insight into the purchase cycle:  

- **Interaction with [order](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) data:** Analyzing payment data alongside orders offers insights into how payment methods influence order conversions and reveal trends in customer purchasing behavior.    
- **Financial and accounting analyses:** Integrating payment data with financial analyses contributes to more efficient cash flow management and enables more accurate financial forecasts, helping improve the company's financial health. 

### Discover other datasets

- [Catalog](/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventory](/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navigation](/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Orders](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Prices](/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promotion](/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  
- [Gift cards](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Bridge logs](/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
