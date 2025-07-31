---
title: "I can't import the price table"
id: bglrzs7gLKWf97q8qRdRm
status: PUBLISHED
createdAt: 2024-06-10T15:11:02.787Z
updatedAt: 2024-11-08T18:50:45.313Z
publishedAt: 2024-11-08T18:50:45.313Z
firstPublishedAt: 2024-06-10T17:28:51.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-import-the-price-table
locale: en
legacySlug: i-cant-import-the-price-table
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Pricing, Spreadsheet import
---

[Price tables, or price spreadsheets](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8), store SKU information which, when applied in specific contexts, such as trade policies, promotions, or customer clusters, allows you to calculate the product prices in a VTEX store. For more information, see [Base price](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) and [Fixed price](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy). 

<div class ="alert alert-warning">
  You cannot import a <b>calculated price</b> table into the VTEX Admin. The <b>Export</b> function is available for this table only for the merchant to check the final price for each product.
</div>

After [importing a price table](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D), error messages may display for certain SKUs, as shown in the examples below:

- `"The resource you are looking for cannot be found: Price not found"`
- `"Error occurred while converting spreadsheet: Object reference not set to an instance of an object."`
- `"Import Fixed Table Error: Invalid headers - SKU ID"`

If you encounter error messages, incorrect price values, or other difficulties importing a table, check out the possible solutions below.

## Solution

To address any issues when importing a price table, consider the following solutions:

### Templates

Tables created by customers or customized after being exported from the VTEX Admin can generate integration errors when imported.

To avoid this scenario, use only the available templates (base price or fixed price) and do not apply any customizations. Learn more in [Exporting prices](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D#exporting-prices).

### Data input

Errors may occur while completing the table, such as entering the product ID where the SKU ID should be or [adjusting the price of a SKU](/en/tutorial/sku-price-change--tutorials_95#price-change-rule) by more than 70% upward or more than 30% downward relative to its current price. This can cause inconsistencies during import.

Make sure that all fields in your table are properly populated based on the guidelines in the following articles:

- [Planilha de preço-base](/en/tutorial/table-of-base-prices--4Jox8TeQ5feqAn78TZ0DNA)
- [Planilha de preço fixo](/en/tutorial/filling-out-an-import-spreadsheets-fixed-price-fields--50RFoH3ruV97FJgeBUCURh)

<div class ="alert alert-warning">
  Before importing the table into the VTEX Admin, make sure that it does not contain columns with error information (<b>Error Code</b> and <b>Error Message</b>) or any filters applied to the cells. Importing a table under these conditions may cause errors in the data import process.
</div>

Example of a table with filters applied and __Error Code__ and __Error Message__ fields:

![Price spreadsheet](https://images.ctfassets.net/alneenqid6w5/1r7FGH4sdfT0uzCUX4T07y/a88f798c1962786dadfd35573453242e/Price_spreadsheet.PNG)

#### File size

Price tables should not exceed a maximum size limit of 1 megabyte (MB). If your current file is larger, divide the information into files smaller than 1 megabyte (MB).

<div class ="alert alert-warning">
  All data for a specific SKU must be in a single table. You cannot enter information for the same SKU in different tables.
</div>