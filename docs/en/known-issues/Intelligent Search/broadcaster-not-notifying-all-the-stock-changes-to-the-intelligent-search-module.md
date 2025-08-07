---
title: "Broadcaster not notifying all the stock changes to the Intelligent Search module"
id: XLozPnuonjPImtZa8bWAz
status: PUBLISHED
createdAt: 2022-10-24T12:26:59.536Z
updatedAt: 2025-02-17T14:01:02.310Z
publishedAt: 2025-02-17T14:01:02.310Z
firstPublishedAt: 2022-10-24T12:27:00.490Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: broadcaster-not-notifying-all-the-stock-changes-to-the-intelligent-search-module
locale: en
kiStatus: Fixed
internalReference: 683345
---

## Summary



There are some scenarios where the products that should not display due to the fact that they are unavailable are displayed on the screen, this happens because sometimes the system miss or even there are no notifications from the broadcaster system to the search module, this happens with the stock notifications that consequently doesn't trigger a new indexation.


##

## Simulation



Go to a store, and as soon as it updates it's possible to see some products that shouldn't be returned displaying on the screen, even when they are correctly set, this happens due to a lack of notifications from the broadcaster, when you update the products it has the expected behavior.


##

## Workaround



Reindex the products with issues.

