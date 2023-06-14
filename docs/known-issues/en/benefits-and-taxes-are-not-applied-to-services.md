---
title: 'Benefits and taxes are not applied to services'
id: 4u12zyfc387daNQamFohA2
status: PUBLISHED
createdAt: 2019-02-15T18:52:59.074Z
updatedAt: 2019-12-31T15:17:43.910Z
publishedAt: 2019-12-31T15:17:43.910Z
firstPublishedAt: 2019-02-15T18:55:22.623Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Checkout
slug: benefits-and-taxes-are-not-applied-to-services
kiStatus: Closed
internalReference: 
---

## Summary

By including a service in a cart item, benefits and taxes are not applied, keeping the service permanently with its original price.

## Simulation

1. Create a benefit and/or tax without any specific condition, so it will be widely applied in the store;
2. Insert a product with service in the cart;
3. Note that the price of the product will be modified but the price of the service will remain the same.

## Workaround

This scenario comes from a limitation of the service architecture available today, so ideally these products should be normal SKUs.

Through front-end implementations at the checkout you can check which products have been inserted into the cart and offer specific services that in turn will insert such SKUs that correspond to the service.

