---
title: "Error in viewing the orders UI after requesting the invoice via App"
id: 1yrb25L1Skj3sRRWyiFDSA
status: PUBLISHED
createdAt: 2024-07-24T14:24:29.799Z
updatedAt: 2024-07-24T14:24:30.583Z
publishedAt: 2024-07-24T14:24:30.583Z
firstPublishedAt: 2024-07-24T14:24:30.583Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-in-viewing-the-orders-ui-after-requesting-the-invoice-via-app
locale: en
kiStatus: Backlog
internalReference: 1070299
---

## Summary


When we execute a `change V2` by removing or adding an item to an order, we create a change in the list of items in the order, which can increase or decrease the number of indexes in the list of items in the json. This change, in turn, may not be consumed by all the apps or databases involved in handling the order, such as the invoice notifier app;

As a result, by requesting the invoice via the invoice notifier app before having carried out an action to remove or add an item, the user ends up causing a breakage scenario in the UI, as the `invoice notifier app` starts to return an error due to having more or fewer items than expected by the UI, resulting in a “null reference” error which prevents the order from being displayed in the UI;


##

## Simulation



**NOTE**: To simulate this scenario, you must have configured the `invoice notifier app` and also be using the `Change V2` flow;


- In an order with more than one item, go to the handling status;


- From the UI, click on the “Request invoice” option (Notify your ERP).


- Before the invoice is returned by the ERP, make a change to the order by removing or adding any item to the order;


- Wait until the ERP sends the invoice to the Orders system, then access the order again from the Orders UI, at which point the UI will return an error message and the order cannot be displayed;


##

## Workaround


Make the invoice request via invoice-notifier only after performing the change of order items.





