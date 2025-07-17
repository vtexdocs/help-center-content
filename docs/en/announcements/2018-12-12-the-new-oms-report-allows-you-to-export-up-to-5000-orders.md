---
title: 'The new OMS report allows you to export up to 5000 orders'
id: 3KLZdi2MjmUAAKeUWCIU0a
status: PUBLISHED
createdAt: 2018-12-12T17:26:42.584Z
updatedAt: 2020-05-12T15:27:46.656Z
publishedAt: 2020-05-12T15:27:46.656Z
contentType: updates
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: 2018-12-12-the-new-oms-report-allows-you-to-export-up-to-5000-orders
locale: en
legacySlug: the-new-oms-report-allows-you-to-export-up-to-5000-orders
announcementImageID: ''
announcementSynopsisEN: "As of 12/13, you'll be able to export up to 5.000 orders in the Orders Management module."
---

We have released the Orders Management module's new report, with more consistency and even better performance. The release let our developers work on something many clients were asking: As of __December 12 of 2018__, you'll be able to export up to __5.000 orders at once__.


## Main advantages
While it solves our clients' needs, this change doesn't affect the platform's performance and ensures there's no quality loss on the generated reports.

The previous limit (3.000 orders) has fulfilled its mission to keep things stable and, with the release of the new report,  we could finally increase that number.


## What has changed
The module's behavior remains the same since the last update: If the applied filter refers to more than 5000 orders, __the button becomes unavailable and will only be accessible when the limit is respected__.


## How to export more than 5.000 orders
You can export more than 5.000 orders using the Orders Management (formerly known as OMS) APIs: [Get Order](https://developers.vtex.com/reference/orders#getorder) and [Get Feed Order Status](https://developers.vtex.com/reference/note).

<div class="alert alert-warning">
<strong>But remember:</strong> For it to work, it's necessary to <strong>create a date/hour range that includes up to 5.000 orders</strong>. After defining a range that respects this limit, you'll be able to make as many requests to the API as you want.
</div>
