---
title: "Skus from the same product being created separately on accounts with Autoapprove flag enabled"
id: 5xWm9hzTO0Yuv0e2UuMgH6
status: PUBLISHED
createdAt: 2024-01-09T12:39:19.465Z
updatedAt: 2024-07-22T19:31:17.990Z
publishedAt: 2024-07-22T19:31:17.990Z
firstPublishedAt: 2024-01-09T19:59:00.420Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: skus-from-the-same-product-being-created-separately-on-accounts-with-autoapprove-flag-enabled
locale: en
kiStatus: Fixed
internalReference: 962986
---

## Summary


The seller sends a batch with skus from the same product (all the possible variations of the product).

Instead of being created as a product with it's variations, all the skus are being created separately.

This behavior is happening because the marketplace account has the Autoapprove flag enabled and the seller is sending all the skus at once.

Normally, the system has a lock, by product name, to prevent this kind of situation since the Matcher has more than one queue processing the skus. But this lock isn't implemented on the Autoapprove workflow.


##

## Simulation


1. Enable the Autoapprove flag on the Marketplace;
2. Seller send a batch of products and it's skus (variations) at once;
3. The first skus of the product is created correctly, but the others are created separately.


##

## Workaround


To prevent this situation, there are two possible ways.

1. Seller send the skus slowly within a time frame;
2. Disable the Autoapprove flag on the Marketplace.





