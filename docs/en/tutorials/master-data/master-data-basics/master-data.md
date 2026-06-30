---
title: 'Master Data'
id: 4otjBnR27u4WUIciQsmkAw
status: PUBLISHED
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2025-09-02T23:26:45.478Z
publishedAt: 2025-08-29T14:19:54.707Z
firstPublishedAt: 2018-04-02T20:54:18.272Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: master-data
legacySlug: what-is-master-data
locale: en
subcategoryId: 1l3IVVYwrrG5YOtdt7R2SN
---

Master Data is a VTEX database platform solution, which is highly customizable, and it also enables you to create applications.

By default, Master Data is used to store and organize Customer data from your store. It features a powerful search engine, allowing you to store, search, expand, and customize data.

In this article you will learn more about each available version of the Master Data, important concepts, and how to use it.

> ℹ️ Note that depending on the functionality and version you wish to use, it is necessary to contact your development team.

## Versions available

Currently there are two versions available and you can choose the one that best suits your operational needs. The main difference between the two is that v2 does not have a graphical interface and can be used only through [Master Data v2 API](https://developers.vtex.com/docs/api-reference/master-data-api-v2), although it has other relevant functionalities, such as the use of [JSON schemas](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema).

> ℹ️ VTEX automatically saves customer data from your store in Master Data v1.

Check the table below to learn more about the different functionalities of each version.

| Functionality                         | v1                                                                                                                                      | v2                                                                                                          | Learn more                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Graphical interface                   | Yes                                                                                                                                    | No                                                                                                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| API                                   | Yes                                                                                                                                    | Yes                                                                                                          | - [Master Data v1 API](https://developers.vtex.com/docs/api-reference/masterdata-api) <br> - [Master Data v2 API](https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v2-overview)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Importing and exporting spreadsheets  | Yes                                                                                                                                    | No                                                                                                           | - [Import data into Master Data v1](/en/docs/tutorials/importing-data-into-master-data-v1) <br> - [Export data from Master Data v1](/en/docs/tutorials/exporting-data)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Attachments (imagens)                 | Yes                                                                                                                                    | No                                                                                                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Triggers                              | Yes                                                                                                                                    | Yes                                                                                                          | - [Triggers](#triggers) <br> - [Creating triggers with Master Data v1](/en/docs/tutorials/creating-trigger-in-master-data) <br> - [Creating triggers with Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)                                                                                                                                                                                                                                                                                                                                 |
| JSON Schemas                          | No                                                                                                                                     | Yes                                                                                                          | - [JSON schemas](http://json-schema.org/) <br> - [Understanding JSON schemas](https://json-schema.org/understanding-json-schema) <br> - [Starting to work with JSON schemas in Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/starting-to-work-on-master-data-with-json-schema) <br> - [Schema life cycle in Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)                                                                                                                                                                                                                 |
| Nested properties                     | No                                                                                                                                     | Yes                                                                                                          | - [Nested properties](#nested-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Data entities                         | Referenced by acronyms composed of two capital letters. For example, the 'CL' entity stores client data from the store and 'AD' stores addresses. Cannot be created via API. | Referenced by their names. For example, 'Notification'. Can only be created via API.                         | - [Data entities](#data-entities) <br> - [Data entities in Master Data v1](/en/docs/tutorials/data-entity) <br> - [Creating relationships between Master Data v2 data entities](https://developers.vtex.com/vtex-rest-api/docs/creating-relationships-between-data-entities-using-api)                                                                                                                                                                                                                                                                                             |
| Fields                                | Must be filled in in the specific format configured in the data entity.                                                                | At first, there is no restriction on fields's formats. Format is validated through JSON schemas.             | - [Field types in Master Data v1](/en/docs/tutorials/data-entity#understanding-the-types) <br> - [JSON schemas](#v2-schemas)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Indexes                               | Yes                                                                                                                                    | Yes                                                                                                          | - [How to set up indexes in Master Data v1](/en/docs/tutorials/indexes-in-master-data) <br> - [How to set up indexes with Master Data v2 API](https://developers.vtex.com/docs/api-reference/master-data-api-v2#put-/api/dataentities/-dataEntityName-/indices)                                                                                                                                                                                                                                                                                                                                                            |

> ❗ Note that the data entities of the two versions are independent, even if some may be analogous. This means that a data created in a v1 entity cannot be queried or edited using v2 resources and vice versa.

## Basic components

Both versions of Master Data use some basic components, which may be equivalent to concepts found in other database solutions, with other names such as record or table. Below you can find more details about:

- [Data entities](#data-entities)
- [Documents](#documents)
- [Fields](fields)
- [Indexes](#indexes)

### Data entities

Data entities are in the form of tables where documents and fields are recorded.

Master Data v1 data entities are referenced by acronyms composed of two capital letters. In v2, you can use the name of the data entity. For example, in v1, the 'CL' entity stores Client data from the store and 'AD' stores client addresses. Equivalent entities in v2 can be referenced with names such as 'Client' and 'Address'.

In a data entity date, the information is structured in [documents](#documents) and [fields](#fields).

### Documents

Documents are records in a data entity. If data entities are in the form of tables, each document represents a row in a table.

For example, within an entity that stores client data from the store, such as 'CL' or 'Client', each document contains information from a client.

Each document has an ID automatically generated by the platform at the time of its creation, a unique code that identifies that record.

### Fields

The attributes that make up Master Data documents are called fields. When comparing data entities with tables, we can think of the fields as the columns of a table.

For example, in an entity that stores client data from the store, such as 'CL' or 'Client', we may fill in fields such as **name**, **email**, **date of birth**, and **document**.

In Master Data v1, the fields must be filled in in the specific format configured in the data entity. Learn more about [the field types in Master Data v1](/en/docs/tutorials/data-entity#entendendo-os-tipos).

However, in v2, there is no restriction on fields and formats. Format validation is made through [JSON schemas](#v2-schemas).

#### Nested properties

Master Data v2 allows you to structure the data with nested properties, a structure often found in the [JSON](https://www.json.org/json-en.html) format. This concept consists of the possibility of creating composite fields from other fields, to better structure the data. For example, a client profile might have the field 'Document', which in turn consists of the 'Type' and 'Number' properties. You can also create nested [triggers](#triggers).

### Indices

Indices are used to specify a document to be accessed, indicated by an indexed field instead of its ID.

As mentioned above, each document has an ID automatically generated by the platform at the time of its creation. If you want to query a document but do not know its ID, you can use indices.

For example, you can query a document with a client's information by specifying the value of the 'email' field for the client.

> ℹ️ Learn more about [setting up indexes in Master Data v1](/en/docs/tutorials/indexes-in-master-data) or [setting up indexes with Master Data v2 API](https://developers.vtex.com/vtex-rest-api/reference/putindices).

## Triggers

A Master Data trigger is a mechanism that performs an action after creating or updating a document, if the conditions set in the configuration are met. These actions can be of three types:
- Send HTTP request.
- Send an email.
- Save document in another data entity.

Learn more about how [to configure triggers in Master Data v1](/en/docs/tutorials/creating-trigger-in-master-data) or how [to configure triggers with Master Data v2 API](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)

## v2 schemas

With Master Data v2, you can define data formats with JSON schemas. This format indicates how the Master Data should validate and index documents.

> ℹ️ Learn more about [JSON schemas](https://json-schema.org/).

You can save a document to any data entity if the content is a valid JSON. A data entity may or may not have multiple JSON schemas associated with it.

![Master Data schemas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/master-data/master-data-basics/master-data_1.jpg)

> ℹ️ A document can be compatible with multiple JSON Schemas, but also with none.

## Master Data native entities

Some data entities are automatically created by VTEX to support native platform features.

### Master Data v1 native entities

| **Entity** | **Description** |
|----------|--------|
| `ad` | Customer addresses |
| `AS` | Availability Notifier (most likely source) |
| `au` | Audit log |
| `bb` | Buzz billing |
| `bk` | Bucket (generic key/value) |
| `bo` | BridgeOrder |
| `bx` | Buzz extract |
| `cl` | Customer accounts (clients) |
| `CS` | Casino Gift Card |
| `gc` | Gift cards |
| `gt` | Gift card constraints |
| `hl` | Holidays |
| `il` | Internal logs |
| `iw` | Internal warnings |
| `iy` | Availability item |
| `mb` | BridgeOrderMarketplace |
| `od` | Orders |
| `rd` | Order (mirror) |
| `sb` | BridgeOrderSeller |
| `se` | - |
| `sl` | - |
| `so` | Stores |
| `SP` | Middleware Smiles Checkout |

### Master Data v2 native entities

| **Entity** | **Description** |
|----------|--------|
| `account` | Digital Currency |
| `affiliates` | Affiliates |
| `affiliatesOrders` | Affiliates Commission Service |
| `agentchangeappstate` | Agent change app state |
| `aggregateddayorders` | Aggregated day orders |
| `audit` | v2 Audit entity |
| `b2b_profiles` | Storefront Permissions |
| `b2b_quote_marketplace` | b2b_quote_marketplace |
| `b2b_roles` | Storefront Permissions |
| `b2b_seller_quote` | b2b_seller_quote |
| `b2b_users` | Storefront Permissions (owner) |
| `badges` | Badges |
| `business` | Sales Autopilot Service |
| `BusinessOrganization` | Easy Setup (legacy B2B seeder) |
| `BusinessPermission` | Easy Setup (legacy B2B seeder) |
| `BusinessRole` | Easy Setup (legacy B2B seeder) |
| `buyerOrgConfiguration` | VTEX B2B Core |
| `buyerOrgMember` | VTEX B2B Core |
| `campaigns` | Opt-in Campaign Service (shared with Opt-in Campaign Listener) |
| `CANCEL_ORDER_FISCAL_CODE` | Order SMS Notification |
| `charge` | Digital Currency |
| `checkoutcustom` | Checkout UI Custom |
| `commissionBySKU` | Affiliates Commission Service |
| `commissioningreportentry` | Commissioning report entry |
| `commissioninvoices` | Mktplace Financial Commissions |
| `contact_information` | contact_information |
| `cost_centers` | B2B Organizations GraphQL |
| `creditAccount` | Digital Currency |
| `custom_prices` | Custom Prices (B2B) |
| `customFieldSettings` | v2 custom field settings |
| `customFieldValues` | v2 custom field values |
| `dataentitysettings` | Data entity settings |
| `defaultValues` | defaultValues |
| `eventinfo` | Worldline Global Collect |
| `eventRegistry` | Spreadsheet Event Broadcaster |
| `evolutionAppsUpdateEvent` | Account Updates |
| `evolutiondeloreanupdateevent` | Evolution Delorean update event |
| `evolutionworkspacepromotion` | Evolution workspace promotion |
| `exemption` | Avalara |
| `externalinvoices` | Mktplace Financial Commissions |
| `fbeconfiguration` | FBE configuration |
| `fulfillment-points` | Admin Operational Capacity |
| `giftCardList` | Gift Card List |
| `import_session` | Products Import |
| `import_session_config` | Products Import |
| `instoreSettings` | Admin InStore (POS) |
| `interaction` | Shipment Tracker |
| `leyGondolas` | Admin Ley de Góndolas ARG |
| `logisticsorderinfo` | Logistics order info |
| `mcf_admin_app` | Amazon MCF Admin |
| `module` | Sales Autopilot Service |
| `multiTransaction` | Smiles Payment Provider MD |
| `myWishlist` | Wishlist v2 |
| `myWishlists` | myWishlists |
| `notify` | Availability Notifier |
| `onboarding` | Adyen Platforms |
| `onboarding_modifications` | Orders GraphQL |
| `ORDER_FISCAL_CODE` | Order SMS Notification |
| `orderInfo` | Octopia (casino) |
| `orders` | v2 Orders entity |
| `ordersWithExternalPromotions` | External Promotion Monitoring GraphQL |
| `organization_requests` | B2B Organizations GraphQL |
| `organizations` | B2B Organizations GraphQL |
| `packages` | Packages |
| `paymentid2c2p` | Payment 2C2P |
| `payuStatus` | PayU Europe Connector |
| `pickup_points` | Pickup points |
| `pins` | Sales Performance GraphQL |
| `productInfo` | Octopia (casino) |
| `productReviews` | Reviews and Ratings |
| `productsWithError` | Products Monitoring Service |
| `promotionsCron` | Opt-in Campaign Service |
| `promotionsTrack` | Opt-in Campaign Service |
| `proposal` | Sales Autopilot Service |
| `queuemessagevo` | v2 queue message value object |
| `quotes` | B2B Quotes GraphQL |
| `rangeSafelist` | Opt-in Campaign Listener |
| `report_generations` | Report generations |
| `report_maps` | Report maps |
| `Reseller` | Easy Setup (legacy B2B seeder) |
| `ReturnApp` | ReturnApp |
| `returnRequest` | Return App |
| `scheduler` | v2 scheduler |
| `sellerInfo` | Vertex O Series |
| `sellersdashboards` | Mktplace Financial Commissions |
| `shipment` | Shipment Tracker |
| `shopper` | v2 shopper profile |
| `smilesProductMapping` | Smiles Payment Provider MD |
| `smilesSellerConfiguration` | Smiles Payment Provider MD |
| `smilesTransaction` | Smiles Payment Provider MD |
| `smsMessagesSchema` | Orange SMS Integration |
| `SNA` | Seller Notification App |
| `srapi` | SRAPI |
| `statisticsdashboards` | Mktplace Financial Commissions |
| `stores` | Stores |
| `subscription` | v2 subscription (recurrent commerce) |
| `subscription_cohort` | Subscription cohort |
| `subscription_history` | Subscription history |
| `subscription_orders` | Subscription orders |
| `subscriptions` | Subscriptions |
| `subscriptions_group` | Subscriptions group |
| `subscriptions_thin` | Subscriptions thin |
| `templates` | Marketing Autopilot Service |
| `tms_orders` | TMS orders |
| `tradePolicyConfig` | Vertex O Series |
| `trainingBanners` | Training Banners App |
| `transaction` | Digital Currency |
| `transportation_order` | Transportation order |
| `userAffiliation` | Affiliates |
| `UserOrganization` | Easy Setup (legacy B2B seeder) |
| `vendors` | Vendors |
| `vendors_carts` | Vendors carts |
| `views` | Sales Performance GraphQL |
| `vtex_admin_cms_graphql_content` | Admin CMS GraphQL (declares this v2 native) |
| `vtex_admin_cms_graphql_contentVariant` | Admin CMS GraphQL (declares this v2 native) |
| `vtex_orders_graphql_onboardingusers` | Orders GraphQL onboarding users |
| `wishlist` | Wishlist (legacy .NET) |
| `wishlistitems` | Wishlist IO |
| `wishlists` | Wishlist IO |

## Custom data entities

In addition to the [native entities](#master-data-native-entities) automatically created by VTEX, such as `CL` (clients), `AD` (addresses), and other standard entities of the commerce platform, your operation can create custom data entities to store business-specific information.

Custom entities can be created:

- In v1, through the VTEX Admin. Learn how to [create a data entity](/en/docs/tutorials/data-entity).
- In v2, exclusively through the [Master Data v2 API](https://developers.vtex.com/docs/api-reference/master-data-api-v2).

### Billing

The use of native entities is free of charge. The use of custom entities is billed monthly, with tiers based on the total number of documents stored. For billing purposes, each file of up to 100KB is counted as one document.

To learn about the amount applicable to your operation, see your commercial agreement or contact [VTEX support](https://support.vtex.com/).

For each payment made during the term of the agreement, a billing credit corresponding to 2% of the net amount paid for VTEX Commerce Platform and CX Commerce Platform products will be granted. The credits accumulate throughout the term of the agreement and remain available for use until its termination.

Measurement and billing follow a monthly cycle:

- At the end of each month, a snapshot of the document volume stored in non-native entities is generated.
- By the 30th of each month, VTEX calculates the amounts related to Master Data usage and the applicable credits for the next invoice.


> ℹ️ To view billing details, learn how to [download VTEX invoices](/en/docs/tutorials/how-to-download-the-vtex-invoices).

## Applications

Both versions of Master Data are extremely flexible, allowing you to meet a variety of your store's needs. You may check below some examples of applying Master Data functionalities.

### A/B Testing

With v2 triggers, you can establish multiple actions for the same trigger by setting the load percentage that each action should receive. Therefore, it is possible to comparatively test the impact of different automations on your store.

Learn how to configure [A/B testing with Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Abandoned cart

Master Data can also be used to create abandoned cart integrations, i.e. performing automatic actions whenever clients add products to their store cart and log out without checking out.

To learn more, please see this guide on [abandoned cart configuration](/en/docs/tutorials/setting-up-abandoned-carts)

