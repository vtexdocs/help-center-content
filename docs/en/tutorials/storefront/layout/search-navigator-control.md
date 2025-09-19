---
title: 'How Search Navigator control works'
id: 2VFmZawWZiW0ckeqoscieS
status: PUBLISHED
createdAt: 2018-02-22T19:19:44.082Z
updatedAt: 2020-12-11T16:41:27.980Z
publishedAt: 2020-12-11T16:41:27.980Z
firstPublishedAt: 2018-03-02T18:43:54.011Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: search-navigator-control
legacySlug: search-navigator-control
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Warning:** there are two ways to configure collections, through the CMS or the Collection module (Beta). This article is about how to <a href = "https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L">configure collections through the CMS</a>.

The `<vtex.cmc:searchNavigator/>` control renders a menu of filters related to the result of a search.

> ℹ️ This control works **only on pages with search context**, i.e. pages where the displayed results were fetched by a user search.

When users perform a search on the store page, the VTEX system tries to fetch results according to filter priority order. [Know more about the VTEX search works here.](/en/tutorial/how-does-vtex-search-work)

Let's suppose that the result is a category context, which means that the user searched, for example, for the term "Shirts", the system identified that there is a category with the name "Shirts" and loads that category's page - using, therefore, the category template. If the Search Navigator control is in the code of this template, it will render a menu with filters on the page.

By default, the filters that can be displayed by the Search Navigator are as follows, in this order:
- Collections.
- Categories.
- Brands.
- Specifications.
- Price ranges.

However, each of these filters entails distinct display conditions, meaning that you can define whether or not the above-mentioned should appear as  filters in search contexts.

## Collections

For a collection to be rendered in the menu by the Search Navigator control, it must be marked with the __Searchable__ flag.

This flag can be found in the collection's settings, inside CMS.

![searchNavigator2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/search-navigator-control_1.jpg)

## Categories

For a category to be rendered by this control, it must be marked with the __Menu__ flag.

This flag can be found on the category registration screen.

![How Search Navigator control works EN 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/search-navigator-control_2.png)

> ℹ️ **Important**: The `&lt;vtex.cmc:searchNavigator/&gt;` control displays, by default, only the primary-level categories (root) and the lowest-level sub-categories, within the current context. Intermediate splits in the categories tree are omitted. In addition, the control only functions on the first three levels, which traditionally are the Department, Category and Subcategory. If your [catalog architecture](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR) has any other subdivisions except the three levels mentioned above, these will not be displayed using the native control.

## Brands

### In category pages:

The brand registration page doesn't have a display flag in the menu rendered by Search Navigator.

So, by default, brands are always displayed.

> ⚠️ However, on department or category pages, brands will only be displayed by the Search Navigator control if the **Brand Filter** flag is checked when adding a category.

### In other pages:

On pages that don't load department or category templates, the brand filter will always be displayed.

If you want to hide it, you should do this using CSS.

## Specifications

For a product field or SKU field to be displayed on the menu by the Search Navigator control, it must have two flags tagged:
- Filter
- Link in Side Menu

Both are found on the field registration screen.

![How Search Navigator control works EN 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/search-navigator-control_3.png)

## Price ranges

If you have any [price range](/en/tutorial/setting-up-the-price-range-filter) configured in the store, it also functions as a filter and is, by default, displayed in the menu by the Search Navigator control.

Since they're filters registered in categories, price ranges are only displayed on department or category pages.

---

> ℹ️ Filters are **always** rendered based on the attributes of  search context products; meaning based on the category, specification (color, size), brand, collection, etc.<br><br>Therefore, in addition to the conditions listed above for these attributes to appear as filters in the menu, it's first of all necessary for the search term to return a context with products that have such attributes.<br><br>If the user searches, for example, for "cell" and the Shirts category does not contain any cell, it will not appear in the menu, even if the display flag in this category is checked.
