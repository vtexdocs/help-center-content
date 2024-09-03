---
title: 'Error while attaching files in MasterData'
id: 2NkotRVyvWA3OHdxizCYgY
status: PUBLISHED
createdAt: 2019-02-15T18:42:41.461Z
updatedAt: 2022-12-22T20:48:50.909Z
publishedAt: 2022-12-22T20:48:50.909Z
firstPublishedAt: 2019-02-15T18:44:53.354Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: error-while-attaching-files-in-masterdata
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The user receives the error message "Ocorreu um erro e o arquivo não foi salvo" ("An error has happened and the file was not saved") when trying to manually attach a file through the CRM whose size exceeds 5MB.

## Simulation

1. Create a field of type `file`;
2. Enter the CRM;
3. Manually attach a file.

## Workaround

We recommend using another service for storing files larger than 5MB.

Note that MasterData V2 does not support the field with type attachment.

