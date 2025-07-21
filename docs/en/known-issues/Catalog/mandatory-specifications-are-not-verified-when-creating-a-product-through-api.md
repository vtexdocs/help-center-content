---
title: "Mandatory Specifications are not verified when creating a product through API"
id: 2s4WhYOfIRDcwuXyUp9mtK
status: PUBLISHED
createdAt: 2022-02-10T21:44:57.094Z
updatedAt: 2022-11-25T21:46:15.425Z
publishedAt: 2022-11-25T21:46:15.425Z
firstPublishedAt: 2022-02-10T21:44:58.173Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: mandatory-specifications-are-not-verified-when-creating-a-product-through-api
locale: en
kiStatus: Backlog
internalReference: 522293
---

## Summary


Products with mandatory specifications are not supposed to be active if at least one of these specifications are not filled or checked.

Creating the product via Admin guarantees a validation by the catalog about these specifications and the result is that the product remains inactive until they are filled.

However, such validation is not occurring when creating the product via API. The result is that the product can be active even without those specifications being filled.



## Simulation





1. Create a product via API: https://developers.vtex.com/vtex-rest-api/reference/post-product
2. Select a category that has mandatory product specifications
3. Do not fulfill the mandatory specifications
4. Verify that the product has status "Active" when it shouldn't have.



## Workaround





No workaround.

