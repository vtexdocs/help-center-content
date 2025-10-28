---
title: 'Store Overview'
id: P8ahguoRs0U3PzmXg2wuQ
status: PUBLISHED
createdAt: 2021-11-18T22:48:32.711Z
updatedAt: 2023-05-31T16:11:20.454Z
publishedAt: 2023-05-31T16:11:20.454Z
firstPublishedAt: 2021-11-18T22:53:28.982Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: store-overview
legacySlug: store-overview
locale: en
subcategoryId: 1TIJqw8kV2Yok4iQe4SAkq
order: 1
---

VTEX Admin’s Overview page is where store owners can get a quick overview of key metrics that impact the store’s revenue. Through this dashboard, you can track the evolution of your sales through order trend analysis, conversion rate and sales funnel charts. You can access this tool in the VTEX Admin, by clicking on **Dashboards > Overview** in the navigation menu, or type *Overview* in the search bar at the top of the page.

![Store Overview gif EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_1.gif)

 The Overview page provides a summary of your business with VTEX. For deeper analysis of your store's metrics, visit [Sales Performance](/en/v4/docs/performance-de-vendas--6gx46RGRzWO8qgaVck7PRp).

## Data

The metrics on this page include data about orders and browsing, which are captured from different systems.

* **Orders:** the order and revenue data come from the VTEX Order Management System (OMS) and include orders placed on all of your sales channels. 
* **Browsing:** the browsing data comes from the platform’s internal system which captures user sessions on the storefront of VTEX stores. A session represents the total number of views on pages accessed by a single buyer while browsing your store, without considering marketplaces, apps, VTEX Sales App, or other sales channel. 

We do not capture browsing data for storefronts other than VTEX or for sellers who only offer products on external marketplaces. For this reason, the charts displayed on your Overview may vary, depending on whether we capture browsing data from your store or not.  

In the table below, you can find a summary of the charts included for each scenario of store data capture. 

| Store data capture     | Included charts                                                     |
|------------------------|---------------------------------------------------------------------|
| Complete browsing data | Order trend analysis<br>Conversion rate<br>Sales funnel<br>Sessions |
| Partial browsing data  | Received orders<br>Canceled orders<br>Sales funnel<br>Sessions      |
| No browsing data       | Placed orders<br>Canceled orders<br>Highest grossing categories     |

Though we try to keep a maximum of 3% divergence from the VTEX OMS data, you may sometimes find discrepancies between the data presented in Overview and the one in OMS. To have the page updated on a daily basis and functioning swiftly, the data is stored in different groups, separated in “online” or short-term data (such as the metrics that have just been filtered) and the long-term data (such as the data exported as a spreadsheet, which comprises more information). Each group is processed by a different system, which can cause the OMS data to differ from the one in Overview.

## Comparing periods

The page's data is updated every hour, so users can expect a delay of 10 to 80 minutes, depending on the time they accessed the page. Users can also filter data by period, and also compare their store’s current metrics with previous ones. The `Updated` label shows the last time the data was updated. 

To compare data from different periods, on the top of the page, select the date on the *first dropdown menu*, then select the second date on the *second dropdown menu*. The date filters include the following options: 

| Period       | Start                                               | End                                                                                            |
|--------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------|
| Today        | 12:00 a.m. of the current day                       | The last time data was updated. Check out the `Updated` label to see when was the last update. |
| Yesterday    | 12:00 a.m. of the previous day                      | 11:59 p.m. of the previous day                                                                 |
| Last 7 days  | 12:00 a.m. of the eighth day before the current day | 11:59 p.m. of the day before the current day                                                   |
| Last 28 days | 12:00 a.m. of the 29th day before the current day   | 11:59 p.m. of the day before the current day                                                   |

## Metrics

![Store overview Metricas EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_2.png)
The table below describes the key metrics available in the homepage dashboard. All metrics refer to purchase flows made in VTEX stores in a given time frame.

| Metric                               | Description                                                                                                                                                                                                                                                                               |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Revenue                              | The total value of approved orders.                                                                                                                                                                                                                                                       |
| Orders                               | The number of orders placed.                                                                                                                                                                                                                                                              |
| Average ticket                       | The average revenue per order.                                                                                                                                                                                                                                                            |
| Sessions                             | The number of visits to your store.  This metric is only available for stores which capture browsing data.                                                                                                                                                                                                                                                      |
| Popular products without stock       | High selling products from your catalog that are low in inventory. Clicking on this metric will open a window with a list of products without stock. By clicking on an item, you will be redirected to the Inventory Management page of that product, where you can update its inventory. |
| Orders with payment in authorization | Orders that have not been placed due to payment authorization issues. By clicking on this metric, you are redirected to the Transactions page to review pending payment authorizations.                                                                                                   |
| Orders in the past hour              | Orders placed in your store in the past hour. By clicking on this metric, you are redirected to the All Orders page.                                                                                                                                                                      |

