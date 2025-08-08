---
title: 'Navigation Data Pipeline '
id: 4X4hK0zdIHN0Xn5x2MLYYd
status: PUBLISHED
createdAt: 2024-02-02T17:48:16.639Z
updatedAt: 2025-03-07T11:30:01.968Z
publishedAt: 2025-03-07T11:30:01.968Z
firstPublishedAt: 2024-05-27T19:26:59.542Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: navigation
legacySlug: navigation
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The navigation dataset operates with two main tables: `pageviews` and `sessions`. A `pageview` refers to each new page that a user accesses while browsing a store, while a `session` is the set of all pageviews made by a user in a single visit.
Each `session` remains active until no new `pageviews` occur for a period of 30 minutes.

<div class="alert alert-warning">
The navigation dataset does not capture all types of events that occur during browsing. For example, specific clicks, special events, and interactions with the mini cart are not recorded.
  </div>

This section includes the following information:

- [Characteristics of navigation data](#data-characteristics)
- [Table: sessions](#table-sessions)
- [Table: pageviews](#table-sessions)
- [Analyses with navigation data](#analyses-with-item-inventory)
- [Correlations with other data](#correlations-with-other-data)

## Data characteristics

| Characteristic | Description |
|:---:|:---:|
| Data source | The data in this set comes from a script that runs on the store frontend and logs user session information and activity. |
| Availability | Navigation data can be accessed through the [Overview dashboard](https://help.vtex.com/en/tutorial/visao-geral-da-loja--P8ahguoRs0U3PzmXg2wuQ#dados) in the VTEX Admin, with a focus on total sessions and the conversion funnel, or also through third-party tools such Google Analytics. |
| History | The data is retained for two years, starting 2022 for clients who already use the VTEX platform. |
| Minimum update interval | One hour. |

<div class="alert alert-warning">
  Data Pipeline only provides data from sessions originating from VTEX storefront solutions: Legacy CMS, Store Framework, and FastStore. VTEX does not have access to sessions originating from third-party marketplaces or proprietary storefronts. Furthermore, storefront customizations   may interfere with or even disable the script, resulting in some sessions not being recorded, or in discrepancies in the conversion rate observed in the dashboard.
To minimize the impact on store performance, the script is configured to be the last element to load on the page. This means that very brief sessions may not be captured.
</div>

## Table: sessions

This table only contains closed sessions, whether due to inactivity or because a purchase was completed. It's sorted by `session_id`, `session_end_time`, and `store_name`. Avoid filtering large data ranges by columns that are not part of this sorting strategy. The table fields are described below:

| **Column name** | **Field type** | **Description** |
|:---:|:---:|:---:|
| **batch_id** | character varying(13) | Control ID of data ingestion. |
| **session_id** | character varying(127) | Session UUID, corresponding to the VtexRCSessionIdv7 cookie. |
| **store_name** | character varying(127) | Name of the store that generated the page views for this session. |
| **account_name** | character varying(127) | VTEX account of the store that is generating this session. |
| **economic_group_id** | character varying(127) | Identifier of the economic group used for billing. |
| **economic_group_name** | character varying(1024) | Name of the economic group used for billing. |
| **company_id** | character varying(127) | Company identifier for billing. |
| **company_name** | character varying(1024) | Name of the company for billing. |
| **main_account_name** | character varying(127) | Name of the main VTEX account related to the store generating this session. |
| **os_family** | character varying(1023) | Operating system family, extracted from user_agent. |
| **os_major** | character varying(1023) | Major operating system version, extracted from user_agent. |
| **os_minor** | character varying(1023) | Minor operating system version, extracted from user_agent. |
| **os_patch** | character varying(1023) | Operating system patch, extracted from user_agent. |
| **os_patch_minor** | character varying(1023) | Minor operating system patch, extracted from user_agent. |
| **device_brand** | character varying(1023) | Device brand, extracted from user_agent. |
| **device_family** | character varying(1023) | Device family, extracted from user_agent. |
| **device_model** | character varying(1023) | Device model, extracted from user_agent. |
| **browser_family** | character varying(1023) | Browser family, extracted from user_agent. |
| **browser_major** | character varying(1023) | Major browser version, extracted from user_agent. |
| **browser_minor** | character varying(1023) | Minor browser version, extracted from user_agent. |
| **browser_patch** | character varying(1023) | Browser patch, extracted from user_agent. |
| **user_id** | character varying(16383) | Unique identifier of the buyer, mapped by the VtexRCMacIdv7 cookie. |
| **pageviews_count** | integer | Count of page views in this session. |
| **views_home** | integer | Count of home page views in this session. |
| **views_category** | integer | Count of [category](https://help.vtex.com/en/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) page views in this session. |
| **views_department** | integer | Count of [department](https://help.vtex.com/en/tutorial/o-que-e-um-departamento--22rKjmYWVmmKAK8CWa8yKw) page views in this session. |
| **views_search** | integer | Count of search page views in this session. |
| **views_product** | integer | Count of product page views in this session. |
| **views_checkout** | integer | Count of checkout page views in this session. |
| **views_other** | integer | Count of views for pages [other](https://help.vtex.com/en/tutorial/o-que-e-um-produto--2zrB2gFCHyQokCKKE8kuAw) than product, search, [category](https://help.vtex.com/en/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg), [department](https://help.vtex.com/en/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg), or checkout in this session. |
| **views_checkout_cart** | integer | Count of checkout page views at the cart stage. |
| **views_checkout_payment** | integer | Count of checkout page views at the payment stage. |
| **views_checkout_shipping** | integer | Count of checkout page views at the shipping stage. |
| **views_checkout_profile** | integer | Count of checkout page views at the profile stage. |
| **views_checkout_orderplaced** | integer | Count of checkout page views at the completed order stage. |
| **views_checkout_email** | integer | Count of checkout page views at the email stage. |
| **workspace** | character varying(16383) | VTEX workspace. |
| **user_agent** | character varying(16383) | User-agent string extracted from the request server. |
| **is_first_visit** | boolean | Specifies whether this is the user's first visit. It doesn't count for recurring visitors using different browsers. |
| **session_start_time** | timestamp without time zone | Start date and time of the session. |
| **entrance_page_url** | character varying(16383) | URL of the first page view in this session. |
| **entrance_page_type** | character varying(16383) | Page type of the first view in this session. |
| **entrance_page_checkout_step** | character varying(16383) | Checkout stage of the first page view in this session. |
| **session_end_time** | timestamp without time zone | End date and time of the session. |
| **exit_page_url** | character varying(16383) | URL of the last page view in this session. |
| **exit_page_type** | character varying(16383) | Page type of the last view in this session. |
| **exit_page_checkout_step** | character varying(16383) | Checkout stage of the last page view in this session.  |

## Table: pageviews

Each item in this table corresponds to a page viewed by the buyer, such as homepage, product page, and checkout stage.  
A page view is counted after the buyer's browser loads the page. Each page has specific attributes, however, because this table brings everything together in a single schema, many null values will appear. For example, product page attributes are expected to be null when the page view corresponds to a shopping cart stage. The table fields are described below:  

| **Column name** | **Field type** | **Description** |
|:---:|:---:|:---:|
| **client_date** | timestamp without time zone | Date and time of the page view. |
| **session_id** | character varying(127) | Unique identifier of a session, which maps directly to the VtexRCSessionIdv7 cookie. |
| **page_type** | character varying(127) | Type of page accessed, with predefined values such as 'home', 'category', 'product', among others. |
| **checkout_step** | character varying(127) | Checkout stage of the page, valid when page_type is 'checkout'. |
| **economic_group_id** | character varying(127) | Identifier of the economic group used for billing. |
| **economic_group_name** | character varying(1024) | Name of the economic group used for billing. |
| **company_id** | character varying(127) | Company identifier for billing. |
| **company_name** | character varying(1024) | Name of the company for billing. |
| **main_account_name** | character varying(127) | Main License Manager account the store is associated to. |
| **account_name** | character varying(127) | License Manager account the store is associated to. |
| **store_name** | character varying(127) | Name of the store that generated the page view event. |
| **url** | character varying(16383) | Full URL of the page view. |
| **store_host** | character varying(127) | Hostname extracted from the URL. |
| **page_url** | character varying(16383) | Clean URL of the page view, without query parameters. |
| **ref** | character varying(16383) | URL of the page that referred the buyer to this page. |
| **workspace** | character varying(127) | VTEX workspace, usually 'master'. |
| **workspace_ab_test_id** | character varying(127) | AB test ID extracted from the workspace name. |
| **user_agent** | character varying(16383) | User-agent string extracted from the server side. |
| **os_family** | character varying(1023) | OS family extracted from user_agent. |
| **os_major** | character varying(1023) | Major OS version extracted from user_agent. |
| **os_minor** | character varying(1023) | Minor OS version extracted from user_agent. |
| **os_patch** | character varying(1023) | OS patch extracted from user_agent. |
| **os_patch_minor** | character varying(1023) | Minor OS patch extracted from user_agent. |
| **device_brand** | character varying(1023) | Device brand extracted from user_agent. |
| **device_family** | character varying(1023) | Device family extracted from user_agent. |
| **device_model** | character varying(1023) | Device model extracted from user_agent. |
| **browser_family** | character varying(1023) | Browser family extracted from user_agent. |
| **browser_major** | character varying(1023) | Major browser version extracted from user_agent. |
| **browser_minor** | character varying(1023) | Minor browser version extracted from user_agent. |
| **browser_patch** | character varying(1023) | Browser patch extracted from user_agent. |
| **user_id** | character varying(127) | Unique buyer identifier. |
| **is_first_visit** | boolean | Specifies whether this is the user's first visit. |
| **category_id** | character varying(127) | Category identifier. |
| **category_name** | character varying(16383) | Category name. |
| **department_id** | character varying(127) | Department identifier. |
| **department_name** | character varying(16383) | Department name. |
| **product_id** | character varying(127) | Product identifier. |
| **product_reference_id** | character varying(1024) | Product reference. |
| **product_name** | character varying(16383) | Product name. |
| **product_brand_id** | integer | Product brand identifier. |
| **product_brand_name** | character varying(1024) | Product brand name. |
| **product_department_id** | integer | Product department identifier. |
| **product_department_name** | character varying(1024) | Name of the product department. |
| **product_category_id** | integer | Product category identifier. |
| **product_category_name** | character varying(1024) | Name of the product category. |
| **product_list_price** | numeric(22,4) | List price of the product. |
| **product_price** | numeric(22,4) | Product price. |
| **seller_id** | character varying(127) | Seller identifier. |
| **seller_ids** | character varying(16383) | Seller identifiers. |
| **site_search_term** | character varying(16383) | Search term on the website. |
| **site_search_form** | character varying(16383) | Search form on the website. |
| **site_search_category** | character varying(127) | Search category on the website. |
| **site_search_results** | integer | Website search results. |
| **sales_channel** | character varying(10) | Sales channel. |
| **order_form_id** | character varying(127) | Identifier of the order form. |
| **order_form_shipping** | numeric(22,4) | Shipping cost on the order form. |
| **order_form_total** | numeric(22,4) | Total on the order form. |
| **order_form_tax** | numeric(22,4) | Tax on the order form. |
| **campaign_name** | character varying(16383) | Campaign name. |
| **campaign_source** | character varying(16383) | Campaign source. |
| **campaign_medium** | character varying(16383) | Campaign medium. |
| **internal_campaign_name** | character varying(16383) | Name of the internal campaign. |
| **internal_campaign_part** | character varying(16383) | Part of the internal campaign. |
| **order_form_payment_type** | character varying(127) | Type of payment on the order form. |
| **order_group** | character varying(127) | Order group. |
| **transaction_id** | character varying(127) | Transaction identifier. |
| **visitor_login_state** | character varying(16383) | Visitor login status. |
| **visitor_type** | character varying(16383) | Visitor type. |
| **visitor_optin_news_letter** | boolean | Specifies whether the visitor opted in to the newsletter. |
| **profile_id** | character varying(127) | Profile ID of the buyer received from the VTEX Profile system. |
| **batch_id** | character varying(13) | Control ID of data ingestion. |
| **id** | character varying(36) | UUID generated during data ingestion. |
| **transaction_products** | super | Products in the transaction. |
| **transaction_total** | numeric(22,4) | Transaction total. |

## Analyses with navigation data

Navigation data can be used for the following analyses:  

- **Overall conversion rate:** Calculate the proportion of sessions that resulted in a purchase in relation to the total number of sessions to assess the overall effectiveness of the website in converting visitors into buyers.
- **Conversion funnel analysis:** Group pageviews by funnel stages (home, search, product, cart, checkout) and count how many sessions have passed through each stage, identifying where users give up.
- **Most visited pages:** Count the number of pageviews for each type of page (home, category, product) to identify the pages that attract the most attention and optimize them for conversion.
- **User path tracking:** Follow the sequence of the pageviews for each session to understand the path taken by the user and discover common navigation patterns.
- **Traffic source:** Analyze the reference URL of each session to determine the traffic source and get insight about which marketing channels are most effective.
- **Bounce rate by page type:** Identify sessions that end after a single page view and calculate the bounce rate by page type to improve the content or design of these pages.

## Correlations with other data

VTEX navigation data has significant interactions with other datasets that enrich user behavior analysis, for example:  

- **Interaction with order data:** Comparative analysis between navigation and order conversions reveals the impact of user journeys on purchase decisions.
- **Relationship with SKUs:** User interaction with product and category pages offers insights into the popularity and effectiveness of product presentation.
- **Marketing data and campaigns:** The correlation between navigation and marketing campaigns helps evaluate how efficient campaigns are in attracting traffic and generating conversions.

### Discover other Datasets

- [Catalog](https://help.vtex.com/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventory](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)   
- [Payments](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Orders](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Prices](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promotions](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Gift cards](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Bridge logs](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
