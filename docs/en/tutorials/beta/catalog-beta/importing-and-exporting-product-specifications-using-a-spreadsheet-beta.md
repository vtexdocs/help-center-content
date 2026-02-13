---
title: 'Importing and exporting product specifications using a spreadsheet (Beta)'
id: jQcmbocCb7kjHOr1JSWIL
status: PUBLISHED
createdAt: 2025-09-26T15:11:47.384Z
updatedAt: 2025-10-13T22:44:30.267Z
publishedAt: 2025-10-13T22:44:30.267Z
firstPublishedAt: 2025-09-26T16:15:47.785Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-product-specifications-using-a-spreadsheet-beta
legacySlug: import-and-export-product-specifications-via-spreadsheet-beta
locale: en
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact our [Support](https://supporticket.vtex.com/support).

In VTEX Admin, you can manage product specification import and export using a spreadsheet, as described in the sections below:

- [Importing product specifications using a spreadsheet](#importing-product-specifications-using-a-spreadsheet)
- [Exporting product specifications using a spreadsheet](#exporting-product-specifications-using-a-spreadsheet)
- [Product specification spreadsheet fields](#product-specification-spreadsheet-fields)

## Importing product specifications using a spreadsheet

To import product specifications using a spreadsheet, follow these steps:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](/en/docs/tutorials/products-and-skus) in the search barat the top of the page.
2. At the top of the page, click `Import`.
3. Click `Product specifications`.
4. Add the spreadsheet with an `.xls` or `.xlsx` extension. You can drag and drop the file onto the designated area, or click the window to select the file locally.

  > ⚠️ To get an import template, [export the product specifications](#exporting-product-specifications-using-a-spreadsheet).

5. Once the file is uploaded, click `Import`.

  > ❗ The import time will depend on the size of the data being processed. Leaving the page won't interrupt the operation.

While the operation is running, a message will display indicating that the file is being processed. After the import is complete, the page will display "Product specifications imported successfully" and you'll receive a confirmation email.

## Exporting product specifications using a spreadsheet

To export an `.xlsx` file with the product specification information, follow these steps:

> ℹ️ The exported information corresponds to the fields described in the [Product specification spreadsheet fields](#product-specification-spreadsheet-fields) section.

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](/en/docs/tutorials/products-and-skus) in the search bar at the top of the page.
2. (Optional) If you want to export the product specifications of certain products, apply a [search](/en/docs/tutorials/products-and-skus#searching-for-a-product) or a [filter](/en/docs/tutorials/products-and-skus#filtering-products) as desired. This step isn't required to export all product specifications from your catalog.
3. At the top of the page, click `Export`.
4. Click `Product specifications`.

While the export is running, a message will display indicating that the file is being processed. Leaving the page won't interrupt the operation. You can [track the export progress in the window](/en/docs/tutorials/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta#tracking-export-process) displayed on the page.

Once the export is complete, you'll receive an email with a link to download the file. The download link is valid for 24 hours. After that, the link expires. You can also download the file from the window that opens on the page.

## Product specification spreadsheet fields

The following table describes and includes an example for each field of the product specification import spreadsheet. Required fields are marked with an asterisk (*).

| Field | Description | Example |
| :--- | :--- | :--- |
| Product ID* | Unique numeric code identifying the product. | 310117603 |
| Product Name | Product name shown to customers during the browsing experience. | Cotton t-shirt |
| Product Reference Code | Unique product reference code, used internally by the store. To complete this field, use a combination of letters and/or numbers. | shirtColor |
| Brand ID | Numeric code that identifies the product [brand](/en/docs/tutorials/what-is-a-brand). This information can be found in VTEX Admin under **Catalog > Brands** or by using the [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list) endpoint. | 2000003 |
| Brand | [Brand](/en/docs/tutorials/what-is-a-brand) name of the product. Once this field has a value, it can't be edited. | AOC |
| Department ID | Numeric code that identifies the highest-level product category. | 1000014 |
| Department | Name of the product's highest-level category. | Clothes |
| Category ID | Unique number identifier for the product's lowest-level category. This information can be found in VTEX Admin under **Catalog > Categories** or by using the [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-) endpoint. | 1000014 |
| Category | Name of the product's lowest-level category. | Tops |
| Field ID | Numeric code that identifies the product specification field for the product. | 493 |
| Field Name | Product specification field name. | Material |
| Field Type Name | [Product specification field type](/en/docs/tutorials/adding-specifications-or-product-fields#product-field-types):<ul><li>Text</li><li>Large Text</li><li>Number</li><li>Combo</li><li>Radio</li><li>CheckBox</li><li>Indexed Text</li><li>Large Indexed Text</li></ul>If you're using the beta version of categories, check the field types supported for [attributes](/en/docs/tutorials/creating-or-editing-categories-attributes-and-variations-beta#adding-attributes). | Text |
| Field Value ID | Numeric code that identifies the field value. | 290 |
| Field Value Name | Field value name. | Synthetic |
| Specification Code | Numeric code that identifies the relationship between the field and the product. | 418  |
| Specification Value | Value assigned to the product specification field. This is the only information that can be edited through the spreadsheet.  | Polyester |

## Learn more

* [Importing and exporting products and SKUs using a spreadsheet (Beta)](/en/docs/tutorials/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta)
* [Importing and exporting SKU specifications using a spreadsheet (Beta)](/en/docs/tutorials/importing-and-exporting-sku-specifications-using-a-spreadsheet-beta)
* [Importing and exporting product and SKU images using a spreadsheet (Beta)](/en/docs/tutorials/importing-and-exporting-product-and-sku-images-using-a-spreadsheet-beta)

