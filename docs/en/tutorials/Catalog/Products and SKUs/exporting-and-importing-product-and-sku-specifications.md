---
title: 'Exporting and importing product and SKU specifications'
id: tutorials_274
status: PUBLISHED
createdAt: 2017-04-27T22:10:43.787Z
updatedAt: 2024-02-21T20:34:56.013Z
publishedAt: 2024-02-21T20:34:56.013Z
firstPublishedAt: 2017-04-27T23:03:12.428Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: exporting-and-importing-product-and-sku-specifications
locale: en
legacySlug: importing-and-exporting-product-and-sku-specifications
subcategoryId: pwxWmUu7T222QyuGogs68
---

After defining the category tree and registering [product specifications and SKU specifications](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) in your store, you need to fill in the values for the specifications you have created. In VTEX Admin, this process can be done using a spreadsheet or manually during [product registration](https://help.vtex.com/en/tutorial/adding-specifications-or-product-fields--tutorials_106#product-registration) and [SKU registration](https://help.vtex.com/en/tutorial/adding-sku-specifications-or-fields--tutorials_119#sku-registration).

In this article, we explain how to export and import spreadsheets with product and SKU specifications in VTEX Admin.

>ℹ️ To export and import specifications using the **Catalog API**, follow the developer guide [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification).

## Exporting product or SKU specifications

1. In the VTEX Admin, go to **Catalog**, or type **Catalog** in the search bar at the top of the page.
2. Click **Import and export**.
3. Click the **Product Specifications** or the **SKU Specifications** tab, according to your need.
    ![skuexport1.en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products and SKUs/exporting-and-importing-product-and-sku-specifications_1.png)
4. Right-click on the desired category.
    You cannot export specifications from all categories at once. You must choose only one category whose specifications you want to export. 
5. Click on `Export...`.
    A green rectangle will appear on the screen.
6. Click `Click here to download the file` to export the spreadsheet.

![skuexport2.en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products and SKUs/exporting-and-importing-product-and-sku-specifications_2.png)

>ℹ️ The exported spreadsheet will be available in your email for one week. If you exceed this period, follow the export step-by-step again to generate a new spreadsheet.

## Importing product or SKU specifications

To import specifications, it is best to use a worksheet exported by the system, since this will give the requirements for importing, as well as containing reference data that can help complete it.

In the import worksheet, the only column you have to complete is “ValorEspecificacao”. The other columns should remain unchanged because their values will be used for data validation.

The structure of the spreadsheet presents one row for each product field or SKU, i.e., the same product or SKU will be presented several times according to the existing fields in its category.

>⚠️ In the exported spreadsheet, the column for "ValorEspecificacao" is "NomeCampoValor (Not Changeable)". When filling the field, the spelling of the characteristics must be exact. Uppercase and lowercase letters make a difference in this case.

Follow the steps below to import the spreadsheet:

1. In the VTEX Admin, still under **Catalog** > **Import and export** > **Product Specifications** or **SKU Specifications**, scroll down the page to **Upload File for Import**.
2. Click **Select** to select the file with the completed spreadsheet on your computer.
3. Click `Import`.

![skuexport3.en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products and SKUs/exporting-and-importing-product-and-sku-specifications_3.png)

## Learn more
- [Product and SKU Specifications](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
- [Adding product specifications or fields](https://help.vtex.com/en/tutorial/adding-specifications-or-product-fields--tutorials_106)
- [Adding SKU specifications or fields](https://help.vtex.com/en/tutorial/adding-sku-specifications-or-fields--tutorials_119)
