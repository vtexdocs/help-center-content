---
title: 'All Orders'
id: 2QTduKHAJMFIZ3BAsi6Pi
status: PUBLISHED
createdAt: 2022-04-04T21:50:53.330Z
updatedAt: 2023-12-21T14:05:13.862Z
publishedAt: 2023-12-21T14:05:13.862Z
firstPublishedAt: 2022-04-04T22:39:11.450Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: all-orders
locale: en
legacySlug: order-listing-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

>ℹ️ You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

The **All Orders** page allows retailers to track their store's orders and extract information for intelligent business management. To access the page, go to your VTEX Admin menu and click **Orders > All Orders**. On this page, you can:

- Check order and sales metrics.
- Export an order report.
- Search and filter orders.
- View a list with all the store's orders in the selected period.

The following sections provide more details about each page component and its actions.

![Order Listing EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.gif)

Besides searching for orders in **Orders > All Orders**, you can search for orders from any page in the VTEX Admin using the global search bar at the top bar. By default, the search is configured as `Pages`. To search for an order, click on the bar, select `Orders`, and use one of the following criteria:

- Order ID
- Customer name
- Customer email
- Customer document

## Top bar

The top bar of the page contains [Total orders](#total-orders) and [Sales](#sales) metrics, between absolute numbers and percentages from total orders and sales. We will detail what each metric means in the next section of this article. 

For order variation data, the colors indicate:   
- Green: positive result  
- Blue: neutral result  
- Red: negative result  

### Exporting reports

The `Export` button is located in the upper right corner of the page. You can use it to export an order report via email. To export a report, on the **All Order** page, click the `Export` button. You will receive a file in `.csv` format for download by email. 

The data in the file will be the content of the page at the time of export, including the filters applied. Learn more about each field in the report in [Order report](https://help.vtex.com/en/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY).

### Total orders

Next to each metric, there is an absolute number of orders placed in the indicated period and the percentage variation compared to the orders placed on the current day. Please note that if the order comparison is made based on zero orders in the past, the variation will be 0%. The metrics are shown next to each date:

- **Today:** number of orders placed until the same time of the current day.     
- **Yesterday:** 
  - Number of orders placed on the previous day, until the same time of the current day.  
  - Percentage decrease or increase in the number of orders compared to the previous day.   

- **Last week:**    
  - Number of orders placed on the same day last week, until the same time of the current day.    
  - Percentage decrease or increase in the number of orders compared to the previous week.     
- **Last year:**  
  -  Number of orders placed on the same day last year, until the same time of the current day.    
  - Percentage decrease or increase in the number of orders compared to the previous year.   

The number of orders placed in the past year is calculated by subtracting 52 weeks from the current day. In this way, the day of the week is maintained. For example, November 24, 2017 will be compared with November 25, 2016, where both dates fall on a Friday.

- **Ranking:** the ranking, located in the right corner of the bar, displays the store's position among all VTEX stores. The bar does not display the exact position of the stores in the top five positions; these, the number displayed as "Top 5".  

### Sales

In the sales bar, the currency of the metrics is the same currency in which the orders were placed. When a store allows sales in more than one currency, several rows are displayed, each with the sales data for the respective currencies.

The amounts shown in the bar are updated according to the selected [filters](#filters). For example, if a filter for orders with the status "Canceled" is active, the metrics display the amounts that would come from those orders, but were not actually captured in the store's revenue. 

Sales metrics include:

- **Sales:** number of orders with payment approved for the selected period.    
- **Average ticket:** average amount captured by orders for the selected period.
- **Revenue:** sum of the final amounts of the orders for the selected period.  

## Filters 

Filters change the orders displayed in the list and the metrics displayed in the top bar. There are four types of filters, each with specific options:

* Periods  
* Channels  
* Status and situation  
* Other  

To learn more about all the filter options, read the article [Filtering orders on All Orders](https://help.vtex.com/en/tutorial/como-filtrar-pedidos--tutorials_192).

The filter selector allows you to apply more than one filter, with no limit to how many filters can be overlapped. When accumulating filters, you might reach a data set with no information, for example, if there are no incomplete orders with a delivery date in the next seven days. 

You can also search for specific orders using the search bar. You can search for orders by order number, Taxpayer Registration Number, or customer name.

### Applying filters 

To apply filters:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.    
2. Click `Filters`.    
3. Navigate between the tabs **Date**, **Channel**, **Status**, and **Other** to find the desired filter.    
4. Click the desired category, or the <i class="fas fa-chevron-right"></i> arrow, to expand the filter options.    
5. Select the checkbox for one or more filters.  
6. Enable the `Use my time zone` option so that the selected periods is counted based on your time zone.  
7. Click `Apply`.   

You can also apply quick filters by clicking on `Status` and `Created: Today`, next to the **Filters** button.   

To clear the filters, follow steps 1 and 2 described above, and then click **Clear filters > Apply**.   

### Sharing and importing filters 

You can share and import filters applied to a page to access the same filter view as other users of the store. Sharing filters makes it easier for your order team to analyze orders within the same context and allows support staff to review the same set of requests, for example.

The filters applied to the order list are represented by a JSON code, which can be shared among users in the All Orders page. 

To share a filter set with another user, follow the instructions below.

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.  
2. Apply the desired filters.  
3. Click `All filters`.  
4. Click `Share`.  
5. Click `Copy filters`.   
  > The JSON code that generates the filter set will be copied to your device's clipboard.  
6. Send the copied code to another user.  

To apply the filters that have been shared with you:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.  
2. Click `Filters`.  
3. Click `Import`.  
4. In the text box, paste the code that has been shared with you.  
5. Click `Import`.    
6. Click `Apply`.   

The order list will be filtered according to the same filter set used by the user who shared their filters with you.

## Order list

The retailer can track their sales in the order list. In the default view, all store orders are displayed starting with the most recent one. You can customize how the columns are displayed:  

* To change the sorting of all the data in the list, click on the name of the desired column.   
* To change the sorting of data between ascending and descending, double click on the desired column.    

By selecting an order from the list, you will be redirected to the [Order details](https://help.vtex.com/en/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl) page.    

Learn more about each column.

* **Status:** indicates in which phase of the flow the order is. To learn more, read the article [Order flow and status](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196).  
* **Order number:** identification number that the customer receives on the order confirmation screen and in transactional emails. This code must be used in communications between store and buyer.  
* **Date:** date and time when the order was placed by the customer.  
* **Customer:** first and last name of the natural or legal person who made the purchase.  
* **Qty:** number of different products in the order, regardless of the quantity of each item. By hovering the mouse over the number, you can see the products purchased.  
* **Total amount:** total order amount, including discounts, taxes, and shipping costs.  
* **Origin:** indicates the origin of the order from the following options:  
    * **Marketplace:** the purchase was made on your store's website, where the customer viewed and purchased the product.  
    * **Fulfillment:** the purchase was made on the website of another store that offers and sells your products.    
* **Payment:** the payment method used for the purchase.    

## VTEX DO

![VTEX Do overview EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.gif)

[VTEX DO](https://help.vtex.com/en/tutorial/vtex-do-beta--7KMbRL4OslN8DTX9oiuCiu) manages tasks automatically created by the VTEX Admin that require manual action by the ecommerce team. 

To access it, click on the inbox icon in the bottom right corner of the page. By clicking on the icon, a modal will display the list of tasks related to the store's orders. Tasks managed through VTEX DO can include actions from all VTEX systems, such as reviewing payments, authorizing orders, or changing loading docks addresses.

