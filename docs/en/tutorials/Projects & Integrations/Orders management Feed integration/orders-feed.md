---
title: 'Orders Feed'
id: 5SzSKee2f666YCoWkm0eQC
status: ARCHIVED
createdAt: 2018-01-12T16:34:03.101Z
updatedAt: 2022-08-30T17:25:47.206Z
publishedAt: 
firstPublishedAt: 2018-01-16T14:52:21.286Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: orders-feed
locale: en
legacySlug: how-the-oms-feed-works, how-the-orders-management-feed-v3-works
subcategoryId: 3Y8xzVGMXcuPTuzfFI0vUp
---

The Orders Feed is basically a list of order updates, with which you can build order management integrations via API. Meaning that whenever there is an update in an order, it will be included as a new item in the Feed. These updates can be status changes, addition or removal of items by the store, or the order being delivered, for example.

The Feed is therefore not a list of orders but rather a list of events. For example, if an order’s status gets changed to `Approve Payment` and then to `Authorize Shipping`, two events will be received by the Feed: one for each of these updates, both referring to the same order. You can configure the Feed to filter what events will actually generate feed items or not, instead of every update that happens in every single order generating items in the feed queue.

The Feed also has a complement tailored to robust operations that require more complex integrations, [the Hook](https://help.vtex.com/tutorial/configurar-hook-do-feed-v3--6JkYQpIlU8ptysUiGIp4Px#).

To learn more about configuring and using the Feed v3 and the Hook, check the [Feed v3 developer guide](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
