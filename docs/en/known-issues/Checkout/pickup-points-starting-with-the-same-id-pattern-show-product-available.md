---
title: 'Pick-up points starting with the same ID pattern show product available'
id: 1iCnOFHyKNTLvY20VS58HP
status: PUBLISHED
createdAt: 2024-01-10T16:01:39.766Z
updatedAt: 2024-01-10T16:01:40.403Z
publishedAt: 2024-01-10T16:01:40.403Z
firstPublishedAt: 2024-01-10T16:01:40.403Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-points-starting-with-the-same-id-pattern-show-product-available
locale: en
kiStatus: Backlog
internalReference: 964036
---

## Summary


When the two pick-up points with IDs start with the same pattern, the checkout UI validates them as the same store, showing a product available.


##

## Simulation



- Register two pick-up points: one with ID 8 and another one with ID 835;
- Associate them with different shipping strategies, where only one pick-up should have a product available;
- Assemble a cart and select the pick-up where the product shouldn't be available;
- The product will show as available.


##

## Workaround


N/A




