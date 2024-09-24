---
title: "Search doesn't encode hyphen and replaces it with a space"
id: 1jH0EdXaKiIyIe8ucgCmwI
status: PUBLISHED
createdAt: 2018-05-29T22:02:32.123Z
updatedAt: 2022-12-22T20:43:20.714Z
publishedAt: 2022-12-22T20:43:20.714Z
firstPublishedAt: 2018-05-29T22:05:57.827Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: search-doesnt-encode-hyphen-and-replaces-it-with-a-space
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

>⚠️ **Warning**: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.

When the searched term has a hyphen (`-`), the search replaces this character with a space in the querystring, not bringing the expected result.


## Simulation

Perform a search on your site with the hyphen (`-`) character in the search term. Note that the hyphen value will be replaced by a space in the search.


## Workaround

For products containing hyphen terms, enter in the field `Substitute words` the term with space in place of the hyphen for the product to be found in the search result.


