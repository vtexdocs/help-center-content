---
title: 'Products and SKUs (Beta)'
id: 2ig7TmROlirWirZjFWZ3By
status: PUBLISHED
createdAt: 2022-11-30T17:55:25.970Z
updatedAt: 2023-07-11T15:12:54.179Z
publishedAt: 2023-07-11T15:12:54.179Z
firstPublishedAt: 2022-11-30T19:04:31.183Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: products-and-skus-beta
locale: en
legacySlug: products-and-skus-beta
subcategory: 6XPsLadoT3moZ7eTduCg3c
---

<div class = "alert alert-info">
  <p>This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href = "https://support.vtex.com/hc/pt-br/requests">our Support</a>.</p>
</div>

The **Products and SKUs** page allows you to view and manage the list of all products in your store, including information about SKUs, last updated, and status. To access it, go to **Catalog > Products and SKUs**.

![products-skus-en](//images.ctfassets.net/alneenqid6w5/3Euar7pKsXKgqIfz1MwOOa/f02b69940302cf42cf3eefd80ec56445/products-skus-en.png)

<div class="alert alert-info">
  <p>This page is only available to stores operating with the <a href="https://help.vtex.com/en/announcements/bem-vindo-ao-novo-admin-vtex--5tLPBodp6Xu03vYdyBTGTa">New VTEX Admin</a>. To access this page and be part of the new experience, join the New VTEX Admin <a href="https://content.vtex.com/participe-do-programa-beta-en/?utm_source=landing_page&utm_medium=help_center&utm_campaign=new_admin_beta">Beta program</a>.</p>
</div>

This page allows you to: 

- [Create a product](#creating-a-product)
- [Search for products](#searching-for-a-product)
- [Filter products](#filtering-products)
- [Track product status](#tracking-product-status)
- [View SKU list](#viewing-the-sku-list)
- [Edit products](#editing-products)
- [Access action menu](#accessing-the-action-menu)
- [View indexing information](#viewing-indexed-information)

From the product list, you can find the following information: 

| **Column** | **Description** |
|----|----|
| **Name** | The product name, set when adding it. Below the name, the page displays the ID, which is the product's unique identifier code. <br/><br/> Next to the name, each row displays an arrow <i class="fas fa-chevron-right"></i> to [view the list of SKUs](#viewing-the-sku-list) associated with the product, an icon that represents [product status](#tracking-product-status) and the product image. |
| **Last Update** | Date of the most recent product [indexing](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256). For more details about this process, go to the [Viewing indexing information](#viewing-indexing-information) section. |

## Creating a product

When you click the `Add Product` button, the page for adding a new product in the catalog will open. Please read the article [Filling in product registration fields](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke) to learn how to do this. 

## Searching for a product

To find a specific product, you can type one of the following in the search bar:

* Product ID
* SKU ID
* SKU EAN
* Product name
* SKU name
* Product reference code
* SKU reference code

Then, click on the criteria you want to use for the search, as illustrated in the following image:

![products-skus-search-en](//images.ctfassets.net/alneenqid6w5/3XkJPsJihm6flcVxPksPPO/f0f028bb188ed98868f4fc9738e96511/search-en.gif)

The list of products displayed will then be refreshed according to your search. 

To clear the search, click on the <i class="far fa-times-circle"></i> icon in the search bar.

## Filtering products

The list of products can be filtered according to your needs. You can use the following filters:

* [Status](#tracking-product-status)
* [Brand](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh)
* [Category](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Seller](https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w)
* [Kit](https://help.vtex.com/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28)
* [Store Visibility](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke)
* [Trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)

Select the desired filters and click `Apply` to filter the products. To cancel the selection, click `Clear`.

<div class="alert alert-warning">
  <p>You cannot filter products by <a href="https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w">seller</a> or pre-sale date in this Catalog version.</p>
</div>

## Tracking product status

The last column of the product list displays the current product status, which can be:

| **Status** | **Description** |
|----|----|
| **Published** | It indicates that the product is active and available in the store in at least one [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV). |
| **Pending** | It indicates that the product configuration, price or logistics information is missing for it to be available in the store.<br/><br/>When you hover the mouse over the icon indicating that the product is pending, you can see which configuration is incomplete, among **Catalog**, **Price**, or **Inventory/Shipping**. To understand what information may make the product publication pending, read the article [Why is the product not visible on the website?](https://help.vtex.com/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382) |
| **Inactive** | Indicates that the product is deactivated, hence not available for purchase.|

To view the status of a product's SKUs, read the section [Viewing the SKU List](#viewing-the-sku-list). 

## Viewing the SKU list

When you click the arrow <i class="fas fa-chevron-right"></i> in the product row in the list, the platform displays a list with all the SKUs of that product: 

![sku-actions-en](//images.ctfassets.net/alneenqid6w5/wv1FevJRrT0GwvKvvNb2W/06822a59851d6f677c47c4cd3d1d4230/sku-actions-en.gif)

In the SKU list, you will find the following information:

* **Status**: Current SKU status, indicated by the color icon in the SKU row. The status is the same as the one related to the product:
    * **Published:** Indicates that the SKU is active.
    * **Pending:** Indicates that it is missing some SKU configuration, pricing or logistics, information for it to be available in the store. By hovering over the icon that indicates that the SKU is pending, you can see which configuration is incomplete across **Catalog**, **Price**, or **Inventory/Shipping**.
    * **Inactive:** Indicates that the SKU is inactive, thus, not visible in the store.
* **Image:** Main image associated with the SKU.
* **ID:** Unique SKU identification code.
* **Name:** SKU name.
* <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class=" admin-ui-c-dnTJPl"><rect width="16rem" height="16rem" fill="none"></rect><path d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></path><polyline points="222.897 74.626 128.949 128 33.108 74.617" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></polyline><line x1="128.94915" y1="127.99996" x2="128.01036" y2="234.82127" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line></svg> &nbsp; <strong>Edit inventory:</strong> It takes you to the inventory management page in VTEX Admin, to change the quantity of the SKU available in stock. Check out the [Inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) article for more information.
* <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class=" admin-ui-c-dnTJPl"><rect width="16rem" height="16rem" fill="none"></rect><line x1="128" y1="72" x2="128" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line><line x1="128" y1="168" x2="128" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></circle><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></path></svg> &nbsp;<strong>Edit prices:</strong> It takes you to the **Price list** in the VTEX Admin to change the prices of the SKU.
* <i class="far fa-clone"></i> __Copy SKU Code:__ Copies the SKU ID to the clipboard.
* <i class="far fa-eye"></i> __Activate__ / <i class="far fa-eye-slash"></i> __Deactivate:__ Makes the SKU active or inactive in the store.

## Editing products

To change product information, you can click anywhere in the product row. You can then access the product's configuration page and change the desired information.

You can also edit the product from the [action menu](#accessing-the-action-menu) > `Edit product`.

## Accessing the action menu

By clicking the menu icon <i class="fas fa-ellipsis-v"></i> of a product, you can:

* **Edit product:** It takes you to the product configuration screen to change information.
* **View SKU list:** It takes you to the SKU list screen.
* **Edit similar category:** It takes you to the similar category configuration screen, which allows you to associate another category to the product. For more information, read the [How to set up similar categories](https://help.vtex.com/en/tutorial/configurando-categoria-similar--tutorials_204) article. 
* **Edit prices:** It takes you to the **Price list** in the VTEX Admin to change the prices of the product and its SKUs.
* **Edit inventory:** It takes you to the inventory management screen in VTEX Admin, to change the quantity of each product SKU available in stock. Check out the [Inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) article for more information.
* **View in store:** It takes you to the product detail page on the storefront.
* **View indexed info:** It will open a modal with product and SKU indexing information. See the [Viewing indexed information](#viewing-indexed-information) section for more details. 

## Viewing indexed information

When clicking the menu on a product line and choosing **View indexed info**, you have access to a modal with two tabs that show details about the [indexing](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256) of the product and SKUs: 

- [Price and Inventory](#price-and-inventory)
- [Indexed Log](#indexed-log)

### Price and Inventory

This modal tab displays the SKU list associated with the product and its corresponding indexed information.

![catalog-price-inventory-en](//images.ctfassets.net/alneenqid6w5/4JWODR51ILI7KhEnzVC2t2/b3968e801767f2d06423bc507f2ea6b5/price-inventory-en.PNG)

By clicking the arrow `>` in each SKU row, you can view a table with the following information:

| **Column** | **Description** |
|---|---|
| **Seller** | Name of the SKU seller. |
| **Trade policy** | Number and name of the related trade policy. |
| **Price** | SKU price in the trade policy. |
| **Inventory** | Quantity of SKU available in stock. |

### Indexed Log

This modal tab displays the log, in other words, the detailed technical indexing record for the product and related SKUs.

![indexed-log-en](//images.ctfassets.net/alneenqid6w5/4pPJmvun6SB9jTFqSR7XSX/4c2095af6dec446e27db570e067b4d5f/indexed-log-en.PNG)

## Learn more

* [Filling in product registration fields](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke)
