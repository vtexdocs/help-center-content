---
title: 'Received Skus "Review" tab missing products'
id: 2UM0JQUZVq5o7NHCjmrg8N
status: PUBLISHED
createdAt: 2023-11-23T16:30:51.874Z
updatedAt: 2024-02-01T12:54:26.917Z
publishedAt: 2024-02-01T12:54:26.917Z
firstPublishedAt: 2023-11-23T16:30:52.647Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: received-skus-review-tab-missing-products
locale: en
kiStatus: Fixed
internalReference: 939877
---

## Summary


The offers sent by the sellers can eventually go to the Review tab of the Marketplace's Received Skus depending if they passed or not the Offer Quality rules.

Once they are on this tab, the seller can update their skus with the correct information (or any new information).

However, when this happens, the sku changes it's status from "WaitingReview" to "Reviewed", disappearing from the Review tab and the entire Received Skus.


##

## Simulation



1. Set up a "Optional requirements" rule on the Offer Quality module on the marketplace side;
2. Wait for a sku go to the Review tab for not passing the rule;
3. Wait for a sku update on the seller side;
4. Check that the sku is no longer on the Review tab


##

## Workaround


Approve the product via API: https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-





