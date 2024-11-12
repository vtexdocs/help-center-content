---
title: "I can't import the price table"
id: bglrzs7gLKWf97q8qRdRm
status: PUBLISHED
createdAt: 2024-06-10T15:11:02.787Z
updatedAt: 2024-06-10T19:44:11.614Z
publishedAt: 2024-06-10T19:44:11.614Z
firstPublishedAt: 2024-06-10T17:28:51.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-import-the-price-table
locale: en
legacySlug: i-cant-import-the-price-table
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

__Tags/Keywords__: *price table, spreadsheet import, cells.*

[Price tables, or price spreadsheets](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8), store SKU information which, when applied in specific contexts, such as trade policies, promotions, or customer clusters, allows you to calculate the product prices in a VTEX store. For more information, see [Base price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) and [Fixed price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy). 

>⚠️ You cannot import a **calculated price** table into the VTEX Admin. The **Export** function is available for this table only for the merchant to check the final price for each product.

After [importing a price table](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D), error messages may display for certain SKUs, as shown in the examples below:

- `"The resource you are looking for cannot be found: Price not found"`
- `"Error occurred while converting spreadsheet: Object reference not set to an instance of an object."`
- `"Import Fixed Table Error: Invalid headers - SKU ID"`

If you encounter error messages, incorrect price values, or other difficulties importing a table, check out the possible solutions below.

## Solution

To address any issues when importing a price table, consider the following solutions:

### Templates

Tables created by customers or customized after being exported from the VTEX Admin can generate integration errors when imported.

To avoid this scenario, use only the available templates (base price or fixed price) and do not apply any customizations. Learn more in [Exporting prices](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D#exporting-prices).

### Data input

Errors may occur while completing the table, such as entering the product ID where the SKU ID should be or [adjusting the price of a SKU](https://help.vtex.com/en/tutorial/sku-price-change--tutorials_95#price-change-rule) by more than 70% upward or more than 30% downward relative to its current price. This can cause inconsistencies during import.

Make sure that all fields in your table are properly populated based on the guidelines in the following articles:

- [Planilha de preço-base](https://help.vtex.com/en/tutorial/table-of-base-prices--4Jox8TeQ5feqAn78TZ0DNA)
- [Planilha de preço fixo](https://help.vtex.com/en/tutorial/filling-out-an-import-spreadsheets-fixed-price-fields--50RFoH3ruV97FJgeBUCURh)

>⚠️ Before importing the table into the VTEX Admin, make sure that it does not contain columns with error information (**Error Code** and **Error Message**) or any filters applied to the cells. Importing a table under these conditions may cause errors in the data import process.

Example of a table with filters applied and __Error Code__ and __Error Message__ fields:

![Price spreadsheet](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.PNG)

#### File size

Price tables should not exceed a maximum size limit of 1 megabyte (MB). If your current file is larger, divide the information into files smaller than 1 megabyte (MB).

>⚠️ All data for a specific SKU must be in a single table. You cannot enter information for the same SKU in different tables.
