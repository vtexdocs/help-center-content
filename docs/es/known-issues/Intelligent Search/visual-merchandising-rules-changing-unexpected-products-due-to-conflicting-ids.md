---
title: 'Visual merchandising rules changing unexpected products due to conflicting IDs'
id: 2pmPJ34MdEbr2xiGbPCuzv
status: PUBLISHED
createdAt: 2024-09-04T21:10:05.272Z
updatedAt: 2024-09-04T21:10:06.016Z
publishedAt: 2024-09-04T21:10:06.016Z
firstPublishedAt: 2024-09-04T21:10:06.016Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-changing-unexpected-products-due-to-conflicting-ids
locale: en
kiStatus: Backlog
internalReference: 1092750
---

## Summary


The visual editor for merchandising rules uses the product ID to register the rules, but they are processed on top of a more generic field, which includes more than just the _ProductID_ but also the _ProductRefID_, _SKUID_, _SKURefID_, and _EAN_, as per our documentation.

If the value from a product ID is also part of a different ID field in another product, the rule will be applied to both of them.


The same issue also happens for merchandising rules created with the manual editor while creating rules by the ID attribute if the value exists in more than one product, but in this case, it's possible to workaround using different ID values such as _SKURefID_ or _EAN_, which are more likely to be unique.


##

## Simulation


Consider product A with "productId=444" and product B with "productId=555", where the SKU from product A is "skuId=555".

A rule to pin or hide product B (productId=555) will also be applied to product A (due to skuId=555).


##

## Workaround


N/A





