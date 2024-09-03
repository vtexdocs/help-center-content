---
title: ' Filter by SkuName on Sales Performance is not accepting uppercase.'
id: 3FCDeEn8xmEvOXKgBxqyL5
status: PUBLISHED
createdAt: 2022-08-16T18:06:02.919Z
updatedAt: 2024-02-16T20:24:21.760Z
publishedAt: 2024-02-16T20:24:21.760Z
firstPublishedAt: 2022-08-16T18:06:03.474Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slug: filter-by-skuname-on-sales-performance-is-not-accepting-uppercase
locale: en
kiStatus: No Fix
internalReference: 639219
---

## Summary


On the Sales Performance Dashboard the filter by a term is not accepting uppercase letters on the SkuName.

The data of this dash is filled with the OMS information which has all the SkuNames in lowercase.

So, even if on the Catalog itself the SkuName has uppercase letters, if you try to filter by the exact name that is on the Catalog no results will appear on the search.


##

## Simulation



1. Create a new filter by Product / Sku Name on the Sales Performance Dash;
2. Insert a term with uppercase letters;
3. Check that no results will appear;
4. Insert the same term with only lowercase letters;
5. Check that the results will show the sku.


##

## Workaround


Filter only using lowercase.

