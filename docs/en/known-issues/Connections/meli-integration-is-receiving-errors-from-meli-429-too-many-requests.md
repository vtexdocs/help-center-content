---
title: 'MELI integration is receiving errors from MELI "429 too many requests'
id: 1e4g9nzZFyanywmLbSHq4D
status: PUBLISHED
createdAt: 2023-08-03T10:47:41.602Z
updatedAt: 2023-08-14T14:08:12.646Z
publishedAt: 2023-08-14T14:08:12.646Z
firstPublishedAt: 2023-08-03T10:47:43.214Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-integration-is-receiving-errors-from-meli-429-too-many-requests
locale: en
kiStatus: Fixed
internalReference: 873998
---

## Summary



We currently have an issue with some accounts in MELi which are getting an error while trying to update products, stock or price in MELI.

This is not affecting all accounts and not all SKUs, but only part of them, and this is caused due to sending more requests then MELI is currently prepared to receive.


##

## Simulation



Inside integration stock/price/product menu some account may see an error:

**Sorry, we couldn't process this request. Please, wait a few minutes and reprocess it**

We are working on how to better handle the requests to avoid getting this error from MELI.


##

## Workaround


The only workaround available for now is to reprocess the request directly in bridge menu.





