---
title: "Shipping calculation on product page displays pickup point ID"
id: 4NJrWgCGXSKe2aKWo4UYUY
status: PUBLISHED
createdAt: 2018-06-01T12:59:25.406Z
updatedAt: 2022-12-22T20:49:04.210Z
publishedAt: 2022-12-22T20:49:04.210Z
firstPublishedAt: 2018-06-01T13:03:09.960Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: shipping-calculation-on-product-page-displays-pickup-point-id
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

If the store has a registered pickup point, the shipping simulation on the *product page* will display the pickup point ID used for identification in the logistics module.

## Simulation

1. Register a pickup point in the Logistics module and associate a product to be withdrawn at this point;
2. Access the URL of the page for this product;
3. Simulate the shipping;
4. Next to the name of the pickup point will appear a value in parentheses. This value is the pickup point ID used for identification in the Logistics module.

## Workaround

The store needs to adjust the front-end so it doesn't display the value in parentheses.

