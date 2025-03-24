---
title: "Some promotions can't be displayed in search context"
id: 48NdMjFOswJ5w7Nypc2Txd
status: PUBLISHED
createdAt: 2022-03-17T20:42:39.545Z
updatedAt: 2022-11-25T21:58:24.664Z
publishedAt: 2022-11-25T21:58:24.664Z
firstPublishedAt: 2022-03-17T20:42:39.998Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: some-promotions-cant-be-displayed-in-search-context
locale: en
kiStatus: Backlog
internalReference: 475289
---

## Summary


Some types of promotions aren't retrieved in the ProductSummaryProvider context, and therefore its badges aren't rendered by the vtex.product-highlights component.



## Simulation


These are the types of promotion settings that are known to reproduce this problem:


- Regular Promotion with discount type set as Gift;
- Regular promotion that is configured to be applied to specific Brand AND Collection together;



## Workaround


Include the promotional products in a specific collection and set the product-highlights component as `"type": "collection"`, so that it shows the collection badge.

