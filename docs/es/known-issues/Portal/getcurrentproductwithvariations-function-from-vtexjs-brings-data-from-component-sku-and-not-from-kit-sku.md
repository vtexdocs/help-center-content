---
title: 'getCurrentProductWithVariations function from VTEX.js brings data from Component SKU and not from KIT SKU.'
id: 1m1bMbNXZVpQo9bQG1iSjn
status: PUBLISHED
createdAt: 2022-03-16T16:35:51.214Z
updatedAt: 2024-02-16T20:24:03.691Z
publishedAt: 2024-02-16T20:24:03.691Z
firstPublishedAt: 2022-03-16T16:35:51.652Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: getcurrentproductwithvariations-function-from-vtexjs-brings-data-from-component-sku-and-not-from-kit-sku
locale: en
kiStatus: No Fix
internalReference: 324416
---

## Summary


Function `getCurrentProductWithVariations` from VTEX.js brings data from Component SKU instead of KIT SKU.



## Simulation


- Access a PDP from a KIT Product;
- Use the function  getCurrentProductWithVariations to get data from the KIT;
- Check that the response is from the SKU Components, and not from the KIT SKU.



## Workaround


Use the function `getProductWithVariations({productId})`as a workaround. In this case, we have to use the Product ID from this KIT.

