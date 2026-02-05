---
title: 'Adding or editing products'
id: 29IkdEu6GofCFlltsZh2H8
status: PUBLISHED
createdAt: 2024-08-29T19:11:09.043Z
updatedAt: 2025-11-04T16:24:04.395Z
publishedAt: 2025-11-04T16:24:04.395Z
firstPublishedAt: 2024-08-29T19:14:22.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-or-editing-products
legacySlug: adding-products-beta
locale: en
subcategoryId: pwxWmUu7T222QyuGogs68
---

The [Products and SKUs](/en/docs/tutorials/products-and-skus) page allows merchants to manage existing products and variations or add new ones. This article describes how to add or edit products. For information on SKUs, see [Adding or editing SKUs](/en/docs/tutorials/adding-or-editing-skus).

> ℹ️ Registering products can also be done by [importing a spreadsheet](/en/docs/tutorials/filling-in-fields-in-the-import-spreadsheet) or via ERP, following the [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-import-products) instructions on our Developer Portal.

To add a new product to the store catalog, follow these steps:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type **Products and SKUs** in the search bar at the top of the page.
2. Click `+ Add product`.
3. In the **Product** tab, complete the fields in the **Default** step, as described in the following sections:

    * [Basic information](#basic-information)
    * [SEO](#seo)
    * [Storefront](#storefront)
    * [Identifiers](#identifiers)

    > Required fields are marked with an asterisk (*).

4. Depending on the product category, the **Category attributes** step might appear with additional sections. Complete the fields as described in [Category attributes](#category-attributes).
5. Click `Save`.

> ❗ You can deactivate a product after creating it, but you can't delete a single product. The platform only allows bulk deleting products and SKUs in bulk via [Full Cleanup](/en/docs/tutorials/database-maintenance-full-cleanup).

> ℹ️ If the product you created doesn't show in the storefront, check the article [Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website) to learn how to solve the problem.

See the following sections to learn how to complete the product creation fields.

## Basic information

The fields in this section provide general product details:

* **Product name*:** Enter the product name to be displayed to customers during their browsing experience. The limit is 150 characters. This field is crucial for [SEO](/en/docs/tutorials/improving-the-seo-of-product-listing-pages), so we recommend the following:
    * ✅ Use simple words
    * ❌ Avoid other languages
    * ❌ Avoid complex spelling
* **Active:** To activate the product, enable the toggle <i class="fas fa-toggle-on" aria-hidden="true"></i> **Active**. To keep it inactive, leave the toggle switch <i class="fas fa-toggle-off" aria-hidden="true"></i> disabled. Learn more about product statuses in the article [Products and SKUs](/en/docs/tutorials/products-and-skus).
* **Description:** Enter general product information in the text box. This content is displayed to customers in the storefront, so we recommend creating a simple and clear summary.

  > ℹ️ This field allows you to add an image to the product description using an HTML tag that contains the image URL. However, we recommend managing your catalog images through [SKU media](/en/tutorial/adding-or-editing-skus--4ryZ6J45kwn3jDiQBxGiiN#media).

* **Additional description:** When you activate the toggle switch <i class="fas fa-toggle-on" aria-hidden="true"></i> **Additional description**, a text box displays for including additional product information, such as a summary.
* **Brand*:** Type or search for the product [brand](/en/docs/tutorials/what-is-a-brand) name and select the desired option. Make sure the [brand exists](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR) and is active.
* **Category*:** Type or search for the product [category](/en/docs/tutorials/what-is-a-category) name and select the desired option, preferably the most specific category level. Make sure the [category exists](/en/docs/tutorials/registering-a-category) and is active.
* **Trade policies:** Choose whether the product should be linked to "All [trade policies](/en/docs/tutorials/how-trade-policies-work)" or "Specific trade policies". The second option is selected by default, but you must assign one or more values to the field.

## SEO

The [SEO](/en/docs/tutorials/improving-the-seo-of-product-listing-pages) (Search Engine Optimization) section focuses on optimizing your website to stand out in search results on Google, Bing, and other search engines.

* **Global category:** Enter the [product's global category](/en/docs/tutorials/setting-up-the-global-category), which refers to the taxonomy created by Google for the [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=pt-BR). This is predefined as a unique tree in the VTEX platform.
* **Product URL:** Enter the product URL. The link can't contain spaces and words must be separated by hyphens (-). If you don't enter a value, the platform automatically generates a URL. Learn more in the article [How to define the URL for a product page?](/en/docs/tutorials/how-to-define-the-url-for-a-product-page).

  > ❗ When filling in the **Product URL**, avoid using the following reserved words, as this can hinder your store's performance and interfere with the functioning of VTEX Admin pages: `a`, `meta`, `api` and `admin`.

* **Page title:** Enter a name that will be displayed both on the product detail page (PDP) and in the browser tab. This field is crucial for SEO. Avoid using more than 60 characters.
* **Meta description:** Provide a brief description of the category, preferably under 160 characters. This allows search engines to display the description correctly on results pages.

> ℹ️ As you complete these fields, **Google** will show a preview of the structure to be displayed on the website.

## Storefront

These fields define how the product displays in the [storefront](/en/docs/tutorials/storefront-overview):

* **Display on website:** If you want to make the product visible in the storefront, enable the toggle switch <i class="fas fa-toggle-on" aria-hidden="true"></i>. To hide it, keep it disabled <i class="fas fa-toggle-off" aria-hidden="true"></i>.
* **Show when out of stock:** If you want the out-of-stock product to be displayed on the storefront, enable the toggle switch <i class="fas fa-toggle-on" aria-hidden="true"></i>. This allows customers to use the [Notify me](/en/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e#) feature, which allows them to enter their email and receive a notification when the product is available. To hide out-of-stock items, keep it disabled <i class="fas fa-toggle-off" aria-hidden="true"></i>.
* **Release date:** Set a date to make the product available for sale. This field helps sort search results on the website. You can use the query string `O=OrderByReleaseDateDESC` to retrieve this value and display products in order of release date. In addition, the value of this field influences the creation of [automatic collections](/en/docs/tutorials/creating-collections-beta) and determines the product [indexing](/en/docs/tutorials/understanding-how-indexation-works) date.
* **Substitute words:** Include synonyms for department and/or product category names by typing the desired term and pressing `Enter`. This field helps make product searches more comprehensive, allowing you to add multiple words up to a limit of 8,000 characters.

  > Example: For the product "Sneakers", substitute words could be "Trainers", "Running shoes", and "Athletic shoes".

* **Similar categories:** Add the names of [similar categories](/en/tutorial/configurando-categoria-similar).
* **Priority in search order:** Click the arrows to assign a priority level to the product on the search results page. Negative values aren't allowed. For more information, see the article [How does the Score field work?](/en/docs/tutorials/how-does-the-score-field-work).

## Identifiers

This section includes product identification codes:

* **Reference code:** Unique reference code created to help merchants with catalog management. This is used internally by the store. To complete this field, use a unique combination of letters and/or numbers.
* **Tax code:** A numerical sequence that identifies the product.

## Category attributes

Depending on the product category, the **Category attributes** may be displayed below the Default fields. This step includes informational fields that assign characteristics to the product, known as [product specifications](/en/tutorial/criando-um-campo-de-produto).

The table below shows examples of product specifications for products in different categories:

| **Category** | **Product** | **Specification** | **Value** |
| :---: | :---: | :---: | :---: |
| Clothes | Shirt | Fabric | Cotton |
| Electronics | Cell phone | Battery duration | 12 hours |
| Beverages | Wine | Country of origin | Chile |

> ❗ You can create a product without completing required specification fields; however, all required product fields must be completed to activate the product.

## Learn more

* [Products and SKUs](/en/docs/tutorials/products-and-skus)
* [Adding or editing SKUs](/en/docs/tutorials/adding-or-editing-skus)
* [Catalog: Overview](/en/docs/tutorials/catalog-overview)
* [Catalog](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) (track)
