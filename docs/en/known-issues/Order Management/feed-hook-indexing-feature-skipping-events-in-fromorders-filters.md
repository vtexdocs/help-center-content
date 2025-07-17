---
title: "Feed Hook Indexing feature skipping events in FromOrders filters"
id: 6wpHloVS4KnH1TN5S5ySN2
status: PUBLISHED
createdAt: 2023-05-25T20:23:18.818Z
updatedAt: 2023-05-25T20:23:19.709Z
publishedAt: 2023-05-25T20:23:19.709Z
firstPublishedAt: 2023-05-25T20:23:19.709Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: feed-hook-indexing-feature-skipping-events-in-fromorders-filters
locale: en
kiStatus: Backlog
internalReference: 832400
---

## Summary


When you configure the Feed/Hook filter, you define which order updates should be displayed in the feed. Two types of filters can be used in the feed: FromWorkflow and FromOrders.

Using the FromWorkflow configuration, you can only filter order updates by status.
And FromOrders allows you to filter updates in your feed by any property in the order JSON document.

But on FromOrders expression when there is a dynamic property on filter, as status for example, this makes the indexing for Orders skips some order versions.
And it can results in no notifications for feed/hook when it should be happened.


##

## Simulation


Set an expression of FromOrders with order status, and many possibilities as sales channel, sequence number and another conditions.

It can be not notified due dynamic info as order status.


##

## Workaround


The recomendation for cases like this, is to remove that part dynamic of the filter and handle this externally.
If the dynamic info is the main point as order stauts, they should use the FromWorkflow option.





