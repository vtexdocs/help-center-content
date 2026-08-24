---
title: 'Configuring accessories, suggestions, similar products, and show together'
id: tutorials_280
status: PUBLISHED
createdAt: 2017-04-27T22:10:17.727Z
updatedAt: 2026-07-13T00:00:00.000Z
publishedAt: 2024-10-30T18:49:41.924Z
firstPublishedAt: 2017-04-27T23:03:13.377Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-accessories-suggestions-similar-products-and-show-together
legacySlug: setting-up-a-similar-product-suggestions-accessories-and-generics
locale: en
subcategoryId: pwxWmUu7T222QyuGogs68
---
>⚠️ This tutorial is only applicable to Legacy (CMS Portal) stores.

On VTEX, you can highlight related products on the storefront through cross-selling and upselling strategies. These relations allow you to suggest complementary items, purchase alternatives, or higher-value products, and they're displayed in the store using the CMS Portal (Legacy) controls and templates.

In this tutorial, you'll learn about cross-selling and upselling relationships, which types of recommendations can be configured, and how to register them in stores that use CMS Portal (Legacy), both through the VTEX Admin and via API.

## What is cross-selling?

Cross-selling consists of offering customers a product that complements the one they're purchasing. For example, if a customer is buying a smartphone from your store, they might also be interested in headphones or a phone case.

## What is upselling?

Upselling consists of offering customers an upgraded version of the product they're purchasing. For example, if a customer is buying a smartphone, they might be interested in a model with more features or in upgrading from standard headphones to Bluetooth headphones.

## Cross-selling and upselling on the VTEX platform

See below the possible cross-sell and upsell relationships between SKUs:

- **Accessories:** Complementary items suggested for the main product. Customers can select accessory items on the product listing page using a checkbox.
- **Suggestions:** Product recommendations. A SKU will only be displayed as a suggestion when its price is higher than the price of the item being sold.
- **Similar products:** Alternatives to the selected item or products with similar characteristics.
- **Show together:** Items displayed alongside the main product, suggested as a purchase bundle.

>ℹ️ These product listing settings can be associated with the [Buy Together](https://help.vtex.com/en/docs/tutorials/buy-together) promotion.

## Configuring cross-selling and upselling strategies

You configure this at the SKU level in one of the following ways:

- **Via [VTEX Admin](#via-the-vtex-admin):** Manually when [adding or editing SKUs](https://help.vtex.com/en/docs/tutorials/adding-or-editing-skus), or in bulk, [using a spreadsheet](https://help.vtex.com/en/docs/tutorials/exporting-and-importing-product-and-sku-specifications).
- **Via [API Reference](#via-api-reference):** Using the SKU additional information API to create or update relationships, and the public cross-selling endpoints to retrieve these relationships for the storefront.

>ℹ️ The storefront displays this information through CMS Portal (Legacy) controls and templates, such as `productsCrossSelling` and specific placeholders. Learn more about controls for templates in [List of template controls](https://developers.vtex.com/docs/guides/list-of-controls-for-templates).

### Via the VTEX Admin

To configure cross-selling and upselling manually in the VTEX Admin, follow the instructions below:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type **Products and SKUs** in the search bar at the top of the page.
2. Click the row of the product you want.
3. Click the **SKUs** tab.
4. In the **Cross-selling and upselling recommendations** section, click the add icon `+`.
5. Select one of the options: `Accessories`, `Suggestions`, `Similar products`, or `Show together`.
6. Click `Add SKUs`.
7. Select the desired SKUs. You can use the search bar to look up SKUs.
8. Click `Apply`.

Learn more about SKU configurations in [Adding or editing SKUs](https://help.vtex.com/docs/tutorials/adding-or-editing-skus). To learn more about importing via spreadsheet, see [Importing and exporting products and SKUs using a spreadsheet](https://help.vtex.com/docs/tutorials/importing-and-exporting-products-and-skus-using-a-spreadsheet).

### Via API Reference

Cross-selling and upselling recommendations configured via API are stored in the same database as those added in the VTEX Admin.

To create or update this additional information, use the [Create SKU complement](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skucomplement) endpoint from the **Catalog API**.
