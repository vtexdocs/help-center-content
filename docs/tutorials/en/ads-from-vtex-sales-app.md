---
title: Ads from VTEX Sales App
id: 3UtOFwbwD4muz3p72RBPmC
status: PUBLISHED
createdAt: 2023-05-25T17:16:06.902Z
updatedAt: 2023-05-30T15:53:49.413Z
publishedAt: 2023-05-30T15:53:49.413Z
firstPublishedAt: 2023-05-26T22:11:51.769Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: ads-from-vtex-sales-app
legacySlug: ads-from-vtex-sales-app
subcategory: 4T6qfa6gNO6g4sAUIa6s2G
---

The new ad area in the VTEX Sales App features two main types of ads: specific products or search results. This flexibility allows merchants to adapt their marketing strategies according to their specific needs and goals, promoting individual products or groups of related products.

In this document, we will provide detailed instructions on how to install, configure, and use the new ad area. Follow the steps below to set up this tool and boost your online sales.

* [Install VTEX dependencies](#install-vtex-dependencies)
* [Configure the Headless CMS app](#configure-the-headless-cms-app)
* [Create an ad page](#create-an-ad-page)
* [Activate the ad menu in the VTEX Sales App](#activate-the-ad-menu-in-the-vtex-sales-app)
* [Access ads in the VTEX Sales App](#access-ads–in-the-vtex-sales-app)

## Install VTEX dependencies

Before installing the dependencies, you must have VTEX IO CLI installed. With VTEX IO CLI installed, execute the following commands in your computer's command prompt to install the necessary dependencies:

```
vtex login {account}

vtex install vtex.admin-cms@1.x vtex.admin-cms-graphql@0.x 
vtex.admin-cms-graphql-rc@1.x vtex.admin-releases@0.x 
vtex.cms-builder-sf-jamstack@1.x
```

## Configure the Headless CMS app

1. In the VTEX Admin, go to **Applications > My Apps**, or type **My Apps** in the search bar at the top of the page.
2. Click on the **CMS (alpha)** item's `Settings`.
3. Click on `Add More`.
4. In the **Project ID** field, type `instore`.
5. In the **Sections URL** field, type `https://instore--instore.vtex.app/assisted-sales/cms/sections.json`.
6. In the **Content types URL** field, type `https://instore--instore.vtex.app/assisted-sales/cms/content-types.json`.
7. In the **Translation keys URL** field, type `https://instore--instore.vtex.app/assisted-sales/cms/translation-keys.json.
8. Click on `Save`.

## Create an ad page

To create an ad page for the VTEX Sales App, follow the steps below:

1. Access the VTEX Admin URL: `https://{main_account}.myvtex.com/admin/new-cms/instore`
2. Click on **Create New** and select **Ads**.
3. Click on **Untitled** to edit and include the desired name. We recommend the name **Ads**.
4. In the **Sections** tab, click on the `+` button to add a new section. Each section is a collection of products or search terms. Each section will be displayed as a carousel showcase. You can reorder the showcases by clicking on the `Move down` or `Move up` buttons.
5. Select an ad type, either products or search results.
  - **Product Showcase:** It will display each product and SKU (optional) that you specify. Add the following information:
    - **Showcase title:** name of the showcase that will be displayed on the page.
    - **Product ID:** identifier number of the product you want to display. Mandatory field.
    - **Product SKU ID:** identifier number of the product's SKU you want to display. Optional field.
![vitrine-produto-en](https://images.ctfassets.net/alneenqid6w5/6SREOFdog1AfNXqyhH0I5Z/055391c146dbfe153d0161eb1f9af701/image.png)
After filling in the fields, the product image will be displayed with the "starting at" price. If you include the SKU, the price and promotion of the indicated SKU will be displayed. You can add more products by clicking on + NEW PRODUCT. You can add up to 10 products in each showcase.
The result of the product showcase will be displayed as shown in the image below.
![vitrine-produto-2-en](https://images.ctfassets.net/alneenqid6w5/3SY8POqXIAK0Qi2lWax8qq/f288b81bbd6f3f9e788afdccead5286e/image.png)
  - **Search Results Showcase:** it will display products from a search result that you define. Add the following information:
Showcase title: The name of the showcase that will be displayed on the page.
    - **Search image:** image that will represent the selection of products in the showcase.
    - **Search name:** name of the search that will be displayed on the page.
    - **Search term:** search term that will be used as a reference for the products.
![vitrine-busca-en](https://images.ctfassets.net/alneenqid6w5/2nOoe8dF1IaF1YPIr3N3dV/79a8cc3b08dd79d76d402456e47a62ac/image.png)
When the seller clicks on the search term, they will be directed to the search result determined in the Search term. You can also include up to 10 searches in each showcase. See the result in the image below:
![vitrine-busca-2-en](https://images.ctfassets.net/alneenqid6w5/s6MJ80nGy16Ex39NnPwnT/58073fd76945673090d787622ebcc09a/image.png)
<ol start="6">
  <li>After creating the sections, click on <code>Save</code>, then click on <code>Publish</code> and <code>Publish Now</code> to finalize.</li>
</ol> 

The publication of the showcase will enter the indexing queue and will be published within a few seconds.

## Activate the ad menu in the VTEX Sales App

Access the technical settings of the VTEX Sales App at:
```https://{main_account}.myvtex.com/admin/portal/#/sites```

1. Click on the <i class="fas fa-cog"></i> button.
2. Select the **Code** tab.
3. Select the `checkout-instore-custom-js` file in the side tab.
![checkout-instore-custom-js-file](https://images.ctfassets.net/alneenqid6w5/6JgOUD4YUDyArNzUkgzIVJ/8f4cdc9e643abd06f8b3ef4ecc906040/image.png)
5. In the `window.INSTORE_CONFIG` object, add the flag `enableExplore: true`.
![window.INSTORE_CONFIG](https://images.ctfassets.net/alneenqid6w5/6kpTp7g4zRuIsyYGdo5Bio/e2984ba814f55a81a0b4263ff9d1a694/image.png)
6. Click on <i class="fas fa-save"></i> `Save`.
7. Optionally, you can set the ad page as the seller's homepage. To do this, add the flag `initialPage: advertisements` to the `window.INSTORE_CONFIG` object.
![initialPage : advertisements](https://images.ctfassets.net/alneenqid6w5/1zS4dgPnw7Q0ZP2w0thQdt/57c885204ca51226610e97e88f2e85e4/image.png)

## Access ads in the VTEX Sales App

In the VTEX Sales App, the seller will have the ability to access the ad page in two different ways:

* **Homepage:** If the store administrator previously registered the ad page as the seller's homepage, upon logging into the platform, the seller will be directed straight to the ad page. This configuration ensures that sellers are always up-to-date with relevant ads and promotions as soon as they access the system.
* **Explore Menu:** If the ad page is not set as the seller's homepage, it can still be easily accessed through the **Explore** menu. To access the ad page, the seller should click on the **Explore** menu. This will directly take the seller to the ad page, where they can view and interact with the available products and promotions.

![vitrine-sale-app-en](https://images.ctfassets.net/alneenqid6w5/3YddBVVXNGJiVWfDK1xUrg/b1924f30b51e02d7c4fa4ca057b162bb/image.png)
