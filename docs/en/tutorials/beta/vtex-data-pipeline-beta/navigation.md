---
title: 'Navigation Data Pipeline'
id: 4X4hK0zdIHN0Xn5x2MLYYd
status: PUBLISHED
createdAt: 2024-02-02T17:48:16.639Z
updatedAt: 2025-12-16T15:00:01.968Z
publishedAt: 2025-12-16T11:30:01.968Z
firstPublishedAt: 2024-05-27T19:26:59.542Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: navigation
legacySlug: navigation
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

A navigation dataset contains the set of browsing actions that happen on the store's website or mobile app (for mobile app and headless stores, it must have Activity Flow's SDK installed). It's the record of how shoppers move through the experience: which screens they open, which pages they visit, and how their journey unfolds from entry to exit.

## Data characteristics

| Characteristic | Description |
| --- | --- |
| Data source | The data in this set comes from a script that runs on the store frontend and logs user session information and activity. |
| Availability | This metric is only available through the Data Pipeline. |
| History | Due to the significant volume of this Data Model, we are only able to send incremental pipelines, not historical data. This means that once you acquire the product, we will begin delivering your data from that point forward. Unlike other Data Models, we cannot include historical data in the initial load. |
| Minimum update interval | One hour. |

## Table: page_views

The table fields are described below:

| Column name | Column type | Column description |
| --- | --- | --- |
| mac_id | string | Unique ID (UUID) to identify recurring users. It lasts for 1 year being refreshed while the user is changing pages. |
| session_id | string | Session unique id, lasting for 30 minutes being refreshed while the user changes pages. |
| account_name | string | VTEX account of the store that is generating this session. |
| url | string | Full URL of the page view. |
| ref | string | URL of the page that referred the shopper to this page. |
| workspace | string | Workspace that the user is visiting (eg master). Relevant to AB Testing in the IO Platform. |
| checkout_type | string | This column indicates the type of checkout used by that respective store in that request type. |
| storefront | string | The VTEX's environment used to render the page. Currently, we have three possible platforms: `portal`, `store_framework` and `fast_store`. |
| is_new_user | boolean | Specifies whether this is the shopper first pageview on this store. |
| is_first_event | boolean | Specifies whether this is the shopper first pageview of their given session. |
| user_agent | string | User-agent string extracted from the shopper's browser. |
| event_time | timestamp | Timestamp when this event was ingested (Used exclusively for internal VTEX quality evaluation purposes). |

## Table: session_order

The table fields are described below:

| Column name | Column type | Column description |
| --- | --- | --- |
| session_id | string | Session unique id, lasting for 30 minutes being refreshed while the user changes pages. |
| account_name | string | VTEX account of the store that is generating this session. |
| order_group | string | Order group this order belongs to (which can be found on the Orders Data Model as well, in order to join Navigation with Orders data). |
| record_created_at | timestamp | When this record was created (Used exclusively for internal VTEX quality evaluation purposes). |
| record_updated_at | timestamp | When this record was updated (Used exclusively for internal VTEX quality evaluation purposes). |
| batch_id | timestamp | Identifier used when data is loaded into the table for quality control of data ingestion. (Used exclusively for internal VTEX quality evaluation purposes). |

## Table: session_user_agent

The table fields are described below:

| Column name | Column type | Column description |
| --- | --- | --- |
| account_name | string | VTEX account of the store that is generating this session. |
| session_id | string | Session unique id, lasting for 30 minutes being refreshed while the user changes pages. |
| browser_family | string | Browser family, extracted from user_agent. |
| browser_version | string | Browser version, extracted from user_agent. |
| operating_system_family | string | Operating system family, extracted from user_agent. |
| operating_system_version | string | Operating system version, extracted from user_agent. |
| device_family | string | Device family, extracted from user_agent. |
| device_brand | string | Device brand, extracted from user_agent. |
| device_model | string | Device model, extracted from user_agent. |
| device_type | string | Device type, extracted from user_agent. |
| record_created_at | timestamp | When this record was created (Used exclusively for internal VTEX quality evaluation purposes). |
| record_updated_at | timestamp | When this record was updated (Used exclusively for internal VTEX quality evaluation purposes). |
| batch_id | timestamp | Identifier used when data is loaded into the table for quality control of data ingestion. (Used exclusively for internal VTEX quality evaluation purposes). |

## Table: url

The table fields are described below:

