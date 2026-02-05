---
title: 'Why is the product not visible on the website?'
id: frequentlyAskedQuestions_382
status: PUBLISHED
createdAt: 2017-04-27T22:36:11.456Z
updatedAt: 2025-09-04T18:05:50.517Z
publishedAt: 2025-09-04T18:05:35.252Z
firstPublishedAt: 2017-04-27T23:01:46.278Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: why-is-the-product-not-visible-on-the-website
locale: en
legacySlug: why-is-the-product-not-shown-on-the-website
---

For a product to be displayed on the product listing page, it needs to be available for sale, which happens when the following settings are correctly configured:

* The [product](/en/docs/tracks/adding-products) and its [SKUs](/en/docs/tutorials/what-is-an-sku) are added to the Catalog.
* The product has a [price](/en/docs/tracks/prices-module-overview).
* The logistics settings make it possible to ship the product to customers, which includes configuring the [warehouse](/en/docs/tutorials/warehouse), [loading dock](/en/docs/tutorials/loading-dock), [shipping policies](/en/docs/tutorials/shipping-policy), etc.
* Regarding [inventory](/en/docs/tutorials/managing-stock-items), the product must meet one of the following conditions:
    * There is stock available for sale ([reserved](/en/docs/tutorials/how-does-reservation-work) items are not considered available).
    * Unlimited inventory is configured for the product.
    * The option to display the product when it is sold out is active.
* The store [Content Management System (CMS)](/en/docs/tracks/what-is-the-cms) templates are configured.

You must adjust one or more of these settings when a product is not displayed on the product listing page.

This article explains how to investigate and fix product unavailability errors on the product listing page. The sections are divided as follows:

