---
title: 'The order management filter does not find results for criteria that have double spaces in the name'
id: 3Z8bOmWhsdFbMX5pMp8wZU
status: PUBLISHED
createdAt: 2022-04-29T20:57:35.619Z
updatedAt: 2022-12-16T18:12:25.119Z
publishedAt: 2022-12-16T18:12:25.119Z
firstPublishedAt: 2022-04-29T20:57:36.100Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: the-order-management-filter-does-not-find-results-for-criteria-that-have-double-spaces-in-the-name
kiStatus: Backlog
internalReference: 353656
---

## Summary





When the filter for order selection contains two criteria and one of them has two consecutive space characters in its name, no results are displayed in the order list.
For example, if there are two filtering criteria and the name of one of them (in this example, a seller filter) contains two space characters, the search does not find any results.
This scenario occurs when there are two consecutive spaces in any of the existing filters.



## Simulation





To reproduce this scenario, follow the steps below.

1. Rename a seller by adding two spaces:

  1. In the Admin, click on **Sellers > Management**;
  2. Select a seller from the list and click on `Edit`;
  3. Change the **Name** field by adding two spaces anywhere in the name;
  4. Click on `Save`.
2. Create a test order:

  1. In the store environment (storefront), select an item and add it to the cart;
  2. Go to the checkout and place the order.
3. Go to **Orders > Order management**;
4. Click on `All orders`;
5. Use the **filter** to select the seller whose name you changed;
6. Select another seller in the filter;
7. Note that no orders are found with the selected filters.

In the example given, the seller filter was applied. However, the simulation can be performed with the other available filters, such as trade policy, promotions, campaigns, telesales operator, and others.



## Workaround





There are three possible workarounds:

- Not using spaces or special characters when naming sellers, promotions, and SKUs.
- Exporting all orders and filtering the desired order using the exported template;
- Editing the **Name** field of the filter that has the double space.