| Column name | Column type | Column description |
| --- | --- | --- |
| account_name | string | VTEX account of the store that is generating this session. |
| url | string | Full URL of the page view. |
| request_type | string | The type of page the user is viewing. Can be one of the following:<br><b>- homeView</b>: ```<domain>/```<br><b>- productView</b>:```<domain>/<product-name>/p```<br><b>- checkout</b>:```<domain>/checkout#/checkout```<br><b>- cart</b>: ```<domain>/checkout#/cart```<br><b>- email</b>: ```<domain>/checkout#/email```<br><b>- login</b>: ```<domain>/login?returnUrl=<checkout>```<br><b>- profile</b>: ```<domain>/checkout#/profile```<br><b>- shipping</b>: ```<domain>/checkout#/shipping```<br><b>- payment</b>:```<domain>/checkout#/payment```<br><b>- orderPlaced</b>:```<domain>/checkout#/orderPlaced``` <br><b>- otherView</b>: ```<domain>/<other-path>```|
| product_id | bigint | ID of the product displayed on the page, used to join with the Catalog Data Model. Only present if request_type is a productView. |
| product_name | string | Name of the product displayed on the page, used to join with the Catalog Data Model. Only present if request_type is a productView. |
| category_id | bigint | ID of the category displayed on the page, used to join with the Catalog Data Model. Only present if request_type is a categoryView. |
| category_name | string | Name of the category displayed on the page, used to join with the Catalog Data Model. Only present if request_type is a categoryView. |
| order_group | string | Order group this order belongs to (which can be found on the Orders Data Model as well, in order to join Navigation with Orders data). |
| traffic_type | string | Set `Paid` or `Organic` according to the URL pattern. |
| url_utm_medium | string | UTM Medium, extracted from the url. |
| url_utm_source | string | UTM Source, extracted from the url. |
| url_utm_campaign | string | UTM Campaign, extracted from the url. |
| url_utm_content | string | UTM Content, extracted from the url. |
| url_utm_term | string | UTM Term, extracted from the url. |
| url_gclid_found | boolean | True if a gclid (Google's Ads ID) code was found on the url. |
| url_fbcid_found | boolean | True if a fbclid (Facebook's Ads ID) code was found on the url. |
| record_created_at | timestamp | When this record was created (Used exclusively for internal VTEX quality evaluation purposes). |
| record_updated_at | timestamp | When this record was updated (Used exclusively for internal VTEX quality evaluation purposes). |
| batch_id | timestamp | Identifier used when data is loaded into the table for quality control of data ingestion. (Used exclusively for internal VTEX quality evaluation purposes). |

## Table: web_vitals

The table fields are described below:

| Column name | Column type | Column description |
| --- | --- | --- |
| mac_id | string | Unique ID (UUID) to identify recurring users. It lasts for 1 year being refreshed while the user is changing pages. |
| session_id | string | Session unique id, lasting for 30 minutes being refreshed while the user changes pages. |
| metric_id | string | Unique id for this core web vital's event. |
| account_name | string | VTEX account of the store that is generating this session. |
| url | string | Full URL of the page view. |
| ref | string | URL of the page that referred the shopper to this page. |
| workspace | string | Workspace that the user is visiting (eg master). Relevant to AB Testing in the IO Platform. |
| checkout_type | string | This column indicates the type of checkout used by that respective store in that request type. |
| is_new_user | boolean | Specifies whether this is the shopper first pageview on this store. |
| is_first_event | boolean | Specifies whether this is the shopper first pageview of their given session. |
| navigation_type | string | Type of the navigation given by this event. This field accepts the following options: `navigate`, `reload`, `back-forward`, `back-forward-cache`, `prerender`, `restore`. |
| ttfb_value | float | Time to First Byte (TTFB): Measures how long the browser waits before receiving the first byte of data from the server. |
| cls_value | float | Cumulative Layout Shift (CLS): Assesses visual stability by measuring unexpected changes in layout. |
| inp_value | float | Interaction to Next Paint (INP): Measures how quickly the interface responds to any user interaction, capturing the latency until the next visual update. |
| lcp_value | float | Largest Contentful Paint (LCP): Measures the loading time of the largest visible element. |
| event_time | timestamp | Timestamp when this event was ingested (Used exclusively for internal VTEX quality evaluation purposes). |
| client_time | timestamp | Event's timestamp from the shopper's device (which might be inconsistent, since shoppers can set their own date and time values). |
| record_created_at | timestamp | When this record was created (Used exclusively for internal VTEX quality evaluation purposes). |
| record_updated_at | timestamp | When this record was updated (Used exclusively for internal VTEX quality evaluation purposes). |
| batch_id | timestamp | Identifier used when data is loaded into the table for quality control of data ingestion. (Used exclusively for internal VTEX quality evaluation purposes). |

## Analyses with navigation

Navigation data can be used for the following analyses:

- **Overall conversion rate:** Calculate the proportion of sessions that resulted in a purchase in relation to the total number of sessions to assess the overall effectiveness of the website in converting visitors into buyers.
- **Conversion funnel analysis:** Group pageviews by funnel stages and count how many sessions have passed through each stage, identifying where users abandoned their journey.
- **Most visited pages:** Count the number of pageviews for each type of page (home, category, product) to identify the pages that attract the most attention and optimize them for conversion.
- **User path tracking:** Follow the sequence of the pageviews for each session to understand the path taken by the user and discover common navigation patterns.
- **Traffic source:** Analyze the reference URL of each session to determine the traffic source and get insight about which marketing channels are most effective.
- **Bounce rate by page type:** Identify sessions that end after a single page view and calculate the bounce rate by page type to improve the content or design of these pages.

## Correlations with other data

VTEX navigation data has significant interactions with other datasets that enrich user behavior analysis, for example:

- **Interaction with order data:** Comparative analysis between navigation and order conversions reveals the impact of user journeys on purchase decisions.
- **Relationship with SKUs:** User interaction with product and category pages offers insights into the popularity and effectiveness of product presentation.
- **Marketing data and campaigns:** The correlation between navigation and marketing campaigns helps evaluate how efficient campaigns are in attracting traffic and generating conversions.
