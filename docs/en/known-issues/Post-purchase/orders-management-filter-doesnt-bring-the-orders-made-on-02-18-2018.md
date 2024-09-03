---
title: "Orders management filter doesn't bring the orders made on 02/18/2018"
id: 1TGxwZaPgYiQIauAE2CuYk
status: PUBLISHED
createdAt: 2018-03-15T13:44:08.799Z
updatedAt: 2022-12-22T14:53:45.881Z
publishedAt: 2022-12-22T14:53:45.881Z
firstPublishedAt: 2018-03-15T15:16:31.703Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: orders-management-filter-doesnt-bring-the-orders-made-on-02-18-2018
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When filtering in the Orders management by Order Date, selecting the date 02/18/2018, the filter automatically changes to the orders of 02/17/2018. With that, it's not possible to filter these orders.

## Simulation

- Access your store Orders management;
- Click on filters;
- Select the Order Date filter;
- Fill in the filter with the date 02/18/2018.

## Workaround

The orders can be queried using our GET ORDER API:
https://documenter.getpostman.com/view/487146/vtex-oms-api/6tjSKqi#43524211-bbed-4f80-9a9b-d96b32347f0a

