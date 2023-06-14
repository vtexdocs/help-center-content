---
title: 'Searches for brands that have an apostrophe do not return data in the Admin'
id: 2Z3k2leNVmCoBIPmIPDrz2
status: PUBLISHED
createdAt: 2020-05-05T15:36:13.219Z
updatedAt: 2022-12-22T20:43:15.385Z
publishedAt: 2022-12-22T20:43:15.385Z
firstPublishedAt: 2020-05-18T14:24:59.715Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: searches-for-brands-that-have-an-apostrophe-do-not-return-data-in-the-admin
kiStatus: Backlog
internalReference: 
---

## Summary

In the Admin's __Brands__ section (`https://{storename}.myvtex.com/admin/Site/ Brand.aspx`), if you search for a brand whose name has an apostrophe ('), it will not be shown in the search results. This happens even if the brand is on the list. Other special characters work correctly.


## Simulation

1. Create a brand whose name contains an apostrophe;
2. Use the Admin search to search for the newly created brand.

## Workaround

We recommend using GET by [Brand API](https://developers.vtex.com/reference/category-and-brand#brand), using the brand ID for the search.


