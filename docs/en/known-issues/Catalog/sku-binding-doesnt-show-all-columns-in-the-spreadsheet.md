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

 ![](https://vtexhelp.zendesk.com/attachments/token/OCsHYfXDqaz6W76qYhp7C1DDW/?name=image.png)

**NEW COLUMNS**
StockKeepingUnitId
SellerId
SellerStockKeepingUnitId
IsActive

 ![](https://vtexhelp.zendesk.com/attachments/token/gKb7BUfDenjXsGTQ0sE9F1DXr/?name=image.png)

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

 ![](https://vtexhelp.zendesk.com/attachments/token/HjApMXd3SVgQ7Pb8XEN3Mgv20/?name=image.png)

**FILE NAME AFTER | NEW **

 ![](https://vtexhelp.zendesk.com/attachments/token/R2WZAjWdduzMXo7mFAT8LFmN6/?name=image.png)


##

## Workaround


Use old UI





