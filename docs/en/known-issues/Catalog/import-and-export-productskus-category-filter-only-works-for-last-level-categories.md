---
title: 'Import and export Product/Skus category filter only works for last level categories'
id: i7KO2Nw3puiniVTRbDJok
status: PUBLISHED
createdAt: 2022-03-25T17:49:45.769Z
updatedAt: 2022-11-25T21:43:11.100Z
publishedAt: 2022-11-25T21:43:11.100Z
firstPublishedAt: 2022-03-25T17:49:46.190Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: import-and-export-productskus-category-filter-only-works-for-last-level-categories
locale: en
kiStatus: Fixed
internalReference: 550313
---

## Summary


To reduce the amount of skus exported on the Product/Skus spreadsheet the client can use the filters.

The category filter is not working as expected when using categories that are not on the last level (categories that have child categories).

The result is that the spreadsheet is not being filtered at all, all the skus still remain.

When using categories of the last level the behavior is correct.



## Simulation



1. Go to Import and export -> Product and Skus;
2. Select a last level category on the filter;
3. Export the spreadsheet and verify that the result is filtered correctly by the category.
4. Select the parent category on the filter;
5. Export the spreadsheet and verify that the result is all the skus.



## Workaround


Select the last level category or other filter fields to reduce the amount of skus.

