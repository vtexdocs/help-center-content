---
title: 'Search configuration'
id: 1yNCDwz0k77ovSGqkTbZMv
status: PUBLISHED
createdAt: 2024-06-17T14:08:59.824Z
updatedAt: 2026-07-06T00:00:00.000Z
publishedAt: 2025-04-24T15:27:15.330Z
firstPublishedAt: 2024-06-17T14:10:20.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: search-configuration
legacySlug: search-configuration
locale: en
subcategoryId: 1EmKjP83dy0RWD9GzZkYsG
---

The **Search Settings** page comprises the VTEX Intelligent Search general settings. To access it in the VTEX Admin, go to **Store Settings > Intelligent Search > Search Settings**. The page is divided into two sections: [General Settings](#general-settings) and [Facet Settings](#facet-settings).

## General settings

The general settings display the following options related to[ product and SKU specifications](/en/docs/tracks/specifications-concept-definition):

* **Use SKU specifications to display individual products in search results**: Defines which specifications will sort the SKUs in the search results.

    Suppose you have a product available in two colors: blue and red. If you select the attribute "color" in this field, the search result will return two products (one blue and one red) instead of only one product.

    To configure this field, click the dropdown arrow and select the specifications you want to add.

    Check the guide [Detaching SKUs by specification](/en/docs/tutorials/detaching-skus-by-specification) for more details on this configuration behavior.

* **Searchable specifications:** Determines which product specifications can be searched by the search engine.

    For example, if a shirt doesn't have a color in the product name, by default, Intelligent Search won't identify this attribute in the search results for "blue shirt", returning shirts of different colors. However, if the color specification is set as searchable, the search can return blue shirts in the top results.

## Facet settings

The facet settings have settings related to the[ filters](/en/docs/tutorials/filters) displayed to your customers during the search:

![Facet configurations](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/intelligent-search/search-configuration_1.png)

* **Facet order:** Order in which the facets will be displayed in the store. If no facet is selected, the default order is alphabetical.

    To add a facet, click `Add`, select the facet, and click `Save` to confirm.

    You can change the order by dragging the three-bar icon <i class="fas fa-grip-vertical"></i> on each facet to the desired position.

    To delete a facet, click the trash can icon <i class="fas fa-trash-alt"></i>.

* **Hide facets:** Option that allows you to hide certain facets in the store. To hide a facet, click the dropdown menu and select the facet you want to hide.

    To redisplay a facet, click the X next to its name. If you want to show all the previously hidden facets again, click the X on the right side of the field.

### Minimum result coverage for facets

> ℹ️ This feature is available on demand. To enable it, contact [VTEX Support](https://supporticket.vtex.com/support).

Large catalogs often contain facets created from specifications shared by only a few products, cluttering the facet panel with low-coverage options. With minimum coverage enabled, only facets with significant coverage are displayed by default.

The system automatically hides facets in which no option reaches a minimum coverage percentage of the total search results. You can exclude specific facets from this rule so they're always displayed, regardless of the configuration.

For example, if the minimum coverage is set to 5%, a facet in which all options apply to less than 5% of the current search results won't be displayed. Consider a search for "shirt" that returns 1,000 products. With a minimum coverage of 5%, the facets are evaluated as follows:

- The **Color** facet covers 1,000 products (100%) and is displayed.
- The **Size** facet covers 600 products (60%) and is displayed.
- The **Fabric** facet covers only 30 products (3%) and is automatically hidden because its options don't reach the minimum percentage.
