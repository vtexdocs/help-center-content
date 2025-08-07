---
title: '​​Exporting and importing via a price spreadsheet'
id: 5lV5s54lQ69zPXxngbpI5D
status: PUBLISHED
createdAt: 2023-01-16T16:06:30.799Z
updatedAt: 2024-08-23T16:20:51.694Z
publishedAt: 2024-08-23T16:20:51.694Z
firstPublishedAt: 2023-01-17T12:31:08.844Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: exporting-and-importing-via-a-price-spreadsheet
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

Adding prices via spreadsheet is recommended for catalogs with many products that require adding or changing prices in bulk.

The process is divided in:

1. [Exporting prices](#exporting-prices)
2. [Importing prices](#importing-prices)

## Exporting prices 

The first step in adding or changing prices for the offered products is to export the prices. The export extracts the prices from the VTEX platform, and you can run up to three exports at the same time.

You can view the price export history of the last 24 hours. Learn more in the [Tracking export](#tracking-export) section.

Follow the steps below to export the price spreadsheet:

1. In the VTEX Admin, go to *Catalog > Prices > Price List*.
2. At the top of the screen, click the export icon <i class="fas fa-download"></i>.
> A sidebar will be displayed.
3. Under **Select the spreadsheet you want to export**, you must choose from the following options:
   - **Base prices table (default):** The [base price](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) is the SKU reference price for all price tables.
   - **Fixed price table:** The [fixed price](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) overrides the base price even if the price rule is configured.
   - **Calculated price table:** The final price that will be displayed in the store, which does not include promotions.
4. Click the `Export table` button.
> Then, the selected price table will open.
5. In the file that opened, fill out the rows with the SKU price data. The exported Price Table contains only products with registered prices, products without a price do not appear in the spreadsheet. To better understand the meaning of each field, read our article on [filling out an import spreadsheet's base price fields](https://help.vtex.com/en/tutorial/preencher-campos-da-planilha-de-importacao-de-precos-base--4Jox8TeQ5feqAn78TZ0DNA) or [filling out an import spreadsheet's fixed price fields](https://help.vtex.com/en/tutorial/preencher-campos-da-planilha-de-importacao-de-precos-fixo--50RFoH3ruV97FJgeBUCURh).

<div class="alert alert-warning">
  The export of price tables in <strong>XLSX</strong> format is limited to 1,048,576 rows due to an Excel limitation. Exports exceeding this limit will result in an error.
</div>

After the export is complete, you will receive the spreadsheet in your VTEX store email. You can also download the export by clicking the`Download export` button.

### Tracking export

In **Tracking your exports**, you can follow in real-time the status of each exported spreadsheet with its percentage of completion, which can vary between 0% and 100%, besides viewing the price export history for the last 24 hours.

## Importing prices

The second step in adding or changing prices in bulk is to do a price import. The import replaces the old prices with the new ones for your offered products.

This step is mandatory for adding or changing prices.

After filling out the data in the spreadsheet, follow the steps below to import it:

1. In the VTEX Admin, go to *Catalog > Prices > Price List*.
2. At the top of the screen, click the import icon <i class="fas fa-upload"></i>.
> A sidebar will be displayed.
3. Select a **Price List** option.
4. The **Overwrite all existing prices** option replaces your store's fixed prices with those in your spreadsheet. If any of your store prices are not in the spreadsheet, they will be deleted. Uncheck this option if you want to keep existing fixed prices.
5. Click the `Import table` button.
6. Select the completed spreadsheet you want to import.
7. Click `Open`.

Then, your spreadsheet will have been imported, and your prices will be saved.

