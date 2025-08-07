---
title: 'Setting up similar categories'
id: tutorials_204
status: PUBLISHED
createdAt: 2017-04-27T22:16:03.892Z
updatedAt: 2025-05-23T23:04:07.864Z
publishedAt: 2025-05-23T23:04:07.864Z
firstPublishedAt: 2017-04-27T23:00:46.323Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-similar-categories
legacySlug: setting-up-similar-categories
locale: en
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

In VTEX Admin, you can register a similar category at product level or category level, as shown in the next sections.  

<div class = "alert alert-info">
  <p>To register a similar category at via Catalog API, use the <a href="https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-">Add similar category</a> endpoint.</p>
</div>

## Configuring similar category at product level

Configuring a similar category in a product causes the product to be displayed on the page of the category registered as similar, in addition to its original category.

Only the main product category will define the fields, specifications and filters. For example, if a product is in the main category __Cups__ and the similar category __Jars__, when you access the __Jars__ category, you will not see the __American Cups__ filter (which is part of the main __Cups__ category).

Similarly, if you filter for __Glass Cups__ in the __Jars__ category, you will not see the glass cups, since it is impossible to populate a similar category field for a product in the main category.

To configure a similar category at product level, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](https://help.vtex.com/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) in the search bar at the top of the page.
2. Click on the desired product line, or click on the product three-dot menu > `Edit product`. If you are creating the product, check out the article [Adding or editing products](https://help.vtex.com/en/tutorial/adding-or-editing-products--29IkdEu6GofCFlltsZh2H8).
3. In the **Storefront** section, add the desired categories in the **Similar Categories** field.
4. Click `Save`.

## Configuring similar category within a category

<div class="alert alert-warning">
  <p>This setting is only compatible with stores using <a href="https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">Legacy CMS Portal</a>.</p>
</div>

When editing a category, you can set up its like category. When you complete this kind of configuration at category level, the navigation menu will display a link to the similar category at the original category level.

To configure a similar category at category level, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Categories**, or type **Categories** in the search bar at the top of the page.
2. Click `Show All` to view all options, then on the desired category.
3. Click `Actions`.
4. Click the `Include Similar` option. This will open the list of similar categories in that category.
5. Click `New Similar Category`.
6. Click `Select Category`. When you do this, a new window will open with the list of all categories.
7. Click `Show all` to view all of the categories available, and then click on the desired category.
8. Click `Save`.
