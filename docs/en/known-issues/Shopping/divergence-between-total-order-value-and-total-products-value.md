---
title: 'Divergence between total order value and total products value'
id: 20XszEUpq8MKweAyqMyIkM
status: PUBLISHED
createdAt: 2018-08-22T19:31:56.591Z
updatedAt: 2022-12-22T20:45:08.319Z
publishedAt: 2022-12-22T20:45:08.319Z
firstPublishedAt: 2018-08-22T20:33:38.843Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergence-between-total-order-value-and-total-products-value
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

In some cases, the total value of the order differs from the sum of the products values (adding also the value of shipping and possible discounts, if there's any). The known cause is related to the existence of products with a multiplier unit other than `1` in the order.

The order is closed and normally transacted at VTEX. But, depending on the external integration flows, problems can happen due to the created divergence.

## Simulation

Example of occurrence:

![image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Shopping/divergence-between-total-order-value-and-total-products-value_1.png)

In this case, the total value of the order charged to the customer was `R$ 7.98`. However, when adding the sales figures recorded in each product, the total would be `R$ 7.95`.

## Workaround

If there are problems outside VTEX, it's necessary to bypass them directly through the integration. The recommended suggestion is to manually prorate the remainder between some of the order items directly into the target system (ERP, NFe issuer, etc.)