* [Catalog](#catalog)
* [Prices](#prices)
* [Logistics](#logistics)
* [CMS](#cms)

> ⚠️ After adjusting the product and SKU details or changing logistics settings, wait for the product to be indexed. You can track the status via the [indexing queue](/en/tutorial/entendendo-o-funcionamento-da-indexacao) in the VTEX Admin, under **Catalog > Reports > Indexed Products**. Once indexing is complete, we recommend accessing the product page on the store website using an anonymous browser tab to view the updated, uncached version.

There are cases in which the product is displayed on the product listing page but becomes unavailable when added to the cart. This may be due to different logistics configurations. Learn more in the article [Which logistics settings can impact the product availability in the cart?](/en/docs/tutorials/which-logistics-settings-can-impact-the-product-availability-in-the-cart).

## Catalog

We recommend beginning the investigation with **Catalog**. To check the **Catalog** settings, follow the steps below.

1. Access the VTEX Admin and go to **Products > Catalog > Products and SKUs** to check the products listed in your store.
2. Find the product you want to display in the list, as illustrated below.

    ![01-produto-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_1.PNG)

3. Follow the instructions described in the next sections to check this information:
    * [Product](#product)
    * [SKUs](#skus)
    * [Indexed Info](#indexed-info)

### Product

To check the product settings, you must follow the steps below.

1. In **Products > Catalog > Products and SKUs**, click `Update` next to the product you want to check.
2. Check the following information in the form:
    * **Brand:** Check the brand associated with the product and make sure it is active.
    * **Category:** Check the category associated with the product and make sure it is active.

   > ⚠️ When adding a new product, you must associate it with a brand and a category that are active before it can be activated for the first time. However, once a product has been added and is active, deactivating the category and brand will not deactivate it completely. Products with inactive categories and brands become invisible in the store, which means they are not displayed in the search results and do not have their own pages. To make them unavailable, you must reset their quantity in stock to zero.

    * **Trade policies:** Check if the product is associated with a [trade policy](/en/docs/tutorials/how-trade-policies-work). If it's not, use the selection box to choose the trade policy with which you want to associate it.
    * **Market launch date:** Check if the date for the product launch on market is correct. If the date is set in the future, the product will only be displayed on the website at the mentioned date.
    * **Show on site:** Check if the **Yes** option is selected. Otherwise, the product will not be displayed on the website.
    * **Product active:** Check if the **Yes** option is selected. Otherwise, the product will not be displayed.
    * **Show out of stock:** Check if the **Yes** option is selected — in this case, the expected behavior is that out-of-stock products will be shown in the store featuring a [Notify me](/en/docs/tutorials/setting-up-the-notify-me-option) button. If this option is not enabled, the product may not be displayed in the store because it is not available in stock.
    * If the product contains specifications, check the **Specifications** tab to see if they are filled in.
3. After each change, click `Save`.

![02-campos-produto-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_2.png)

<p align="center">*Fields you must check on the product information page.*

![03-aba-especificacoes-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_3.png)

### SKUs

On the SKUs page, in **Products > Catalog > Products and SKUs**, follow the instructions below to find out which field might be causing problems.

1. In **Products > Catalog > Products and SKUs**, find the SKU you want to investigate in the list.

    Next to each SKU, you will find shortcuts that can help your investigation:

    |Button | Description |
    |-|-|
    | ![04-botao-precos](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_4.png) | Allows you to access the __Price list__ to check if the desired trade policy has a valid price associated with the product SKUs. For more information, check the [Prices](#prices) section. |
    | ![05-botao-logistica](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_5.png) | Allows you to access the __Inventory management__ page to check if the SKU is available in stock.  For more information, check the [Logistics](#logistics) section. |
    | ![06-botao-indexed-info](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_6.png) | Allows you to view each **Seller ** selling the SKU, the trade policy (**Policy**), the price (**Value**) and the SKU quantity in inventory (**Quantity**). |

2. On the row displaying the product with the SKU you want to verify, click the down arrow <i class="fas fa-caret-down"></i>, next to the `Update` button.
3. Click the **SKU** option to access the SKUs detailed list.
4. In the **Status** column, check if the indicated situation is `Active`. If the SKUs are active, go to step 7.
5. If a SKU appears as `Inactive`, click `Update` to view the SKU detailed information.

    ![07-catalogo-skus-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_7.png)

6. On the SKU information page, continue checking the items listed below.
    * **Activate SKU if possible:** Check if this option is selected. Otherwise, the SKU will not be displayed. When you activate this option, you determine that the SKU will be activated if it meets the necessary requirements:
        * Is associated with an active brand and category.
        * Has at least one image associated with the SKU.
        * Has the specifications filled out (if specifications have been added).
        * If the SKU is a kit: It’s associated with an active component.
    * **SKU Activated?:** Check if this option is enabled. Otherwise, the SKU will not be displayed.
7. Click the **Images** tab.
8. Check if the SKU contains at least one image. If it does not, the SKU will not be activated — follow the next step to correct this problem.
9. Click `Insert` to upload a new image. If you prefer, click `Associate existing images`  to include an image already used for another SKU.

![08-aba-imagens-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_8.png)

<p align="center">***Images** tab*

![09-sku-imagens-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_9.PNG)

### Indexed Info

For a product to be displayed on the website, it needs to be [indexed](/en/docs/tutorials/understanding-how-indexation-works). The **Catalog** indexer allows you to view detailed information about each product and SKU indexing, following the steps below.

1. In **Products > Catalog > Products and SKUs**, find in the list the SKU you want to investigate.
2. On the row of the desired SKU, click the down arrow  <i class="fa-solid fa-sort-down"></i> next to the `Edit` button.
3. Click the **Indexed info** option to check information on the product indexing.

The indexing list displays each product SKU status. If any issue is detected, the index indicates `SKU is UNAVAILABLE` and mentions the cause of error.

In the example below, you can conclude that the SKU is unavailable because there are no items in stock:

![10-indexed-info-code](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_10.png)

Based on this information, you can take action to correct the issue. In this example, you should adjust the item quantity in stock in the [Logistics](#logistics) system.

An active SKU without errors will appear in the index, similar to the one illustrated below:

![11-indexed-info-code-active](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_11.png)

> ℹ️ If no reason is given for the product’s unavailability and if you do not find any issues in the product/SKUs, reindexing the product may solve the problem. To do this, you can edit one of the fields within the product or SKUs information page and save the changes. This will force a reindexing.

## Prices

In the **Prices** module, it's important to verify if your product SKU contains [base prices](/en/docs/tracks/preco-base-definicao-de-conceito).

1. Access **Products > Prices > Price list**.
2. Check each SKU row and the column corresponding to the desired trade policy.
    * If a price is displayed, the issue is not in the **Prices** module, so you can jump the next steps in this section.
    * But if the displayed information is _No price yet_, this means that you must [create a base price](#creating-a-base-price).

In the example illustrated below, there are two SKUs without a base price. This is why there is no calculated price in the trade policy column — only the information _No price yet_ is displayed.

![12-precos-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_12.PNG)

### Creating a base price

To create a base price in the VTEX Admin, follow the steps below:

1. In **Products > Prices > Price list**, click the row of the desired SKU, in the first column. A side bar will be displayed.
2. In the **Cost price** field, fill in the SKU cost.
3. In the **Initial markup** field, fill in the profit percentage you will obtain from selling the SKU.

    The base price will be automatically calculated based on the data provided in the previous steps.

4. Click `X` or in the area outside the side bar to save the price.

You can also create base prices using a spreadsheet or the Pricing API. For more information, please see the steps described in the article [Adding a base price](/en/docs/tracks/cadastrar-preco-base).

## Logistics

Different aspects of [logistics](/en/docs/tutorials/fulfillment-logistics-vtex) can cause the product's unavailability on the product listing page. The product may be unavailable because the store [shipping strategy](/en/docs/tutorials/shipping-strategy) does not allow shipping to the customer's location or because there is not enough quantity of the product in the [inventory](/en/docs/tutorials/managing-stock-items).

> ℹ️ If the product is displayed as available on the product listing page but becomes unavailable when added to the cart, see the article [Which logistics settings can impact the product availability in the cart?](/en/docs/tutorials/which-logistics-settings-can-impact-the-product-availability-in-the-cart). 

### Shipping Simulator

One way to test if there is a feasible delivery route is using the **Shipping Simulator** to validate the store's logistical settings and check your inventory.

To simulate shipping an item to a location, in the VTEX Admin, go to **Shipping > Shipping Simulator**. You can find the instructions in the article [Shipping Simulator](/en/docs/tutorials/shipping-simulation).

> ⚠️ When investigating the availability of an item through the **Shipping Simulator**, we recommend using an address covered by all your [shipping policies](/en/docs/tutorials/shipping-policy). If the item is unavailable for this location, it won't be available for any other.

When the logistics settings for the [shipping policy](/en/docs/tutorials/shipping-policy), [warehouse](/en/docs/tutorials/warehouse), and [loading dock](/en/docs/tutorials/loading-dock) are configured correctly, and the shipping policy covers the customer's location, the item may not be displayed on the product listing page due to its inventory, as explained below.

### Inventory

By adopting any of the following inventory strategies, you can ensure product availability on the product listing page:

* Ensure sufficient item count for sales ([reserved](/en/docs/tutorials/how-does-reservation-work) items are not considered available).
    * In the VTEX Admin, go to **Catalog > Inventory > Inventory Management**, change the value in the *Update Count* column in the product row, and click `Save`.
* Activate the [unlimited inventory](/en/docs/tutorials/managing-stock-items) option for the product.
    * In the VTEX Admin, go to **Catalog > Inventory > Inventory Management**, activate the toggle in the *Unlimited inventory* column in the product row, and click `Save`.
* Configure the product to be displayed on the product listing page when out of stock.
    * In the VTEX Admin, go to **Catalog > All Products**, and click a product to go to its configuration page. In the *Product* tab, check the `Yes` option in the `Show when out of stock` field.

If [future inventory](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-/supplyLots/-supplyLotId-) is configured for the SKU, the supply of this item could take longer than expected. In this period, the product unavailability on the product listing page could be due to a lack of stock.

> ⚠️ If your store has [franchise accounts](/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex), for the inventory of these accounts to be available for sale, the products must be linked to the same [trade policy](/en/docs/tutorials/how-trade-policies-work) used in your storefront.

## CMS

If your product is still not visible on the website even after checking all the **Catalog**, **Prices** and **Logistics** settings, you must check your store [CMS](/en/docs/tracks/what-is-the-cms). See below to learn how to investigate if your store's [binding](/en/docs/tutorials/what-is-binding) is correct and check the specific settings for [Legacy CMS Portal](/en/docs/tracks/legacy-cms-portal) and [VTEX IO](/en/docs/tracks/cms-vtex-io).

> ⚠️ To perform the CMS investigation described below, you must ask your store's developer team for support.

## Binding

Regardless of which CMS your store uses — Legacy Portal or VTEX IO — you must confirm that the [binding](/en/docs/tutorials/what-is-binding) is configured, i.e. that your website and its folder structure are correctly associated with your VTEX account.

1. In the VTEX Admin, go to **CMS > Layout**.
2. Click the **CMS** folder.
3. Click the **Sites and channels** folder.
4. Check the color of the icon <i class="fas fa-globe-americas"></i> displayed next to your website's name.

    If the icon is blue, it means the binding is correct, you don’t need to do anything.

    If the icon is yellow, there is an error in the binding. In this case, you must follow the steps in the article [Website with error: how to fix it?](/en/faq/website-com-erro-como-ajustar) to correct the error.

### Legacy CMS Portal

If your store uses the [CMS Legacy Portal](/en/docs/tracks/legacy-cms-portal), we recommend that your store's developers check if the product search result [control](/en/tutorial/lista-de-controles-para-templates--tutorials_563#controls-for-department-category-and-search-pages) (`<vtex.cmc:searchResult/>`) is being used in the page templates for Department, Category and Search, in **CMS > Layout**. If not, the products will not be displayed.

### CMS VTEX IO

If your store is developed with [VTEX IO](/en/docs/tracks/cms-vtex-io), your store's developers must check the **Pages** settings and the blocks declared in the store templates.

#### Pages

In **CMS > Pages > Pages**, it is important to check if the page uses a custom template, because it allows using a template declared in the code with a different name and URL.

Follow the steps below to check the template your page is using.

1. In **CMS > Pages > Pages**, click the pencil icon <i class="fas fa-pencil"></i> on the row of the page you want to verify.
2. Scroll down to the **Templates** section.
3. Check the template name in the **Default** field and in the **Conditional** field, if available.

    In the example below, the default template is `vtex.curbside-pickup@0.x:store.curbside-pickup` and there is no conditional template.

    ![16-templates-cms-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-the-product-not-visible-on-the-website_13.PNG)

4. Next, you must check the blocks declared in the used template, as described in [Templates](#templates).

#### Templates

For stores developed with VTEX IO, you need to check the following items in [your store theme](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-6-buildingyourownstoretheme) files.

* Check if the product page (`product.jsonc`) is declared with all the necessary blocks for a correct functioning — [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages?_ga=2.124137738.1894771692.1651492195-816806259.1637870241), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) and [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton) — as described on the [Product page](https://learn.vtex.com/docs/course-basic-blocks-step04pdp-lang-en). 
* Check if the [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result) app and its `search-result-layout` block are properly declared in the template code, as indicated in the Search Result documentation.

## Learn more

* [Catalog - concept definition](/en/docs/tracks/catalog-concept-definition)
* [Which logistics settings can impact the product availability in the cart?](/en/docs/tutorials/which-logistics-settings-can-impact-the-product-availability-in-the-cart)
* [How indexing works](/en/docs/tutorials/understanding-how-indexation-works)
* [Pricing module - Overview](/en/docs/tracks/prices-module-overview)
* [Inventory management](/en/docs/tutorials/managing-stock-items)
* [Shipping simulator](/en/docs/tutorials/shipping-simulation)
* [CMS - Overview](/en/docs/tracks/what-is-the-cms)
