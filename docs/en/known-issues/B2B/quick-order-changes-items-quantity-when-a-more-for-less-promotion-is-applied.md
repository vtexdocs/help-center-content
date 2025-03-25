---
title: "Quick Order changes item's quantity when a More for Less promotion is applied"
id: 2nixdZvlUVIXnY8h3pF60j
status: PUBLISHED
createdAt: 2024-10-24T14:40:29.973Z
updatedAt: 2024-10-24T14:40:31.031Z
publishedAt: 2024-10-24T14:40:31.031Z
firstPublishedAt: 2024-10-24T14:40:31.031Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: quick-order-changes-items-quantity-when-a-more-for-less-promotion-is-applied
locale: en
kiStatus: Backlog
internalReference: 1123142
---

## Summary


When applying a More for Less promotion (but any promotion that splits items will have the same behavior), the expected behavior is to separate the promotional item from the regular items, but this doesn't happen in the Quick Order app.

Only the first item quantity is considered if the promotion is applied during app validation.


##

## Simulation



- Set a More for Less promotion; for example, buy 3 items and get 1 for free;
- The items are split into 2 items with the original price and 1 item with 0;
- The quick order app will consider only 2 items after the validation.


##

## Workaround


N/A




