---
title: 'Ordering of product fields and SKUs is not saved'
id: 5UsBchV9uWw0eWn6G1d7AN
status: DRAFT
createdAt: 2022-02-15T18:20:03.680Z
updatedAt: 2023-02-14T16:24:45.180Z
publishedAt: 
firstPublishedAt: 2022-02-15T18:20:04.148Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: ordering-of-product-fields-and-skus-is-not-saved1
kiStatus: Backlog
internalReference: 
---

## Summary


When you change the ordering of products or SKUs fields in a category other than the main one, after clicking the sort button the changes are not saved and the changed fields do not appear after the page is reloaded.



## Simulation



1. From the side menu, click Catalog.
2. Click Categories.
3. Click a category that has registered product fields that were not inherited from another category.
4. Access Actions > Field (Product) or Field (SKU).
5. In the box that contains the order number, change the order of some categories.
6. Click Sort.




## Workaround


Currently the only solution is to perform the ordering of the fields through a Javascript customization on the front-end.

