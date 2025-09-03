---
title: 'VTEX Shipping Network: Dashboard'
id: 51e8tx1IehiN4ZtURRWU92
status: PUBLISHED
createdAt: 2020-04-06T20:01:00.909Z
updatedAt: 2024-08-28T13:00:44.671Z
publishedAt: 2024-08-28T13:00:44.671Z
firstPublishedAt: 2020-04-16T21:37:18.831Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: vtex-shipping-network-dashboard
legacySlug: vtex-log-dashboard
locale: en
subcategoryId: 5n5MnINzWTQUX1I2EZl4Ib
---

> ⚠️ Attention: This feature is in Open Beta stage.

VTEX Shipping Network uses order tracking data directly from carriers, keeping you and your customer up to date on the status of each delivery. **VTEX Shipping Network dashboards** manage the data obtained from VTEX Shipping Network, so that you can extract intelligent information for your logistics management. 

The VTEX Admin generates daily reports on the orders placed in your store. With this data, we were able to calculate shipping rates, amounts paid for orders, packages shipped, order packages status (delivered or not), and estimated delivery dates. 

The dashboards allow you to have a managerial view of the shipping costs paid to the carriers and of the revenue from the shipping rates charged to your customers. They also show the health of your store's logistics operation and analyzes of your integrations’ results.

To access the dashboards, in the VTEX Admin, type *Shipping Network*  in the search bar at the top of the page.

## Financial Overview

This tab is used to monitor and supervise the financial result of your Logistics configuration. There you can extract information to manage your logistics efficiently. The Financial Overview tab allows you to:

- **Filter the financial data** by custom periods or activating the `Quarter` button.

- **Export orders** in a CSV file within the selected period, using the button in the upper right corner of the screen.

- View a **dynamic chart** showing the financial evolution over time, within the selected period. By hovering the cursor over the chart lines, you can see in detail the movement of *cost* and *revenue* per day.

- In addition to monitoring a series of **financial performance indicators**:

| Financial Indicator               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Shipping Cost x GMV**           | Compares the shipping cost calculated at checkout with the GMV, which is the total amount that was paid per order.                                                                                                                                                                                                                                                                                                                                                     |
| **Financial performance**          | Shows the relationship between the amount paid at checkout and the amount paid to the carrier.                                                                                                                                                                                                                                                                                                                                                                              |
| **Overall Billed Revenue**         | Sum of all shippings paid at checkout. How much your customer actually paid for shipping (regardless of VTEX Shipping Network). It considers, for example, if there were any discounts or if the shipping was free.                                                                                                                                                                                                                                                      |
| **VTEX Shipping Network Billed Revenue**    | Sum of all shippings paid at checkout. How much your customer actually paid for shipping, filtering only by VTEX Shipping Network carriers. It considers, for example, if there were any discounts or if the shipping was free.                                                                                                                                                                                                                                       |
| **Overall Projected Cost**        | It is, regardless of VTEX Shipping Network, the sum of the shipping values estimated by the Inventory & Shipping module for all orders. It includes arrows that indicate the percentage of cost growth or decrease. The cost reduction on that (down arrow) card is a positive measure for a store's results.                                                                                                                                 |
| **VTEX Shipping Network Projected Cost**     | Sum of the shipping values estimated for all orders by the Inventory & Shipping, filtering only by VTEX Shipping Network carriers. It includes arrows that indicate the percentage of cost growth or decrease. The cost reduction on this (down arrow) card is a positive measure for a store's results.
                                                                                                            |

* We are improving the **Cost Issued via CTE** and the **Indicated cost difference**, and they are currently unavailable.

## Performance

You can monitor the performance of the carriers configured in your store's logistics through an analytical tool. On the VTEX Shipping Network dashboard, you can see VTEX Shipping Network carriers' overall performance and detailed information on each one.

For calculating the performance, the system considers all packages for delivery. The dashboard displays monthly or quarterly results based on the number of packages instead of deliveries. This is because a single order can contain more than one package, delivered by different carriers.

Carrier performance is presented as a percentage and is calculated by dividing the number of packages delivered on time by the total number of packages delivered. Thus, the performance calculation only takes into account the packages that have been delivered.

![equation EN performance](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-shipping-network/vtex-shipping-network-dashboard_1.gif)

 The VTEX Shipping Network Performance tool allows you to:

 - **Check performance evolution**: it displays a dynamic chart of the performance evolution over time.
- **Monitor VTEX Shipping Network packages:** it displays grouped data of all VTEX Shipping Network carriers.
- **View the total number of packages:** it displays the absolute number of packages, filtered by period.
- **Monitor** [carrier performance](#carrier-performance): it displays a performance table of all carriers operating in your business.
- [Export reports](#exporting-reports): it exports a file in .csv format with carriers' data.

In the VTEX Admin, type *Shipping Network*  in the search bar at the top of the page, to view the performance data. On the VTEX Shipping Network dashboard, you’ll find the **Performance tab.**

The quarterly performance report is available in the **Performance** tab. To view a specific month, toggle the **Quarter** option at the top of the page, and select the month for which you want to view the analysis.

### Carrier performance

In the carrier performance table, you can monitor the performance of each carrier. The VTEX Shipping Network solution considers that the ideal on-time delivery performance should be higher than 95%.

You can also view orders by their delivery status:** Invoiced**, **In transit** (orders with a tracking number assigned, which have not yet been delivered and are not delayed), **Delayed** (orders with a tracking number assigned, which have not yet been delivered and are delayed) and **Delivered**.

All VTEX Shipping Network carriers have a verified badge. You can see the pink badge on the performance table. Its purpose is to indicate which carriers are VTEX Shipping Network.

If a carrier’s performance is not displayed on the platform, it means the tracking data has not been integrated with VTEX Shipping Network.

To calculate the performance of carriers that are not VTEX Shipping Network, sellers must send their data through a tracking API provided by the VTEX Shipping Network solution. In such cases, note that the panel data may be inaccurate because there is no validation of delivery being carried out within the indicated deadline.

To learn more about how to perform this integration, see the[ VTEX Shipping Network overview](https://developers.vtex.com/docs/api-reference/vtex-shipping-network-api) in our API documentation.

### Exporting reports

You can download a report with data from the carriers and package deliveries. To export the carriers’ data report, you have to:

1. Click on **EXPORT REPORT.**
2. Wait until you receive the spreadsheet by email.
3.  Download the spreadsheet.

![Resumo de performance EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-shipping-network/vtex-shipping-network-dashboard_2.png)
