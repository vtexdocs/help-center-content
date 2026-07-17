---
title: 'Master Data'
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2026-07-08T18:37:00.000Z
contentType: tutorial
productTeam: Master Data
slugEN: master-data
locale: en
---

Master Data is a highly customizable VTEX platform solution for databases, which also allows you to create applications.

By default, Master Data is used to store and organize your store's customer data. It features a powerful search engine that allows you to store, search, expand, and customize data.

In this article, you'll find details about each available version of Master Data, key concepts, and how to use them.

> ℹ️ Note that depending on the feature and version you want to use, you'll need to contact your operation's development team.

## Available versions

There are currently two available versions, and you can choose the one that best fits your operation's needs. The main difference between the two is that v2 doesn't have a graphical interface and can only be used through the [Master Data API v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2), even though it has other relevant features, such as the use of [JSON schemas](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema).

> ℹ️ VTEX automatically saves your store's customer data in Master Data v1.

Check the table below to learn more about how the features of each version differ.

| Functionality | v1 | v2 | Learn more |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Graphical interface                     | Yes                                                                                                                                                                                                                             | No                                                                                                                                            | -                                                                                                                                                                                                                                                                                                                                                                                                   |
| API                                     | Yes                                                                                                                                                                                                                             | Yes                                                                                                                                           | - [Master Data API v1](https://developers.vtex.com/docs/api-reference/masterdata-api)<br>- [Master Data API v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#overview)                                                                                                                                                                                                         |
| Spreadsheet import and export           | Yes                                                                                                                                                                                                                             | No                                                                                                                                            | - [Importing data to Master Data v1](/docs/tutorials/importing-data-into-master-data-v1)<br>- [Exporting data from Master Data v1](/docs/tutorials/exporting-data)                                                                                                                                                                                                                                  |
| Attachments (images) | Yes                                                                                                                                                                                                                             | No                                                                                                                                            | -                                                                                                                                                                                                                                                                                                                                                                                                   |
| Triggers                                | Yes                                                                                                                                                                                                                             | Yes                                                                                                                                           | - [Triggers](#triggers)<br>- [Creating triggers with Master Data v1](/docs/tutorials/creating-trigger-in-master-data)<br>- [Creating triggers with Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2)                                                                                                                                                   |
| JSON Schemas                            | No                                                                                                                                                                                                                              | Yes                                                                                                                                           | - [JSON Schemas](http://json-schema.org/)<br>- [Understanding JSON schemas](https://json-schema.org/understanding-json-schema)<br>- [Getting started with JSON schemas in Master Data v2](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema)<br>- [Schema lifecycle in Master Data v2](https://developers.vtex.com/docs/guides/master-data-schema-lifecycle) |
| Nested properties                       | No                                                                                                                                                                                                                              | Yes                                                                                                                                           | - [Nested properties](#nested-properties)                                                                                                                                                                                                                                                                                                                                                           |
| Data entities                           | Referenced by acronyms composed of two uppercase letters. For example, the entity 'CL' stores customer data, and 'AD' stores their address data. They can't be created via API. | Referenced by name. For example, 'Notification'. They can only be created via API.            | - [Data entities](#data-entities)<br>- [Data entities in Master Data v1](/docs/tutorials/data-entity)<br>- [Creating relationships between Master Data v2 data entities](https://developers.vtex.com/docs/guides/creating-relationships-between-data-entities-using-api)                                                                                                                            |
| Fields                                  | They must be completed in the specific format configured in the data entity.                                                                                                                                    | In principle, there are no restrictions on fields or formats. Format validation happens through JSON schemas. | - [Field types in Master Data v1](/docs/tutorials/data-entity#data-types)<br>- [JSON schemas](#v2-schemas)                                                                                                                                                                                                                                                                                          |
| Indexes                                 | Yes                                                                                                                                                                                                                             | Yes                                                                                                                                           | - [Configure indices in Master Data v1](/docs/tutorials/indexes-in-master-data)<br>- [Configure indices with the Master Data v2 API](https://developers.vtex.com/docs/api-reference/master-data-api-v2#put-/api/dataentities/-dataEntityName-/indices)                                                                                                                                              |

> ❗ Note that the data entities of the two versions are independent, even if some may be analogous. This means that data created in a v1 entity can't be queried or edited using v2 resources and vice versa.

## Basic components

Both versions of Master Data use some basic components equivalent to concepts found in other database solutions, under different names such as records or tables. Below, you'll find more details about:

- [Data entities](#data-entities)
- [Documents](#documents)
- [Fields](#fields)
- [Indexes](#indexes)

### Data entities

Data entities are like tables where documents and fields are recorded.

Master Data v1 data entities are referenced by acronyms composed of two uppercase letters. In v2, you can use the data entity name instead. For example, in v1 the `CL` entity stores customer data, while `AD` stores their address data. Equivalent entities in v2 can be referenced with names such as `Client` and `Address`.

In a data entity, information is structured into [documents](#documentos) and [fields](#campos).

### Documents

Documents are records within a data entity. If data entities are like tables, each document is a row in a table.

For example, within a data entity that stores the store's customer data, such as `CL` or `Client`, each document contains information about a customer.

Each document has an ID automatically generated by the platform when it's created, a unique code that identifies that record.

### Fields

The attributes that compose Master Data documents are called fields. When comparing data entities to tables, you can think of fields as the columns of a table.

For example, in an entity that stores the store's customer data, such as `CL` or `Client`, you can complete fields like **name**, **email**, **date of birth**, and **document**.

In Master Data v1, fields must be completed in the specific format configured for the data entity. Learn more about [field types in Master Data v1](/docs/tutorials/data-entity).

In v2, however, there's no restriction on fields or formats at first. Format validation happens through [JSON schemas](#v2-schemas).

#### Nested properties

Master Data v2 allows you to structure data with nested properties, a format often used in [JSON](https://www.json.org/json-en.html). This concept allows you to create fields composed of other fields for better data structuring. For example, a customer profile can have a `Document` field, which in turn is composed of the `Type` and `Number` properties. You can also create nested [triggers](#triggers).

### Indexes

Indexes are used to specify a document to be accessed, identified by an indexed field instead of its ID.

As mentioned above, each document has an ID automatically generated by the platform when it's created. If you want to query a document but don't know its ID, you can use indexes.

For example, you can query a document containing a customer's information by specifying the value of the `email` field associated with that customer.

> ℹ️ Learn more about how to [configure indexes in Master Data v1](/docs/tutorials/indexes-in-master-data) or [configure indexes with the Master Data v2 API](https://developers.vtex.com/vtex-rest-api/reference/putindices).

## Triggers

A Master Data trigger is a mechanism that executes an action after a document is created or updated, provided the conditions set in the configuration are met. These actions can be of three types:

- Submit HTTP request.
- Send email.
- Save a document in another data entity.

Learn more about how to [configure triggers in Master Data v1](/docs/tutorials/creating-trigger-in-master-data) or how to [configure triggers with the Master Data v2 API](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).

## v2 schemas

With Master Data v2, you can define data formats using JSON schemas. This format indicates how Master Data should validate and index documents.

> ℹ️ Learn more about [JSON schemas](https://json-schema.org/).

You can save a document in any data entity as long as the content is valid JSON. A data entity may or may not have multiple JSON schemas associated with it.

![Master Data schemas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/master-data/master-data-basics/master-data_1.jpg)

> ℹ️ A document can be compatible with multiple JSON schemas, or with none at all.

## Master Data native entities

Some data entities are automatically created by VTEX to support native platform features.

### Master Data v1 native entities

| **Entity** | **Description** |
|----------|--------|
| `ad` | Customer addresses |
| `ae` |  |
| `al` |  |
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
| `SP` | Smiles Checkout Middleware |

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
| `bulkstatus` | Bulk status |
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
| `clients` | Clients |
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
| `instoreSettings` | Admin inStore (POS) |
| `interaction` | Shipment Tracker |
| `inventory` | Inventory |
| `itemavailability` | Item availability |
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
| `orders_items` | Order items |
| `orders_logistics` | Order logistics |
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
| `schema` | Schema |
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
| `subscription_metric` | Subscription metric |
| `subscription_orders` | Subscription orders |
| `subscription_preferences` | Subscription preferences |
| `subscriptions` | Subscriptions |
| `subscriptions_execution` | Subscriptions execution |
| `subscriptions_group` | Subscriptions group |
| `subscriptions_thin` | Subscriptions thin |
| `templates` | Marketing Autopilot Service |
| `tms_orders` | TMS orders |
| `tradePolicyConfig` | Vertex O Series |
| `trainingBanners` | Training Banners App |
| `transactions` | Digital Currency |
| `transportation_order` | Transportation order |
| `undefined` |  |
| `userAffiliation` | Affiliates |
| `UserOrganization` | Easy Setup (legacy B2B seeder) |
| `vendors` | Vendors |
| `vendors_carts` | Vendors carts |
| `views` | Sales Performance GraphQL |
| `vtable` |  |
| `vtex_admin_cms_graphql_builder` | Admin CMS GraphQL builder |
| `vtex_admin_cms_graphql_content` | Admin CMS GraphQL (declares this v2 native) |
| `vtex_admin_cms_graphql_contentVariant` | Admin CMS GraphQL (declares this v2 native) |
| `vtex_admin_media_image` | Admin media image |
| `vtex_affiliates_affiliates` | Affiliates |
| `vtex_affiliates_commission_service_affiliatesorders` | Affiliates Commission Service |
| `vtex_affiliates_commission_service_commissionbysku` | Affiliates Commission Service |
| `vtex_affiliates_useraffiliation` | Affiliates |
| `vtex_b2b_core_buyerorgconfiguration` | VTEX B2B Core |
| `vtex_b2b_core_buyerorgmember` | VTEX B2B Core |
| `vtex_badges_badges` | Badges |
| `vtex_builder_hub_appid_to_schema` | Builder Hub |
| `vtex_builder_hub_appversion_to_mostrecentschema` | Builder Hub |
| `vtex_connector_payu_payustatus` | PayU Europe Connector |
| `vtex_defense_mode_threats` | Defense Mode threats |
| `vtex_gift_card_list_giftcardlist` | Gift Card List |
| `vtex_innoship` | Innoship |
| `vtex_list_graphql_userlistitems` | List GraphQL user list items |
| `vtex_list_graphql_userlists` | List GraphQL user lists |
| `vtex_list_graphql_users` | List GraphQL users |
| `vtex_onboarding_seller_sellerinvitations` | Seller onboarding invitations |
| `vtex_orders_graphql_onboardingusers` | Orders GraphQL onboarding users |
| `vtex_pagespeed_graphql_top_pages` | PageSpeed GraphQL top pages |
| `vtex_pagespeed_graphql_toppages` | PageSpeed GraphQL top pages |
| `vtex_pagespeed_graphql_tracked_pages` | PageSpeed GraphQL tracked pages |
| `vtex_pagespeed_graphql_trackedpages` | PageSpeed GraphQL tracked pages |
| `vtex_ppp_stripe_connect_sellerorders` | Stripe Connect seller orders |
| `vtex_products_monitoring_service_productswitherror` | Products Monitoring Service |
| `vtex_return_app_returnrequest` | Return App |
| `vtex_sales_performance_graphql_pins` | Sales Performance GraphQL |
| `vtex_sales_performance_graphql_views` | Sales Performance GraphQL |
| `vtex_spreadsheet_event_broadcaster_eventregistry` | Spreadsheet Event Broadcaster |
| `vtex_wishlist_io_wishlistitems` | Wishlist IO |
| `vtex_wishlist_io_wishlists` | Wishlist IO |
| `wishlist` | Wishlist (legacy .NET) |
| `wishlistitems` | Wishlist IO |
| `wishlists` | Wishlist IO |

## Custom data entities

In addition to the [native entities](#master-data-native-entities) automatically created by VTEX, such as `CL` (customers), `AD` (addresses), and other default entities of the commerce platform, your operation can create custom data entities to store business-specific information.

You can create custom entities as follows:

- In v1, through the VTEX Admin. Learn how to [create a data entity](/docs/tutorials/data-entity).
- In v2, exclusively through the [Master Data v2 API](https://developers.vtex.com/docs/api-reference/master-data-api-v2).

### Billing

The use of native entities is free of charge. The use of custom entities is billed monthly, with tiers based on the total number of documents stored. For billing purposes, each file up to 100KB is counted as one document.

To learn about the amounts applicable to your operation, see your commercial agreement or contact [VTEX support](https://support.vtex.com/).

For each payment made during the term of the agreement, a billing credit equivalent to 2% of the net amount paid for VTEX Commerce Platform and CX Commerce Platform products is granted. The credits accumulate throughout the agreement and remain available for use until its termination.

Measurement and billing follow a monthly cycle:

- At the end of each month, a snapshot of the number of documents stored in custom entities is generated.
- By the 30th of each month, VTEX calculates the amounts related to Master Data usage and the applicable credits for the next invoice.

> ℹ️ To track the number of documents in custom entities throughout the month, check the **Master Data usage** dashboard in the VTEX Admin. This dashboard is updated weekly and is intended only for usage tracking. To learn how to access it, see [Checking Master Data usage in the VTEX Admin](/docs/tutorials/checking-master-data-usage-in-the-vtex-admin).

> To view billing details, learn how to [download VTEX invoices](/docs/tutorials/how-to-download-the-vtex-invoices).

### Delete entity vs. delete documents

When trying to reduce the volume counted in the monthly billing snapshot, it is important to distinguish deleting the **data entity** (structure in VTEX Admin) from deleting **documents** (stored records).

> ⚠️ Deleting a custom data entity through the Master Data v1 interface removes the entity definition, but does not delete the documents (records) already stored. The billed volume remains unchanged until the records are removed via the API. To delete documents and reduce billing, see the [Deleting documents in Master Data v1](https://developers.vtex.com/docs/guides/deleting-documents-in-master-data-v1) guide on the Developers Portal.

## Applications

Both versions of Master Data are natively suitable for managing your store's customer data. As mentioned above, they're extremely flexible, allowing you to meet a variety of your store's needs. See below some examples of how Master Data features can be applied beyond basic customer data management.

### A/B tests

With v2 triggers, you can configure multiple actions for the same trigger and define the percentage of load each action should receive. This allows you to comparatively test the impact of different automations in your store.

Learn how to configure [A/B tests with Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Abandoned cart

Master Data can also be used to create abandoned cart integrations. In other words, automatic actions triggered whenever a customer adds products to the cart and ends their session without completing the purchase.

To learn more, see this guide on [configuring abandoned cart](/docs/tutorials/setting-up-abandoned-carts)
