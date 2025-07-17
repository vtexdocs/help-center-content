---
title: 'Exporting and importing product and SKU specifications'
id: tutorials_274
status: PUBLISHED
createdAt: 2017-04-27T22:10:43.787Z
updatedAt: 2025-06-12T17:12:25.174Z
publishedAt: 2025-06-12T17:12:25.174Z
firstPublishedAt: 2017-04-27T23:03:12.428Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: exporting-and-importing-product-and-sku-specifications
locale: en
legacySlug: importing-and-exporting-product-and-sku-specifications
subcategoryId: 2u48reCb68K48EAcm86ccM
---

After defining the category tree and registering [product specifications and SKU specifications](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) in your store, you need to fill in the values for the specifications you have created. In VTEX Admin, this process can be done using a spreadsheet or manually during [product registration](/en/tutorial/adding-specifications-or-product-fields--tutorials_106#product-registration) and [SKU registration](/en/tutorial/adding-sku-specifications-or-fields--tutorials_119#sku-registration).

In this article, we explain how to export and import spreadsheets with product and SKU specifications in VTEX Admin.

<div class = "alert alert-info">
  <p>To export and import specifications using the <strong>Catalog API</strong>, follow the developer guide <a href="https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification">How to create a specification</a>.</p>
</div>

## Exporting product or SKU specifications

1. In the VTEX Admin, go to **Catalog**, or type **Catalog** in the search bar at the top of the page.
2. Click **Import and export**.
3. Click the **Product Specifications** or the **SKU Specifications** tab, according to your need.
    ![skuexport1.en](https://images.ctfassets.net/alneenqid6w5/2bM5OviaFXKxXxM8ggXEr3/8f45b5a59425898d0a66697480526899/skuexport1.en.png)
4. Right-click on the desired category.
    You cannot export specifications from all categories at once. You must choose only one category whose specifications you want to export. 
5. Click on `Export...`.
    A green rectangle will appear on the screen.
6. Click `Click here to download the file` to export the spreadsheet.

![skuexport2.en](https://images.ctfassets.net/alneenqid6w5/6oBhxWWjktsofR8XGRzl3E/87e1859f2f3ece16f3c0e1c527a392ee/skuexport2.en.png)

<div class = "alert alert-info">
  <p>The exported spreadsheet will be available in your email for one week. If you exceed this period, follow the export step-by-step again to generate a new spreadsheet.</p>
</div>

## Importing product or SKU specifications

To import specifications, it is best to use a worksheet exported by the system, since this will give the requirements for importing, as well as containing reference data that can help complete it.

In the import worksheet, the only column you have to complete is “ValorEspecificacao”. The other columns should remain unchanged because their values will be used for data validation.

The structure of the spreadsheet presents one row for each product field or SKU, i.e., the same product or SKU will be presented several times according to the existing fields in its category.

<div class="alert alert-warning">
  <p>In the exported spreadsheet, the column for "ValorEspecificacao" is "NomeCampoValor (Not Changeable)". When filling the field, the spelling of the characteristics must be exact. Uppercase and lowercase letters make a difference in this case.</p>
  </div>

Follow the steps below to import the spreadsheet:

1. In the VTEX Admin, still under **Catalog** > **Import and export** > **Product Specifications** or **SKU Specifications**, scroll down the page to **Upload File for Import**.
2. Click **Select** to select the file with the completed spreadsheet on your computer.
3. Click `Import`.

![skuexport3.en](https://images.ctfassets.net/alneenqid6w5/3xrInPyr70kdXCGgVfj4q1/8b4ff4d98df714f62d97d765edee8600/skuexport3.en.png)

## Learn more
- [Product and SKU Specifications](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
- [Adding product specifications or fields](/en/tutorial/adding-specifications-or-product-fields--tutorials_106)
- [Adding SKU specifications or fields](/en/tutorial/adding-sku-specifications-or-fields--tutorials_119)
