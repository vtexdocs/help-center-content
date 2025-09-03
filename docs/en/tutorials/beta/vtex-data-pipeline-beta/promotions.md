---
title: 'Promotions Data Pipeline'
id: 3WZ1syNucDFdvVhfKtA6Qd
status: PUBLISHED
createdAt: 2024-02-02T18:02:01.395Z
updatedAt: 2025-07-28T21:00:50.202Z
publishedAt: 2025-07-28T21:00:50.202Z
firstPublishedAt: 2024-05-27T19:26:59.739Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: promotions
legacySlug: promotions
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The promotion dataset is composed of four tables: `promotions_latest`, and `promotions_historical`. These tables cover the entire lifecycle of promotional campaigns.

This section includes the following information:

- [Data characteristics](#data-characteristics)
* [Table: promotions_latest](#table-promotions_latest)  
* [Table: promotions_historical](#table-promotions_historical)  
- [Analyses with promotion data](#analyses-with-promotion-data)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

|**Characteristic**|**Description**|
| - | - |
|**Data source**|Obtained from the [Promotions module](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) in the VTEX Admin.|
|**Availability**|Promotion data can be accessed through the VTEX Admin and also via the [Promotions APIs](https://developers.vtex.com/docs/guides/promotions-overview).|
|**History**|The data is retained for two years, from 2024 for clients who already use the VTEX platform.|
|**Minimum update interval**|One hour.|

## Table: promotion_latest

| Column name | Column type | Column description |
| ----- | ----- | ----- |
| batch\_id | character varying(256) | Unique identifier of the data batch, used to track and manage data ingestion. |
| account | character varying(256) | Account who owns the given promotion. |
| id\_calculator\_configuration | character varying(256) | The id of the promotion. |
| calculator\_name | character varying(65535) | Promotion Name |
| calculator\_description | character varying(65535) | Promotion internal description |
| begin\_date\_utc | timestamp without time zone | Promotion Begin Date (UTC). |
| end\_date\_utc | timestamp without time zone | Promotion End Date (UTC). |
| last\_modified | timestamp without time zone | The last time the promotion was modified (UTC) |
| days\_ago\_of\_purchases | integer | Number of days that are considered to add the purchase history. |
| is\_active | boolean | True if the promotion is currently active. |
| is\_archived | boolean | True if the promotion is currently archived. |
| is\_featured | boolean | True if the promotion is currently featured. |
| disable\_deal | boolean | Deprecated Indicates whether a deal is disabled (true) or not (false). |
| offset | numeric(18,0) | The offset to be applied to the promotion's start and end dates. |
| activate\_gifts\_multiplier | boolean | If set as true, it activates gifts Multiplier. |
| new\_offset | numeric(18,0) | New time offset from UTC in seconds. |
| max\_prices\_per\_items | super | List of max price per items. |
| cumulative | boolean | Determines if the promotion can stack with other promotions of the same discount type. |
| effect\_type | character varying(256) | The type of the given promotion's effect. |
| discount\_type | character varying(256) | The type of discount that will apply to the promotion. |
| nominal\_shipping\_discount\_value | numeric(18,0) | Exact discount to be applied for the shipping value. |
| absolute\_shipping\_discount\_value | numeric(18,0) | Maximum value for the shipping. |
| nominal\_discount\_value | numeric(18,0) | Exact discount to be applied for the total purchase value. |
| nominal\_discount\_type | character varying(256) | Controls the behavior of the NominalDiscount effect. This field only accepts two string values: <ul>item: applies the intended nominal discount on every item present on the cart.</ul> <ul>cart: keeps the behavior as it currently is, the whole order/cart receives a nominal discount that is distributed among the items.</ul> |
| maximum\_unit\_price\_discount | numeric(18,0) | The maximum price for each item of the purchase will be the price set up. |
| percentual\_discount\_value | numeric(18,0) | Percentage discount to be applied for total purchase value. |
| rebate\_percentual\_discount\_value | numeric(18,0) | Percentual Shipping Discount Value. |
| percentual\_shipping\_discount\_value | numeric(18,0) | Percentage discount to be applied for shipping value. |
| percentual\_tax | numeric(18,0) | Percentual tax over purchase total value. |
| shipping\_percentual\_tax | numeric(18,0) | Shipping Percentual tax over purchase total value. |
| percentual\_discount\_value\_list1 | numeric(18,0) | Valid discounts for the SKUs in listSku1BuyTogether, discount list used for Buy Together Promotions. |
| percentual\_discount\_value\_list2 | numeric(18,0) | Equivalent to percentualDiscountValueList1. |
| skus\_gift | super | SKU Gift Object. Total discount on the product value set as a gift. quantitySelectable Quantity of SKU Gifts. Array with SKU Gifts IDs. |
| nominal\_reward\_value | numeric(18,0) | Nominal value for rewards program. |
| percentual\_reward\_value | numeric(18,0) | Percentage value for rewards program. |
| order\_status\_reward\_value | character varying(256) | Order status reward value. |
| apply\_to\_all\_shippings | boolean | Specifies whether the promotion applies to all shipping methods or only to the cheapest one. |
| nominal\_tax | numeric(18,0) | Nominal tax. |
| max\_pack\_value | numeric(18,0) | Maximum pack value |
| origin | character varying(256) | Origin of the promotion, marketplace or Fulfillment.   |
| id\_seller\_is\_inclusive | boolean | If set to true, this promotion will be applied to any seller present on the idSeller field. If set to false, sellers present on that field will make this promotion not to be applied. |
| ids\_sales\_channel | super | List of Trade Policies that activate this promotion. |
| are\_sales\_channel\_ids\_exclusive | boolean | If set to false, this promotion will be applied to any trade policies present on the idsSalesChannel field. If set to true, trade policies present on that field will make this promotion not to be applied. |
| marketing\_tags | super | Promotion Marketing tags. |
| marketing\_tags\_are\_not\_inclusive | boolean | If set to false, this promotion will be applied to any marketing tag present on the marketingTags field. If set to true, marketing tags present on that field will make this promotion not to be applied. |
| payments\_methods | super | Array composed by all the Payments Methods. <ul>id: Payment Method ID.</ul> <ul>name: Payment Method Name.</ul> |
| stores | super | List of stores |
| campaigns | super | Campaign Audiences that activate this promotion |
| stores\_are\_inclusive | boolean | Deprecated If set to true, this promotion will be applied to any store present on the stores field. If set to false, stores present on that field will make this promotion not to be applied. |
| categories | super | Object composed by the categories that will activate or deactivate the promotion. <ul>id: Category ID</ul> <ul>name: Category Name</ul> |
| categories\_are\_inclusive | boolean | If set to true, this promotion will be applied to any category present on the categories field. If set to false, categories present on that field will make this promotion not to be applied. |
| brands | super | Object composed by the brands that will activate or deactivate the promotion. |
| brands\_are\_inclusive | boolean | If set to true, this promotion will be applied to any brand present on the brands field. If set to false, brands present on that field will make this promotion not to be applied. |
| products | super | Object composed by the products that will activate or deactivate the promotion. |
| products\_are\_inclusive | boolean | If set to true, this promotion will be applied to any product present on the products field. If set to false, products present on that field will make this promotion not to be applied. |
| skus | super | Object composed by the SKUs that will activate or deactivate the promotion. |
| skus\_are\_inclusive | boolean | If set to true, this promotion will be applied to any SKU present on the skus field. If set to false, SKUs present on that field will make this promotion not to be applied. |
| collections1\_buy\_together | super | Collections that will generate the promotion, type Buy Together, More for less, Progressive Discount, Buy One Get One. |
| collections2\_buy\_together | super | Collections that will generate the promotion, type Buy Together, More for less, Progressive Discount or Buy One Get One. |
| minimum\_quantity\_buy\_together | integer | Minimum quantity for Buy Together promotion. |
| quantity\_to\_affect\_buy\_together | integer | Quantity to affect Buy Together promotion. |
| enable\_buy\_together\_per\_sku | boolean | Enable Buy Together per SKU. |
| list\_sku1\_buy\_together | super | Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. <ul>⮕ Object containing the ID and Name of the SKU to be added to the first list of the **Buy Together** promotion.</ul> <ul>Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation.</ul> |
| list\_sku2\_buy\_together | super | Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. <ul>⮕ Object containing the ID and Name of the SKU to be added to the second list of the **Buy Together** promotion.</ul> <ul>Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation.</ul>  |
| coupon | super | Deprecated List of coupons. |
| total\_value\_floor | numeric(18,0) | Minimum cart value to activate the promotion. |
| total\_value\_ceiling | numeric(18,0) | Maximum cart value to activate the promotion. |
| total\_value\_include\_all\_items | boolean | Deprecated Total value including all items. |
| total\_value\_mode | character varying(256) | Defines which items are considered for calculating the cart’s total value. |
| collections | super | Array composed by the collections that will be activated or deactivated the promotion. |
| collections\_is\_inclusive | boolean | If set to true, this promotion will be applied to any collection present on the collections field. If set to false, collections present on that field will make this promotion not to be applied. |
| restrictions\_bins | super | The discount will be granted if the card's BIN is given. |
| card\_issuers | super | List of card issuers. |
| total\_value\_purchase | numeric(18,0) | Total value a client must have in past orders to active the promotion. |
| slas\_ids | super | The discount will be granted if the shipping method is the same as the one given. |
| is\_sla\_selected | boolean | Applies selected discount only when one of the defined shipping method is selected by the customer. |
| is\_first\_buy | boolean | Indicates if the promotion is valid only for the user's first purchase. |
| first\_buy\_is\_profile\_optimistic | boolean | Applies the discount even if the user is not logged. |
| compare\_list\_price\_and\_price | boolean | If the **List Price** and **Price** are the same. |
| is\_different\_list\_price\_and\_price | boolean | Applies the promotion only if the list price and price is different. |
| zip\_code\_ranges | super | Range of the zip code that applies the promotion |
| item\_max\_price | numeric(18,0) | The configuration of the maximum price for an item to activate the promotion. |
| item\_min\_price | numeric(18,0) | The configuration of the minimum price for an item to activate the promotion. |
| installment | integer | Deprecated Installment |
| is\_min\_max\_installments | boolean | Set if the promotion will be applied considering a minimum and maximum values for installments. |
| min\_installment | integer | Minimum value for installment. |
| max\_installment | integer | Maximum value for installment. |
| merchants | super | List of merchants. |
| cluster\_expressions | super | Criteria to select a customer cluster. Each item in this array should follow the format of an equality function {propertyname}={value} or the format of a contains function {propertyname} contains {value}. In both options, {propertyname} must be replaced with the name of the field in the data entity, and {value} must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). |
| pii\_cluster\_expressions | super | Cluster expressions related to customers’ personally identifiable information (PII). |
| payments\_rules | super | List of payment rules |
| gift\_list\_types | super | Gifts List Type |
| products\_specifications | super | List of product specifications |
| affiliates | super | Marketplace order identifier. The discount will apply to selected affiliates. |
| max\_usage | integer | Defines how many times the promotion can be used. |
| max\_usage\_per\_client | integer | Maximum times a customer can use the promotion. |
| should\_distribute\_discount\_among\_matched\_items | boolean | Should distribute discount among matched items |
| multiple\_use\_per\_client | boolean | Defines if the promotion can be used multiple times per client |
| type | character varying(256) | Defines what is the type of the promotion or indicates if it is a tax. Possible values: regular [Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327), combo [Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323), forThePriceOf [More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325), progressive [Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324), buyAndWin [Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322), maxPricePerItem (Deprecated), campaign [Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume), tax (Tax), multipleEffects (Multiple Effects)|
| use\_new\_progressive\_algorithm | boolean | Use progressive algorithm. |
| percentual\_discount\_value\_list | super | Percentual discount value list. |
| max\_number\_of\_affected\_items | integer | The maximum number of affected items for a promotion. |
| max\_number\_of\_affected\_items\_group\_key | character varying(256) | The maximum number of affected items by group key for a promotion. |

## Table: promotion_historical

Column name | Column type | Column description |
| ----- | ----- | ----- |
| operation | character varying(256) | The operation executed by the author |
| batch\_id | character varying(256) | Unique identifier of the data batch, used to track and manage data ingestion. |
| account | character varying(256) | Account who owns the given promotion. |
| author | character varying(512) | The author of the given operation |
| id\_calculator\_configuration | character varying(256) | The id of the promotion. |
| calculator\_name | character varying(1024)	 | Promotion Name |
| calculator\_description | character varying(65535)	 | Promotion internal description |
| begin\_date\_utc | timestamp without time zone | Promotion Begin Date (UTC). |
| end\_date\_utc | timestamp without time zone | Promotion End Date (UTC). |
| last\_modified | timestamp without time zone | The last time the promotion was modified (UTC) |
| days\_ago\_of\_purchases | integer | Number of days that are considered to add the purchase history. |
| is\_active | boolean | True if the promotion is currently active. |
| is\_archived | boolean | True if the promotion is currently archived. |
| is\_featured | boolean | True if the promotion is currently featured. |
| disable\_deal | boolean | Deprecated Indicates whether a deal is disabled (true) or not (false). |
| offset | numeric(18,0) | The offset to be applied to the promotion's start and end dates. |
| activate\_gifts\_multiplier | boolean | If set as true, it activates gifts Multiplier. |
| new\_offset | numeric(18,0) | New time offset from UTC in seconds. |
| max\_prices\_per\_items | super | List of max price per items. |
| cumulative | boolean | Determines if the promotion can stack with other promotions of the same discount type. |
| effect\_type | character varying(256) | The type of the given promotion's effect. |
| discount\_type | character varying(256) | The type of discount that will apply to the promotion. |
| nominal\_shipping\_discount\_value | numeric(18,0) | Exact discount to be applied for the shipping value. |
| absolute\_shipping\_discount\_value | numeric(18,0) | Maximum value for the shipping. |
| nominal\_discount\_value | numeric(18,0) | Exact discount to be applied for the total purchase value. |
| nominal\_discount\_type | character varying(256) | Controls the behavior of the NominalDiscount effect. This field only accepts two string <ul>values: item applies the intended nominal discount on every item present on the cart.</ul> <ul>cart: keeps the behavior as it currently is, the whole order/cart receives a nominal discount that is distributed among the items.</ul> |
| maximum\_unit\_price\_discount | numeric(18,0) | The maximum price for each item of the purchase will be the price set up. |
| percentual\_discount\_value | numeric(18,0) | Percentage discount to be applied for total purchase value. |
| rebate\_percentual\_discount\_value | numeric(18,0) | Percentual Shipping Discount Value. |
| percentual\_shipping\_discount\_value | numeric(18,0) | Percentage discount to be applied for shipping value. |
| percentual\_tax | numeric(18,0) | Percentual tax over purchase total value. |
| shipping\_percentual\_tax | numeric(18,0) | Shipping Percentual tax over purchase total value. |
| percentual\_discount\_value\_list1 | numeric(18,0) | Valid discounts for the SKUs in listSku1BuyTogether, discount list used for Buy Together Promotions. |
| percentual\_discount\_value\_list2 | numeric(18,0) | Equivalent to percentualDiscountValueList1. |
| skus\_gift | super | SKU Gift Object. Total discount on the product value set as a gift. <ul>quantitySelectable: Quantity of SKU Gifts.</ul> <ul>gifts: Array with SKU Gifts IDs.</ul>  |
| nominal\_reward\_value | numeric(18,0) | Nominal value for rewards program. |
| percentual\_reward\_value | numeric(18,0) | Percentage value for rewards program. |
| order\_status\_reward\_value | character varying(256) | Order status reward value. |
| apply\_to\_all\_shippings | boolean | Specifies whether the promotion applies to all shipping methods or only to the cheapest one. |
| nominal\_tax | numeric(18,0) | Nominal tax. |
| max\_pack\_value | numeric(18,0) | Maximum pack value |
| origin | character varying(256) | Indicates the origin of the promotion, such as 'Marketplace' or 'Fulfillment'. |
| id\_seller\_is\_inclusive | boolean | If set to true, this promotion will be applied to any seller present on the idSeller field. If set to false, sellers present on that field will make this promotion not to be applied. |
| ids\_sales\_channel | super | List of Trade Policies that activate this promotion. |
| are\_sales\_channel\_ids\_exclusive | boolean | If set to false, this promotion will be applied to any trade policies present on the idsSalesChannel field. If set to true, trade policies present on that field will make this promotion not to be applied. |
| marketing\_tags | super | Promotion Marketing tags. |
| marketing\_tags\_are\_not\_inclusive | boolean | If set to false, this promotion will be applied to any marketing tag present on the marketingTags field. If set to true, marketing tags present on that field will make this promotion not to be applied. |
| payments\_methods | super | Array composed by all the Payments Methods. <ul>id: Payment Method ID.</ul>  <ul>name: Payment Method Name.</ul> |
| stores | super | List of stores. |
| campaigns | super | Campaign Audiences that activate this promotion. |
| stores\_are\_inclusive | boolean | Deprecated If set to true, this promotion will be applied to any store present on the stores field. If set to false, stores present on that field will make this promotion not to be applied. |
| categories | super | Object composed by the categories that will activate or deactivate the promotion. <ul>id: Category ID.</ul> <ul>name: Category Name.</ul> |
| categories\_are\_inclusive | boolean | If set to true, this promotion will be applied to any category present on the categories field. If set to false, categories present on that field will make this promotion not to be applied. |
| brands | super | Object composed by the brands that will activate or deactivate the promotion. |
| brands\_are\_inclusive | boolean | If set to true, this promotion will be applied to any brand present on the brands field. If set to false, brands present on that field will make this promotion not to be applied. |
| products | super | Object composed by the products that will activate or deactivate the promotion. |
| products\_are\_inclusive | boolean | If set to true, this promotion will be applied to any product present on the products field. If set to false, products present on that field will make this promotion not to be applied. |
| skus | super | Object composed by the SKUs that will activate or deactivate the promotion. |
| skus\_are\_inclusive | boolean | If set to true, this promotion will be applied to any SKU present on the skus field. If set to false, SKUs present on that field will make this promotion not to be applied. |
| collections1\_buy\_together | super | Collections that will generate the promotion, type Buy Together, More for less, Progressive Discount, Buy One Get One. |
| collections2\_buy\_together | super | Collections that will generate the promotion, type Buy Together, More for less, Progressive Discount or Buy One Get One. |
| minimum\_quantity\_buy\_together | integer | Minimum quantity for Buy Together promotion. |
| quantity\_to\_affect\_buy\_together | integer | Quantity to affect Buy Together promotion. |
| enable\_buy\_together\_per\_sku | boolean | Enable Buy Together per SKU. |
| list\_sku1\_buy\_together | super | Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. ⮕ Object containing the ID and Name of the SKU to be added to the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. |
| list\_sku2\_buy\_together | super | Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. ⮕ Object containing the ID and Name of the SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. |
| coupon | super | Deprecated List of coupons. |
| total\_value\_floor | numeric(18,0) | Minimum cart value to activate the promotion. |
| total\_value\_ceiling | numeric(18,0) | Maximum chart value to activate the promotion. |
| total\_value\_include\_all\_items | boolean | Deprecated Total value including all items. |
| total\_value\_mode | character varying(256) | Defines which items are considered for calculating the cart’s total value. |
| collections | super | Array composed by the collections that will be activated or deactivated the promotion. |
| collections\_is\_inclusive | boolean | If set to true, this promotion will be applied to any collection present on the collections field. If set to false, collections present on that field will make this promotion not to be applied. |
| restrictions\_bins | super | The discount will be granted if the card's BIN is given. |
| card\_issuers | super | List of card issuers. |
| total\_value\_purchase | numeric(18,0) | Total value a client must have in past orders to active the promotion. |
| slas\_ids | super | The discount will be granted if the shipping method is the same as the one given. |
| is\_sla\_selected | boolean | Applies selected discount only when one of the defined shipping method is selected by the customer. |
| is\_first\_buy | boolean | Indicates if the promotion is valid only for the user's first purchase. |
| first\_buy\_is\_profile\_optimistic | boolean | Applies the discount even if the user is not logged. |
| compare\_list\_price\_and\_price | boolean | If the **List Price** and **Price** are the same. |
| is\_different\_list\_price\_and\_price | boolean | Applies the promotion only if the list price and price is different. |
| zip\_code\_ranges | super | Range of the zip code that applies the promotion |
| item\_max\_price | numeric(18,0) | The configuration of the maximum price for an item to activate the promotion. |
| item\_min\_price | numeric(18,0) | The configuration of the minimum price for an item to activate the promotion. |
| installment | integer | Deprecated Installment |
| is\_min\_max\_installments | boolean | Set if the promotion will be applied considering a minimum and maximum values for installments. |
| min\_installment | integer | Minimum value for installment. |
| max\_installment | integer | Maximum value for installment. |
| merchants | super | List of merchants. |
| cluster\_expressions | super | Criteria to select a customer cluster. Each item in this array should follow the format of an equality function {propertyname}={value} or the format of a contains function {propertyname} contains {value}. In both options, {propertyname} must be replaced with the name of the field in the data entity, and {value} must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). |
| pii\_cluster\_expressions | super | Cluster expressions related to customers’ personally identifiable information (PII). |
| payments\_rules | super | List of payment rules |
| gift\_list\_types | super | Gifts List Type |
| products\_specifications | super | List of product specifications |
| affiliates | super | Marketplace order identifier. The discount will apply to selected affiliates. |
| max\_usage | integer | Defines how many times the promotion can be used. |
| max\_usage\_per\_client | integer | Maximum times a customer can use the promotion. |
| should\_distribute\_discount\_among\_matched\_items | boolean | Should distribute discount among matched items |
| multiple\_use\_per\_client | boolean | Defines if the promotion can be used multiple times per client |
| type | character varying(256) | Defines what is the type of the promotion or indicates if it is a tax. Possible values: regular [Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327), combo [Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323), forThePriceOf [More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325), progressive [Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324), buyAndWin [Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322), maxPricePerItem (Deprecated), campaign [Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume), tax (Tax), multipleEffects (Multiple Effects) |
| use\_new\_progressive\_algorithm | boolean | Use progressive algorithm. |
| percentual\_discount\_value\_list | super | Percentual discount value list. |
| max\_number\_of\_affected\_items | integer | The maximum number of affected items for a promotion. |
| max\_number\_of\_affected\_items\_group\_key | character varying(256) | The maximum number of affected items by group key for a promotion. |

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

- [Catalog](https://help.vtex.com/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navigation](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Orders](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Payments](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Prices](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz) 
- [Gift cards](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Bridge logs](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

