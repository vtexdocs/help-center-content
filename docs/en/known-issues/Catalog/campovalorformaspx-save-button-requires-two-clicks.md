---
title: 'CampoValorForm.aspx Save button requires two clicks'
id: G0YtmOpdB4nNdw8w87ZNz
status: PUBLISHED
createdAt: 2022-02-16T13:28:52.922Z
updatedAt: 2024-02-16T20:26:25.672Z
publishedAt: 2024-02-16T20:26:25.672Z
firstPublishedAt: 2022-02-16T13:28:53.505Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: campovalorformaspx-save-button-requires-two-clicks
locale: en
kiStatus: No Fix
internalReference: 525616
---

## Summary



Currently, when accessing the UI of the catalog page for saving specification values (https://myaccount.myvtex.com/admin/Site/CampoValor.aspx), the save button is only working when being clicked on twice, which might, for slower internet connections, mislead the user that the data is not being saved.

 ![](https://vtexhelp.zendesk.com/attachments/token/4GJaTvjIaioudlMMG1RKKIS0J/?name=inline-576344148.png)

​



## Simulation


1) Go to Categories -> SKU Specifications -> Values -> Save new Value
2) Try to click the save button after inputting a value once, nothing will happen
3) Click it a second time and the data will be saved





## Workaround


Either be aware of this behavior and click exactly twice (and no more) and/or use our catalog APIs for specification values: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-specification

