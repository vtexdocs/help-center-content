---
title: Search result totalizer and filters showing wrong value
id: 62FJLXM5ckM8sqYUIQg0C4
status: PUBLISHED
createdAt: 2017-12-22T16:50:30.032Z
updatedAt: 2022-12-22T20:43:16.683Z
publishedAt: 2022-12-22T20:43:16.683Z
firstPublishedAt: 2017-12-22T17:02:52.492Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: search-result-totalizer-and-filters-showing-wrong-value
kiStatus: Backlog
internalReference: 
---

## Summary

<div class = "alert alert-warning">
  <strong>Warning</strong>: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.
</div>

When doing any type of search (category, brand, by term etc), the searchNavigator control displays all possible filters for the result, usually on the side. On the side of each filter, the system displays the totalizer. That is the quantity of products that exist for each option. Eventually, this totalizer does not present a correct value and when clicking on the option the result displays more or less products than the quantity indicated in the filter.

The totalizer searchResult also eventually behaves unexpectedly, presenting a divergent value of reality.

## Simulation


To simulate (does not occur with any store or configuration):
1. Access a page that has side filters;
2. Observe the totalizer of some filter (the problem usually happens with options with more than 30 products);
3. Click on any filter;
4. Note that the quantity of products returned is different from the totalizer displayed in the filter;

## Workaround


There is no contour solution.

