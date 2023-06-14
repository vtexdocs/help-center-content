---
title: 'Including a collection of products in the shop window'
id: frequentlyAskedQuestions_589
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.516Z
updatedAt: 2023-03-29T18:05:00.147Z
publishedAt: 2023-03-29T18:05:00.147Z
firstPublishedAt: 2019-01-24T22:12:59.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: how-to-include-a-collection-of-products-in-the-shop-window
legacySlug: how-to-include-a-collection-of-products-in-the-shop-window
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning" >
  <p><b>Warning:</b> there are two ways to configure collections, through the CMS or the Collection module (Beta). This article is about how to <a href = "https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L">configure collections through the CMS</a>.</p>
</div>

Shop windows are used to feature products on several pages; they can also be used for recommendations on the product page.

Firstly, before setting up a shop window, create a collection (see instructions [here](/en/tutorial/creating-a-product-collection "here")) with the products that will be shown on the screen. The pages should also be duly structured, with the proper controls inserted in their templates.

After the proper definitions, the collection is linked to the shop window at **Storefront > Layout**.

In the example below, we will define a shop window shown on the Home page. Therefore, select **Settings**, then **add object**, as in the following image.

![coleção2](//images.ctfassets.net/alneenqid6w5/5JzAgUQ2NU4oIM88Kqm8AW/a4d8c175710d8542dc0099cd16c5168d/cole____o2.png)

This command will open the **Visual Controls**, that correspond to the showcase where you want to display the collection. Add a _Collection_, but be sure to set a name for it.

![coleção3](//images.ctfassets.net/alneenqid6w5/12pUvp3l5u0CcIISmG6g2A/cf86f9d87c6c9ee2e9f1db979d2b2836/cole____o3.png) 

![coleção4](//images.ctfassets.net/alneenqid6w5/6XdqMY2IAoy6ugIK4KcYEk/0491e41c7dda3da46334ab975fe7f2ee/cole____o4.png)

Remember to save the settings so that you can edit the control created.

![coleção5](//images.ctfassets.net/alneenqid6w5/3edZaVppl6cuU64yqisaGm/4cb795f99bf6227597d044736a7e0184/cole____o5.png)

![coleção6](//images.ctfassets.net/alneenqid6w5/Zry4UUPxW8Eic6yWmok4C/a997c64b6c59a0f3a3551228a685ff58/cole____o6.png)

To edit the control, it is necessary to add its contents, which represent each set of items to be displayed.
Are they:
_Layout_: Select the shelf template used in the showcase.
_Number of Columns, Number of Items, Show Unavailable_ and _Ramdom ad Paged_: Define the layout, quantity, and the criteria for displaying the items.

![coleção7](//images.ctfassets.net/alneenqid6w5/4A4DMctlIkaaa2OGeAMwSq/a8205c9b1715f46dc9b8feac175de132/cole____o7.png)

Remember to save your changes before you search or change pages.
The next step is to add the content by selecting **Add Content**.
![coleção8](//images.ctfassets.net/alneenqid6w5/ytG3zPwgDY4SQwYWsa6am/27dc5ad87b2f0b25d33b991ab006c7df/cole____o8.png)

It is possible to define each content by using collections or search results, by using search parameters (further details [here](/en/tutorial/search-parameters "here"))

The contents to be filled in **Content** are:
_Content_: Name that will identify each set of items
_QueryString_: The parameters entered in this field define the search result that will be displayed in this content.

In the **Product Cluster (Collection)** field, you must select the collection that will be displayed by completing the following step:

![coleção10](//images.ctfassets.net/alneenqid6w5/RHE3D2CrkG0qSguGsMS40/aa6db36e948f397ca2b1c0abc4a69be1/cole____o10.png)

The contents to be filled in the **Display Condition** part:
_Partner, Campaign_ and _Source_: Define the display of this content if the visitor has a corresponding UTM in its source URL.
_Keywords_: Binds the display of content to a search for specific term(s).
_Category_ and _Brand_: Binds the display of the content on a Category page and/or specific Mark(s).
_Peridos_: Defines the period in which the content will be active.

After the settings, check **Active Content** and add to the content list, saving all settings later.

The example below shows a standard shop window, with no display conditions, and another one exclusive for visits arising from Google sponsored campaign audiences (utm_source=**google**/utm_medium=**cpc**): 

![coleção9](//images.ctfassets.net/alneenqid6w5/5IoPfaWgUwUsGUuCAmYS6q/ded32f70db90ffb4f3fffd740b35381b/cole____o9.png)

In the scenario above, if the customer came from the sponsored campaign audience, the products corresponding to the result of a search for ID 200000 Brand will be displayed on the **Lançamentos** shop window, located on Home; otherwise, the products corresponding to ID 8 collection will be displayed.

Whenever more than one active content is used in the same control, they should be sorted (by clicking and dragging their content) so that the content with no conditions to be displayed are always in the last position, as shown above.
