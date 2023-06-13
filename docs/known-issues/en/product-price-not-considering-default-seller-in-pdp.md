---
title: Product Price not considering default seller in PDP
id: 4VOIW6kCTfFZ3S9u3xtdDF
status: PUBLISHED
createdAt: 2022-02-23T21:52:42.520Z
updatedAt: 2022-11-25T22:13:37.983Z
publishedAt: 2022-11-25T22:13:37.983Z
firstPublishedAt: 2022-03-07T22:34:44.879Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: product-price-not-considering-default-seller-in-pdp
kiStatus: Backlog
internalReference: 429888
---

## Summary


When showing the price in PDP, the component ignores Default Seller, considering the first seller which was registered.


## Simulation


Component ProductPrice in GitHub is considering always the first seller to enter the array, instead of using this logic.

        const commertialOffer = path(
          ['sellers', 0, 'commertialOffer'],
          selectedItem
        )


## Workaround


N/A.

