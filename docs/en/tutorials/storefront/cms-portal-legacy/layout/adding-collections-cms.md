---
title: 'Adding collections CMS'
id: 2YBy6P6X0NFRpkD2ZBxF6L
status: PUBLISHED
createdAt: 2020-11-25T22:05:53.169Z
updatedAt: 2026-10-20T15:45:00.000Z
publishedAt: 2023-04-19T18:38:40.730Z
firstPublishedAt: 2020-11-25T22:10:10.072Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: adding-collections-cms
legacySlug: adding-collections
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ There are two ways to configure collections: through the CMS Portal (Legacy) or the [Collections Beta](/en/docs/tutorials/creating-collections-beta) module. This article is about how to configure collections through the CMS Portal (Legacy).

Follow the steps below to add a new collection:

1. In the VTEX Admin, access **Storefront > Layout**.
2. In the CMS folder, click **Product Clusters (Collections)**.
3. Click `new collection`.
4. Complete the collection form fields. For more on the meaning of each one of these fields, read our article on [how to complete new collection fields](/en/docs/tutorials/filling-out-collection-registration-fields).
5. Click `Save Product Cluster`.

> ⚠️ When more than 20 collections are created, you can use the search field to find collections that aren't displayed in the list. Search this field by the name of the desired collection.

The products in a collection are selected by creating a **group**. To do this, click `new group` within the desired collection.

![Button to create a new group in the collection.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_1.png)

Before selecting the products to include in the group, you need to name it and specify its type.

## Group types

There are only two group types: `Inclusive` and `Exclusive`. An `Inclusive` group includes all its products in the collection it's linked to. Likewise, an `Exclusive` group excludes its products from the collection.

For example, consider a collection called Cellphones with two groups: group `A` is `Inclusive`, while group `B` is `Exclusive`. The component products of this collection will be the result of products from group A _minus_ products from group B.

This logic is used for any number of groups created within the same collection. Products in `Exclusive` groups are always subtracted from the products in `Inclusive` groups. As a result:

`Collection component products = (A+B) - (C+D)`

Where:

- A and B groups of type `Inclusive`
- C and D groups of type `Exclusive`

For this reason, the first group created for any collection must be of type `Inclusive`.

> ⚠️ Pay attention to the group type you set. For example, when you add products to an `Exclusive` group, they **won't** be included in the collection because of how this group type works.

## Selecting products

Within a group, product selection can be based on:

- Department, category, or subcategory
- Brand
- SKU
- Release date

You can select more than one of the previous options to achieve a specific scenario. In these cases, **only the products that fall within the intersection of the selected options will be included in the group**.

For example, when you select category `A` and brand `B`, only products that belong to both that category and brand at the same time will be included in the group. For example, products in category `A` from brands other than `B` won't be in the collection, nor will products from brand `B` in other categories.

## Products by department, category, or subcategory

To add all products from a specific department to a group, select the desired department, along with the categories and subcategories linked to it, since selecting the department **doesn't** automatically select the others. Then, click `Save Group`, as shown in the image below.

![Selecting department, categories, and subcategories in a CMS collection.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_2.png)

Each level is selected independently. To include products from a specific category, also select the subcategories linked to it. To include only the products from a specific subcategory, select only that subcategory.

![Selecting a category and subcategory in a CMS collection.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_3.png)

## Products by brand

To create a group with products from one or more brands, select the desired brand in the corresponding list.

![Selecting brands in a CMS collection.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_4.png)

Brands are listed in alphabetical order. Clicking the letter corresponding to the initial of the desired brand expands the list and displays the existing brands.

## Products by SKU

### Manually

When you add a SKU to a group, the product it's linked to will also be added. In a scenario where a product has more than one SKU assigned to it, adding a single SKU will cause all the others to be added to the group as well.

![Manually adding SKUs to a collection group.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_5.png)

In the **Find SKUs** field, you can type the ID of as many SKUs as needed, separating the values with a comma. For example: `2000004,2000009,2000005`.

To exclude a SKU from the list, click the red button beside it.

> ℹ️ When the list contains more than 10 SKUs, pagination becomes available.

### By spreadsheet

> ℹ️ Download the [spreadsheet template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/Colecao.xls) to add or remove SKUs from the collection.

#### Bulk inclusion

In the **Bulk Insert SKUs** field, you can upload a spreadsheet (`.xls` format) containing a list of SKUs to include in the group.

![Bulk Insert SKUs field for importing a SKU spreadsheet.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_6.png)

In the spreadsheet, all SKU IDs must be listed in the first column, with a header, as shown in the following figure:

![Example spreadsheet with SKU IDs in the first column.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_7.png)

After selecting the desired spreadsheet, click `Import skus` to submit the information.

![Button to import the SKU spreadsheet.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_8.png)

#### Bulk exclusion

To avoid removing SKUs one at a time, you can also use the spreadsheet import feature to remove them in bulk.

![Excluding SKUs from a group via spreadsheet.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_9.png)

In this case, the SKUs listed in the imported spreadsheet will be removed from the group. To do this, click `exclude skus` after the file is uploaded.

> ⚠️ Inactive SKUs won't be excluded or included, even if they're listed in the spreadsheet.

## Products by release date

> ⚠️ In the **Other options** section, the **Pre-sales** and **Launches** options complement the product selection by categories, brands, or SKUs. This means these flags only work if you've already selected categories, brands, or SKUs in the same group.

Note that you can only select one of the two options. If you want both scenarios covered, create two groups and configure each with the corresponding option.

![Selecting the Pre-sales and Launches options in Other options.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/adding-collections-cms_10.png)

### Pre-sales

To create a collection of products that haven't been launched in your store yet, select the **Pre-sales** option. The system will consider all products with a release date after the current date, as defined in the **Release date** field when adding a product.

### Launches

The **Launches** option allows you to create a collection of recently launched products. When you select this option, the system will consider all products released within the 30-day range prior to the current date. The release date considered is also the one defined in the **Release date** field in the product registration.

> ℹ️ To learn how to delete a product collection, go to the article [How to delete a collection](/en/docs/tutorials/how-to-delete-a-collection).
