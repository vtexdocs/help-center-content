---
title: "[Sku binding] Doesn't show all columns in the spreadsheet"
id: 1swvVyhhLKk5U9rnCumdCZ
status: PUBLISHED
createdAt: 2025-01-14T18:27:35.886Z
updatedAt: 2025-06-26T19:29:30.775Z
publishedAt: 2025-06-26T19:29:30.775Z
firstPublishedAt: 2025-01-14T18:27:36.509Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-binding-doesnt-show-all-columns-in-the-spreadsheet
locale: en
kiStatus: Backlog
internalReference: 1163100
---

## Summary


There are two scenarios here

1. In the old sku binding UI the export spreadsheet returned 7 columns, today the new UI when we export the spreadsheet returns 4 columns.
2. The file name was changed to (accountname + username) and previously in the old UI it was exported with the date "SkuSeller_2025-01-14_15-1-16"


##

## Simulation




1. In the old sku binding UI the export spreadsheet returned 7 columns, today the new UI when we export the spreadsheet returns 4 columns.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/sku-binding-doesnt-show-all-columns-in-the-spreadsheet_1.png)

**NEW COLUMNS**
StockKeepingUnitId
SellerId
SellerStockKeepingUnitId
IsActive

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/sku-binding-doesnt-show-all-columns-in-the-spreadsheet_2.png)

**OLD COLUMNS**
SkuSellerId
SellerId
StockKeepingUnitId
SellerStockKeepingUnitId
IsActive
UpdateDate
RequestedUpdateDate

**2.** The file name was changed to (accountname + username) and previously in the old UI it was exported with the date "SkuSeller_2025-01-14_15-1-16"

**FILE NAME BEFORE | OLD**

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/sku-binding-doesnt-show-all-columns-in-the-spreadsheet_3.png)

**FILE NAME AFTER | NEW **

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/sku-binding-doesnt-show-all-columns-in-the-spreadsheet_4.png)


##

## Workaround


Use old UI





