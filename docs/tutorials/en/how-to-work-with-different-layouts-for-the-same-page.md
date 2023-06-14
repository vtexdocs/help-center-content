---
title: How to work with different layouts for the same page
id: tutorials_546
status: PUBLISHED
createdAt: 2017-04-27T22:01:32.948Z
updatedAt: 2023-03-29T17:59:18.274Z
publishedAt: 2023-03-29T17:59:18.274Z
firstPublishedAt: 2017-04-27T23:03:37.766Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: how-to-work-with-different-layouts-for-the-same-page
legacySlug: how-to-work-with-different-layouts-for-the-same-page
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning" >
  <p><b>Warning:</b> there are two ways to configure collections, through the CMS or the Collection module (Beta). This article is about how to <a href = "https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L">configure collections through the CMS</a>.</p>
</div>

On the __Storefront__ > __Layout__ page, a standard layout is established for all pages of the same kind included on each folder of a website; e.g. product. 

However, it is possible to apply different layouts for the same page through certain conditions (group of products, categories, brands). They would be two products with different layouts or a specific category with a special layout, for example.

To do so, select a new template, be it a [page](https://help.vtex.com/en/faq/how-to-create-a-page-template) or [shelf](https://help.vtex.com/en/faq/how-to-create-a-shelf-template). After creating it, follow the steps below in order to select the foulder in which you want to apply the new layout: 

1. On __Storefront__, access __Layout__;
2. Click on the __CMS__ folder;
3. Click on __Sites and channels__;
4. Access the desired website;
5. Click on the __/__ foulder and select the desired foulder for the new layout;
6. Click on __New Layout__.

After filling in the __Layout Name__ and __Body Class__ fields, select the desired template on the __Template__ box and uncheck the __Default Page__ option.
After that a new section will be available and you can define through the fields the __conditions__ under which the new layout will be displayed in your store.

It is possible to limit the availability of the template to a predetermined period of time by filling in the __From__ and __To__ fields as well as to define in which categories, products, brands and collections the chosen template will be applied.

![template-condicionado-cms](//images.ctfassets.net/alneenqid6w5/5oheUsdoc0aKS4ysOwQ6ig/66a11beac0c32d7fde34d43b94fb45bb/template-condicionado-cms.png)

After filling in all the needed fields, do not forget to save the changes made by clicking on __Save Layout__.

Please note that these criteria are based on the page's ["search context"](https://help.vtex.com/en/tutorial/--q0p2UU6sBaYcEMsq24YSi) on which the user is, which is directly tied to the [search parameters](https://help.vtex.com/en/tutorial/--tutorials_567), but that are not necessarily set manually by the store admin - the entire page automatically fits in a content context.

It happens that the offered conditions are not present on any page:

- product pages will never have the collection context;
- search pages (in which the department, category, brand, collections and landing pages also fit) will never have the product context.

Hence, it is not possible to asign conditions to specific product or to different layouts through a collection. You would need to register these together with the product condition.

<div class="alert alert-info">
According to the chosen conditions, an order of priority is established for the applicability of the template. The order first follows, if available, product template, category and, finally, brand. Thus, a template conditioned for a given product layout overlaps the template conditioned for the category in which this product is contained and so on.
</div>

In case of doubt with this set up, we recommend using the lid: [Layout Test](/en/faq/validating-a-layout-before-moving-it-to-production)

