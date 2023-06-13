---
title: "List Purchases" link in the gift list report does not apply filter correctly in Orders Managment
id: 5p7nqrzUqIK88cYkkOqMMG
status: PUBLISHED
createdAt: 2017-04-03T19:36:10.117Z
updatedAt: 2022-12-22T14:44:09.191Z
publishedAt: 2022-12-22T14:44:09.191Z
firstPublishedAt: 2017-04-03T19:48:46.372Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_31
tag: Catalog,Order Management
slug: list-purchases-link-in-the-gift-list-report-does-not-apply-filter-correctly-in-orders-managment
kiStatus: Backlog
internalReference: 
---

## Summary

In the __Catalog__ module, in the list report, clicking on the "List Purchases" link, the system redirects to Orders Managment without applying the filter correctly, listing all the orders and not only the ones from the chosen list.

## Simulation

1. In the admin, access the __Catalog__ module;
2. In the menu, navigate to Reports > Lists > All Lists;
3. Choose a list that has the column "Qtd Comprada" filled with a value greater than 0 (zero);
4. In the list, next to the "Visit" button, hover over the little arrow and click the "List Purchases" option.

The system will redirect you to Orders Managment without correctly applying the filter.

## Workaround

1. Access the __Orders Managment__ module;
2. In the Orders Managment module, in the order list, click on the filter;
3. In the "Others" group, click the "Search field" option;
4. Choose the "Gift List ID" option;
5. Return to the main search field and include the ID of the list you want to fetch.

