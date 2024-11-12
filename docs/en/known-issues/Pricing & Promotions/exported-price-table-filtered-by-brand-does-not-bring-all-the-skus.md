---
title: 'Exported Price Table Filtered by Brand does not bring all the skus'
id: 3Z1A0Jpua28QNbwrEhPKxw
status: PUBLISHED
createdAt: 2022-08-23T16:07:14.755Z
updatedAt: 2022-12-12T14:49:00.132Z
publishedAt: 2022-12-12T14:49:00.132Z
firstPublishedAt: 2022-08-23T16:07:15.222Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: exported-price-table-filtered-by-brand-does-not-bring-all-the-skus
locale: en
kiStatus: Fixed
internalReference: 594075
---

## Summary


When exporting the price table filtered by Brand in order to get a more specific result, the spreadsheet is coming incomplete to the client.

Only the skus with price showed on the first page (when the page is set with the maximum of 20 results) are exported.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Simulation



1. Go to Price List of the account;
2. Filter the results by a specific Brand (and refresh the page)
3. Export `Table of base prices` or `Table of fixed prices`
4. Check that there are skus missing


##

## Workaround


Another way to get a sku price info is using API: https://developers.vtex.com/vtex-rest-api/reference/getprice

