---
title: 'Collection highlight control'
id: 1tGdb2ndjqy6yWsk2YwKMu
status: PUBLISHED
createdAt: 2018-02-21T19:12:49.216Z
updatedAt: 2023-06-22T17:42:41.479Z
publishedAt: 2023-06-22T17:42:41.479Z
firstPublishedAt: 2018-02-21T20:51:49.939Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: collection-highlight-control
legacySlug: collection-highlight-control
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️  there are two ways to configure collections, through the CMS or the Collection module (Beta). This article is about how to <a href = "https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L">configure collections through the Legacy CMS Portal</a>.

The `<vtex.cmc:HightLight/>` control (for product pages) or `$product.HightLight` control (for shelves) renders an HTML element with a specific class in the context of products that are part of a collection marked with the __Highlight__ flag.

First, let's see where the Highlight flag is:

1. Access the Admin.
2. Go to __Storefront__ > __Layout__.
3. Click the CMS folder and then the __Product Clusters (Collections)__ folder.
4. Click a collection.
5. Check the __Highlight__ flag, which is on the collection screen, and then click __Save Product Cluster__.

![CollectionHighlightFlag](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/collection-highlight-control_1.png)

By flagging it, you inform the system that whenever the highlight control is used in a page template, the products displayed on that page that are part of the collection must appear with the HTML element below, where in place of `{CollectionName}` appears the name of the collection registered in the CMS:

`<p class="flag {CollectionName}">{CollectionName}`

You can then customize the CSS to define how the `flag {CollectionName}` class will affect the display of the products.

This feature can be used, for example, to make products in a collection called "Launch" always appear with a flag highlighting that they are new to the store. When you add the control to the category page template, for example, every product in the Launch collection that appears on a category page will be shown with that highlight.

> ⚠️ Remember that if it's a product page, the control that should be used is `&lt;vtex.cmc:HightLight/&gt;`. If it's a shop window page, you should use the `$product.HightLight` control.
