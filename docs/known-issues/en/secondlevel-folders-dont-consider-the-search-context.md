---
title: 'Second-level folders don't consider the "search context"'
id: 6WvlorgpBEeIuKk2mprMXm
status: PUBLISHED
createdAt: 2019-02-17T19:55:07.529Z
updatedAt: 2022-12-22T20:43:19.617Z
publishedAt: 2022-12-22T20:43:19.617Z
firstPublishedAt: 2019-02-17T20:10:48.567Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: secondlevel-folders-dont-consider-the-search-context
kiStatus: Backlog
internalReference: 
---

## Summary

<div class = "alert alert-warning">
  <strong>Warning</strong>: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.
</div>

Second-level folders are not considering the "search context" that was registered for it. The _slug_ of the URL's second level is acting as a filter of the first folder (based on its context).

## Simulation

1. In the CMS, create a folder in the root of the website and set a search context for it;
2. Create a second folder inside the one previously created, with a different search context;
3. Access this second folder on the website and note that its content does not match what is expected.

Practical example:

- `/special-promotion` folder that has collection 111 as search context;
- `/some-products` folder registered inside the previous folder with collection 222 as search context.

The second folder can be accessed at www.site.com/special-promotion/some-products, but it will not bring the products in the 222 collection. Instead, it will bring a search for the term "some products" within collection 111 (from first folder).

## Workaround

In cases where the search context is relevant to the scenario, you should only work with top-level folders.