## Highest grossing products
![Store overview Growing products PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_3.jpg)  

This component lists your highest grossing products and products with the highest number of units sold in the selected period. 

You can switch between these two options by clicking on the title or the <i class="fas fa-chevron-down"></i> icon.

Know more about the metrics:
- __Highest grossing products:__ the products that generated the highest revenue in the selected period. This list shows the amount received as revenue, and a percentage indicating the increase or decrease in revenue, comparing the selected periods.  
- __Highest sold units products:__ the products with most units sold in the selected period. This list shows the quantity of sold units, and a percentage indicating the increase or decrease in sold units, comparing the selected periods.

## Performed orders
![Store overview Pedidos realizados EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_4.png)

This chart displays the number of orders that were received by your store in the selected period. The thick blue line represents the orders placed in the more recent period. The thin gray line represents the orders placed in the period selected for comparison. By hovering the mouse over the chart, the number of orders captured at a specific time is displayed.

## Canceled orders
![Store overview Pedidos cancelados EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_5.png)
This chart displays the number of orders that have been canceled in your store in the selected period. The thick blue line represents the orders canceled in the more recent period. The thin gray line represents the orders canceled in the period selected for comparison. By hovering the mouse over the chart, the number of canceled orders at a specific time is displayed.  

## Order trend analysis
![Store overview Order trend EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_6.jpg)  

This chart shows your store’s order trend, indicating the number of orders placed by shoppers in the selected period.

The line indicates the order curve for the selected period. By hovering the mouse over the chart, the value of the metric for a specific day or hour span is displayed. The shades around the curve are confidence intervals indicating the expected order behavior on each date. The blue shade represents an interval with a 90% confidence, while the lighter shade has 99% confidence. Intervals are calculated according to the past 3 months, in which the chart’s algorithm considers the date and time to calculate the expectation.

The number shown on top of the chart refers to the orders placed in the last hour and it is updated every five minutes.  The label on top of the chart indicates whether orders are being placed at a `normal`, `low` or `high` rate when compared to your store’s usual performance for that period. 

## Conversion rate
![Store overview Conversion rate EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_7.jpg)  

This chart shows your store’s conversion rate in the selected periods you wish to compare. The conversion rate is calculated by dividing the total number of orders by the total number of sessions in your store. The thick blue line indicates the conversion rate for the most recent period. The thin blue line indicates the conversion rate for the the period selected for comparison. The chart also indicates the percentage (%) and percentual points (p.p) of increase or decrease for this metric. By hovering the mouse over the chart, you can see the value of that metric at specific times. 

## Sales funnel

![Store overview sales funnel EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_8.jpg)  

This chart allows you to track the volume of sessions in the intermediate stages of the purchase flow and view opportunities for optimizing the store's conversion rate. The table below describes the intermediate stages of the purchase flow.

| Stage                 | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| Total sessions        | Total number of visits to your store                              |
| Product page sessions | A product page was accessed by the user during the session        |
| Cart sessions         | A product was added to the cart by the user during the session    |
| Shipping sessions     | Shipping information was filled in by the user during the session |
| Payment sessions      | Payment data was filled in during the session                     |
| Order                 | Orders that were actually placed in the session                   |

Each blue bar in the chart represents the volume of sessions that have reached a certain stage of the purchase flow. This volume is represented as an absolute value (above), and as a percentage of the number of sessions (below), together with the percentual points (p.p) of increase or decrease in the sales funnel. By hovering the mouse over the percentage, you can view more details about that intermediate stage.

## Highest grossing categories
![Categorias EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/dashboards/dashboards-in-the-vtex-admin/store-overview_9.png)

This chart indicates the ten categories in your store which generated the most revenue in the selected period. The blue bar indicates the revenue generated on the most recent date. The gray bar indicates the revenue generated on the period selected for comparison. By hovering the mouse over the chart, the conversion rate for each compared period is displayed. 
By clicking on the chart title it is possible to change the view to __Highest sold categories by orders__.

