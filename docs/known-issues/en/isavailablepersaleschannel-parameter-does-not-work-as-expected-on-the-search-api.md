---
title: 'isAvailablePerSalesChannel parameter does not work as expected on the Search API'
id: 6vexCZQTib8fFI6sCSTdWL
status: PUBLISHED
createdAt: 2022-09-12T16:03:25.215Z
updatedAt: 2024-02-16T20:24:54.890Z
publishedAt: 2024-02-16T20:24:54.890Z
firstPublishedAt: 2022-09-12T16:03:25.837Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: isavailablepersaleschannel-parameter-does-not-work-as-expected-on-the-search-api
locale: en
kiStatus: No Fix
internalReference: 656284
---

## Summary


When trying to use the isAvailablePerSalesChannel parameter to show the available (fq=isAvailablePerSalesChannel_{id}:1) or unavailable (fq=isAvailablePerSalesChannel_{id}:0) products the result is not consistent.

Sometimes it will work as expected and sometimes it won't, specially when other parameters are involved in the search, like productId, skuId or sc.



## Simulation



1. Make a product unavailable on a sales channel.
2. Use the search API with the isAvailablePerSalesChannel parameter.
3. Check that the result is inconsistent.



## Workaround


No workaround.

