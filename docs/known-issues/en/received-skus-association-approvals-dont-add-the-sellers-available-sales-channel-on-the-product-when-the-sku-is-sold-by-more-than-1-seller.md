---
title: "Received Skus: Association approvals don't add the seller's available sales channel on the product when the sku is sold by more than 1 seller"
id: 5ob4jquCm8l84MhX6285h8
status: PUBLISHED
createdAt: 2022-04-18T17:15:41.091Z
updatedAt: 2023-05-09T19:06:08.893Z
publishedAt: 2023-05-09T19:06:08.893Z
firstPublishedAt: 2022-04-18T17:15:41.436Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: received-skus-association-approvals-dont-add-the-sellers-available-sales-channel-on-the-product-when-the-sku-is-sold-by-more-than-1-seller
kiStatus: Backlog
internalReference: 562472
---

## Summary


A product sold by another seller on the marketplace catalog is available to be sold on this seller's sales channel.

However, if a new seller also sends the product and the marketplace perform a association action on the Received Skus module, meaning link to another product or link to another sku, this new seller's sales channel won't be added to the product, remaining only the original seller's sales channel.


##

## Simulation



1. Seller 1, available on sales channel A, sends a product to the marketplace;
2. Marketplace approved seller 1 product as a new product on it's catalog;
3. Product is available on sales channel A;
4. Seller 2, available on sales channel B, sends the same product to the marketplace;
5. Marketplace approved the product as link to another product action;
6. Product remains available only on sales channel A.


##

## Workaround


Check manually, via API or via Spreadsheet, the other sales channel available for the products.





