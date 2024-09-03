---
title: ""Get all SKU suggestions' API doesn't keep same sku order when changing limits"
id: 4wQbZm9rFc8iD2xYwEiAlQ
status: PUBLISHED
createdAt: 2022-12-05T14:49:46.856Z
updatedAt: 2024-03-01T21:06:12.857Z
publishedAt: 2024-03-01T21:06:12.857Z
firstPublishedAt: 2022-12-05T14:49:47.309Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: get-all-sku-suggestions-api-doesnt-keep-same-sku-order-when-changing-limits
locale: en
kiStatus: No Fix
internalReference: 367187
---

## Summary



The "Get all SKU suggestions" API has a limit of 20 skus per page.

API documentation: https://developers.vtex.com/vtex-rest-api/reference/get-suggestions#getsuggestions

On the day to day work this disrupt the Marketplace's operation because every time the marketplace does a request changing the limits to obtain the next 20 skus, the order of the skus also changes and this gives the impression of having duplicate skus.

When requesting this API using query params like "sellerId" this behavior happens. Requesting the API without query params, is possible to use the resource "Next" to prevent this issue.



###

## Simulation



1. Request the "Get all SKU suggestions" API using query params: "sellerId";
2. Change the limits at the params "**_from"** and "**_to"** to obtain the next skus;
3. Verify if there is a sku on this page that already appeared on the previous pages.



###

## Workaround



To prevent this situation, use the exporting spreadsheet on the UI or use the API without params.

