---
title: "Exporting SKU images for accounts starting with 'h','t' or 'p' get this character cut in the "Image URL' rows."
id: 1IZdnE8IGwkBlbcFhjLrzn
status: PUBLISHED
createdAt: 2023-10-13T15:20:49.703Z
updatedAt: 2023-10-13T15:20:50.483Z
publishedAt: 2023-10-13T15:20:50.483Z
firstPublishedAt: 2023-10-13T15:20:50.483Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: exporting-sku-images-for-accounts-starting-with-ht-or-p-get-this-character-cut-in-the-image-url-rows
locale: en
kiStatus: Backlog
internalReference: 919199
---

## Summary


The SKU image report, /admin/Site/ProdutoImagemExportacao.aspx, for accountnames that start with "h", "t" or "p", such as "testaccount", wil lshow a missing character in the export sheeto for the imageURL row.


##

## Simulation


1 - for an account that starts with the mentioned initial characters, go to /admin/Site/ProdutoImagemExportacao.aspx and export a sheet for any sku that has at least 1 image.
2 - open the exported sheet and check the column "UrlImagem": it'll be without the initial character

For instance, if the account is named "testaccount":

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/exporting-sku-images-for-accounts-starting-with-ht-or-p-get-this-character-cut-in-the-image-url-rows_1.png)


##

## Workaround


Create a subaccount starting with another character (for instance, "mytestaccount") and access the export UI using this subaccount. The export then  will show the whole URL string without any incorrect trims.





