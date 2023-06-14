---
title: 'Incorrect apportionment of kit value when discount is applied'
id: mZLhWgjrvEa0eISE4syUE
status: PUBLISHED
createdAt: 2017-04-06T17:27:01.147Z
updatedAt: 2022-12-22T20:45:25.176Z
publishedAt: 2022-12-22T20:45:25.176Z
firstPublishedAt: 2017-05-18T19:56:56.627Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: incorrect-apportionment-of-kit-value-when-discount-is-applied
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When a discount is applied, there is a divergence between the total value of a kit and the sum of its components values.

### Example 1:

One kit is priced at $ 7.72. This kit receives a discount of $ 1.16. When the price of the kit is distributed among its components, the sum of the components price is $ 7.70.

### Example 2:

One kit is priced at $ 7.72. This kit receives a discount of $ 1.16. When the apportionment of the discount is made among its components, the sum of the components discount is $ 1.40.

This error occurs because of the rounding performed in the divisions of the values.

With this difference of values, tenants can not enter the Invoice in their systems.

## Simulation

1. In **Catalog** module, register a kit with 4 components;
2. In the **Pricing** module, create a promotion for this kit;
3. Close an order with this kit with the promotion applied;
4. The order's JSON or XML will display the divergence between the total value and the sum value of the parts.

## Workaround

This is an intermittent scenario. The momentary solution is to manually enter the values so that the ERP can generate the invoice with the correct value.

