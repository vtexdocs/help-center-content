---
title: Catalog Filter for Seller = 1 brings Empty results
id: 3BG6c5IPa7W950vCpTFY6H
status: PUBLISHED
createdAt: 2023-05-03T14:37:41.635Z
updatedAt: 2023-05-08T18:31:01.764Z
publishedAt: 2023-05-08T18:31:01.764Z
firstPublishedAt: 2023-05-03T14:37:42.157Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-filter-for-seller-1-brings-empty-results
kiStatus: Backlog
internalReference: 801538
---

## Summary


Currently, when filtering exclusively for the main seller on the Catalog menus, no results are shown. This happens because this filter is incorrectly searching for a specific seller when, instead, the seller = 1 (the account's main seller) is the marketplace itself.



##

## Simulation



1. Go to any catalog menu, such as Import/Export
2. Filter for the main seller of the account:

 ![](https://vtexhelp.zendesk.com/attachments/token/6dygVHVlzTTdqYD3jOyV10DaZ/?name=image.png)
3. No results will be shown


##

## Workaround


Using a trade policy in which only the seller 1 is present, filter for this given trade policy instead and consequently, you'll be filtering for the main seller.

