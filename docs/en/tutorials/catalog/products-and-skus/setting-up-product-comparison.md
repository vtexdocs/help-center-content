---
title: 'Setting up product comparison'
id: tutorials_236
status: PUBLISHED
createdAt: 2017-04-27T22:13:10.537Z
updatedAt: 2025-02-27T18:53:28.317Z
publishedAt: 2025-02-27T18:53:28.317Z
firstPublishedAt: 2017-04-27T23:03:10.483Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-product-comparison
legacySlug: setting-up-product-comparison
locale: en
subcategoryId: pwxWmUu7T222QyuGogs68
---

> ⚠️ This tutorial is only applicable to Legacy CMS Portal stores.

Product Comparison is a native VTEX feature that allows you to view the details and specifications of selected products side by side. This makes it easy to compare items and quickly identify differences between their specifications.

The configuration process involves two steps:

- [**Comparison page**](#comparison-page): Where you can view a side-by-side comparison of products selected from the product listing page.
- [**Product listing page**](#product-listing-page): Where you can select products to compare.

> ⚠️ Product comparison doesn't work on the store homepage.

## Instructions

Follow the steps below to configure the product comparison in your store.

### Comparison page

1. [Create a shelf template](/en/faq/como-criar-um-template-de-prateleira) to standardize product display on the comparison page. In this template, you can use any of the [available controls for shelves](https://developers.vtex.com/docs/guides/shelf-template-controls).
2. [Create a page template](/en/faq/como-criar-um-template-de-pagina) using the `<vtex.cmc:ProductComparison/>` control, which displays products side by side on the comparison page. Example usage of the control:  

```
<vtex.cmc:ProductComparison ShelfLayoutId="12343216-4c8e-4cd5-bcd7-e3b062681f2a"/>
```

where `ShelfLayoutId` is the `Id` of the shelf template created in the previous step.

3. Create a folder for the comparison page:
  - In the Admin, go to **Storefront > Layout**
  - In the column next to it, click `CMS > Sites and channels > {website name} > / > New folder`. Replace `{website name}` based on your scenario.
  - In the `Folder Name` field, enter a name for the folder and click `OK`.
  - Click `Save Folder`.

       ![new-folder-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/products-and-skus/setting-up-product-comparison_1.gif)

4. Create a default layout:
  - Open the folder created in the previous step.
  - Click **New layout**.
  - In the `Template` field, link the page template created in step 2 to the folder. Learn more in [Associating a template with a layout](/en/docs/tutorials/associating-a-template-with-a-layout).
  - Click `Save Layout` and then click `OK`.

       ![new-layout-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/products-and-skus/setting-up-product-comparison_2.gif)

### Product listing page

To display products with the comparison option (checkbox), add the `$product.Compare` control to the shelf templates where you want to include this feature. This control will render a checkbox to select products for comparison. Additionally, the control will provide a **Compare** link in the header and footer of the product listing. You can click this link to be redirected to the comparison page.

> ⚠️ You can only compare 4 products at a time.
