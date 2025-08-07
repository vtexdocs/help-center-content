---
title: "Exporting images with incomplete URL"
id: 2XIs1s3gB2WSGA6CmGyGs0
status: PUBLISHED
createdAt: 2018-09-15T19:47:20.331Z
updatedAt: 2022-12-22T20:45:21.648Z
publishedAt: 2022-12-22T20:45:21.648Z
firstPublishedAt: 2018-09-15T19:55:26.680Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: exporting-images-with-incomplete-url
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When exporting the spreadsheet with the images registered in the SKUs, if the store account name starts with a 'p' the exported URL is incomplete. For example:

__Store name:__ papelariavtex
__Image URL:__ papelariavtex.vteximg.com.br/arquivos/ids/157696/folha-a4.jpg
__URL exported in the spreadsheet:__ apelariavtex.vteximg.com.br/arquivos/ids/157696/folha-a4.jpg

## Simulation

In case your store starts with the letter 'p':

1. Navigate to Catalog > Import and Export > Export images;
2. Click Export to Excel.

## Workaround

The Workaround is to use a formula in excel to insert the 'p' into the URL. Alternatively, use any other method to complete the URL.

