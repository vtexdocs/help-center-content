---
title: 'Importing and exporting SKU specifications using a spreadsheet (Beta)'
id: 5EAioeC33wHpIxKHaGQzbV
status: PUBLISHED
createdAt: 2025-09-26T15:29:35.015Z
updatedAt: 2025-10-13T22:58:33.129Z
publishedAt: 2025-10-13T22:58:33.129Z
firstPublishedAt: 2025-09-26T16:15:50.391Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-sku-specifications-using-a-spreadsheet-beta
legacySlug: import-and-export-sku-specifications-via-spreadsheet-beta
locale: en
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact our [Support](https://supporticket.vtex.com/support).

In VTEX Admin, you can manage SKU specification import and export using a spreadsheet, as described in the sections below:

- [Importing SKU specifications using a spreadsheet](#importing-sku-specifications-using-a-spreadsheet)
- [Exporting SKU specifications using a spreadsheet](#exporting-sku-specifications-using-a-spreadsheet)
- [SKU specification spreadsheet fields](#sku-specification-spreadsheet-fields)

## Importing SKU specifications using a spreadsheet

To import SKU specifications using a spreadsheet, follow these steps:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](/en/docs/tutorials/products-and-skus) in the search bar at the top of the page.
2. At the top of the page, click `Import`.
3. Click `SKU specifications`.
4. Add the spreadsheet with an `.xls` or `.xlsx` extension. You can drag and drop the file onto the designated area, or click the window to select the file locally.

  > ⚠️ To get an import template, [export the SKU specifications](#exporting-sku-specifications-using-a-spreadsheet).

5. Once the file is uploaded, click `Import`.

  > ❗ The import time will depend on the size of the data being processed. Leaving the page won't interrupt the operation.

While the operation is running, a message will display indicating that the file is being processed. After the import is complete, the page will display "SKU specifications imported successfully" and you'll receive a confirmation email.

## Exporting SKU specifications using a spreadsheet

To export an `.xlsx` file with the SKU specification information, follow these steps:

> ℹ️ The exported information corresponds to the fields described in the SKU specification spreadsheet fields section.

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](/en/docs/tutorials/products-and-skus) in the search bar at the top of the page.
2. (Optional) If you want to export the SKU specifications of certain items, apply a [search](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By#searching-for-a-product) or a [filter](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By#filtering-products) as desired. This step isn't required when exporting all the SKU specifications in the catalog.
3. At the top of the page, click `Export`.
4. Click `SKU specifications`.

While the operation is running, a message will display indicating that the file is being processed. Leaving the page won't interrupt the operation. You can [track the export progress in the window](/en/tutorial/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta--5udKxWP1ZeBD7QB7Fy2BNl#tracking-export-process) that opens on the page. 

Once the export is complete, you'll receive an email with a link to download the file. The download link is valid for 24 hours. After that, the link expires. You can also download the file from the window that opens on the page.

## SKU specification spreadsheet fields

The following table describes and includes an example of each field in the SKU specification import spreadsheet. Required fields are marked with an asterisk (*).

| Field | Description | Example |
| :--- | :--- | :--- |
| SKU ID* | Unique numeric code that identifies the SKU. | 310119261 |
| SKU Name | SKU name, which identifies the product variation. | M |
| SKU Reference Code | Unique SKU reference code, created to facilitate catalog management. Once this code is created, it can't be edited through the spreadsheet. This field is required unless the EAN/UPC field has a value. | shirt-color |
| Brand ID | Numeric code that identifies the SKU [brand](/en/docs/tutorials/what-is-a-brand). This information can be found in VTEX Admin under **Catalog > Brands** or by using the [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list) endpoint. | 2000003 |
| Brand | [Brand](/en/docs/tutorials/what-is-a-brand) name of the SKU. Once this field has a value, it can't be edited. | AOC |
| Department ID | Numeric code that identifies the highest-level product category. | 1000014 |
| Department | Name of the highest-level product category. | Clothing |
| Category ID | Unique number identifier of the SKU's lowest-level category. This information can be found in VTEX Admin under **Catalog > Categories** or by using the [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-) endpoint. | 1000014 |
| Category | Name related to the SKU's lowest-level category. | Tops |
| Field ID | Numeric code that identifies the SKU specification field for that SKU. | 892 |
| Field Name | SKU specification field name. | Color |
| Field Type Name | [SKU specification field type](/en/tutorial/adding-sku-specifications-or-fields--tutorials_119#sku-field-types):<ul><li>Combo</li><li>Radio</li></ul>If you're using the beta version of categories, check the field types supported for [variations](/en/tutorial/creating-or-editing-categories-attributes-and-variations-beta--1lzs3fHjM9N7CKFOxCCYQi#adding-variations). | Radio |
| Field Value ID | Numeric code that identifies the field value. | 689 |
| Field Value Name | Field value name. | Color |
| Specification Code | Numeric code that identifies the relationship between the field and the SKU. | 397 |
| Specification Value  | Value assigned to the SKU specification field. This is the only information that can be edited through the spreadsheet. | Blue |

## Learn more

* [Importing and exporting products and SKUs using a spreadsheet (Beta)](/en/docs/tutorials/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta)
* [Importing and exporting product specifications using a spreadsheet (Beta)](/en/docs/tutorials/importing-and-exporting-product-specifications-using-a-spreadsheet-beta)
* [Importing and exporting product and SKU images using a spreadsheet (Beta)](/en/docs/tutorials/importing-and-exporting-product-and-sku-images-using-a-spreadsheet-beta)
