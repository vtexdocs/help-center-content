---
title: 'New order tie-breaking rule on VTEX optimizes the distance to the buyer'
id: 5pSsuRw6WaoUfznwh0HWXe
status: PUBLISHED
createdAt: 2025-07-03T18:17:29.710Z
updatedAt: 2025-07-07T14:43:10.095Z
publishedAt: 2025-07-07T14:43:10.095Z
contentType: updates
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: new-vtex-order-tiebreaking-rule-shortest-distance
locale: en
legacySlug: new-vtex-order-tiebreaking-rule-shortest-distance
announcementImageID: ''
announcementSynopsisEN: 'A new tie-breaking rule on VTEX prioritizes sellers with closer delivery to buyers.'
---

To enhance buyer experience, we've implemented a new rule for the last tie-breaker criterion in [VTEX order allocation](https://help.vtex.com/en/tutorial/white-label-sellers-selection--3MemNQ4pKkWCpMdzI27AHa). Starting July 7, 2025, instead of selecting a seller randomly, the system will prioritize the shortest distance between seller and buyer.

## What has changed?

The current order allocation flow follows these steps:

1. Sellers who don't serve the [order location](https://help.vtex.com/en/tutorial/configure-seller-regionalization--32t6wLpQCEnumoh8TjT5fw) or lack sufficient stock for at least one item in the cart are removed.
2. The number of sellers is reduced to 12 based on:
    * **For delivery**: Lowest shipping cost (from the [shipping table](https://help.vtex.com/en/tutorial/shipping-rate-template--tutorials_127)) and shortest delivery time.
    * **For pickup**: Lowest shipping cost (from the [shipping table](https://help.vtex.com/en/tutorial/shipping-rate-template--tutorials_127)), delivery time, and shortest distance from the shopper to the pickup point.
    * Stock quantity as a tie-breaking criterion.
3. Among the up to 12 selected sellers, prioritization is based on:
    * Lowest item total and highest cart availability.
    * Lowest total cost.
    * Shortest delivery time.
    * If there's a tie, a seller is selected at random.

Starting July 7, 2025, in the event of a tie on the last criterion, the system will select the seller with the shortest distance to the buyer, replacing the random selection process.

## Why did we make this change?

Previously, the random tie-breaker didn't always maximize buyer experience or seller costs. With the new distance-based rule, we were able to:

* Reduce the average delivery distance by up to 25%.
* Increase logistics and allocation efficiency up to 40% of orders to sellers closer to the buyers.
* Promote a more sustainable and economical shopping experience for both merchants and customers.

## What needs to be done?

No action is required to start using the new order allocation criterion. This update will be automatically applied to all VTEX stores. 

If you don't want to implement the new criterion, please contact our [Support](https://support.vtex.com/hc/en-us/requests) team.

