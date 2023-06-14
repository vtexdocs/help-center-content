---
title: "Tx Id link in Orders management doesn't redirect to Payment module in marketplace orders"
id: 5LPtSrvUVnd3Bnw3GtQ67M
status: PUBLISHED
createdAt: 2019-03-08T20:00:30.460Z
updatedAt: 2022-12-22T14:44:41.533Z
publishedAt: 2022-12-22T14:44:41.533Z
firstPublishedAt: 2019-03-11T15:31:42.203Z
contentType: knownIssue
productTeam: Channels
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Order Management
slug: tx-id-link-in-orders-management-doesnt-redirect-to-payment-module-in
kiStatus: Backlog
internalReference: 
---

## Summary

When entering an order received from a marketplace and clicking on the transaction ID link in the upper right corner, the system is not redirecting to the transaction on the Payments module, as it happens in other orders.

## Simulation

1. Access __Orders management__;
2. In __All orders__, look for an order coming from a marketplace;
3. Enter the order;
4. By clicking the transaction link, the system will not redirect you to this transaction in __Payments__ and will display an error when it can not be found.

## Workaround

1. Copy the transaction ID;
2. Enter the Payments module;
3. Manually search for the transaction;
4. Enter the transaction to see the details you want.

