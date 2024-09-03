---
title: "Checkout pipeline doesn't update taxes considering the correct seller when merging cart information"
id: 4HDGps2Ez5kWKuW1UNX1JQ
status: PUBLISHED
createdAt: 2024-07-03T20:21:23.533Z
updatedAt: 2024-07-03T20:21:24.413Z
publishedAt: 2024-07-03T20:21:24.413Z
firstPublishedAt: 2024-07-03T20:21:24.413Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-pipeline-doesnt-update-taxes-considering-the-correct-seller-when-merging-cart-information
locale: en
kiStatus: Backlog
internalReference: 759842
---

## Summary


When there are 2 sellers in the "SellerElection" method, one of them is selected as having the cheapest price for delivery, and the other one the cheapest price for pickup-in-point, the cart information merge doesn't update taxes when selecting pickup-in-point, causing an error to finish the purchase


##

## Simulation



- Have two sellers configured: 1 is the cheapest when delivery and the other one when pickup-in-point
- Configure taxes _only_ for the seller that will fulfill pickup-in-point or different taxes between them
- Perform a Checkout Simulation and you will see there will be no taxes in "priceTags" and it won't finish the purchase


##

## Workaround


N/A



