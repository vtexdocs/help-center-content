---
title: 'Finding a SKU ID'
id: 4VQZsYeb3igGK2YowuEYWW
status: PUBLISHED
createdAt: 2018-02-07T13:04:01.334Z
updatedAt: 2025-06-25T19:23:02.945Z
publishedAt: 2025-06-25T19:23:02.945Z
firstPublishedAt: 2018-02-07T17:21:00.652Z
contentType: tutorial
productTeam: Management
author: authors_59
slugEN: finding-a-sku-id
legacySlug: how-to-find-an-sku-id
locale: en
subcategoryId: pwxWmUu7T222QyuGogs68
---

On VTEX, the SKU (Stock Keeping Unit) corresponds to the physical inventory of each product and to the most specific level for handling product variations. For example, if the product is a T-shirt, the SKU could be a white size S T-shirt. With the SKU ID, you can [edit the SKU](https://help.vtex.com/en/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN) or perform other actions.

To find a SKU ID, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](https://help.vtex.com/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) in the search bar at the top of the page.
2. To display the[ SKUs added to the product](https://help.vtex.com/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN), click the arrow next to the product name.
3. Find the numeric sequence that precedes the SKU name, which is the ID.

In the example below, the product "Corebiz t-shirt" is associated with the SKU "corebiz t-shirt black", whose ID is `310119261`:

![finding_sku_id_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/products-and-skus/finding-a-sku-id_1.png)

## Identifying a SKU ID via URL

When you click a SKU and open its [edit page](https://help.vtex.com/en/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN), the URL on your browser is displayed as follows: 

`https://{accountName}.myvtex.com/catalog-products/product/{productID}/sku/{skuID}`.

The number at the end of the URL is the SKU ID.

> ℹ️ To find SKU IDs via the **Catalog API**, use the [List all SKU IDs](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/sku/stockkeepingunitids) endpoint.

