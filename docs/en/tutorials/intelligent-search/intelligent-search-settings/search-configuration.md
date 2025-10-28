---
title: 'Search configuration'
id: 1yNCDwz0k77ovSGqkTbZMv
status: PUBLISHED
createdAt: 2024-06-17T14:08:59.824Z
updatedAt: 2025-04-24T15:27:15.330Z
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

The general settings display the following options related to[ product and SKU specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP):

* **Use SKU specifications to display individual products in search results**: Defines which specifications will sort the SKUs in the search results.

    Suppose you have a product available in two colors: blue and red. If you select the attribute "color" in this field, the search result will return two products (one blue and one red) instead of only one product.

    To configure this field, click the dropdown arrow and select the specifications you want to add.

    Check the guide [Detaching SKUs by specification](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5uVxuWxTA8VvLX3G8UCcUE) for more details on this configuration behavior.

* **Searchable specifications:** Determines which product specifications can be searched by the search engine.

    For example, if a shirt doesn't have a color in the product name, by default, Intelligent Search won't identify this attribute in the search results for "blue shirt", returning shirts of different colors. However, if the color specification is set as searchable, the search can return blue shirts in the top results.

## Facet settings

The facet settings have settings related to the[ filters](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/50Dh4mpv0Sax0XpbvsjAtP) displayed to your customers during the search:

![Facet configurations](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/intelligent-search/intelligent-search-settings/search-configuration_1.png)

* **Facet order:** Order in which the facets will be displayed in the store. If no facet is selected, the default order is alphabetical.

    To add a facet, click `Add`, select the facet, and click `Save` to confirm.

    You can change the order by dragging the three-bar icon <i class="fas fa-grip-vertical"></i> on each facet to the desired position.

    To delete a facet, click the trash can icon <i class="fas fa-trash-alt"></i>.

* **Hide facets:** Option that allows you to hide certain facets in the store. To hide a facet, click the dropdown menu and select the facet you want to hide.

    To redisplay a facet, click the X next to its name. If you want to show all the previously hidden facets again, click the X on the right side of the field.
