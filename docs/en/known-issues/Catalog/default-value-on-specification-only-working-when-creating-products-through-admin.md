---
title: 'Default value on specification only working when creating products through Admin'
id: 6oL4LDFx18s0pOvOEKcniQ
status: PUBLISHED
createdAt: 2022-03-25T14:21:28.216Z
updatedAt: 2022-11-25T21:46:27.899Z
publishedAt: 2022-11-25T21:46:27.899Z
firstPublishedAt: 2022-03-25T14:21:29.045Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: default-value-on-specification-only-working-when-creating-products-through-admin
locale: en
kiStatus: Backlog
internalReference: 550097
---

## Summary


When creating a specification on a VTEX Category you can setup a default value that will be filled when the sku/product is created without this information.

However, this feature is not behaving as expected when the sku/product is created using API or spreadsheet. The field remains empty.

When creating the sku/product via Admin UI, the default value works normally.



## Simulation



1. Create a specification with a default value;
2. Create a product through Admin without fulfilling this field;
3. Verify that the field value is the default value;
4. Create a product through API or spreadsheet;
5. Verify that the field value is empty;



## Workaround


Create the product using Admin.

