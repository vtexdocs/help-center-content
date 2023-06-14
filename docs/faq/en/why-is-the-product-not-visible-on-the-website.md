---
title: 'Why is the product not visible on the website?'
id: frequentlyAskedQuestions_382
status: PUBLISHED
createdAt: 2017-04-27T22:36:11.456Z
updatedAt: 2022-09-12T15:00:59.250Z
publishedAt: 2022-09-12T15:00:59.250Z
firstPublishedAt: 2017-04-27T23:01:46.278Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: why-is-the-product-not-visible-on-the-website
legacySlug: why-is-the-product-not-shown-on-the-website
---

For a product to be displayed as available in the store, the following settings must be configured:

* The product and its [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u) must be in the **Catalog** with all the details filled in correctly, as explained in the [Adding products](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL) tutorial.
* The product must have a  [price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu)  associated with it.
* The product must be included in the store’s logistics settings. This means that all settings for [inventory](https://help.vtex.com/en/tutorial/visao-geral-logistics), [loading docks](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj), [carrier](https://help.vtex.com/en/tutorial/carries-on-vtex--7u9duMD5UQa2QQwukAWMcE), [weight, dimensions,](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128) etc, must correspond to the product in question.
* Your store's [CMS](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) templates must be configured correctly.

When a product is not visible in the store or when it is displayed as unavailable,  you must adjust one or several of the above settings.

This article explains the main means of investigating, in the VTEX Admin, what adjustments must be made to the product settings:

* [Catalog](#catalog)
* [Prices](#prices)
* [Logistics](#logistics)
* [CMS](#cms)

<div class="alert alert-info">
<p>After adjusting any of the product and SKU details or after changing the Logistics settings, you must wait for the product to be indexed. You can check the indexing status in the <a href="https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256">indexing queue</a> in <strong>Catalog > Reports > Product indexing</strong>.</p>
<p>When the indexing is finished, try accessing the product page from an anonymous tab to view the updated page version avoiding cache issues.</p>
</div>

## Catalog

We recommend beginning the investigation with **Catalog**. To check the **Catalog** settings, follow the steps below.

1. Access the VTEX Admin and go to **Products > Catalog > Products and SKUs** to check the products listed in your store.
2. Find the product you want to display in the list, as illustrated below.

    ![01-produto-en](//images.ctfassets.net/alneenqid6w5/75SkVRup4MW0URypUVayEh/8b6bbeb3f736a6e16c77b4b9889c6026/01-produto-en.PNG)

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

   <div class="alert alert-warning">
      <p>When adding a new product, you must associate it with a brand and a category that are active before it can be activated for the first time. However, once a product has been added and is active, deactivating the category and brand will not deactivate it completely.</p>
      <p>Products with inactive categories and brands become invisible in the store, which means they are not displayed in the search results and do not have their own pages. To make them unavailable, you must reset their quantity in stock to zero.</p>
   </div>

    * **Trade policies:** Check if the product is associated with a [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV). If it's not, use the selection box to choose the trade policy with which you want to associate it.
    * **Market launch date:** Check if the date for the product launch on market is correct. If the date is set in the future, the product will only be displayed on the website at the mentioned date.
    * **Show on site:** Check if the **Yes** option is selected. Otherwise, the product will not be displayed on the website.
    * **Product active:** Check if the **Yes** option is selected. Otherwise, the product will not be displayed.
    * **Show out of stock:** Check if the **Yes** option is selected — in this case, the expected behavior is that out-of-stock products will be shown in the store featuring a [Notify me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) button. If this option is not enabled, the product may not be displayed in the store because it is not available in stock.
    * If the product contains specifications, check the **Specifications** tab to see if they are filled in.
3. After each change, click `Save`.

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/nGAGYNdVtTFdAPjW1mi5f/080a8fbd5815fe8059b449a23c01b944/02-campos-produto-en.png" alt="02-campos-produto-en" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Fields you must check on the product information page.</em></figcaption></figure>

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/6UXDapFf9bvtnCSoHQBwZC/4870d3860fc73faed98f2237aa85cca9/03-aba-especificacoes-en.png" alt="03-aba-especificacoes-en" style="margin-bottom: 20px;"> <figcaption align = "center"><em><strong>Specifications</strong> tab</em></figcaption></figure>

### SKUs

On the SKUs page, in **Products > Catalog > Products and SKUs**, follow the instructions below to find out which field might be causing problems.

1. In **Products > Catalog > Products and SKUs**, find the SKU you want to investigate in the list.

    Next to each SKU, you will find shortcuts that can help your investigation:

    |Button | Description |
    |-|-|
    | ![04-botao-precos](//images.ctfassets.net/alneenqid6w5/7f0NyYsrdO9dRgW2OQb0ND/1343af5f40a6f0a64cdd8378385977c0/04-botao-precos.png) | Allows you to access the __Price list__ to check if the desired trade policy has a valid price associated with the product SKUs. For more information, check the [Prices](#prices) section. |
    | ![05-botao-logistica](//images.ctfassets.net/alneenqid6w5/4Y2GdsvjxHYkVSBfElhVr9/17742a7ce2632fa9d800d942bb016283/05-botao-logistica.png) | Allows you to access the __Inventory management__ page to check if the SKU is available in stock.  For more information, check the [Logistics](#logistics) section. |
    | ![06-botao-indexed-info](//images.ctfassets.net/alneenqid6w5/5G3dZgdVZDiPqADnodmHc7/e31e69a2333d82a74ca980303e93b690/06-botao-indexed-info.png) | Allows you to view each **Seller ** selling the SKU, the trade policy (**Policy**), the price (**Value**) and the SKU quantity in inventory (**Quantity**). |

2. On the row displaying the product with the SKU you want to verify, click the down arrow <i class="fas fa-caret-down"></i>, next to the `Update` button.
3. Click the **SKU** option to access the SKUs detailed list.
4. In the **Status** column, check if the indicated situation is `Active`. If the SKUs are active, go to step 7.
5. If a SKU appears as `Inactive`, click `Update` to view the SKU detailed information.

    ![07-catalogo-skus-en](//images.ctfassets.net/alneenqid6w5/6hs2pWjN8Mze7A274XRAm3/038a679284d7261a44ace5814e67ee34/07-catalogo-skus-en.png)

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

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/3StXGBCMW8ZExshcEhfF9m/ebc572e69e7dc83a5de491a83c4233ac/08-aba-imagens-en.png" alt="08-aba-imagens-es" style="margin-bottom: 20px;"> <figcaption align = "center"><em><strong>Images</strong> tab</em></figcaption></figure>

![09-sku-imagens-en](//images.ctfassets.net/alneenqid6w5/1JJflflW0ACgVn05sRv29x/f58814d66052faf18d3bc44e68eb83cc/09-sku-imagens-en.PNG)

### Indexed Info

For a product to be displayed on the website, it needs to be [indexed](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256). The **Catalog** indexer allows you to view detailed information about each product and SKU indexing, following the steps below.

1. In **Products > Catalog > Products and SKUs**, find in the list the SKU you want to investigate.
2. On the row of the desired SKU, click the down arrow  <i class="fa-solid fa-sort-down"></i> next to the `Edit` button.
3. Click the **Indexed info** option to check information on the product indexing.

The indexing list displays each product SKU status. If any issue is detected, the index indicates `SKU is UNAVAILABLE` and mentions the cause of error.

In the example below, you can conclude that the SKU is unavailable because there are no items in stock:

![10-indexed-info-code](//images.ctfassets.net/alneenqid6w5/3J8ZK4CikAYOwYh8GAzbWa/f1e1650c980fd7042649f6bd8ae3e9a4/Group_1__7_.png)

Based on this information, you can take action to correct the issue. In this example, you should adjust the item quantity in stock in the [Logistics](#logistics) system.

An active SKU without errors will appear in the index, similar to the one illustrated below:

![11-indexed-info-code-active](//images.ctfassets.net/alneenqid6w5/3Sd3Ta5gzKo0LY9dMHmCqp/9e9c99cc4c9408c6dfbaddd4feaaaa84/11-indexed-info-code-active.png)

<div class="alert alert-info">
<p>If no reason is given for the product’s unavailability and if you do not find any issues in the product/SKUs, reindexing the product may solve the problem.</p>
<p>To do this, you can edit one of the fields within the product or SKUs information page and save the changes. This will force a reindexing.</p>
</div>

## Prices

In the **Prices** module, it's important to verify if your product SKU contains [base prices](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx).

1. Access **Products > Prices > Price list**.
2. Check each SKU row and the column corresponding to the desired trade policy.
    * If a price is displayed, the issue is not in the **Prices** module, so you can jump the next steps in this section.
    * But if the displayed information is _No price yet_, this means that you must [create a base price](#creating-a-base-price).

In the example illustrated below, there are two SKUs without a base price. This is why there is no calculated price in the trade policy column — only the information _No price yet_ is displayed.

![12-precos-en](//images.ctfassets.net/alneenqid6w5/3XrEvLWMmU3LlsxF75v9NN/fe4b6781deb81831cd88cef790af7aee/12-precos-en.PNG)

### Creating a base price

To create a base price in the VTEX Admin, follow the steps below:

1. In **Products > Prices > Price list**, click the row of the desired SKU, in the first column. A side bar will be displayed.
2. In the **Cost price** field, fill in the SKU cost.
3. In the **Initial markup** field, fill in the profit percentage you will obtain from selling the SKU.

    The base price will be automatically calculated based on the data provided in the previous steps.

4. Click `X` or in the area outside the side bar to save the price.

You can also create base prices using a spreadsheet or the Pricing API. For more information, please see the steps described in the article [Adding a base price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29).

## Logistics

To see if the logistics settings apply to your product, we recommend running a test in the **Shipping simulator** and check the item quantity on the **Inventory management** page.

### Shipping simulator

The **Shipping simulator** allows you to check if the item exists in the inventory and if it can be delivered using the current logistics settings. If one of the criteria is not met, the simulator assumes that the item is unavailable. To use it, follow the steps below.

1. Access **Orders > Inventory & shipping > Shipping simulator**.
2. Fill in the necessary information, as described in [Shipping simulator](https://help.vtex.com/en/tutorial/shipping-simulation--tutorials_144).
3. Click `Shipping simulation`.

![13-simular-frete-pt](//images.ctfassets.net/alneenqid6w5/rJE0n5ZijrAerIWzzf2Gy/0fbc4b15077d4ea265c82c0a70f5f064/13-simular-frete-en.PNG)

<div class="alert alert-info">
<p>To investigate a specific item, you must perform the simulation using a <strong>zip code</strong> included in all the <a href="https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140">trade policies</a>. If you find out the item is not available for that zip code, it means it will not be available for any other one.</p>
</div>

The simulation result shows whether the product is available for delivery at the provided address and which are the best shipping options. For example, if there are not enough available items in stock, the simulator will display the following message:

![14-simulador-motivos-en](//images.ctfassets.net/alneenqid6w5/4oVBH9r7Vs3jDWZF2MUqdO/68f0e61b7646bb685b5f28278856512b/14-simulador-motivos-en.PNG)

For more information on using the simulator, please read the article [Shipping simulator](https://help.vtex.com/en/tutorial/shipping-simulation--tutorials_144).

### Inventory management

If a product is not available on the website because it is out of stock, you must adjust this information in the **Inventory & shipping** module. Follow the steps below:

1. In the VTEX Admin, access **Orders > Inventory & shipping > Inventory management**.

    On this page, you can view the SKUs added to the **Catalog** and their respective stock quantities. 

2. Find the desired SKU and check the quantity in stock in the **Available** column.

    If the value is _1_ or more, the item is available.

    If it is _0_ or a negative value, you must adjust the information.

3. To update the stock count, go to the desired SKU row and write the current quantity in the **Update count** column, as illustrated below.
4. Click `Save`.

![15-gerenciar-inventario-en](//images.ctfassets.net/alneenqid6w5/7gcnOqUFhzOrvf0EPJTTeM/1ef88e4a10e7cac64efaca80a3fe37fa/15-gerenciar-inventario-en.gif)

For more information, please read the [Inventory management](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139) tutorial.

## CMS

If your product is still not visible on the website even after checking all the **Catalog**, **Prices** and **Logistics** settings, you must check your store [CMS](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC). See below to learn how to investigate if your store's [binding](https://help.vtex.com/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) is correct and check the specific settings for [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) and [VTEX IO](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2).

<div class="alert alert-warning">
<p>To perform the CMS investigation described below, you must ask your store's developer team for support.</p>
</div>

## Binding

Regardless of which CMS your store uses — Legacy Portal or VTEX IO — you must confirm that the [binding](https://help.vtex.com/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) is configured, i.e. that your website and its folder structure are correctly associated with your VTEX account.

1. In the VTEX Admin, go to **CMS > Layout**.
2. Click the **CMS** folder.
3. Click the **Sites and channels** folder.
4. Check the color of the icon <i class="fas fa-globe-americas"></i> displayed next to your website's name.

    If the icon is blue, it means the binding is correct, you don’t need to do anything.

    If the icon is yellow, there is an error in the binding. In this case, you must follow the steps in the article [Website with error: how to fix it?](https://help.vtex.com/en/faq/website-com-erro-como-ajustar) to correct the error.

### Legacy CMS Portal

If your store uses the [CMS Legacy Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), we recommend that your store's developers check if the product search result [control](https://help.vtex.com/en/tutorial/lista-de-controles-para-templates--tutorials_563#controls-for-department-category-and-search-pages) (`<vtex.cmc:searchResult/>`) is being used in the page templates for Department, Category and Search, in **CMS > Layout**. If not, the products will not be displayed.

### CMS VTEX IO

If your store is developed with [VTEX IO](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), your store's developers must check the **Pages** settings and the blocks declared in the store templates.

#### Pages

In **CMS > Pages > Pages**, it is important to check if the page uses a custom template, because it allows using a template declared in the code with a different name and URL.

Follow the steps below to check the template your page is using.

1. In **CMS > Pages > Pages**, click the pencil icon <i class="fas fa-pencil"></i> on the row of the page you want to verify.
2. Scroll down to the **Templates** section.
3. Check the template name in the **Default** field and in the **Conditional** field, if available.

    In the example below, the default template is `vtex.curbside-pickup@0.x:store.curbside-pickup` and there is no conditional template.

    ![16-templates-cms-en](//images.ctfassets.net/alneenqid6w5/5EMFVK2j0O7l6im1ZJIQQI/13b66c83e437aa4e2a3bd0d9f722553b/16-templates-cms-en.PNG)

4. Next, you must check the blocks declared in the used template, as described in [Templates](#templates).

#### Templates

For stores developed with VTEX IO, you need to check the following items in [your store theme](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-6-buildingyourownstoretheme) files.

* Check if the product page (`product.jsonc`) is declared with all the necessary blocks for a correct functioning — [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages?_ga=2.124137738.1894771692.1651492195-816806259.1637870241), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) and [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton) — as described on the [Product page](https://learn.vtex.com/docs/course-basic-blocks-step04pdp-lang-en). 
* Check if the [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result) app and its `search-result-layout` block are properly declared in the template code, as indicated in the Search Result documentation.

## Learn more

* [Catalog - concept definition](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR)
* [How indexing works](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256)
* [Pricing module - Overview](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu)
* [Inventory management](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139)
* [Shipping simulator](https://help.vtex.com/en/tutorial/shipping-simulation--tutorials_144)
* [CMS - Overview](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC)
