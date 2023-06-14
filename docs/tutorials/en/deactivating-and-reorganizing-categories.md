---
title: 'Deactivating and reorganizing categories'
id: tutorials_264
status: PUBLISHED
createdAt: 2017-04-27T22:11:16.693Z
updatedAt: 2023-03-28T17:39:10.218Z
publishedAt: 2023-03-28T17:39:10.218Z
firstPublishedAt: 2017-04-27T23:03:12.416Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: deactivating-and-reorganizing-categories
legacySlug: disabling-and-reorganizing-categories
subcategory: 1E7tziZCkY4w8i4EmUuwec
---

From the **Catalog > Categories** page in the VTEX Admin, you can perform actions related to the [categories](https://help.vtex.com/en/tutorial/registering-a-category--tutorials_206) configured in your store. See the sections below to learn how you can:

- [Deactivate a category](#deactivating-a-category)
- [Change the order of subcategories](#changing-the-order-of-subcategories)
- [Change the category tree](#changing-the-category-tree)

## Deactivating a category

To deactivate a category, follow the steps below:

1.	On the VTEX Admin, go to **Catalog**.
2.	Click **Categories**.
3.	Select the category or department that you want to deactivate.
4.	Click **Actions** and choose the **Edit** option.
5.	Uncheck the **Menu** and **Active** options, based on your need.
    - **Menu:** Defines if the category will appear on the site's top or lateral menu, although the category will still exist in the environment.
    - **Active:** Defines whether the category is active on the site.
6.	Click `Save`.

## Changing the order of subcategories

If a category has subcategories, they appear below the parent category in the category tree on the **Catalog > Categories** page of **the VTEX Admin**. To change the order of subcategories, follow the steps below.

1.	Click the desired parent category.
2.	Click **Actions** and, then, **Edit**.
3.	In the **Child Categories** section, you can see the subcategories. In the **Position** column, click the blue button and drag it to the desired position.
4.	Click `Save` to save your changes.

## Changing the category tree

<div class="alert alert-warning">
  <p>Moving categories directly through the category tree can generate unexpected errors in your catalog. Therefore, we recommend following the instructions below to change category levels. Read the<a href="https://help.vtex.com/en/known-issues/mover-categorias-gera-comportamentos-inesperados-na-arvore-de-categorias--6JSa9nnYoAAUQO1zPtzfZD"> known issue</a> related to this for more information.</p>
</div>

There are cases where you need to change the hierarchy level of a category. For example, imagine a store has a parent category called **Accessories** and a child category (subcategory) called **Shoes**, and they want to make **Shoes** a separate parent category.

To move a category without causing errors or losing information, follow the steps below:

1.	Create a new clone from the category that will be migrated, but at the level it should be.

  Example:

    * 1 - Accessories
        * 2 - Shoes
    * 3 - Shoes clone

2.	Transfer all products from the old category to the clone category.
3.	Deactivate the old category.

    Example:

    * 1 - Accessories
        * 2 - Shoes (inactive)
    * 3 - Shoes clone (active and containing the products)

## Learn more

- [Categories - Concept definition](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
- [Adding a category](https://help.vtex.com/en/tutorial/registering-a-category--tutorials_206)
