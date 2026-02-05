---
title: 'Catalog Data Pipeline'
id: 7ARDELPaugrBu5dZT7Vx2b
status: PUBLISHED
createdAt: 2025-03-06T15:48:35.084Z
updatedAt: 2025-08-12T14:55:58.564Z
publishedAt: 2025-08-12T14:55:58.564Z
firstPublishedAt: 2025-03-07T11:30:01.994Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: catalog-data-pipeline
legacySlug: catalog-data-pipeline
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---


The dataset consists of five tables that provide the most recent catalog information for a VTEX account. This dataset provides information on **products, SKUs, brands, categories** and **specifications.**

> ⚠️ In the Catalog data model, only **Brands** and **Categories** with at least one product or SKU linked in the catalog are eligible for submission, regardless of active status.

In this section you will find the following information:

- [Data characteristics](#data-characteristics)  
- [Table: product](#table-product)  
- [Table: SKU](#table-sku)  
- [Table: brand](#table-brand)  
- [Table: category](#table-category)  
- [Table: specification](#table-specification)  
- [Table: cluster](#table-cluster)  
- [Analysis with catalog data](#analysis-with-catalog-data)  
- [Correlations with other data](#correlation-with-other-data)  

## Data Characteristics 

| **Characteristic** | **Description** |  
|:---:|:---:|  
| **Data Source** | The data is obtained from the [catalog module](/en/docs/tutorials/catalog-overview). |  
| **Availability** | The data can be accessed in the VTEX Admin. |  
| **History** | The available data starts from February 2025. |  
| **Minimum Possible Update Interval** | One hour. |

## Table: product

The `product` table contains information about products registered in the VTEX catalog, including identifiers, categories, brands, and visibility in the store. It also stores information about images, related SKUs, and sales channels in which the product is available. It also records important dates, such as creation, update, and launches.

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| account | character varying(255) | Account who owns the given product. |
| product_id | integer	 | Identifier created by VTEX when we create this product. It's unique for each account. |
| product_ref_id | character varying(255)	 | Reference code used internally for organizational purposes, which is configured by the Merchant. |
| brand_id | super | Brand's Identifier of the given product. |
| category_id | super | Reference code used internally for organizational purposes. It has a hierarchical configuration. |
| skus | super | Array of collections to join with SKU table. |
| clusters_id | super | Identifier of the clusters. |
| product_name | character varying(255) | Name of the product. |
| product_image | character varying(65535)	 | This is the most common image used for the product SKUs we have data on. |
| is_active | boolean | This field defines, from Catalog's point of view, if a product is active or not. However, other factors can also impact whether this product will be available in the store, such as pricing and inventory. |
| is_visibile | boolean | Indicates if the product is visible in the store. |
| tax_code | character varying(255) | Product tax code, should be used for tax calculation and is registered by the Merchant. |
| product_path | character varying(255) | It's a part of the URL in the product page URL. |
| related_categories | super | Categories related to this product. |
| similar_categories | super | Similar Category List: This aids in categorizing items, such as placing both mouse and keyboard under the desktop category. |
| sales_channels | super | Define in which sales channels this product is being offered. |
| dt_first_release | timestamp with time zone | Planned product launch date as recorded in the Catalog's index. |
| dt_last_release | timestamp with time zone | Timestamp of the last release. |
| dt_created | timestamp with time zone	 | Timestamp when the record was created in our internal systems (UTC timezone). |
| dt_updated | timestamp with time zone	 | Timestamp when the record was updated in our internal systems (UTC timezone). |
| batch_id | character varying(13) | Identifier of the batch, used for processing and tracking data updates. |
| sk_product | character varying(32)	 | Synthetic key of the product, used as primary key, composed by the hash of account and its product_id. |
| sk_brand | character varying(32) | Foreign key for the brand, used to join with the brand table, composed by the hash of account and its brand_id. |
| sk_category | character varying(32) | Foreign key for the category, used to join with the category table, composed by the hash of an account and its category_id. |
| sk_skus | super | Information about SKUs, used to join with the SKU table, composed by the hash of an account, its product_id and sku_id. |
| sk_cluster | super | Information about clusters, composed by the hash of an account and its cluster_id. |
| sk_related_categories | super | Information about related categories, it's a list of categories related to this product and have an hierarchical configuration. |

## Table: SKU

This table details the SKUs associated with products. It includes unique identifiers, physical dimensions, manufacturer codes, and EANs. It also stores information about images, additional services, kits, and attributes specific to each SKU. Creation and update dates are recorded for tracking.  

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| account | character varying(255)	 | Account who owns the given product. |
| product_id | bigint | Identifier created by VTEX when we create this product. It's unique for each account. |
| sku_id | bigint | Identifier of that SKU. |
| is_active | boolean | This field defines, from Catalog's point of view, if a product is active or not. However, other factors can also impact whether this product will be available in the store, such as pricing and inventory. |
| is_kit | boolean | This flag indicates whether the SKU is a kit consisting of multiple products. |
| sku_ref_id | character varying(65535)	 | Reference code used internally for organizational purposes. Configured by the merchant. |
| sku_dimensions | super | Product dimensions for each SKU, most commonly used for shipping calculations. Contains: cubicWeight, heightCentimeter, lenghtCentimeter, weightKg, widthCentimenter. |
| sku_real_dimensions | super | Product dimensions without boxes or packaging, used more on the PDP. Contains: cubicWeight, heightCentimeter, lenghtCentimeter, weightKg, widthCentimenter. |
| sku_manufacturer_code | character varying(65535)	 | Code used by merchant to reference the manufacturer. |
| sku_eans | super | EAN codes for the SKU (it's possible to have more than one EAN for the same SKU) |
| sku_kit_items | super | Items included in the SKU kit. |
| sku_image_url | character varying(65535)	 | URL with the product's image. |
| sku_image_gallery | super | Gallery of SKU images. |
| sku_services | super | Services related to this product (like a birthday package), used for cross-sell. |
| sku_attachments | super | Attachments related to the SKU, such as customizations. |
| sku_attributes | super | Attributes of the SKU. |
| sku_videos | super | Videos related to the SKU. |
| sku_files | super | Files associated with the SKU. |
| dt_created | timestamp with time zone	 | Timestamp when the record was created in our internal systems (UTC timezone). |
| dt_updated | timestamp with time zone	 | Timestamp when the record was updated in our internal systems (UTC timezone). |
| batch_id | character varying(13) | Identifier of the batch, used for processing and tracking data updates. |
| sk_sku | character varying(32)	 | Unique identifier for the SKU, used to join with the product table, composed by hash of account, product_id and sku_id. |
| sk_product | character varying(32)	 | Unique identifier for the product. |
| sk_category | character varying(32) | Foreign key for the category, used to join with the category table, composed by the hash of an account and its category_id. |
| sk_skus | super | Information about SKUs, used to join with the SKU table, composed by the hash of an account, its product_id and sku_id. |
| sk_cluster | super | Information about clusters, composed by the hash of an account and its cluster_id. |
| sk_related_categories | super | Information about related categories, it's a list of categories related to this product and have an hierarchical configuration. |

## Table: brand

The `brand` table contains information about the brands registered in the VTEX catalog, including identifiers, names, and activation status. It also keeps records of creation and update, as well as a unique identifier for integration with other tables.

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| account | character varying(255)	 | Account associated with the brand. It represents the account that owns the given product. |
| brand_id | bigint | Unique identifier for the brand. This identifier is created by VTEX when the brand is created. |
| brand_name | character varying(65535)	 | Name of the brand. This is the brand's name associated with the given product. |
| is_active | boolean | Indicates whether the brand is active. This boolean defines if a brand is available or not. |
| dt_created | timestamp with time zone | Timestamp when the record was created in our internal systems (UTC timezone). |
| dt_updated | timestamp with time zone | Timestamp when the record was updated in our internal systems (UTC timezone). |
| batch_id | character varying(13) | Identifier for the batch in which the record was processed. |
| sk_brand | character varying(32)	 | Unique identifier for the brand in catalog. This identifier is created by hash concatenating the brand_id and account. |

## Table: category

The `category` table presents products in hierarchical categories. It stores identifiers, names, full category paths, and activation status. It allows organizing products within the catalog structure.

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| sk_category | character varying(32) | Synthetic key created by hashing of account and category_id, its used as primary key. |
| account | character varying(255) | Account who owns the given category. |
| category_id | bigint | Unique identifier of the category. |
| category_name | character varying(65535) | The name of the category that the product was associated with. |
| category_full_path_uri_name | character varying(65535) | Reference for hierarchical path of category, related with the name of each category. |
| category_full_path | character varying(65535)	 | Reference for hierarchical path of category, but using the id of each category. |
| is_active | boolean | Flag to validate category activation. |
| dt_created | timestamp with time zone | Timestamp when the record was created in our internal systems (UTC timezone). |
| dt_updated | timestamp with time zone | Timestamp when the record was updated in our internal systems (UTC timezone). |
| batch_id | character varying(13) | Identifier of the batch, used for processing and tracking data updates. |

## Table: specification

The `specification` table stores technical specifications of products and SKUs, such as specification groups, assigned values, and whether a specification is required. It also contains identifiers to facilitate integration with products, SKUs, and specification groups, ensuring more accurate detailing of registered items.

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| sk_specification | character varying(32) | Synthetic key identifier created by data team for the specification item in catalog. It is composed by the hashing of account and product_id, sku_id, specification_group_id, specification_id and value_id. When value_id was null, we changed for -1. |
| sk_product | character varying(32) | Unique identifier for the product, used to join with the product table, it's composed by account and product_id. |
| sk_specification_group | character varying(32) | Unique identifier for the specification group. It's composed by account and specification_group_id. |
| sk_sku | character varying(32) | An unique identifier for the SKU, used to join with the SKU table, is composed by account, product_id and sku_id. |
| account | character varying(255) | Account associated with the specification. |
| product_id | bigint | Identifier for the product |
| sku_id | bigint | Identifier for the SKU |
| specification_group_id | bigint | Identifier for the specification group |
| specification_group_name | character varying(65535) | Name of the specification group |
| specification_id | bigint | Identifier for the specification |
| specification_name | character varying(65535)	 | Name of the specification |
| specification_is_required | boolean | Indicates if the specification is required |
| specification_value_id | bigint | Identifier for the specification value |
| specification_value | character varying(65535)	 | Value of the specification |
| is_product_specification | boolean | Indicates if it is a product specification |
| is_sku_specification | boolean | Indicates if it is a SKU specification |
| dt_created | timestamp with time zone | Timestamp when the record was created in our internal systems (UTC timezone). |
| dt_updated | timestamp with time zone | Timestamp when the record was updated in our internal systems (UTC timezone). |
| batch_id | character varying(13) | Identifier of the batch, used for processing and tracking data updates. |

## Table: cluster

The `cluster` table saves information about account groupings, representing sets of stores or sellers.

| **Column name**        | **Column type**  | **Column description** |
|--------------------|--------------|--------------------|
| sk_category       | character varying(32)      | Synthetic key created by hashing of account and category_id, is used as primary key. |
| account          | character varying(255)     | Account associated with the cluster, representing the merchant or store. |
| cluster_id       | bigint                      | Identifier for the cluster, unique within the account. |
| cluster_name     | character varying(65535)   | Name of the cluster, used for display and identification purposes. |
| is_active        | boolean                     | Indicates if the cluster is active and should be considered in operations. |
| is_searchable    | boolean                     | Indicates if the cluster is searchable and can be found through search functionalities. |
| cluster_date_from | timestamp with time zone  | Start date of the cluster, indicating when the cluster becomes active. |
| cluster_date_to   | timestamp with time zone  | End date of the cluster, indicating when the cluster becomes inactive. |
| dt_created      | timestamp with time zone   | Timestamp when the record was created in our datalake, used UTC timezone. |
| dt_updated      | timestamp with time zone   | Timestamp when the record was updated in our datalake, used UTC timezone. |
| batch_id        | character varying(13)      | Identifier of the batch, used for processing and tracking data updates. |

## Analyses with catalog

Some analysis options with catalog data are:

- **Verify a product's status:** use the "isActive" field to check if the Catalog module considers a product active.  
- **Identify related SKUs:** obtain a list of all SKUs linked to a parent product.  
- **Detail product specifications:** retrieve all specifications of a product, including its brand, category, and other relevant details.  

## Correlations with other data

Catalog data is strongly connected to various other data models. Here are some noteworthy correlations:  

- **Relationship with Inventory:** by integrating catalog data with inventory information, you can precisely determine the available stock for each product.  
- **Relationship with Orders:** combining catalog data with order details enables you to accurately analyze the number of orders associated with each product in your catalog.  
- **Impact on Conversion Rate:** evaluating navigation data to determine the store's funnel conversion rate helps you understand how each product plays a role in users' navigation behavior.  

### Discover other Datasets

- [Inventory](/en/docs/tutorials/inventory-data-pipeline-beta)   
- [Payments](/en/docs/tutorials/payments)  
- [Orders](/en/docs/tutorials/orders-data-pipeline-beta) 
- [Prices](/en/docs/tutorials/prices-data-pipeline-beta)  
- [Promotions](/en/docs/tutorials/promotions)
- [Gift cards](/en/docs/tutorials/gift-card-data-pipeline)
- [Bridge logs](/en/docs/tutorials/bridge-logs-data-pipeline)

