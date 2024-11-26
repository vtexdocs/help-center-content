---
title: 'Search configuration'
id: 5t75L6lYNwix93l41s1Yrx
status: ARCHIVED
createdAt: 2020-08-17T19:50:20.729Z
updatedAt: 2024-09-06T20:14:21.133Z
publishedAt: 
firstPublishedAt: 2020-09-28T20:51:58.291Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: search-settings
locale: en
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
---

The **Search Settings** page comprises the VTEX Intelligent Search general settings. To access it in the VTEX Admin, go to **Store Settings > Intelligent Search > Search Settings**. The page is divided into two sections: [General Settings](#general-settings) and [Facet Settings](#facet-settings).

## General settings

The general settings display the following options related to[ product and SKU specifications](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP):

* **Use SKU specifications to display individual products in search results**: Defines which specifications will sort the SKUs in the search results.

    Suppose you have a product available in two colors: blue and red. If you select the attribute "color" in this field, the search result will return two products (one blue and one red) instead of only one product.

    To configure this field, click the dropdown arrow and select the specifications you want to add.

    Check the guide [Detaching SKUs by specification](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5uVxuWxTA8VvLX3G8UCcUE) for more details on this configuration behavior.

* **Searchable specifications:** Determines which product specifications can be searched by the search engine.

    For example, if a shirt doesn't have a color in the product name or SKU, by default, Intelligent Search won't identify this attribute in the search results for "blue shirt", returning shirts of different colors. However, if the color specification is set as searchable, the search can return blue shirts in the top results.

## Facet settings

The facet settings have settings related to the[ filters](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/50Dh4mpv0Sax0XpbvsjAtP) displayed to your customers during the search:

![Facet configurations](https://images.ctfassets.net/alneenqid6w5/mSm3lqR5H5pTn1AVrhYk8/2f421fca7b4914deb993bb84e731a2d7/facet_settings_admin_v4.png)

* **Facet order:** Order in which the facets will be displayed in the store. If no facet is selected, the default order is alphabetical.

    To add a facet, click `Add`, select the facet, and click `Save` to confirm.

    You can change the order by dragging the three-bar icon <i class="fas fa-grip-vertical"></i> on each facet to the desired position.

    To delete a facet, click the trash can icon <i class="fas fa-trash-alt"></i>.

* **Hide facets:** Option that allows you to hide certain facets in the store. To hide a facet, click the dropdown menu and select the facet you want to hide.

    To redisplay a facet, click the X next to its name. If you want to show all the previously hidden facets again, click the X on the right side of the field.
