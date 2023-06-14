---
title: 'Order Export Report does not work when there are some Order with big payload on the list'
id: 3mV7q5QNFNwqsIzareUBEn
status: PUBLISHED
createdAt: 2023-05-25T20:58:49.088Z
updatedAt: 2023-05-25T20:58:49.643Z
publishedAt: 2023-05-25T20:58:49.643Z
firstPublishedAt: 2023-05-25T20:58:49.643Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: order-export-report-does-not-work-when-there-are-some-order-with-big-payload-on-the-list
locale: en
kiStatus: Backlog
internalReference: 832429
---

## Summary


The order export does not work correctly because the task of exporting is canceled when there is one order in the list with big payload, for example case of order with more then 500 items on json.


##

## Simulation


Setup an order with big payload as too many items as more than 500 items and try to export using the Filter Orders Export option on Admin.


##

## Workaround


The workaround is split the filter. Setting the date before that order and the date after that order.





