---
title: 'Calculating revenue through the worksheet exported from Orders module '
id: 51KTkEqie4UC46qO8KgGGE
status: PUBLISHED
createdAt: 2018-02-21T13:17:33.632Z
updatedAt: 2023-03-31T13:22:08.224Z
publishedAt: 2023-03-31T13:22:08.224Z
firstPublishedAt: 2018-02-21T13:37:37.839Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: calculating-revenue-through-the-worksheet-exported-from-orders-module
locale: en
legacySlug: calculating-revenue-through-oms-worksheet
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

The **Orders** module displays the total revenue earned by your store according to the criteria set in the search [filters](https://help.vtex.com/en/tutorial/filtrar-todos-pedidos--tutorials_192).

However, you may want to calculate the revenue in a given period from the [exported order worksheet](https://help.vtex.com/en/tutorial/exportacao-de-pedidos-no-modulo-pedidos--tutorials_6417) from **Orders** module.

Since this worksheet lists dozens of order attributes, while using it you gain flexibility to filter them according to more criteria.

To calculate the total revenue from the worksheet, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. [Export the orders](https://help.vtex.com/en/tutorial/exportacao-de-pedidos-no-modulo-pedidos--tutorials_6417), choosing the desired time interval.
3. Open your email and download the link within 72 hours; the link will expire after that period.
4. Remove all duplicate values from the second column (__Order__). This must be done because in the case of carts with more than one SKU, several lines are generated for the same order - one for each SKU.
5. Add the values in column __Total Value__. In this column you find the total value of the order (that is, already considering all SKUs in the cart).

<div class = "alert alert-info">
The sum of values in the Total Value column (after the removal of duplicate orders) is the total revenue obtained from the selected orders in the worksheet.
</div>

To understand all the columns, see the article [Order report](https://help.vtex.com/en/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY).
