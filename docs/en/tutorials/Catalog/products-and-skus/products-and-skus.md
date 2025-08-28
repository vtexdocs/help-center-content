---
title: 'Products and SKUs'
id: 2ig7TmROlirWirZjFWZ3By
status: PUBLISHED
createdAt: 2022-11-30T17:55:25.970Z
updatedAt: 2025-06-12T15:40:53.270Z
publishedAt: 2025-06-12T15:40:53.270Z
firstPublishedAt: 2022-11-30T19:04:31.183Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: products-and-skus
legacySlug: products-and-skus-beta
locale: en
subcategoryId: pwxWmUu7T222QyuGogs68
---

The **Products and SKUs** page allows you to view and manage the list of all products in your store, including information about SKUs, last update, and status. To access it, go to **Catalog > Products and SKUs**.

![products_and_skus_listing_page_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/products-and-skus/products-and-skus_1.png)

This page allows you to: 

- [Create a product](#creating-a-product)
- [Search for products](#searching-for-a-product)
- [Filter products](#filtering-products)
- [Track product availability](#tracking-product-availability)
- [View SKU list](#viewing-the-sku-list)
- [Edit products](#editing-products)
- [Access action menu](#accessing-the-action-menu)
- [View indexing information](#viewing-indexed-information)

From the product list, you can find the following information: 

| **Column** | **Description** |
|----|----|
| **Name** | The product name, set when adding it. Below the name, the page displays the product ID, which is the product's unique identifier code.Next to the name, each row displays an arrow <i class="fas fa-chevron-right"></i> to [view the list of SKUs](#viewing-the-sku-list) associated with the product, an icon that represents [product availability](#tracking-product-availability) and the product image. |
| **Last Update** | Date of the most recent product [indexing](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256). For more details about this process, go to the [Viewing indexed information](#viewing-indexed-information) section. |

## Creating a product

When you click the `Add Product` button, the page for [adding a new product](https://help.vtex.com/en/tutorial/adding-or-editing-products--29IkdEu6GofCFlltsZh2H8) to the catalog opens. For details on how to complete each field, see the article [Filling in product registration fields](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke).

## Searching for a product

To find a specific product, you can type one of the following in the search bar:

* Product ID
* SKU ID
* SKU EAN
* Product name
* SKU name
* Product reference code
* SKU reference code

After entering information in the search bar, it expands to display existing criteria. Clicking the desired option immediately triggers the search and returns the results. To clear the search, click the X icon in the search bar.

> ℹ️ Search results are sorted by the most recent updates: the more recently a product or SKU was updated, the higher it appears in the results.

## Filtering products

You can filter the product list using the options below. Select the desired filters and click `Apply`. To cancel a selection, click the selected filter and then click `Clear`.

* [Status](#filtering-by-status)
* [Brand](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh)
* [Category](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Seller](https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w)
* [Kit](https://help.vtex.com/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28)
* [Store Visibility](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke)
* [Trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)
* Created date

> ⚠️ To quickly find recently created products, use the `Created date` filter. You can filter by products created `Today` or in the `Last 7 days`.

### Filtering by status

The table below explains the filtering options for `Status`:

| **Status type** | **Description** |
| :---: | :--- |
| Active | The product becomes active when the merchant enables this setting, meaning they want to sell it.Activation alone doesn't guarantee availability — the product also needs to meet other conditions, like price and inventory. Learn more in [Why is the product not visible on the website?](https://help.vtex.com/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). |
| Inactive | The product becomes inactive when the merchant disables this setting, meaning they don't want to sell it at the moment. All inactive products are unavailable for sale. |

The same availability icons also apply to SKUs, as explained in the next section.

## Tracking product availability

On the **Products and SKUs** page, each product has a colored icon that indicates its availability for sale. When you hover over the icon, additional information is displayed. See more details in the table below:

| **Icon color** | **Name** | **Meaning** |
| :---: | :--- | :--- |
| Green | `Available for sale` | The product is enabled with an active status and is available for sale in the store, associated with at least one [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV). |
| Orange | `Unavailable product` | The product is unavailable for sale, even though it is active. This means the seller marked the product as available for sale, but it is currently not sellable.Several reasons may cause a product to be unavailable, such as pricing, inventory, logistics, or others. For more information, check the article [Why is the product not showing on the website?](https://help.vtex.com/faq/why-is-the-product-not-visible-on-the-website--frequentlyAskedQuestions_382) |
| White | `Inactive in the catalog` | The product is disabled and has an inactive status.When a seller disables a product, it means they do not intend to sell it. In this case, availability tracking does not apply. |

The availability icons for the product also apply to SKUs, as shown in the following section.

## Viewing the SKU list

When you click the arrow <i class="fas fa-chevron-right"></i> in the product row, the platform displays a list with all the SKUs of that product, as shown in the image below: 

![products_and_skus_sku_icons_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/products-and-skus/products-and-skus_2.gif)

In the SKU list, you'll find the following information:

* **Colored icon:** Current status of the SKU's availability for sale. These icons have the same meaning as those used for products, as explained in [Tracking product availability](#tracking-product-availability).
* **Image:** Main image associated with the SKU.
* **ID:** Unique numeric identification code for the SKU.
* **Name:** SKU name.

Hovering over a SKU row displays icons that allow you to perform different actions:

* <i class="fas fa-cube" aria-hidden="true"></i>**Edit inventory:** Takes you to the inventory management page in VTEX Admin, where you can change the quantity of the SKU available in stock. Check out the [Inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) article for more information.
* <i class="fas fa-dollar-sign" aria-hidden="true"></i> **Edit prices:** Takes you to the **Price list** in the VTEX Admin to change the prices of the SKU.
* <i class="fas fa-info-circle" aria-hidden="true"></i> **Information:** Opens a modal displaying the SKU price, inventory, and trade policy details.
* <i class="far fa-clone"></i> __Copy SKU Code:__ Copies the SKU ID to the clipboard.
* <i class="far fa-eye"></i> __Activate__ / <i class="far fa-eye-slash"></i> __Deactivate:__  Opens a window that allows you to activate or deactivate the SKU in the store.

## Editing products

To change product information, click anywhere in the product row. Then, access the page for adding products and change the desired information.

You can also edit the product from the [action menu](#accessing-the-action-menu) > `Edit product`.

## Accessing the action menu

By clicking the menu icon <i class="fas fa-ellipsis-v"></i> in a product, you can:

* **Edit product:** Takes you to the page for [adding product](https://help.vtex.com/en/tutorial/adding-or-editing-products--29IkdEu6GofCFlltsZh2H8) to change product details.
* **View SKU list:** It takes you to the SKU list screen.
* **Edit similar category:** It takes you to the similar category configuration screen, which allows you to associate another category to the product. For more information, read the [How to set up similar categories](https://help.vtex.com/en/tutorial/configurando-categoria-similar--tutorials_204) article. 
* **Edit prices:** Takes you to the **Price list** in the VTEX Admin to change the prices of the product and its SKUs.
* **Edit inventory:** Takes you to the inventory management screen in the VTEX Admin to change the quantity of each product SKU available in stock. Check the [Inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) article for more information.
* **View in store:** Takes you to the product detail page (PDP) on the [storefront](https://help.vtex.com/en/tutorial/visao-geral-storefront--7cRrL2xtY7HDqiyep1PxIS).
* **View indexed info:** Opens a modal with product and SKU indexing information. See the [Viewing indexed information](#viewing-indexed-information) section for more details. 

## Viewing indexed information

The **Products and SKUs** page lets you track the product and SKU [indexing](https://help.vtex.com/en/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) logs. To do this, find the desired product row, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> [action menu](#accessing-the-action-menu), and select `View indexing information`. This will open the Indexing Log modal, as shown in the image below:

![products_and_skus_indexing_modal_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/products-and-skus/products-and-skus_3.png)

In the top right corner of the modal, you can copy the content to the clipboard by clicking <i class="far fa-clone" aria-hidden="true"></i> `Copy`. To close the modal, click the <i class="far fa-times-circle" aria-hidden="true"></i> icon or anywhere outside the modal.

## Learn more

* [Adding or editing products](https://help.vtex.com/en/tutorial/adding-or-editing-products--29IkdEu6GofCFlltsZh2H8)
* [Adding or editing SKUs](https://help.vtex.com/en/tutorial/adding-or-editing-skus--4ryZ6J45kwn3jDiQBxGiiN)
* [Filling in product registration fields](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke)
* [Why is the product not visible on the website?](https://help.vtex.com/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382)
* [Which logistics settings can impact the product availability in the cart?](https://help.vtex.com/en/tutorial/quais-configuracoes-logisticas-impactam-na-disponibilidade-do-produto-no-carrinho--NAyBFToRdvlDyOzeeAeNw)

