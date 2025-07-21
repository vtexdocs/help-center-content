---
title: "Collections Timeout"
id: 3TgWP83kn8G8NClnUHmaoS
status: PUBLISHED
createdAt: 2022-02-25T12:33:00.051Z
updatedAt: 2025-06-09T20:28:41.035Z
publishedAt: 2025-06-09T20:28:41.035Z
firstPublishedAt: 2022-02-25T12:33:00.399Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-timeout
locale: en
kiStatus: Backlog
internalReference: 434026
---

## Summary


Often, when attempting to save data for a collection group using the collections application, under the path /admin/a and attempting to Save Group, the user will, in cases of large catalogs (large amount of categories, brands, products), face a timeout error message and won't be able to save their changes.

This also can happen for the new collections module.

`{account}.myvtex.com/admin/a/`

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/collections-timeout_1.png)


##

## Simulation


1) Go to the CMS UI application using a store that has a large catalog base, for instance, >10000 products.
2) Go to "Product Clusters (Collections) and select "_new group_"
3)  Create a group and then select a few checkboxes in the form
4) Attempt to save these changes
5) If the request takes longer than 50 seconds to save, which is often the case in accounts with a large amount of data, the request will be stopped by and the data will not be saved.


##

## Workaround


Using our collections API endpoints: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection?endpoint=post-/api/catalog/pvt/collection, however, it is important to note that in some cases, where there's a large amount of data being updated, the timeout may still occur via API.

