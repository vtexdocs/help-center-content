---
title: "I can't index a product in the catalog"
id: 5ZKLTqnCyGbWEYGPTCBIxI
status: PUBLISHED
createdAt: 2024-09-06T13:35:52.255Z
updatedAt: 2024-11-08T20:16:41.657Z
publishedAt: 2024-11-08T20:16:41.657Z
firstPublishedAt: 2024-09-06T20:54:50.631Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-index-a-product-in-the-catalog
locale: en
legacySlug: i-cant-index-a-product-in-the-catalog
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: : Catalog, Index, Product, SKU, Trade policy
---

The indexing process gathers and organizes a product's data, such as catalog information, price, and stock quantity, to be displayed to customers in search results and on store shelves.

Whenever there is a change in product status or information, a reindexing flow is triggered. Reindexing can occur in situations such as:

- Changes in product fields
- Product activation or deactivation
- Creation or removal of a collection
- Changes in price or stock quantity

>ℹ️ For more details about indexing a product in [legacy](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) stores, see [How indexing works (Legacy CMS Portal)](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256). If your store uses [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), see [Indexing History (Intelligent Search)](https://help.vtex.com/en/tutorial/indexing-history--55SRQ79PXk5lTURF54DRyJ).

In some cases, the indexing process may be interrupted, resulting in the latest updated product information not being displayed on the store's website. Here are a few scenarios where such interruption can occur:

- Incorrect product entry in the Catalog
- No trade policy associated with the product in the store binding
- Indexing timeout (40 seconds) due to a high number of requests to the checkout during indexing. The number of requests may vary depending on the following product-related factors:
<br>
<ul>
<br>
    	<li>Number of trade policies</li>
    	<li>Number of SKUs</li>
    	<li>Number of geographical regions</li>
    	<li>Number of collections</li>
    	<li>Number of sellers</li>
</ul>

## Solutions

To fix any issues preventing correct product indexing in the store, consider doing the following:

- [Check product fields](#checking-product-fields)
- [Check the account binding information](#checking-the-account-binding-information)
- [Reduce the number of trade policies associated with the product](#changing-a-products-trade-policies)
- [Change the number of SKUs per product](#changing-the-number-of-skus-per-product)
- [Remove SKUs from collections](#remove-skus-from-collections)
- [Reindex the store's product base](#reindexing-the-product-base)

### Checking product fields

Errors in product fields can lead to inconsistencies when indexing a product.

<blockquote><ui>1. In the Admin VTEX, go to <b>Catalog > All Products</b>.</ui>

<blockquote>>⚠️ Stores using the **Products and SKUs (Beta)** page should check the product fields by going to **Catalog > Products and SKUs** in the VTEX Admin. Learn more about [Produtos and SKUS (Beta)](https://help.vtex.com/en/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By).</blockquote>

<blockquote><ui>2. Find the product you want and click <b>UPDATE</b>.</ui>

<blockquote><ui>3. Check if the information in all the <a href="https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke">product fields</a> is correct. If necessary, update it and click Save.</ui>

<blockquote><ui>4. Access the indexing report in <b>Catalog > Reports</b> and check whether the product is in the indexing queue or has been indexed.</ui>

### Checking the account binding information

When the account has [more than one store](https://help.vtex.com/en/tutorial/managing-a-multistore--4S0lFVBPylRS5KpVgdyDhJ), you need to conduct the [binding](https://help.vtex.com/pt/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W), process — which binds the website to trade policies for each store. If a product is associated with a trade policy not present in the account's binding, indexing errors can occur.

To identify the trade policies associated with each store in your account, see [Linking a store to a CMS folder structure (binding)](https://help.vtex.com/en/tutorial/linking-an-account-name-to-a-website-binding--PxjfleOw6suCSO2uGWMMs).

### Changing a product's trade policies

When a product is associated with multiple policies, it may exit the indexing queue after numerous data verification iterations due to timeouts.

Example: A product with 5 active SKUs across 5 different trade policies may require 25 validations of stock availability, price rules, and promotions.

To avoid this scenario, check the possibility of using the same trade policy for different marketplaces, as described in [Configuring a marketplace trade policy](https://help.vtex.com/en/tutorial/configuring-a-marketplace-trade-policy--tutorials_404).  

>⚠️ If you can reduce the number of trade policies in your store, access the product fields again to change the trade policy and check the indexing report, as described in **Checking product fields**.

### Changing the number of SKUs per product

Similar to trade policies, having an excessive number of SKUs associated with a product can cause delays that exceed the indexing timeout. To reduce the chance of this issue occurring, consider splitting a product into separate items with fewer SKUs.

Example: If the product "Shirt" has six SKUs (Yellow S, Yellow M, Yellow L, Blue S, Blue M, and Blue L), it can be split into two products with three SKUs each: "Yellow Shirt" (S, M, and L) and "Blue Shirt" (S, M, and L).

After adjusting the number of SKUs per product, check the indexing report, as described in the section [Checking product fields](#checking-product-fields).  

### Remove SKUs from collections 

>ℹ️ There are two ways to remove a SKU from a collection: via the [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) or using the **Collections (Beta)** module. This section shows how to remove a SKU from a collection in the **Legacy CMS Portal**. For more information about the process in the **Collections (Beta)** module, see [Product removal](https://help.vtex.com/en/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#product-removal).  

If any of the product's SKUs are included in a [collection](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/4hN41yU8IPeb8HKmmaXoca), this might also cause an indexing timeout. Follow the steps below to check if the SKU is included in one or more collections:  

1. In the Admin, go to __Storefront > Layout__.
2. Click the __CMS__ folder and __Product Cluster (Collections)__.
3. Click the first collection from the list.
4. At the bottom of the __Other options__ column, check if the SKU is in the list. If it is and there is nothing against removing it from the collection, click the remove button next to the SKU.
5. Repeat step 4 for the same SKU across all collections within the __Product Cluster (Collections)__.
6. Access the indexing report in __Catalog > Reports__ and check if the product is in the indexing queue or has been indexed.

### Reindexing the product base

A complete reindexing of the product base can be conducted to simultaneously update the information for all products in the store.

For stores with fewer than 100,000 products in the catalog, the [account holder](https://help.vtex.com/en/tutorial/what-is-the-sponsor-user--3oPr7YuIkEYqUGmEqIMSEy) can use the __Schedule full reindexing__ function in the VTEX Admin.

For accounts with 100,000 or more products, please contact [VTEX Support](https://help.vtex.com/en/faq/como-funciona-o-suporte-da-vtex--3kACEfni4m8Yxa1vnf2ebe) to conduct this type of operation.

Learn more in [Database Maintenance (Full Cleanup)](https://help.vtex.com/en/tutorial/database-maintenance-full-cleanup--34P9LGs7BCIQK6acQom802).

![Schedule full reindexing](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/Store%20operations/i-cant-index-a-product-in-the-catalog_1.png)