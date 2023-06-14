---
title: Feed v3 Hook
id: 6JkYQpIlU8ptysUiGIp4Px
status: DRAFT
createdAt: 2019-04-29T22:33:08.726Z
updatedAt: 2022-10-19T21:08:20.910Z
publishedAt: 
firstPublishedAt: 2019-06-10T20:51:18.121Z
contentType: tutorial
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slug: feed-v3-hook
legacySlug: configuring-hook-feed-v3,configuring-feed-v3-hook
subcategory: 3Y8xzVGMXcuPTuzfFI0vUp
---

The Hook is an extension of the [Feed v3](https://help.vtex.com/en/tutorial/orders-management-feed-v3-setup--5qDml3cQypWDRTgw69s4C1), tailored to robust operations that require more complex integrations. 

Unlike the feed, its operation doesn't require any reactive commits from users. When a call is correctly placed to an address, the system performs an __auto commit__.

Its main functionality is avoiding an unnecessary feed query by a system or user without having new events, notifying the configured endpoint whenever an order status update occurs. The list of possible order statuses can be seen in the article [Order flow in Orders management](https://help.vtex.com/en/tutorial/fluxo-de-pedido/#understanding-the-status).

To learn more about configuring and using Hook, check the [Feed v3 developer guide](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
