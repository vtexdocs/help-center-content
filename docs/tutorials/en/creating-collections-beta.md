---
title: 'Creating Collections (Beta)'
id: yJBHqNMViOAnnnq4fyOye
status: CHANGED
createdAt: 2020-08-17T20:29:25.500Z
updatedAt: 2024-03-04T20:48:30.215Z
publishedAt: 2024-02-22T12:15:26.041Z
firstPublishedAt: 2020-08-27T15:16:59.673Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: creating-collections-beta
locale: en
legacySlug: cadastrar-colecoes-beta
subcategory: 3aExYJkji3NIu9Ks8bxbWx
---

>ℹ️ There are two ways to configure collections, through the **CMS** or using the **Collections (Beta)** module. This article is about configuring collections through the **Collections (Beta)** module.
>
> This feature is in Beta stage and available for environments starting from Admin v3. If you have any questions, please [contact our Support team](https://support.vtex.com/hc/en-us/requests" target="_blank).

The new __Collections (Beta)__ module allows you to create and manage collections in a practical and quick way. 

By grouping related products into collections, you create a discovery process for your customers, leading them to find new products, buy more, and have a better buying experience.

This article explains how to:

- Create a new collection.
- Add or remove products from the collection.
- Change the item position in the collection.
- Export your collection as a spreadsheet.
- Edit or delete a collection.

## Prerequisite

To create a collection, you must have the _Owner (Admin Super)_ [role](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc?locale=en) or create another role with the **Write Collections** feature enabled in the **Collections** section of the **Catalog** profiles. Find out more on our documentation about [Creating a role](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc?locale=pt#creating-a-role).

## Create a collection

Follow the step by step below to add a new collection:

1. In the VTEX Admin, go to **Catalog**, or type **Catalog** in the search bar at the top of the page.
2. Click on **Collections**.
3. Click on the `Create Collection` button.
4. Fill in the [Collection fields](https://help.vtex.com/en/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#collection-data-fields).
5. Click on `Create` to update the information filled in the form.
6. Then, [select the products](https://help.vtex.com/en/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#products-selection) that will be part of the collection.

>ℹ️ Note that the collections created in this module are not automatically changed. Automatic collections - made by applying filters - cannot be configured in the module.

### Collection data fields

To better understand the meaning of the data fields of a products collection, the complete description of each is given below:

#### New Collection settings

- **Collection Name:** the collection's name. This is a mandatory field.
- **Simple description:** description for internal use, with the collection's details. It will not be used for search engines.
- **Add products automatically:** automatically include products in the collection based on the selected criteria.

#### Schedule

- **Start date:**: collection start date and time. If a future date and time are set, the collection will have a scheduled status.
- **Schedule collection end date:** selection that allows setting an expiration date and time for the collection
- **End date:** collection end date and time. This field is displayed only if **Schedule collection end date** is enabled.

#### Enable

- **Add collection tag:** select this option if you want the collection to highlight specific products using a tag.
- **Make collection searchable:** option to make the collection searchable in the store.

### Products selection

Products can be added either by selecting items from the __Collection__ module list or importing a spreadsheet in CSV or XML format.

#### Via VTEX Admin

Selecting products through the VTEX Admin can be made using the product list, search bar and filters. You can search for a product using these parameters:

- Product name.
- Product ID.
- SKU name.
- SKU ID.
- Product Reference.

There are many filters that can be selected to reduce the number of products displayed on the list.

![Collections-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-0.png)

You can create new filters based on other criteria not covered by the predetermined filters. The images below show a few examples of these options:

![Novo filtro - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-1.PNG)

![Filtro Colecao detalhes - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-2.png)

To add a product to a collection, click on the icon <i class="fas fa-plus-circle" title = "check circle"></i> related to the product, thereby saving it in the collection automatically.

For more information about the item, click on the icon <i class="fas fa-external-link-alt" title = "external link"></i> to open the product page or click on the image to enlarge it.

![EN-colecao-adicionar](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-3.gif)

If you want to add in bulk, apply one of the filters and click on the `Add All` button. It is worth noting that the product must have at least one existing SKU to be included in a collection.

![EN-colecao-adicionar-todos](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-4.png)

>❗ <p> Do not bulk add more than 150,000 products. This may affect the indexing of the Catalog and the operation of your store.

#### By spreadsheet

>ℹ️ The maximum limit for import and export is 10,000 SKUs per operation.

You can also add items to a collection using a spreadsheet by following the steps below:

  1. In your collection's dashboard, click on the `Import` button.
  2. Click on the **Include products in collection** option.
  3. Click on the `Import` button.
  4. Click on `Download Template` to have the correct spreadsheet template as the example below: ![colecao-planilha-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-5.png)
  5. Fill in the spreadsheet with the Product IDs, RefIDs, or SKUs. Add a single ID on each line. Regardless of which ID you fill in, all SKUs for the selected product will be added to the collection after import.
  6. After filling out the spreadsheet, save the changes, and import the document into the VTEX Admin. You can drop the file in the indicated area or click on **Choose a file**. Files in CSV or XML format are accepted.
  7. To finish, click on `Import`.

 >⚠️ The spreadsheet can contain up to 10,000 rows. However, in stores with a large catalog, we recommend including a maximum of 50 rows at a time to ensure the import works correctly.

### Product removal

Products can be removed either by selecting items from the __Collections__ module list or importing an updated spreadsheet in CSV or XML format.

#### Via Admin

To remove an item from the collection, simply click on the product's <i class="fas fa-check-circle" title="check circle"></i>.

![EN-coleao-remover](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-6.gif)

If you wish to remove in bulk, apply one of the filters and click on the `Remove All` button.

![EN-colecao-remover-todos](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-7.png)

You can also click on the button <i class="far fa-check-circle" title = "check in circle"></i> (**Products in this collection**) in the top bar and then click `Remove All`.

>❗ <p> Do not bulk remove more than 150,000 products. This may affect the indexing of the Catalog and the operation of your store.

#### By spreadsheet

You can delete items from a collection by using a spreadsheet, as follows:

1. In your collection's dashboard, click on the `Import` button.
2. Click on the **Exclude products from collection** option, and then click on the `Import` button.
3. Click on `Download Template` to have the correct spreadsheet template.
4. After filling out the spreadsheet, submit it. You can drag and drop the file in the indicated area or click on **Choose a file**. Files in CSV or XML format are accepted.
5. To finish, click on `Import`.

### Change collection ordering

To change your collection's order, follow the steps below:

1. In the __Collections__ page, click on the **My Collection** tab.
2. The are two ways to change the order of products in a collection:

  a. Click on the <i class="fas fa-grip-vertical" title="drag vertical"></i> icon, drag the item and release it on the desired position.

  >ℹ️ You cannot use this option if a filter is active.

  b. Select the box of products you wish to change and click on `Move to Position`. Enter the number of the new position and click on `Move` to complete the change. These options allows you to rearrange items in bulk.

![EN-mover-colecao](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/creating-collections-beta-8.png)

### Export collection spreadsheet

You can see which products are in your collection by exporting a spreadsheet, as follows:

1. In the __Collections__ page, click on the `Export` button.
2. Choose the export format, either CSV or XML.
3. Select if you want to receive the spreadsheet by email or to download it directly to your computer.
4. Finally, click on `Export`. The file will be downloaded or forwarded to your email, depending on which option you selected above.

### Delete and edit a collection

To delete a collection, click on the <i class="fas fa-trash-alt" title="trash can"></i> icon in your collection list.

If you want to edit a collection, follow the steps below:

1. Click the collection you want to edit.
2. Click on the `Collection Settings` button.
3. Make the desired changes.
4. Click on `Save`.

## Collection status

Collections have three different states:

- **Active**: a collection is active when the start date is earlier than or the same as the current date, and the end date is later than the current date.
- **Inactive**: a collection is inactive when the end date is earlier than the current date.
- **Scheduled**: a collection is scheduled when the start date is later than the current date.

