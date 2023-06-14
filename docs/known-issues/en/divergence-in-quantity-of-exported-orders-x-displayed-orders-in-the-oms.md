---
title: Divergence in quantity of exported orders x displayed orders in the Orders Management 
id: 6sJzAuMwfY4moi6Eg6MwkW
status: PUBLISHED
createdAt: 2018-04-04T15:55:44.748Z
updatedAt: 2022-12-22T14:45:40.180Z
publishedAt: 2022-12-22T14:45:40.180Z
firstPublishedAt: 2018-04-04T16:04:52.588Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: divergence-in-quantity-of-exported-orders-x-displayed-orders-in-the-oms
kiStatus: Backlog
internalReference: 
---

## Summary

Today, when requesting the orders export in the Orders Management, in large quantities or over an extended period, instability may occur in some of the Orders Management consultation systems.

In this way, orders that go through this error don't enter the report, generating a divergence between the number of orders displayed and the number of orders extracted.

## Simulation

- Filter in the Orders Management a period that generates a large number of orders (over a thousand, for example) and analyze the quantity displayed in the Orders Management.
- Request the export of these orders and compare the quantity displayed with the quantity exported.

## Workaround

We recommend using our APIs for querying orders. The ERP can work with the information to generate the required report:

https://developers.vtex.com/reference/orders

https://developers.vtex.com/reference/feed-v3

