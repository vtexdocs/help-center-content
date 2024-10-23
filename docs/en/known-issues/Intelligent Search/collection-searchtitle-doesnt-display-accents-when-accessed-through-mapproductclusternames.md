---
title: "Collection search-title doesn't display accents when accessed through map=productClusterNames"
id: 41m89nYPVQxFaNUXAcGo3X
status: PUBLISHED
createdAt: 2022-03-21T17:40:39.850Z
updatedAt: 2022-11-25T21:57:56.915Z
publishedAt: 2022-11-25T21:57:56.915Z
firstPublishedAt: 2022-03-21T17:40:40.209Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: collection-searchtitle-doesnt-display-accents-when-accessed-through-mapproductclusternames
locale: en
kiStatus: Backlog
internalReference: 439856
---

## Summary


Collection pages accessed through map=productClusterNames show the collection name without accents in the search-title component.



## Simulation


Collection accessed using ?map=productClusterNames:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Intelligent Search/collection-searchtitle-doesnt-display-accents-when-accessed-through-mapproductclusternames_1.png)

The correct collection name can be seen in the page Title, and the search-title displays it without accents. This behavior may also be extended to other special characters.



## Workaround


It is possible to manage collections by creating custom search pages:
https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-custom-search-results-page

And then, insert the desired title using a rich-text block.

