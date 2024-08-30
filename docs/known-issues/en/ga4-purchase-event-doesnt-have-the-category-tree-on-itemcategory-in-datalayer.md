---
title: "GA4 purchase event doesn't have the category tree on item_category in dataLayer"
id: 6GCrgcG8PJHaZp80hi4Gb1
status: PUBLISHED
createdAt: 2023-07-12T16:42:17.087Z
updatedAt: 2023-07-12T16:43:37.976Z
publishedAt: 2023-07-12T16:43:37.976Z
firstPublishedAt: 2023-07-12T16:42:17.674Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: ga4-purchase-event-doesnt-have-the-category-tree-on-itemcategory-in-datalayer
locale: en
kiStatus: Backlog
internalReference: 860655
---

## Summary


GA4 purchase event doesn't have the category tree on item_category in dataLayer, so the only category available is the last level category from the product.


##

## Simulation



- Configure the app Google Tag Manager and activate "Send Google Analytics 4 Events";
- Finish a purchase;
- On the console, check the events in dataLayer; there will be only the last level category on item_category.


##

## Workaround


N/A



