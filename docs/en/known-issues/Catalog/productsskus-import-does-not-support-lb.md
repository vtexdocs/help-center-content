---
title: "Products&SKUs Import does not support 'lb"
id: 1OjtnFf9MpY1IFzQa8Ua2t
status: PUBLISHED
createdAt: 2022-06-17T19:38:17.726Z
updatedAt: 2024-02-16T20:29:45.337Z
publishedAt: 2024-02-16T20:29:45.337Z
firstPublishedAt: 2022-06-17T19:38:18.052Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: productsskus-import-does-not-support-lb
locale: en
kiStatus: No Fix
internalReference: 337860
---

## Summary


Currently, the catalog sheet for Products and SKUs is not supporting the 'lb' measurement unit. `/admin/Site/Relatorio_Skus.aspx`

This is actually a lb unit in our SKU UI which is configurable:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/productsskus-import-does-not-support-lb_1.png)

However, the product&sku import currently returns an error message whenever an user tries to import any sku containing this value, regardless if the other fields are valid:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/productsskus-import-does-not-support-lb_2.png)







## Simulation


1) Set 'lb' as the measurement unit of an sku

2) Export a products and skus sheet for this filtered sku

3) Try importing again making a minor change on, let's say, the sku name. You'll receive the error.







## Workaround


Setting the values via API and/or directly via admin.

