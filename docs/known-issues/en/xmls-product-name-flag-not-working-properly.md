---
title: "XML's "Product Name" flag not working properly"
id: 6YDbpRns3LCN02bVKM8aaf
status: PUBLISHED
createdAt: 2023-10-26T11:35:14.500Z
updatedAt: 2023-10-26T11:35:15.285Z
publishedAt: 2023-10-26T11:35:15.285Z
firstPublishedAt: 2023-10-26T11:35:15.285Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: xmls-product-name-flag-not-working-properly
locale: en
kiStatus: Backlog
internalReference: 925965
---

## Summary


When creating an XML, we have two different options to set the product name, on the flags "Product name" and "Product Name + SKU Name". However, the flag "Product Name" is being disregarded, and the product name on the file follows the rule:
- If the product has more than one SKU or the SKU name is equal to the product name = it will display only the Product Name
- If the product has only one SKU and the SKU name is not equal to the product name = it will concatenate the Product and SKU Name


##

## Simulation



1. Check if you have on the catalog products that match the description above
2. Create an XML by selecting the flag "Product Name"
3. See that for the products with only one SKU, the product name will be concatenated with the SKU name


##

## Workaround


N/A




