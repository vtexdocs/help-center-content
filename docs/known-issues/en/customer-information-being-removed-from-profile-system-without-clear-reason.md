---
title: 'Customer information being removed from Profile System without clear reason'
id: 3xnhH9VXa5Gj0oag44cG1I
status: PUBLISHED
createdAt: 2022-06-25T10:53:51.548Z
updatedAt: 2022-11-25T21:51:36.884Z
publishedAt: 2022-11-25T21:51:36.884Z
firstPublishedAt: 2022-06-25T10:53:51.851Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: customer-information-being-removed-from-profile-system-without-clear-reason
locale: en
kiStatus: Backlog
internalReference: 469823
---

## Summary


Sometimes we receive reports where the customer information was removed from Master Data's CL and AD entities, which can be managed in a lot of ways – direct usage from Master Data by the store itself (UI, API, importing/exporting data) and other internal integrations from the platform, like the CHK service trough Profile System.

While the changes are made with the same internal application key, there's no clarity about the origin service that calls the MD/PS. But, considering the context, previous modifications, their timestamp along the created order, we can easily associate a lot of these cases to the Checkout.

We can easily relate occurrences like this to the KI's #340036 and #327630.



## Simulation


There's no direct way to reproduce orders in this scenario. We are restricted to previously reported orders.



## Workaround


N/A

