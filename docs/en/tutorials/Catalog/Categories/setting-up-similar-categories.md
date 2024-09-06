---
title: 'Setting up Similar Categories'
id: tutorials_204
status: PUBLISHED
createdAt: 2017-04-27T22:16:03.892Z
updatedAt: 2024-08-08T19:19:13.231Z
publishedAt: 2024-08-08T19:19:13.231Z
firstPublishedAt: 2017-04-27T23:00:46.323Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: setting-up-similar-categories
locale: en
legacySlug: setting-up-similar-categories
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

In VTEX Admin, you can register a Similar Category at [product](#similar-product-category) level or at [category](#similar-category-within-a-category) level. You can also register it using the [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-).

## Similar product category

Configuring a similar category in a product causes the product to be displayed on the page of the category registered as similar, in addition to its original category.

Follow the steps below for this configuration:

1. In the VTEX Admin, go to __Catalog__.
2. Click on __Products and SKUs__. You will be redirected to the page with the product listing.
3. On the product that you wish to include in a similar category, click on the arrow next to the `Update` button. A drop-down menu will appear.
4. Click on the __Similar Category__ option. You will see a page listing the categories that are similar to the selected product. On this page, you can delete an existing similar category or create a new one.
5. To create a new similar category, click on `New Similar Category`.
6. Click `Select Category`. When you do this, a new window will open with the list of all categories.
7. Click `Expand All' to see all the options, and then click on the desired category.
   The new window will automatically close and the __Similar Category__ field will be filled in with the one you have chosen.
9. Click `Save`.

Only the main product category will define the fields, specifications and filters. For example, if a product is in the main category __Cups__ and the similar category __Jars__, when you access the __Jars__ category, you will not see the __American Cups__ filter (which is part of the main __Cups__ category).

Similarly, if you filter for __Glass Cups__ in the __Jars__ category, you will not see the glass cups, since it is impossible to populate a similar category field for a product in the main category.

## Similar Category within a category

>⚠️ This setting is only compatible with stores using [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).

When editing a category, you can set up its like category. When you complete this kind of configuration at category level, the navigation menu will display a link to the similar category at the original category level.

See the step-by-step below:

1. In the VTEX Admin, go to __Catalog__.
2. Click on __Categories__.
3. Click __Show All__ to view all options, then click the desired category.
4. Click the __Actions__ button.
5. Click the __Include Similar__ option. This will open the list of similar categories in that category.
6. Click the __New Similar Category__ button.
7. Click the __Select Category__ button. When you do this, a new window will open with the list of all categories.
8. Click __Show all__ to view all of the categories available, and then click on the desired category.
11. Click the __Save__ button.

## API

To add a Similar Category by API, use the endpoint [Create Similar Category](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-).
