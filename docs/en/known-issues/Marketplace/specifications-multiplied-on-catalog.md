---
title: "Specifications multiplied on catalog"
id: 2d4LXPrbVibMR8atXO6o8X
status: PUBLISHED
createdAt: 2023-10-16T12:48:03.714Z
updatedAt: 2023-10-16T12:48:59.814Z
publishedAt: 2023-10-16T12:48:59.814Z
firstPublishedAt: 2023-10-16T12:48:04.717Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: specifications-multiplied-on-catalog
locale: en
kiStatus: Backlog
internalReference: 919761
---

## Summary


The marketplace can approve products sent by sellers on the Received Skus module.

When a product has a sku specification that matches the specification that exists on the marketplace's category but is a new value, this new value is created on the marketplace's specification.

The multiplied values can occur when more than one sku with the same "new value" is being approved at the same time on Received Skus in the same category (or tree) that the specification was created.

If the specification is created on the root category (not recommended) this scenario could happen more easily.


##

## Simulation



1. Create a sku specification on the root category;
2. Choose 2 (or more)skus to approve on the Received Skus module that have the same sku specification value (the value can't previous exist on the marketplace side)
3. Approve the skus (at the same time or in a small gap) and check if the specification values were multiplied by the number of skus approved.


##

## Workaround


Approve the skus more slowly and avoid create specifications on the root category.





