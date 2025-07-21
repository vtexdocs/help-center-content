---
title: "New Collections 'Newly Released' filter is not working for Exports"
id: 7n6JZhsHxN8k27DUHOhgYg
status: PUBLISHED
createdAt: 2022-05-11T13:58:31.689Z
updatedAt: 2024-07-01T18:48:19.827Z
publishedAt: 2024-07-01T18:48:19.827Z
firstPublishedAt: 2022-05-11T13:58:32.282Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: new-collections-newly-released-filter-is-not-working-for-exports
locale: en
kiStatus: No Fix
internalReference: 576760
---

## Summary


The "Recently Released" product filter in the new collections module fetches products that were set with the release date variable in the recent past. It is present in the following UI component:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/new-collections-newly-released-filter-is-not-working-for-exports_1.png)

However, when combining this functionality with the sheet export, this filter is ignored, bringing all the products within the collection.






## Simulation


1 - Go to the new collections module and choose a collection

2 - On the main collection listing, use the "Newly Released" filter, note that you need to have at least 1 product with the "Release Date" value set in the filtered range. This value can be set on the Product Configuration page.

3 - A given value of "Newly Released" products will be filtered and listed on the UI.

4 - Select the "Export" functionality

5 - Export a SKU sheet for this collection

6 - Chech the number of exported registers, it will be the total amount of products in the collection, not the Newly Released.






## Workaround


Use alternative filters for your export.

