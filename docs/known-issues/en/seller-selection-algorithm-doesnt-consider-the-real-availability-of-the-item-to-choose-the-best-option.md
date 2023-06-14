---
title: "Seller selection algorithm doesn't consider the real availability of the item to choose the best option"
id: 4wT0pC5gzxFvh7nAy7CHK7
status: PUBLISHED
createdAt: 2022-07-07T17:40:45.874Z
updatedAt: 2022-11-25T21:51:20.721Z
publishedAt: 2022-11-25T21:51:20.721Z
firstPublishedAt: 2022-07-07T17:40:46.790Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: seller-selection-algorithm-doesnt-consider-the-real-availability-of-the-item-to-choose-the-best-option
kiStatus: Backlog
internalReference: 360097
---

## Summary


The seller selection algorithm considers the stock from the items in order to select the best whitelabel seller for a given context.
The problem is that this API doesn't take into account if the quantity is coming from a valid warehouse for the salesChannel, with a valid shipping strategy, and not even if the warehouse is enabled. So the context is poor to select the best seller.
In a second moment, checkout does a full simulation request in the selected seller, and only here it'll discover that in truth the item isn't available. But at this time, an alternative whitelabel seller can no longer be applied.



## Simulation



- To have a store with whitelabel sellers
- To have more than one seller:
  - seller A with a high stock quantity, but the warehouse disabled
  - seller B with a low stock quantity, but the warehouse enabled and with a valid shipping strategy
- Do a simulation and observe that the checkout will choose the seller A instead of seller B



## Workaround


The store needs to ensure that, if some seller is enabled, it must have a valid shipping strategy to every warehouse. If some warehouse won't be used, their balance should be updated to zero. Otherwise, there's a risk to select a seller that can't fulfill the item.

