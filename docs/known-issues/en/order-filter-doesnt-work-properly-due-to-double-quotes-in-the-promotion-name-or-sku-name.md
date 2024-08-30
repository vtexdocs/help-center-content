---
title: "Order Filter doesn't work properly due to double quotes (') in the Promotion name or SKU name"
id: 4Qm0akQTQXR8sSbkTDiBL7
status: PUBLISHED
createdAt: 2024-06-06T15:42:19.747Z
updatedAt: 2024-06-06T15:42:20.627Z
publishedAt: 2024-06-06T15:42:20.627Z
firstPublishedAt: 2024-06-06T15:42:20.627Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: order-filter-doesnt-work-properly-due-to-double-quotes-in-the-promotion-name-or-sku-name
locale: en
kiStatus: Backlog
internalReference: 1045623
---

## Summary


The orders filter system currently doesn't return the order with promotions that contain double quotes `"` in their names, this also applies to SKU name.


##

## Simulation


To reproduce this scenario, follow the steps below.

1. Create a promotion/sku with double quotes `"` in the name;
Example: Promotion name as `10% off usando o cupom "DIAGEO" (8)`
2. Create a test order:

  1. In the store environment (storefront), select an item and add it to the cart;
  2. Make sure promotion is applied;
  3. Go to the checkout and place the order.
3. Go to **Orders > Order management**;
4. Click on `All orders`;
5. Use the **filter** to select the promotion you've added;
6. Note that no orders are found with the selected filter, and returned message in the UI is: `Nenhum pedido encontrado. Limpe seus filtros e tente uma pesquisa diferente.`


##

## Workaround


There is no workaround available.





