---
title: 'Masterdata Export Download Link Unavailable'
id: 2oi0ABhQQxfPsKETeNUyvE
status: PUBLISHED
createdAt: 2022-07-08T13:50:43.220Z
updatedAt: 2023-01-19T14:19:49.870Z
publishedAt: 2023-01-19T14:19:49.870Z
firstPublishedAt: 2022-07-08T13:50:43.638Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: masterdata-export-download-link-unavailable
kiStatus: Backlog
internalReference: 613864
---

## Summary


Currently, for data entities with several fields, when there's an attempt to export a sheet and download it, both via email or directly via the UI, the download link does not save the file onto your browser.



##

## Simulation


1 - for a data entity in which you have several fields, try to export all of its fields at the same time or several registers

2 - the download link will not generate a file onto your browser

 ![](https://vtexhelp.zendesk.com/attachments/token/nQdUqbk7BiOK5RcigZhNZR9Rr/?name=image.png)


##

## Workaround


fetch data via API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search and/or download data into several, smaller spreadsheets

