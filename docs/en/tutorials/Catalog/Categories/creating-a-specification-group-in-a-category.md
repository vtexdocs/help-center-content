---
title: 'Creating a specification group in a category'
id: tutorials_246
status: PUBLISHED
createdAt: 2017-04-27T22:12:25.134Z
updatedAt: 2022-07-21T19:58:43.545Z
publishedAt: 2022-07-21T19:58:43.545Z
firstPublishedAt: 2017-04-27T23:03:10.600Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: creating-a-specification-group-in-a-category
locale: en
legacySlug: creating-category-groups
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

A group is defined by a set of [specifications](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) (fields) related to products or SKUs of a certain [category](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf).

At VTEX, a specification is always included in a specification group associated with a category. Therefore, to create [a product specification](https://help.vtex.com/en/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) or a [SKU specification](https://help.vtex.com/en/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119), you must first have at least one category and one specification group already created.

In this article, we explain how the specification inheritance works and how to create specification groups in the VTEX Admin. Check out the following sections:

* [Specification inheritance](#specification-inheritance)
* [Step-by-step instructions in the VTEX Admin](#step-by-step-instructions-in-the-vtex-admin)

>ℹ️ To create a specification group using the **Catalog API**, follow the [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) developer's guide.

## Specification inheritance

When a group is created in a department or a category, it will be replicated in all the sublevels of that department or category, following a "inheritance" logic. Therefore, if you want to create a specification group applicable to one category only, you must create it at that category level.

Example: A fashion store has a **Clothing** category which includes a **Characteristics** specification group. This group may have, for example, a product field named **Fabric**, with values such as **Cotton** or **Polyester** and a SKU field named **Size** with possible values such as **S**, **M **or **L**.

In the same store from the example above, under the **Clothing** category, there is a **Dresses** subcategory which contains a different specification group: a product field named **Occasion**, with values such as **Casual** or **Party**. The products in this subcategory and their respective SKUs must have all the fields filled in.

## Step-by-step instructions in the VTEX Admin

To create a specification group, follow the instructions below:

1. In the VTEX Admin, access **Catalog > Categories**.
2. Click the category in which you want to create the group.
3. Click `Actions` <i class="fas fa-angle-down"></i>.
4. Click <i class="fas fa-tags"></i> **Group**.
5. Click the `New Group` button.
6. Fill in the following information:
    * **Name:** Name of the group, for internal use.
    * **Category:** Name of the category in which you are creating the group. This field is already filled in by default, you must only confirm the name of the category.
7. Click `Save`.

You can create as many fields as you consider necessary in the group. The created fields can be set as filters at all navigation levels in your store.

## Learn more

* [Categories](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Product and SKU specifications](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
* [Adding specifications or product fields](https://help.vtex.com/en/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106)
* [Adding SKU specifications or fields](https://help.vtex.com/en/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119)
