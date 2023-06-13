---
title: Adding collections CMS
id: 2YBy6P6X0NFRpkD2ZBxF6L
status: PUBLISHED
createdAt: 2020-11-25T22:05:53.169Z
updatedAt: 2023-04-19T18:38:40.730Z
publishedAt: 2023-04-19T18:38:40.730Z
firstPublishedAt: 2020-11-25T22:10:10.072Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: adding-collections-cms
legacySlug: adding-collections
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning" >
  <p>There are two ways to configure collections: through the Legacy CMS Portal or the <a href="https://help.vtex.com/en/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye">Collections Beta</a> module. This article is about how to configure collections through the Legacy CMS Portal.</p>
</div>

Follow the steps below to add a new collection:

1. In the VTEX Admin, access **Storefront > Layout**.
2. In the CMS folder, click on __Product Clusters (Collections)__.
3. Click on __New Collection__.
4. Fill out the Collection form fields. For more on the meaning of each one of these fields, read our article on [how to fill out new collection fields](https://help.vtex.com/en/tutorial/filling-out-collection-registration-fields--7eKL7CFRW3yGKlnDfQetbj).
5. Click on __Save Product Cluster__.

<div class="alert alert-warning">
When the number of created collections surpasses twenty, those exceeding that number can be found through the search field on the admin interface. Search by the name of the collection you want to find.
</div>

Choosing the products that will make up a collection is done by clicking on __New Group__ in the desired collection, creating a __group__.

![new-group-collection en](//images.ctfassets.net/alneenqid6w5/7tJUzscKOqsDSLv64f71KJ/49434a9c33f677cf4632f2145d4064b4/new-group-collection_en.png)

Before choosing which products to add to a group, you will need to give it a name and specify which type the created group falls under.

## Group Types

There are only two possible values for a group type: __Inclusive__ or __Exclusive__.  An inclusive group includes its products in the collection to which it is linked. Meanwhile, an Exclusive group does the opposite, removing its products from a collection.

For example, we have a collection called _Cellphones_, comprising two groups: group `A` is an *Inclusive* type while `B` is an *Exclusive* type. The products belonging to this collection will be the result of group A products *minus* group B products.

This logic is used for any number of groups created within the same collection. *Exclusive* group products will always be subtracted from any *Inclusive* type groups, as follows:

`Products comprising a collection = (A+B) - (C+D)`

Of which:

- Groups A and B are type *Inclusive*
- Groups C and D are type *Exclusive*

To this end, the first group that is created in any collection must necessarily be type *Inclusive*.

<div class="alert alert-warning">
Be mindful of the set group type. When adding products to an <i>Exclusive</i> group type, for example, these <strong>will not</strong> be added to a collection due to the nature of the group.
</div>

## Selecting Products

In a group, you can select a product based on the following:

- Department, Category or Subcategory
- Brand
- SKU
- Launch Date

You can select more than one of the options above to achieve a specific scenario. In such cases, __only products falling within the intersection of both options will be included in the group__.

For example: When selecting a category `A` and a brand `B`, only products pertaining simultaneously to this category and brand will be included in the group. Category `A` products pertaining to brands other than `B` will not be part of the collection. The same applies for brand `B` products of other categories.  

## Products by Department, Category or Subcategory

To add the products of a specific department to a group, select the desired department and click on __Save Group__, as shown in the image below.

![seleção-departamento EN](//images.ctfassets.net/alneenqid6w5/2CWCcsikNQciGdeJrN4ffV/3419aae384eec69319a0fd199decc16a/sele____o-departamento_EN.png)

The same applies for products of a specific Category or Subcategory.

![seleção-categoria-subcategoria EN](//images.ctfassets.net/alneenqid6w5/2Z3mfoWo65F6fJM22sZEqi/c5dc354968d5bb690fadff1da9316e96/sele____o-categoria-subcategoria_EN.png)

## Product by Brand

To create a group containing products from one or more brands, select the desired brand from the corresponding list.

![seleção-marca-coleção en](//images.ctfassets.net/alneenqid6w5/1wjrZ0Oa0n2ZwdB8QXAWAS/8386ab974309a4ffe652011ab1a312f4/sele____o-marca-cole____o_en.png)

Brands are displayed in alphabetical order. When clicking on the first letter corresponding to the desired brand, the list expands and displays the existing brands.

## Products by SKU

### Manually

When adding a SKU to a group, the product to which it is linked is also added. If the product is linked to more than one SKU, adding one SKU would also add all other SKUs to the group.

![selecao-sku-manual en & es](//images.ctfassets.net/alneenqid6w5/1GZTDTmU26MOuQ5u3dpOe7/04f1623d9c52bd939e4fabb455fab8ff/selecao-sku-manual_en.png)

In the __find SKUs__ field, you can type in as many SKU IDs as needed, separating each one by a comma. 

> Ex.: 200004,200009,200005

To remove an SKU from the list, click on the red button next to it.

<div class="alert alert-info">
When the number of listed SKUs surpasses ten, a page control becomes available.
</div>

### By spreadsheet

 <div class="alert alert-info">
Get the file template for adding SKUs to or removing them from a collection <a href="//assets.contentful.com/alneenqid6w5/Lo7Y0tXh6eKyyUSs4MESQ/209e614248978f0e86a37e4ddff50162/Colecao.xls">here</a>.
</div>

#### Bulk Upload

You can __Bulk insert SKUs__ by importing an `.xls` format spreadsheet to list SKUs that will be part of a group.

![selecao-sku-planilha-insert en & es](//images.ctfassets.net/alneenqid6w5/9SITcqeeZNYTlAz5wi6IA/6765c51947698f35bf4ad198a51bcdc0/selecao-sku-planilha-insert_en.png)

In the imported spreadsheet, all SKU IDs must be listed in the first column, with a header, as shown in the example below:

![exemplo-planilha-seleção-sku-coleção](//images.ctfassets.net/alneenqid6w5/5E2rtjyWArzeGjr27smF4o/bd66f1ea64d4e0d104471fac71bd98ab/exemplo-planilha-sele____o-sku-cole____o.png) 

After selecting the desired spreadsheet, click on the __Import SKUs__ option to sent the information.

![Import SKUs](//images.ctfassets.net/alneenqid6w5/61tifMGQaUdD1MAsfdblo8/2ecfd6edbba468740f23ccc53c3e1eba/Import_SKUs.png)

#### Bulk remove

To avoid having to remove SKUs one at a time, you can use the import function of a spreadsheet to bulk remove them.

![exclusao-skus-manualmente-planilha-coleção-cms en & es](//images.ctfassets.net/alneenqid6w5/moziGpjShzDpFw63tyDOa/ebfb61d2a2d2e09d494690ad0dc0ab62/exclusao-skus-manualmente-planilha-cole____o-cms_EN.png)

In this specific case, the SKUs listed in the imported spreadsheet will be excluded from the group. Do this by clicking on __remove SKUs__ after the file has been loaded. 

<div class="alert alert-warning">
Disabled SKUs will not be removed or added, even if they appear as listed in the spreadsheet.
</div>

## Products by Market Launch date

<div class="alert alert-warning">
In the <strong>Other options</strong> section, the <strong>Pre-sales</strong> and <strong>Launches</strong> options are add-ons to choosing products by Category, Brand or SKU, meaning that these flags will only work if you have previously selected them.
</div>

Note that you can only select one of the two options. Should you want both add-ons, create two groups and configure each one with the respective option.

![other-options-cms-coleções EN](//images.ctfassets.net/alneenqid6w5/4kHHhPDUSBSdjkYaApxayp/ef552cf4e72bb119f0b080605927a2b9/other-options-cms-cole____es_EN.png)

### Pre-sales

In order to create a product collection that has not been launched yet, select the __Pre-sales__ option. The system considers the launch date of all products to be one day after the present date, according to the _Market launch date_ field in the product file.

### Launches

The __Launches__ option allows you to create a recently launched product collection. Upon selecting this option, the system considers all of the products that were launched within a 30-day interval prior to the present date. The launch date taken into account is also the same one set in the _Market launch date_ in the product file.

<div class="alert alert-info">
To know more about how to exclude a product collection, read our article on <a href="https://help.vtex.com/en/tutorial/how-to-delete-a-collection--6C620yHzwsGoS8iaCocAM2">how to delete collections</a>.
</div>
