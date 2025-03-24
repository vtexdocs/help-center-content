---
title: "Seller's skus are not being Matched to the marketplace's skus"
id: 3nMHzPCop8uKOD98GkT3k
status: PUBLISHED
createdAt: 2024-10-03T16:23:17.416Z
updatedAt: 2024-10-03T16:23:18.274Z
publishedAt: 2024-10-03T16:23:18.274Z
firstPublishedAt: 2024-10-03T16:23:18.274Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: sellers-skus-are-not-being-matched-to-the-marketplaces-skus
locale: en
kiStatus: Backlog
internalReference: 1100159
---

## Summary


Despite an identical product on the Marketplace's catalog, the SKUs from the sellers are not being matched and automatically approved. Instead, they are going to the Pending Area or, in cases of marketplaces with the Autoapprove flag enabled, they are being created as new on the catalog.

_This scenario usually happens only with SKUs that have a large "Product Name" or that have special characters on them, such as_ `+` _or_ `&`_._


##

## Simulation



1. Verify if the same product exists on the marketplace catalog and is indexed.
2. Verify if the seller sent a product with at least the same "Product Name".
3. Verify if the marketplace's Matcher rules are set up correctly.
4. Check that the SKU was not matched as it should.


##

## Workaround


Approve the SKUs with the wrong match manually.





