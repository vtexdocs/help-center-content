---
title: 'From now on, you can export up to 3 thousand orders'
id: vo2h9LyDReC6iSkSOKucG
status: PUBLISHED
createdAt: 2018-10-24T21:41:38.655Z
updatedAt: 2020-05-12T15:39:59.845Z
publishedAt: 2020-05-12T15:39:59.845Z
contentType: updates
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: from-now-on-you-can-export-up-to-3-thousand-orders
legacySlug: from-now-on-you-can-export-up-to-3-thousand-orders
announcementImageID: ''
announcementSynopsisEN: "The limit will guarantee the platform's performance, without quality loss of the generated reports."
---

As of __October 24__, the orders management module will only allow you to export up to 3.000 orders. This limit will guarantee the platform's performance, without quality loss of the generated reports.

## What has changed
To ensure the best experience possible, we've been recommending the 3.000 orders limit since June 2018 (as seen on the warning published on the [Exporting orders in OMS] article(/en/tutorial/exporting-orders-with-oms)). The only difference now is that the __button will only be available if the limit is fully respected__.

## How to export more than 3.000 orders
You can still export more than 3.000 orders. To do so, you must use our orders management (formerly known as OMS) APIs: [Get Order](https://developers.vtex.com/reference/orders#getorder) and [Get Feed Order Status](https://developers.vtex.com/reference/feed-v3#getfeedorderstatus1).

<div class="alert alert-warning">
<strong>But remember:</strong> For it to work, it's necessary to <strong>create a date/hour range that includes up to 3.000 orders</strong>. After defining a range that respects this limit, you'll be able to make as many requests to the API as you want.
</div>
