---
title: "Merchandising rules changing unexpected products due to conflicting IDs"
id: 2pmPJ34MdEbr2xiGbPCuzv
status: PUBLISHED
createdAt: 2024-09-04T21:10:05.272Z
updatedAt: 2025-04-28T15:37:21.913Z
publishedAt: 2025-04-28T15:37:21.913Z
firstPublishedAt: 2024-09-04T21:10:06.016Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: merchandising-rules-changing-unexpected-products-due-to-conflicting-ids
locale: en
kiStatus: Backlog
internalReference: 1092750
---

## Summary


Merchandising Rules process IDs, which are used to register the rules, on top of a more generic field. It includes more than _ProductID_ but also _ProductRefID_, _SKUID_, _SKURefID_, and _EAN_, as per our documentation.

If the value from a product ID is also part of a different ID field in another product, the rule will be applied to both of them.

In case of Visual Editor, even though Merchandising Rules uses the productID to register the rules, it will be processed in a generic field.


##

## Simulation


Consider product A with "productId=444" and product B with "productId=555", where the SKU from product A is "skuId=555".

A rule to pin or hide product B (productId=555) will also be applied to product A (due to skuId=555).


##

## Workaround


It's possible to workaround using different ID values such as _SKURefID_ or _EAN_, which are more likely to be unique.

