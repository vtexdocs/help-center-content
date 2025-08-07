---
title: 'Orders Data Pipeline '
id: 2f3GlRJ5L5IRGVIxOmzrFv
status: PUBLISHED
createdAt: 2024-02-02T17:58:53.962Z
updatedAt: 2025-07-31T21:50:11.564Z
publishedAt: 2025-07-31T21:50:11.564Z
firstPublishedAt: 2024-05-27T19:26:59.238Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: orders
legacySlug: orders
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The order dataset is composed of two main tables: `orders_historical` and `orders_latest`. These tables include several `SUPER` fields that encompass information such acquired items, shipping details, related sellers, payments, among others.

We have implemented special auxiliary tables, such as `orders_shipping` and `orders_items` to help manage this data, which can be a complex task due to the 1-to-N relationship between many of the `SUPER` fields and the orders and the amount of information they contain.

When running analyses, it's common to create direct selections in the `SUPER` fields to highlight specific parts for extraction. You can also join one of the main tables (`orders` or `latest`) to the auxiliary tables, using orderid as key.

This method allows you to efficiently extract specific information, enabling a detailed analysis of the orders and their related components.

This section includes the following information:

- [Characteristics of order data](#data-characteristics)
- [Table: orders_latest](#table-orders_latest)
- [Table: orders_historical](#table-orders_historical)
- [Table: orders_totals](#table-orders_totals)
- [Table: orders_shipping](#table-orders_shipping)
- [Table: orders_sellers](#table-orders_sellers)
- [Table: orders_rateandbenefitsidentifiers](#table-orders_rateandbenefitsidentifiers)
- [Table: orders_payments](#table-orders_payments)
- [Table: orders_packages](#table-orders_packages)
- [Table: orders_items](#table-orders_items)
- [Table: orders_extra_info](#table-orders-extra-info)
- [Table: orders_custom_fields](#table-orders-custom-fields)
- [Table: orders_custom_apps](#table-orders-custom-apps)
- [Analyses with order data](#analyses-with-order-data)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

|**Characteristic**|**Description**|
| - | - |
|**Data source**|The data of the order set come from the [OMS (Order Management System)](https://help.vtex.com/en/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201).|
|**Availability**|Order data can be accessed through the [Orders report](https://help.vtex.com/en/tutorial/exportacao-de-pedidos-no-modulo-pedidos--tutorials_6417) in the VTEX Admin and also through the[ Orders APIs](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders?endpoint=get-/api/oms/pvt/orders). Keep in mind that the data available through the API may not be structured exactly the same way as it is in the Data Pipeline dataset.|
|**History**|The data is retained for two years, from 2022 for clients who already use the VTEX platform.|
|**Minimum update interval**|One hour.|

## Table: `orders_latest`

The *latest* table stores the latest status of each order, including details such as update date, order ID, and customer information. The table fields are described below:

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier of the order.|
|hostname|character varying(16383)|Name of the host related to the order.|
|value|double precision|Total amount of the order.|
|totals|super|Summary of order totals, such as subtotal, taxes, discounts, etc.|
|creationdate|timestamp with time zone|Date and time the order was created.|
|items|super|Detailed information about the order items.|
|clientprofiledata_userprofileid|character varying(65535)|Profile ID of the user in the customer management system.|
|shippingdata_address_city|character varying(65535)|Shipping city of the order.|
|shippingdata_address_state|character varying(65535)|Shipping state of the order.|
|shippingdata_address_country|character varying(65535)|Shipping country of the order.|
|shippingdata_logisticsinfo|super|Logistical information about order shipment.|
|sellers|super|Information about the sellers associated with the order.|
|storepreferencesdata_countrycode|character varying(65535)|Country code of the store.|
|storepreferencesdata_timezone|character varying(65535)|Time zone of the store.|
|storepreferencesdata_currencycode|character varying(65535)|Code of the currency used in the store.|
|packages|super|Details about the packaging used for order items.|
|origin|character varying(16383)|Source of the order.|
|iscompleted|boolean|Specifies whether the order is completed.|
|affiliateid|character varying(16383)|Affiliate ID associated with the order.|
|status|character varying(16383)|Current status of the order.|
|authorizeddate|timestamp with time zone|Date and time of order authorization.|
|invoiceddate|timestamp with time zone|Date and time of issue of order invoice.|
|marketplaceorderid|character varying(16383)|Order ID in the marketplace.|
|marketplaceservicesendpoint|character varying(16383)|Service endpoint of the marketplace.|
|lastchange|timestamp with time zone|Date and time of the last change to the order.|
|marketingdata_utmsource|character varying(65535)|UTM source for marketing purposes.|
|marketingdata_utmmedium|character varying(65535)|UTM medium for marketing purposes.|
|marketingdata_utmcampaign|character varying(65535)|UTM campaign for marketing purposes.|
|marketingdata_utmpartner|character varying(65535)|UTM partner for marketing purposes.|
|marketingdata_utmipage|character varying(65535)|UTM page for marketing purposes.|
|marketingdata_utmipart|character varying(65535)|UTM part for marketing purposes.|
|marketingdata_utmicampaign|character varying(65535)|Alternative UTM campaign for marketing purposes.|
|marketingdata_coupon|character varying(65535)|Discount coupon code applied to the order.|
|marketingdata_marketingtags|super|Marketing tags associated with the order.|
|marketplace_name|character varying(65535)|Name of the marketplace associated with the order.|
|marketplace_iscertified|super|Specifies whether the marketplace is certified.|
|marketplace_baseurl|character varying(65535)|Base URL of the marketplace.|
|contextdata_loggedin|super|Specifies whether the user was logged in while placing the order.|
|contextdata_useragent|character varying(65535)|User agent used when placing the order.|
|contextdata_userid|character varying(65535)|ID of the user who placed the order.|
|rateandbenefitsidentifiers|super|Identifiers of charges and promotions applied to the order.|
|transactions|super|Details of the financial transactions of the order.|
|giftcards|super|Information about gift cards used in the order.|
|saleschannel|character varying(16383)|Sales channel through which the order was placed.|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|
|sellerorderid|character varying(16383)|Order ID assigned by the seller.|
|ordergroup|character varying(16383)|Order group this order belongs to.|
|workflowisinerror|boolean|Specifies whether there was an error in the order workflow.|
|clientprofiledata_email|character varying(256)|Email of the customer profile associated with the order.|
|changesattachment_id|character varying(256)|ID of the customization attachment of the order.|
|changesattachment_changesdat a|super|Details of changes made to the order.|
|shippingdata_postal_code|character varying(256)|Postal code of the order's shipping address.|

## Table: `orders_historical`

The `historical` table stores a complete record of all order updates. The table fields are described below:

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order, usually used as the primary key.|
|hostname|character varying(16383)|Name of the host associated with the order, which indicates the server or domain that is managing the order.|
|value|double precision|Total monetary value of the order. It may include taxes, discounts, and shipping costs.|
|totals|super|Summary of order totals. It may be broken down into subtotals, taxes, discounts, etc.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|items|super|Detailed information about the order items. It may include SKU, quantity, price, and item-specific discounts.|
|clientprofiledata_userprofileid|character varying(65535)|User profile identifier of the customer who placed the order.|
|shippingdata_address_city|character varying(65535)|City portion of the order's shipping address.|
|shippingdata_address_state|character varying(65535)|State or region portion of the order's shipping address.|
|shippingdata_address_country|character varying(65535)|Country portion of the order's shipping address.|
|shippingdata_logisticsinfo|super|Logistical information related to the order shipment. It may include carrier details and tracking information.|
|sellers|super|Information about the sellers associated with the order. It may include seller IDs and names.|
|storepreferencesdata_countryc ode|character varying(65535)|Country code of the store where the order was placed.|
|storepreferencesdata_timezone|character varying(65535)|Time zone of the store where the order was placed.|
|storepreferencesdata_currency code|character varying(65535)|Currency code used in the order transaction.|
|packages|super|Details about packaging of order items. It may include packaging types and dimensions.|
|origin|character varying(16383)|Source of the order, including where and how the order was started.|
|iscompleted|boolean|Specifies whether the order was completed.|
|affiliateid|character varying(16383)|Identifier of an affiliate or reference source associated with the order.|
|status|character varying(16383)|Current status of the order, such as 'pending', 'shipped', or 'completed'.|
|authorizeddate|timestamp with time zone|Date and time the order was authorized.|
|invoiceddate|timestamp with time zone|Date and time the order invoice was issued.|
|marketplaceorderid|character varying(16383)|Order identifier within a marketplace, if applicable.|
|marketplaceservicesendpoint|character varying(16383)|Endpoint or URL for marketplace services related to the order.|
|lastchange|timestamp with time zone|Date and time of the last change made to the order.|
|marketingdata_utmsource|character varying(65535)|UTM source parameter in marketing data, indicating the traffic or campaign origin.|
|marketingdata_utmmedium|character varying(65535)|UTM medium parameter in marketing data, indicating the campaign medium (e.g., email, social).|
|marketingdata_utmcampaign|character varying(65535)|UTM campaign parameter in marketing data, indicating the specific campaign name or code.|
|marketingdata_utmpartner|character varying(65535)|UTM partner parameter, indicating a marketing partnership or collaborator.|
|marketingdata_utmpartner|character varying(65535)|UTM page parameter. It may indicate the specific page or location of the campaign.|
|marketingdata_utmipart|character varying(65535)|UTM part parameter. It may indicate a specific component or section of the marketing campaign.|
|marketingdata_utmicampaign|character varying(65535)|UTM alternative campaign parameter for additional campaign tracking.|
|marketingdata_coupon|character varying(65535)|Coupon code used, if any, for applying discounts to the order.|
|marketingdata_marketingtags|super|Tags or keywords associated with the order's marketing efforts.|
|marketplace_name|character varying(65535)|Name of the marketplace where the order was placed, if applicable.|
|marketplace_iscertified|super|Specifies whether the marketplace where the order was placed is certified or recognized.|
|marketplace_baseurl|character varying(65535)|Base URL of the marketplace where the order was placed.|
|contextdata_loggedin|super|Specifies whether the user was logged in when placing the order.|
|contextdata_useragent|character varying(65535)|User-agent string of the browser or device used when placing the order.|
|contextdata_userid|character varying(65535)|ID of the user who placed the order.|
|rateandbenefitsidentifiers|super|Identifiers of charges and promotions applied to the order, such as loyalty points or member discounts.|
|transactions|super|Detailed information about the financial transactions associated with the order.|
|giftcards|super|Information about gift cards used in the order.|
|saleschannel|character varying(16383)|Sales channel through which the order was placed (online store, physical store, or others).|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|
|sellerorderid|character varying(16383)|An order ID assigned by the seller, different from the main order ID.|
|ordergroup|character varying(16383)|Order group the order belongs to, used to group several orders together.|
|workflowisinerror|boolean|Specifies whether there was an error in the order processing workflow.|
|clientprofiledata_email|character varying(256)|Email address of the customer associated with the order.|
|changesattachment_id|character varying(256)|Unique identifier for a change operation related to the order.|
|changesattachment_changesda ta|super|Details of changes made to the order, such as adding or removing items and other modifications.|
|shippingdata_postal_code|character varying(256)|Postal code of the order's shipping address.|  

## Table: `orders_totals`

The *totals* table provides a summary of the totals related to each order, including total order amount, applied discounts, and taxes. The table fields are described below:

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order. This is usually joined with the 'orderid' column of the 'vtex.orders_latest' table for cross-analysis.|
|hostname|character varying(16383)|Name of the host associated with the order, which indicates the server or domain that is managing the order.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|lastchange|timestamp with time zone|Date and time of the last change made to the order, reflecting the most recent status or content update.|
|status|character varying(16383)|Current status of the order. This is frequently joined with the 'status' column of the 'vtex.orders_latest' table to track status changes.|
|totals_id|character varying(65535)|Unique identifier for order totals, used to reference specific details of the order total.|
|totals_name|character varying(65535)|Name or description of the order totals, giving an overview of what the total represents (for example: subtotal, taxes, discounts).|
|totals_value|double precision|Numeric value associated with order totals, such as the total amount, subtotal, taxes, discounts, etc.|
|batch_id| character varying(13) |Identifier used when data is loaded into the table for quality control of data ingestion.|  

## Table: `orders_shipping`

The *shipping* table contains order shipping information, such as shipping address, shipping costs, and logistics service providers. 

The table fields are described below:

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order.|
|hostname|character varying(16383)|Name of the host related to the order. This is frequently joined with 'hostname' from the 'vtex.client_registry_gold' table.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|lastchange|timestamp with time zone|Date and time of the last change to the order.|
|status|character varying(16383)|Current status of the order.|
|shippingdata_address_city|character varying(65535)|City of the order's shipping address.|
|shippingdata_address_state|character varying(65535)|State of the order's shipping address.|
|shippingdata_address_country|character varying(65535)|Country of the order's shipping address.|
|deliveryids|super|Identifiers associated with order delivery.|
|shippingestimate|character varying(65535)|Estimated shipping time.|
|pickupstoreinfo_ispickupstore|boolean|Specifies whether the pickup location is a physical store.|
|pickupstoreinfo_friendlyname|character varying(65535)|Friendly name of the pickup location.|
|pickupstoreinfo_dockid|character varying(65535)|Pickup location identifier.|
|deliverychannel|character varying(65535)|Delivery channel used for the order.|
|deliverywindow|character varying(65535)|Estimated time window for delivery.|
|sellingprice|double precision|Sales price of the order item.|
|listprice|double precision|List price of the order item.|
|price|double precision|Final price of the order item.|
|shippingestimatedate|timestamp with time zone|Estimated shipping date for the order.|
|selecteddeliverychannel|character varying(65535)|Delivery channel selected for the order.|
|selectedsla|character varying(65535)|Service level agreement (SLA) selected for the order.|
|deliverychannels|super|Delivery channels available for the order.|
|slas|super|Available SLAs for the order.|
|pickupdistance|double precision|Distance to the pickup location.|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|
|shippingdata_postal_code|character varying(256)|Postal code of the order's shipping address.|  

## Table: `orders_sellers`

The *sellers* table stores the list of sellers related to each order. The table fields are described below:  

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order. This is frequently joined with the 'orderid' column of the 'vtex.orders_historical' table for cross-analysis.|
|hostname|character varying(16383)|Name of the host associated with the order, which indicates the server or domain that is managing the order.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|lastchange|timestamp with time zone|Date and time of the last change made to the order, reflecting the most recent status or content update.|
|status|character varying(16383)|Current status of the order.|
|id|character varying(65535)|Unique identifier, generally used to refer to a specific element within a larger context.|
|name|character varying(65535)|Name or title of the referenced element, providing a human-readable identification.|
|logo|character varying(65535)|Path or URL to the associated logo, often used for branding or visual identification.|
|fulfillmentendpoint|character varying(65535)|Endpoint or URL for fulfillment services that specifies where order fulfillment operations are managed.|
|subsellerid|character varying(65535)|Identifier for a subseller or secondary seller associated with the order or operation.|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|  

# Table: `orders_rateandbenefitsidentifiers`

The *rateandbenefitsidentifiers* table contains data about promotions applied to orders. The table fields are described below: 

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order.|
|hostname|character varying(16383)|Name of the host associated with the order, which indicates the server or domain that is managing the order.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|lastchange|timestamp with time zone|Date and time of the last change made to the order, reflecting the most recent status or content update.|
|status|character varying(16383)|Current status of the order.|
|rateandbenefitsidentifiers_id|character varying(65535)|Unique identifier for surcharge and promotion identifiers associated with the order.|
|rateandbenefitsidentifiers_name|character varying(65535)|Name or title of surcharge and promotion identifiers, providing clear identification for the promotion or surcharge.|
|rateandbenefitsidentifiers_featur ed|boolean|Specifies whether surcharge and promotion identifiers are highlighted or have a special feature.|
|rateandbenefitsidentifiers_descri ption|character varying(65535)|Detailed description of surcharge and promotion identifiers, explaining their features or benefits.|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|  

## Table: `orders_payments`

The *payments* table contains payment method information. The table fields are described below:  

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order. This is frequently joined with the 'orderid' column of the 'vtex.orders_latest' table.|
|hostname|character varying(16383)|Name of the host associated with the order, which indicates the server or domain that is managing the order.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|lastchange|timestamp with time zone|Date and time of the last change made to the order, reflecting the most recent status or content update.|
|status|character varying(16383)|Current status of the order.|
|transactions_merchantname|character varying(65535)|Name of the merchant associated with the order transaction.|
|group|character varying(65535)|Group or category the order or element belongs to.|
|installments|integer|Number of installments to pay the order.|
|value|double precision|Monetary value associated with the transaction or order element.|
|transactions_paymentsystemname|character varying(65535)|Name of the payment system used in the transaction.|
|transactions_paymentsystem|character varying(65535)|Identifier of the payment system used in the transaction.|
|giftcards_id|character varying(65535)|Unique identifier of the gift card used in the order.|
|giftcards_name|character varying(65535)|Name of the gift card used.|
|giftcards_caption|character varying(65535)|Description or caption of the gift card used.|
|giftcards_value|double precision|Monetary value of the gift card.|
|giftcards_balance|double precision|Remaining gift card balance after use.|
|giftcards_provider|character varying(65535)|Gift card provider or issuer.|
|giftcards_groupname|character varying(65535)|Name of the group or category the gift card belongs to.|
|giftcards_inuse|boolean|Specifies whether the gift card is in use or has been used in the order.|
|giftcards_isspecialcard|boolean|Specifies whether this is a special or promotional gift card.|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|
|transactions_transactionid|character varying(65535)|Unique identifier of the financial transaction associated with the order.|
|transactions_referencevalue|double precision|Transaction reference value. This will probably be the total amount before discounts or charges.|

## Table: `orders_packages`

The *packages* table stores product packaging and shipping information. The table fields are described below:

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order.|
|hostname|character varying(16383)|Name of the host associated with the order, which indicates the server or domain that is managing the order.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|lastchange|timestamp with time zone|Date and time of the last change made to the order, reflecting the most recent status or content update.|
|status|character varying(16383)|Current status of the order.|
|courier|character varying(65535)|Name of the carrier company or delivery service associated with the order.|
|invoicenumber|character varying(65535)|Invoice number associated with the order.|
|invoicevalue|double precision|Total amount indicated on the order invoice.|
|invoiceurl|character varying(65535)|URL to access the electronic invoice for the order.|
|issuancedate|timestamp with time zone|Date of issue of the order invoice.|
|trackingnumber|character varying(65535)|Tracking number associated with order delivery.|
|invoicekey|character varying(65535)|Unique key that identifies the order invoice.|
|trackingurl|character varying(65535)|URL for tracking order delivery.|
|embeddedinvoice|character varying(65535)|Embedded information or details of the order invoice.|
|type|character varying(65535)|Type or category of the element or service associated with the order.|
|courierstatus_delivereddate|timestamp with time zone|Delivery date of the order as recorded by the carrier service.|
|courierstatus_status|character varying(65535)|Current delivery status as recorded by the carrier service.|
|courierstatus_finished|boolean|Specifies whether the delivery process has been completed.|
|courierstatus_data|super|Detailed data about the delivery status provided by the carrier service.|
|cfop|character varying(65535)|Código Fiscal de Operações e Prestações (CFOP) code associated with the order in Brazil.|
|packages_lastchange|timestamp with time zone|Date and time of the last change recorded in the order packages.|
|volumes|integer|Total number of packages in the order.|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|

## Table: `orders_items`

The *items* table stores details about the individual items in each order, including SKU, quantity, price, and discounts. The table fields are described below:

|**Column name**|**Field type**|**Description**|
| - | - | - |
|orderid|character varying(16383)|Unique identifier for each order. This is usually joined with the 'orderid' column of the 'vtex.orders_latest' table.|
|hostname|character varying(16383)|Name of the host associated with the order. This is frequently joined with columns from other tables, such as 'vtex.client_registry_gold.hostname'.|
|creationdate|timestamp with time zone|Date and time the order was created, including time zone.|
|lastchange|timestamp with time zone|Date and time of the last change made to the order.|
|status|character varying(16383)|Current status of the order.|
|tax|double precision|Tax amount applied to the order.|
|id|character varying(65535)|Unique identifier, frequently joined with 'sku_id' from the 'vtex.fulfillment_simulations_ca_silver' table.|
|productid|character varying(65535)|Product identifier associated with the order.|
|quantity|integer|Product quantity in the order.|
|seller|character varying(65535)|Identifier or name of the product seller.|
|sellersku|character varying(65535)|Product SKU as listed by the seller.|
|pricevaliduntil|timestamp with time zone|Date and time the product price is valid through.|
|name|character varying(65535)|Name of the product.|
|additionalinfo_brandname|character varying(65535)|Product brand name.|
|additionalinfo_brandid|character varying(65535)|Product brand identifier.|
|additionalinfo_caregoriesid|character varying(65535)|Category identifiers associated with the product.|
|additionalinfo_dimension_cubicw eight|double precision|Cubic weight of the product for shipping purposes.|
|additionalinfo_dimension_height|double precision|Product height.|
|additionalinfo_dimension_length|double precision|Product length.|
|additionalinfo_dimension_weight|double precision|Product weight.|
|additionalinfo_dimension_width|double precision|Product width.|
|price|double precision|Product price.|
|pricetags|super|Price tags associated with the product. This may include discounts and offers.|
|sellingprice|double precision|Sales price of the product.|
|listprice|double precision|List price of the product.|
|imageurl|character varying(65535)|Product image URL.|
|measurementunit|character varying(65535)|Unit of measure of the product.|
|unitmultiplier|double precision|Unit multiplier for the product, used in price and quantity calculations.|
|batch_id|character varying(13)|Identifier used when data is loaded into the table for quality control of data ingestion.|

## Table: `orders_extra_info`

Stores general order information recorded in the OMS system, including creation and update timestamps, client identification, order items, custom data, change attachments, and batch control.  

| Column name                         | Column type               | Column description                                                                                     |
|-------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------|
| orderid                             | character varying(255)     | Unique identifier of the order in the OMS system. Used as a linking key with other order tables.       |
| hostname                            | character varying(255)     | Hostname where the order was created. Used together with orderid as a linking key.                     |
| creationdate                        | timestamp with time zone   | Date and time when the order was created in the OMS system.                                            |
| lastchange                          | timestamp with time zone   | Date and time of the last modification made to the order.                                              |
| clientprofiledata_corporatename    | character varying(65535)   | Corporate name of the client when it's a B2B sale or legal entity.                                     |
| clientprofiledata_corporatedocument| character varying(65535)   | Corporate document of the client (CNPJ/Tax ID) when it's a B2B sale or legal entity.                   |
| clientprofiledata_iscorporate      | boolean                    | Boolean flag indicating whether the order is from a corporate client (legal entity) or individual.     |
| items                               | super                      | JSON structure (SUPER) containing detailed information about order items.                              |
| customdata_customapps              | super                      | JSON structure (SUPER) containing custom data from specific applications associated with the order.    |
| customdata_customfields            | super                      | JSON structure (SUPER) containing additional custom fields configured for the order.                   |
| changesattachment_id               | character varying(65535)   | Unique identifier of attachments related to changes made to the order.                                 |
| changesattachment_changesdata      | super                      | JSON structure (SUPER) with detailed data about changes and attachments associated with the order.     |
| batch_id                            | character varying(13)      | Processing batch identifier used for data ingestion and update control.                                |
| changesattachment_href             | character varying(65535)   | URL or reference to the attachment related to changes made to the order.                               |
| has_change_v2                       | boolean                    | Boolean flag indicating whether the order has changes in the new version (v2) of the attachment.       |

## Table: `orders_custom_fields`

Stores custom fields configured for orders in the OMS. Includes the type and value of each field, linked to specific entities such as orders or items, enabling flexible data modeling.

| Column name        | Column type               | Column description                                                                 |
|--------------------|---------------------------|-------------------------------------------------------------------------------------|
| orderid            | character varying(255)     | Unique identifier of the order in the OMS system. Used as a linking key.           |
| hostname           | character varying(255)     | Host/account name where the order was created.                                     |
| creationdate       | timestamp with time zone   | Date and time when the order was created in the OMS system.                        |
| lastchange         | timestamp with time zone   | Date and time of the last modification made to the order.                          |
| linked_entity_id   | character varying(65535)   | Unique identifier of the entity the custom field is linked to.                     |
| linked_entity_type | character varying(65535)   | Type of the entity that the custom field is linked to (e.g., order, item, etc.).   |
| field_key          | character varying(65535)   | The property name/key from the custom fields JSON object.                          |
| field_value        | character varying(65535)   | The property value corresponding to the field_key.                                 |
| batch_id           | character varying(13)      | Processing batch identifier used for data ingestion and update control.            |

### Table: `orders_custom_apps`

Records custom data from specific applications integrated with the order. Each entry represents an application field with its version, key, and value, enabling tracking of OMS custom extensions.

| Column name     | Column type               | Column description                                                                 |
|------------------|---------------------------|-------------------------------------------------------------------------------------|
| orderid          | character varying(255)     | Unique identifier of the order in the OMS system. Used as a linking key.           |
| hostname         | character varying(255)     | Host/account name where the order was created.                                     |
| creationdate     | timestamp with time zone   | Date and time when the order was created in the OMS system.                        |
| lastchange       | timestamp with time zone   | Date and time of the last modification made to the order.                          |
| customapps_id    | character varying(65535)   | Unique identifier of the custom application.                                       |
| customapps_major | character varying(65535)   | Major version or classification of the custom application.                         |
| field_key        | character varying(65535)   | Property name/key from the custom application fields JSON object.                  |
| field_value      | character varying(65535)   | Property value corresponding to the field_key.                                     |
| batch_id         | character varying(13)      | Processing batch identifier used for data ingestion and update control.            |

## Analyses with order data

Order data can be used in the following analyses:

- **Ecommerce website sales analysis:** Evaluate sales volume, identify best-selling products, analyze seasonal trends, and get insights into consumer behavior.  
- **Order cancellation rate analysis:** Look into cancellation reasons, identify patterns related to specific products or logistical problems, and develop strategies to reduce cancellation rates.  
- **SKU performance:** Analyze the performance of individual SKUs, understand market demand, and make adjustments to inventory and marketing strategies.  

## Correlations with other data

The order dataset has correlations with the following sets of the VTEX data ecosystem:

- **Navigation:** Correlating navigation data with orders offers insights into consumer behavior and the purchasing journey, which helps optimize the user experience.  
- **Promotions:** Interaction with promotion data is key for assessing the effectiveness of promotional campaigns on order volumes and types.  
- **Transactions:** Joint analysis with transaction data can reveal payment patterns, consumer preferences, and payment processing efficiency.   

### Discover other datasets

- [Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Payments](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)   
- [Prices](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promotions](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Gift cards](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Bridge logs](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
