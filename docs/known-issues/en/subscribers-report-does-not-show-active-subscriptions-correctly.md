---
title: 'Subscribers report does not show active subscriptions correctly'
id: 4sqvm1v4CbCJLQ3HBBVTmp
status: PUBLISHED
createdAt: 2022-05-27T19:44:57.301Z
updatedAt: 2024-07-01T18:48:23.947Z
publishedAt: 2024-07-01T18:48:23.947Z
firstPublishedAt: 2022-05-27T19:44:57.688Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: subscribers-report-does-not-show-active-subscriptions-correctly
locale: en
kiStatus: No Fix
internalReference: 587556
---

## Summary


When we export the subscribers report, the information in the `TotalSubscriptions` and `TotalSubscriptionsActives` columns are divergent compared to the information shown in the dashboard.
This is due to some subscriptions that were migrated from v2 to v3, because in v2 the architecture was different, being considered by SKU, and in v3 is considered by order.



## Simulation


You can simulate this scenario with a subscription that has been migrated from v2 to v3.

1. Go to the functionality "**Orders > Subscriptions > Dashboards > Subscribers > Export Report**";
2. Check an email that has at least one subscription with more than one SKU;
3. Note that the number of subscriptions in the report will be the same as the number of SKUs, not the subscriptions.



## Workaround


There is no workaround available.

