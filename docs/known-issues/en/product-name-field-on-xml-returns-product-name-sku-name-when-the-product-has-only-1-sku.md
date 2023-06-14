---
title: 'Product Name Field on XML returns Product Name + Sku Name when the product has only 1 sku'
id: 7sNNzBe5pLn7oigDgoCKjv
status: PUBLISHED
createdAt: 2022-09-19T19:06:55.572Z
updatedAt: 2022-11-25T21:43:35.947Z
publishedAt: 2022-11-25T21:43:35.947Z
firstPublishedAt: 2022-09-19T19:06:56.137Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: product-name-field-on-xml-returns-product-name-sku-name-when-the-product-has-only-1-sku
kiStatus: Backlog
internalReference: 661089
---

## Summary



On the XML we have the fields called "Product Name" and "Product Name + Sku Name". However, if the product only has 1 sku, the field "Product Name" is not behaving as expected, being filled as "Product Name + Sku Name".

For example, if the product name A has a single SKU(Name B), the **Product Name** Field would use A+B, instead of just A.




## Simulation



1. Create a XML;
2. Add a product with only 1 sku;
3. Check the Product Name field;
4. Verify that the return will be the name of the product added to the name of the sku.



## Workaround


No workaround.

