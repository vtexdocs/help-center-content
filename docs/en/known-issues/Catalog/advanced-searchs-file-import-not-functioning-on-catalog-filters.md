---
title: "Advanced search's file import not functioning on catalog filters"
id: KB8nLgJorL1aKtUuf8Dga
status: PUBLISHED
createdAt: 2024-08-23T17:56:17.370Z
updatedAt: 2024-08-23T17:56:18.148Z
publishedAt: 2024-08-23T17:56:18.148Z
firstPublishedAt: 2024-08-23T17:56:18.148Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: advanced-searchs-file-import-not-functioning-on-catalog-filters
locale: en
kiStatus: Backlog
internalReference: 1086454
---

## Summary


Currently, the legacy catalog search has a functionality, in the "Advanced search" tab that allows you to import a file to create a search filter.

However, this import currently is not properly filtering data and ends up simply not adding any parameters to be filtered for in the catalog.


##

## Simulation


1 - In the catalog module, go to any UI that has a filtering feature available, such as /admin/Site/Relatorio_Skus.aspx

2 - In the brand section, click the "Advanced Search Button"

 ![](https://vtexhelp.zendesk.com/attachments/token/evO2TGKzaTk0f0HBGqVrqemLF/?name=image.png)

3 - A prompt will be displayed, select the "file import" tab

 ![](https://vtexhelp.zendesk.com/attachments/token/5zCBQ3MpC27ZGN6pnfKBycFwu/?name=image.png)

4 - attempt importing a file with a brand list, the said list will not be added to the filters.


##

## Workaround


Perform other filters when searching for products in the legacy catalog module.





