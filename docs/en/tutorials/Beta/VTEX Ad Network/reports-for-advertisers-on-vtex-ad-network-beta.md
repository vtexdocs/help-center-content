---
title: 'Reports for advertisers on VTEX Ad Network (Beta)'
id: 1xjGaQR8dDyS8J8x9vuHcl
status: PUBLISHED
createdAt: 2024-08-09T21:22:13.442Z
updatedAt: 2024-08-22T19:35:17.136Z
publishedAt: 2024-08-22T19:35:17.136Z
firstPublishedAt: 2024-08-09T21:56:08.145Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: reports-for-advertisers-on-vtex-ad-network-beta
locale: en
legacySlug: reports-for-advertisers-on-vtex-ad-network-beta
subcategoryId: 2AksvvAtAsbAfE7HsBIVDU
---

>ℹ️ This feature is currently in beta, which means we are working on improving it. If you are already a client and want to adopt VTEX Ad Network for your business, please contact [Sales Support](https://help.vtex.com/en/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). If you are not yet a client but are interested in this solution, please complete the [contact form](https://vtex.com/us-en/contato/).

[VTEX Ad Network (Beta)](https://help.vtex.com/en/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur) allows you to advertise your products on VTEX stores that have them listed in their catalog.  

To start advertising on VTEX Ad Network, you must contact [Sales Support](https://help.vtex.com/en/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) to request the installation of the VTEX Ad Network app on your VTEX account.  

If you're already a VTEX Ad Network advertiser, check out this article on how to generate CSV reports to track your campaigns' performance.

## Creating reports

Follow the instructions below to create a new VTEX Ad Network report.  

1. In the VTEX Admin, go to **Ad Network > Reports**.  
2. Click `Create Report`.  
3. Complete the form:

   * **Report type:** Select the type of report to be generated, which can be:

     * [Campaign](#report-campaign)
     * [Advertised product](#report-advertised-product)
     * [Search term by campaign](#report-search-term-by-campaign)
     * [Search term by product](#report-search-term-by-product)

     Search term reports have a limit of 100,000 records.

   * **Data Grouping:** Select how data will be displayed in the generated report.

     For the [Campaign](#report-campaign) and [Advertised product](#report-advertised-product) reports, you can choose one of the options below.

      * **Consolidated:** One row per entity. For example: Each campaign will only have one row.  
      * **Daily:** One row per day and per entity. For example: Each campaign will have a row for each day.

      For the [Search term by campaign](#report-search-term-by-campaign) or [Search term by product](#report-search-term-by-product) reports, only the **Consolidated** grouping is available.

   * **Period:** Choose the time range to be considered in the report.

4. Click `Create Report`.

After a few minutes, all the reports generated will be available in CSV format for download in **Ad Network > Reports**.  

To download a report, click `Download` on the report's row in the list. You can also use the search bar and the available filters to find the desired report.

![ad-network-reports](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Beta/VTEX Ad Network/reports-for-advertisers-on-vtex-ad-network-beta_1.png)

### Report: Campaign

See below the information available in the campaign report:  

| Column | Description |
| :---- | :---- |
| `date_from` | Start date of the report period, in `YYYY-MM-DD` format. This column only appears for reports in the **Consolidated** grouping. |
| `date_to` | End date of the period considered in the report, in `YYYY-MM-DD` format. This column only appears for reports in the **Consolidated** grouping. |
| `date` | Date in `YYYY-MM-DD` format. This column only appears for reports in the **Daily** grouping. |
| `campaign_id` | ID of the campaign. |
| `campaign_name` | Name of the campaign. |
| `type` | Type of the campaign. |
| `status` | Campaign status, which can be `active`, `paused` or `expired`. |
| `campaign_start` | Start date and time of the campaign in `YYYY-MM-DD HH:MM:SS` format, in the UTC+0 time zone. |
| `campaign_end` | End date and time of the campaign in `YYYY-MM-DD HH:MM:SS` format, in the UTC+0 time zone. |
| `budget` | Budget for the campaign. |
| `impressions` | Number of times ads were displayed on the page. |
| `views` | Number of times ads were viewed. VTEX Ad Network considers it a view when there is an ad impression and, if necessary, the user scrolls down the page to view at least 50% of the ad area for one second. |
| `clicks` | Number of ad clicks. VTEX Ad Network discards clicks on the same product if they occur less than a minute apart. |
| `ctr` | Click-through rate (CTR), which is calculated by dividing the number of clicks by the number of views. |
| `spent` | Budget spent to date. |
| `orders` | Number of orders resulting from clicks on ads. |
| `units_sold` | Number of product units sold from ads in this campaign. |
| `ad_sales` | Total revenue from sales. |
| `acos` | Advertising cost of sales (ACOS), which is calculated by dividing campaign spending by revenue. |
| `roas` | Return on Ad Spend (ROAS), which measures the revenue generated for every dollar spent on advertising, highlighting the profitability of the ad campaign. |

### Report: Advertised product

See below the information available in the product report:  

| Column | Description |
| :---- | :---- |
| `date_from` | Start date of the report period, in `YYYY-MM-DD` format. This column only appears for reports in the **Consolidated** grouping. |
| `date_to` | End date of the period considered in the report, in `YYYY-MM-DD` format. This column only appears for reports in the **Consolidated** grouping. |
| `date` | Date in `YYYY-MM-DD` format. This column only appears for reports in the **Daily** grouping. |
| `campaign_id` | ID of the campaign. |
| `campaign_name` | Name of the campaign. |
| `ean` | EAN code, which corresponds to the product's barcode. |
| `product_name` | Name of the product. |
| `impressions` | Number of times ads were displayed on the page. |
| `views` | Number of times ads were viewed. VTEX Ad Network considers it a view when there is an ad impression and, if necessary, the user scrolls down the page to view at least 50% of the ad area for one second. |
| `clicks` | Number of ad clicks. VTEX Ad Network discards clicks on the same product if they occur less than a minute apart. |
| `ctr` | Click-through rate (CTR), which is calculated by dividing the number of clicks by the number of views. |
| `cpc` | Average Cost per Click (CPC), which corresponds to the average number of bids won for that product. |
| `spent` | Budget spent to date. |
| `orders` | Number of orders resulting from clicks on ads. |
| `units_sold` | Number of product units sold from ads in this campaign. |
| `ad_sales` | Total revenue from sales. |
| `acos` | Advertising cost of sales (ACOS), which is calculated by dividing campaign spending by revenue. |
| `roas` | Return on Ad Spend (ROAS), which measures the revenue generated for every dollar spent on advertising, highlighting the profitability of the ad campaign. |
| `conversion_rate` | Conversion rate, calculated by dividing clicks by purchases. |

### Report: Search term by campaign

Search term by campaign reports have a limit of 100,000 records. See below the information available:  

| Column | Description |
| :---- | :---- |
| `date_from` | Start date of the report period, in `YYYY-MM-DD` format. |
| `date_to` | End date of the period considered in the report, in `YYYY-MM-DD` format. |
| `search_term` | Term the user searched for. |
| `campaign_id` | ID of the campaign. |
| `campaign_name` | Name of the campaign. |
| `impressions` | Number of times ads were displayed on the page. |
| `views` | Number of times ads were viewed. VTEX Ad Network considers it a view when there is an ad impression and, if necessary, the user scrolls down the page to view at least 50% of the ad area for one second. |
| `clicks` | Number of ad clicks. VTEX Ad Network discards clicks on the same product if they occur less than a minute apart. |
| `ctr` | Click-through rate (CTR), which is calculated by dividing the number of clicks by the number of views. |
| `orders` | Number of orders resulting from clicks on ads. |
| `units_sold` | Number of product units sold from ads in this campaign. |
| `ad_sales` | Total revenue from sales. |
| `conversion_rate` | Conversion rate, calculated by dividing clicks by purchases. |

### Report: Search term by product

Search term by product reports have a limit of 100,000 records. See below the information available:  

| Column | Description |
| :---- | :---- |
| `date_from` | Start date of the report period, in `YYYY-MM-DD` format. |
| `date_to` | End date of the period considered in the report, in `YYYY-MM-DD` format. |
| `search_term` | Term the user searched for. |
| `campaign_id` | ID of the campaign. |
| `campaign_name` | Name of the campaign. |
| `ean` | EAN code, which corresponds to the product's barcode. |
| `product_name` | Name of the product. |
| `impressions` | Number of times ads were displayed on the page. |
| `views` | Number of times ads were viewed. VTEX Ad Network considers it a view when there is an ad impression and, if necessary, the user scrolls down the page to view at least 50% of the ad area for one second. |
| `clicks` | Number of ad clicks. VTEX Ad Network discards clicks on the same product if they occur less than a minute apart. |
| `ctr` | Click-through rate (CTR), which is calculated by dividing the number of clicks by the number of views. |
| `orders` | Number of orders resulting from clicks on ads. |
| `units_sold` | Number of product units sold from ads in this campaign. |
| `ad_sales` | Total revenue from sales. |
| `conversion_rate` | Conversion rate, calculated by dividing clicks by purchases. |

## Learn more

- [Advertising with VTEX Ad Network (Beta)](https://help.vtex.com/en/tutorial/anunciar-com-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse)  
- [VTEX Ad Network (Beta)](https://help.vtex.com/en/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur)  
