---
title: 'SKUs'
id: 4zkfF1asM3ayvIigsySevw
status: DRAFT
createdAt: 2024-02-02T18:06:58.601Z
updatedAt: 2024-05-27T20:55:21.862Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: skus
legacySlug: skus
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

# SKUs

The SKU dataset is composed of the `products_sku` table. This table centralizes detailed product information, including identifiers, descriptions, and brand data, making it easier to manage and analyze product catalogs.

This section includes the following information:

- [Characteristics of SKU data](#data-characteristics)
- [Table: products_sku](#table-products_sku)
- [Analyses with products_sku](#analyses-with-products_sku)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

|**Characteristic**|**Description**|
| - | - |
|**Data source**|Obtained from the **product catalog**.|
|**Availability**|Catalog data can be accessed through the VTEX Admin report and also via the [Catalog APIs](https://developers.vtex.com/docs/api-reference/catalog-api/).|
|**History**|The data is retained for two years, from 2024 for clients who already use the VTEX platform.|
|**Minimum update interval**|One hour.|

## Table: products_sku

In addition to the catalog data, this table also centralizes product identification information, such as description, brand, and specifications. The table fields are described below.

| **Column name** | **Column type** | **Column description** |
|:---:|:---:|:---:|
| **id** | integer | Unique product identifier. |
| **product_id** | integer | Unique product identifier in the system. |
| **name_complete** | character varying(255) | Full product name. |
| **complement_name** | character varying(255) | Additional product name. |
| **product_name** | character varying(255) | Product name. |
| **product_description** | character varying(1000) | Detailed product description. |
| **sku_name** | character varying(255) | Product SKU name. |
| **product_ref_id** | character varying(255) | External or internal product reference. |
| **tax_code** | character varying(255) | Tax code associated with the product. |
| **is_active** | boolean | Specifies whether the product is active. |
| **is_transported** | boolean | Specifies whether the product can be transported. |
| **is_inventoried** | boolean | Specifies whether the product is subject to inventory. |
| **is_gift_card_recharge** | boolean | Specifies whether the product is a gift card reload. |
| **image_url** | character varying(1024) | Product image URL. |
| **detail_url** | character varying(1024) | Product details URL. |
| **csc_identification** | character varying(255) | CSC identification of the product. |
| **brand_id** | character varying(255) | Product brand identifier. |
| **brand_name** | character varying(255) | Product brand name. |
| **is_brand_active** | boolean | Specifies whether the product brand is active. |
| **dimension** | super | Product dimensions. |
| **real_dimension** | super | Actual product dimensions. |
| **manufacturer_code** | character varying(255) | Product manufacturer code. |
| **is_kit** | boolean | Specifies whether the product is a kit. |
| **kit_items** | super | Items included in the product kit. |
| **services** | super | Services associated with the product. |
| **categories** | super | Categories the product belongs to. |
| **categories_full_path** | super | Full path of product categories. |
| **attachments** | super | Attachments related to the product. |
| **collections** | super | Collections the product belongs to. |
| **sku_sellers** | super | Sellers of the product SKU. |
| **sales_channels** | super | Product sales channels. |
| **images** | super | Product images. |
| **videos** | super | Product videos. |
| **sku_specifications** | super | Product SKU specifications. |
| **product_specifications** | super | Product specifications. |
| **product_clusters_ids** | character varying(255) | Product cluster IDs. |
| **positions_in_clusters** | super | Positions in product clusters. |
| **product_cluster_names** | super | Names of product clusters. |
| **product_cluster_highlights** | super | Highlights of product clusters. |
| **product_category_ids** | character varying(255) | Product category IDs. |
| **is_direct_category_active** | boolean | Specifies whether the product's direct category is active. |
| **product_global_category_id** | integer | Global product category ID. |
| **product_categories** | super | Product categories. |
| **commercial_condition_id** | integer | ID of the product commercial condition. |
| **reward_value** | double precision | Reward value associated with the product. |
| **alternate_ids** | super | Alternative product IDs. |
| **alternate_id_values** | super | Values of the alternative product IDs. |
| **estimated_date_arrival** | character varying(255) | Estimated arrival date of the product. |
| **measurement_unit** | character varying(255) | Unit of measure of the product. |
| **unit_multiplier** | double precision | Product unit multiplier. |
| **information_source** | character varying(255) | Source of product information. |
| **modal_type** | character varying(255) | Type of product modal. |
| **key_words** | character varying(1000) | Keywords associated with the product. |
| **release_date** | character varying(255) | Product launch date. |
| **product_is_visible** | boolean | Specifies whether the product is visible. |
| **show_if_not_available** | boolean | Specifies whether the product should be shown even if it's not available. |
| **is_product_active** | boolean | Specifies whether the product is active. |
| **product_final_score** | integer | Final product score. |
| **account_name** | character varying(255) | Name of the account associated with the product. |
| **batch_id** | character varying(13) | Control ID of the data ingestion batch. |

## Analyses with products_sku

Some of the analyses that can be run using the catalog table are mentioned below:

- **Product performance analysis:** Calculate sales by SKU to identify the most popular products, targeting marketing and replenishment strategies.  
- **Product category trends:** Group SKUs by category to analyze sales trends in different segments, adjusting the catalog focus as needed.  
- **Price and promotion analysis:** Examine the prices and commercial conditions of each SKU to identify opportunities for promotions and price adjustments.  
- **Inventory monitoring:** Check the availability of each SKU against sales trends to manage inventory efficiently.  

## Correlations with other data

Catalog data correlations with other datasets are key for deeper analysis. Some of these correlations are mentioned below:  

- **Interaction with inventory data:** The correlation between SKUs and inventory is essential for managing sales and stock operations, aligning product availability with demand.  
- **Order data:** The joint analysis of catalog and order data reveals insights into purchasing preferences, which helps catalog optimization.  
- **Navigation data:** Interaction with navigation data offers insight into how customers explore the catalog, indicating which products attract the most attention and guiding marketing and promotion strategies.  

### Discover other datasets

- [Inventory](2IvKMZV9SNrE6ipBRQr8h2)
- [Navigation](4X4hK0zdIHN0Xn5x2MLYYd) 
- [Orders](2f3GlRJ5L5IRGVIxOmzrFv)  
- [Payments](7LWkFaA1jPabzc5JAt1rGs)   
- [Promotions](3WZ1syNucDFdvVhfKtA6Qd)
