---
title: 'Get Order and List Orders APIs may now return orders with the null status'
id: 6IO4rL1qIEWSMsu2WgmWI0
status: PUBLISHED
createdAt: 2018-12-28T18:46:34.551Z
updatedAt: 2020-05-12T15:37:47.782Z
publishedAt: 2020-05-12T15:37:47.782Z
contentType: updates
productTeam: Post-purchase
author: authors_41
slugEN: 2018-12-28-get-order-and-list-orders-apis-may-now-return-orders-with-the-null-status
locale: en
legacySlug: get-order-and-list-orders-apis-may-now-return-orders-with-the-null-status
announcementImageID: ''
announcementSynopsisEN: 'As of 01/30/2019, orders may appear with null status in the responses for the Get Order and List Orders calls.'
---

As of __January 30, 2019__, requests to the [Get Order](https://developers.vtex.com/reference/orders#getorder) and [List Orders](https://developers.vtex.com/reference/orders#listorders) APIs may return orders with the `null` status. That result wasn’t previously available while using the referred APIs.


## Main advantages
The new status allows order closing, even when the Workflow is facing stability issues. Before that change, the Workflow (our order status management system) would impact the checkout system, preventing orders to be closed properly. Now, orders are closed as they're supposed to, and get the null status until the incident is resolved.

In other words, __the new status is responsible for the Workflow's optimization and makes the order closing process more stable__.


## What you need to do
You must review all your store’s integrations that use the Get Order and List Orders (like ERP integrations, for example). __The ones that, for any reason, are not ready to receive the new response must be adjusted before January 30.__
