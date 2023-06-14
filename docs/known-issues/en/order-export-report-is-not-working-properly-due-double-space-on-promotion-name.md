---
title: 'Order Export Report is not working properly due double space on Promotion name'
id: 3dVPZEs544WyPDBNzTesWx
status: PUBLISHED
createdAt: 2023-04-06T20:22:47.489Z
updatedAt: 2023-04-06T20:22:48.141Z
publishedAt: 2023-04-06T20:22:48.141Z
firstPublishedAt: 2023-04-06T20:22:48.141Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: order-export-report-is-not-working-properly-due-double-space-on-promotion-name
kiStatus: Backlog
internalReference: 786216
---

## Summary


For orders promotion, is not correct use doble space or special character on names, this can breake the filter or missing some order on order export report.
Name on "ratesAndBenefitsData" array.


##

## Simulation


Create order using some promotion with incorrect name, for example with doble space on name.
After that goes to order management all orders and execute a filter with this promotion as condition.
That moment you can see the order on order list filtered, but choosing the export report that export will not get the order with promotion with double space.


##

## Workaround


There is no workaround available.





