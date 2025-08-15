---
title: 'How to use the Search Result control'
id: 6xOLxZA2Ws8Q2ug6U6ksyo
status: PUBLISHED
createdAt: 2018-03-02T13:14:11.357Z
updatedAt: 2022-03-23T17:19:01.219Z
publishedAt: 2022-03-23T17:19:01.219Z
firstPublishedAt: 2018-03-06T12:31:03.507Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-use-the-search-result-control
legacySlug: how-to-use-the-search-result-control
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

The `<vtex.cmc:searchResult/>` control renders a shop window with the products returned by a search made by the user.

> ℹ️ This control works only on pages with search context, ie pages where the displayed results were brought by a search made by the user.

When the user performs a search in the store, VTEX system tries to bring results according to a priority order of filters. Understand the search in the article [How VTEX search works](/en/tutorial/how-does-vtex-search-work).

Let's say, for example, that the result is a category context. That is, the user searched, for example, for the term "Shirts", the system identified that there is a category with the name "Shirts" and loaded the page of that category - using, therefore, the category template. If the Search Result control is in the code of this template (by default, it actually is), it will render a shop window with the products that are part of that category.

This control has some attributes available, which are used to give the system indications about the conditions of products exhibition.

Some of these attributes are optional, but others are __required__, as the attribute that indicates which shelf template will be used to display the products.

See below the list of all attributes of the Search Result control:

| Attribute | Function | Required? | Example of use |
| ---------- | ---------- | ---------- | ---------- |
| `layout` | Template code of the shelf that will display the products. | Yes | `<vtex.cmc:searchResult layout="48e223e6-da80-4610-b3d5-4e5cfaf94f13" />` |
| `itemCount` | Number of items to display. | Yes | `<vtex.cmc:searchResult itemCount="10" />` |
| `columnCount` | Number of columns to display the products. | Yes | `<vtex.cmc:searchResult columnCount="4" />` |
| `showUnavailable` | When set to true, the depleted products should be displayed. | No | `<vtex.cmc:searchResult showUnavailable="false" />` |
| `selectionMode =" batch-buy "` | Allows batch purchases. | No | `<vtex.cmc:searchResult selectionMode="batch-buy" />` |
| `isTrackable` | When set to true, this control must be traceable. | No | `<vtex.cmc:searchResult isTrackable=true />` |
| `InternalCampaign` | Internal Campaign Audience Name. | No | `<vtex.cmc:searchResult InternalCampaign="Resultado busca landing" />` |
| `InternalPart` | Name of the internal viewpart. | No | `<vtex.cmc:searchResult InternalPart="Resultado Busca" />` |

## HTML code rendered

The code rendered by the Search Result control has the following structure by default:

![searchResult1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-use-the-search-result-control_1.jpg) 

And the corresponding elements that are rendered by the control in its non-customized version follow the pattern below:

![searchResult2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-use-the-search-result-control_2.jpg) 

![searchResult3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-use-the-search-result-control_3.jpg) 

![searchResult4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-use-the-search-result-control_4.jpg) 

![searchResult5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-use-the-search-result-control_5.jpg)
