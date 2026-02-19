---
title: 'Setting up the global category'
id: tutorials_188
status: PUBLISHED
createdAt: 2017-04-27T22:16:11.527Z
updatedAt: 2023-03-14T17:22:19.456Z
publishedAt: 2023-03-14T17:22:19.456Z
firstPublishedAt: 2017-04-27T23:00:46.100Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: setting-up-the-global-category
legacySlug: setting-up-the-global-category
locale: en
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

The global category tree is the taxonomy created by Google for the [Merchant Center](https://support.google.com/merchants/answer/6324436), and which in VTEX system is pre-defined as a single tree.

The same global categories are available for products from all stores.

> ℹ️ For every category of your store, you need to choose a global category.

### Why use it?

We have adopted this taxonomy because it's widely applicable to any context, and therefore assists in the integration of the store with external sales channels.

It is used, for example, as a reference for the integration of products with Amazon, Buscapé and marketplaces.

> ℹ️ The default behavior of our integration with Google Shopping is **not to send** this information. Thus, most stores rely on Google's own automatic categorization. If you prefer manual categorization, [contact support](/en/docs/tutorials/opening-tickets-to-vtex-support).

### When is it applied?

The global category is only used in external integrations, for example with marketplaces or other sales channels.

### How to choose a global category?

A good mapping makes the products of the store found in partners more effectively.

You should always choose the global category that most closely matches the products of the category in your store.

In general, the more specific it is, the better. With that, your products will be in the most appropriate places in external integrations.

__Example__: If your store has a "Motherboard" category, you should choose the global category "Motherboards" instead of "Components and circuit boards" or "Electronics".

### How to configure a global category?

In the [VTEX catalog](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ), global categories are based on the [list of all Google product categories](https://support.google.com/merchants/answer/6324436?hl=en). We use this standard because it applies to multiple contexts, which facilitates categorizing products from different segments in a single and comprehensive structure.

Defining a global category is mandatory. **You can use it to integrate a store with external sales channels.** Currently, VTEX uses the global category only for the Amazon integration connector. 

You must choose the global category that most closely matches your product. Your partners will be able to find your products easily if you map them well. The more specific the category is, the better.

**Example:** if your store has a "Motherboards" category, you should choose the "Motherboards" as the global category rather than "Components and circuit boards" or "Electronics".

Ideally, it would be best if you determined the global category in the category settings. This way, all products in a given category will belong to the same global category.

> ❗ Choosing a global category when adding a product is only recommended if it needs to be configured differently from the products in the category it belongs to.

You must configure the global category in the Admin. Please follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Then click on __Categories__.
3. Click on a category. You can use the search box to select a category by typing its name and clicking on the <i class="fas fa-search"></i> button.
4. Click on the `Actions` button.
5. Click on `Edit`.
6. Next to the __VTEX global Category__ field, click on `Select VTEX global category`.
7. Type the name of the category you want to find and click on the <i class="fas fa-search"></i> button.
8. Select a category and then click on the `Save` button.

> ℹ️ You can also configure the global category via [XML](/en/docs/tutorials/configuring-xml) file.
