---
title: "Update seller's available trade policies does not trigger automatic indexation"
id: 45FOjSN4a5ZhCqilQfUX99
status: PUBLISHED
createdAt: 2024-05-31T13:49:57.732Z
updatedAt: 2024-05-31T13:49:58.764Z
publishedAt: 2024-05-31T13:49:58.764Z
firstPublishedAt: 2024-05-31T13:49:58.764Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: update-sellers-available-trade-policies-does-not-trigger-automatic-indexation
locale: en
kiStatus: Backlog
internalReference: 1041874
---

## Summary


At the seller management UI, remove or add a new trade policy to a seller.

This process is saved successfully, however the information is not automatically updated at the indexer of products related to that specific seller.

As a consequence, the seller's offer at these products will be outdated as:
- still available at the trade policy (if the action was to remove it);
- not available at the trade policy (if the action was to add it).



##

## Simulation



- Check a product that has an offer by a seller at a specific trade policy;
- Remove the trade policy from this seller using the Seller Management UI;
- Check that the action did not reflected at the product.


##

## Workaround


Index the product manually.





