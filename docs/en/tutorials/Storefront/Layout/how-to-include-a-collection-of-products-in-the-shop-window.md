---
title: 'Including a collection of products in the shop window'
id: frequentlyAskedQuestions_589
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.516Z
updatedAt: 2025-02-01T00:12:59.875Z
publishedAt: 2025-02-01T00:12:59.875Z
firstPublishedAt: 2019-01-24T22:12:59.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-include-a-collection-of-products-in-the-shop-window
legacySlug: how-to-include-a-collection-of-products-in-the-shop-window
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Warning:** there are two ways to configure collections, through the CMS or the Collection module (Beta). This article is about how to <a href = "https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L">configure collections through the CMS</a>.

Shop windows are used to feature products on several pages; they can also be used for recommendations on the product page.

Firstly, before setting up a shop window, create a collection (see instructions [here](/en/tutorial/creating-a-product-collection "here")) with the products that will be shown on the screen. The pages should also be duly structured, with the proper controls inserted in their templates.

After the proper definitions, the collection is linked to the shop window at **Storefront > Layout**.

In the example below, we will define a shop window shown on the Home page. Therefore, select **Settings**, then **add object**, as in the following image.

![coleção2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_1.png)

This command will open the **Visual Controls**, that correspond to the showcase where you want to display the collection. Add a _Collection_, but be sure to set a name for it.

![coleção3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_2.png) 

![coleção4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_3.png)

Remember to save the settings so that you can edit the control created.

![coleção5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_4.png)

![coleção6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_5.png)

To edit the control, it is necessary to add its contents, which represent each set of items to be displayed.
Are they:
_Layout_: Select the shelf template used in the showcase.
_Number of Columns, Number of Items, Show Unavailable_ and _Ramdom ad Paged_: Define the layout, quantity, and the criteria for displaying the items.

![coleção7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_6.png)

Remember to save your changes before you search or change pages.
The next step is to add the content by selecting **Add Content**.
![coleção8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_7.png)

It is possible to define each content by using collections or search results, by using search parameters (further details [here](https://help.vtex.com/en/tutorial/como-funciona-a-busca-da-vtex--tutorials_542)).

The contents to be filled in **Content** are:
_Content_: Name that will identify each set of items
_QueryString_: The parameters entered in this field define the search result that will be displayed in this content.

In the **Product Cluster (Collection)** field, you must select the collection that will be displayed by completing the following step:

![coleção10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_8.png)

The contents to be filled in the **Display Condition** part:
_Partner, Campaign_ and _Source_: Define the display of this content if the visitor has a corresponding UTM in its source URL.
_Keywords_: Binds the display of content to a search for specific term(s).
_Category_ and _Brand_: Binds the display of the content on a Category page and/or specific Mark(s).
_Peridos_: Defines the period in which the content will be active.

After the settings, check **Active Content** and add to the content list, saving all settings later.

The example below shows a standard shop window, with no display conditions, and another one exclusive for visits arising from Google sponsored campaign audiences (utm_source=**google**/utm_medium=**cpc**): 

![coleção9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/how-to-include-a-collection-of-products-in-the-shop-window_9.png)

In the scenario above, if the customer came from the sponsored campaign audience, the products corresponding to the result of a search for ID 200000 Brand will be displayed on the **Lançamentos** shop window, located on Home; otherwise, the products corresponding to ID 8 collection will be displayed.

Whenever more than one active content is used in the same control, they should be sorted (by clicking and dragging their content) so that the content with no conditions to be displayed are always in the last position, as shown above.
