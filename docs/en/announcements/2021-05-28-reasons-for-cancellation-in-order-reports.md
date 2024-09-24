---
title: 'Reasons for cancellation in order reports'
id: 46wIwISm6Df2LJgNePpFYK
status: PUBLISHED
createdAt: 2021-05-28T15:59:23.942Z
updatedAt: 2022-08-29T23:27:11.506Z
publishedAt: 2022-08-29T23:27:11.506Z
contentType: updates
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: reasons-for-cancellation-in-order-reports
locale: en
legacySlug: reasons-for-cancellation-in-order-reports
announcementImageID: ''
announcementSynopsisEN: 'We have added a Cancellation Data column to order reports to give more visibility into the reasons for cancellation.'
---

You can use order reports to analyze store performance or as packing slips, to facilitate store logistics.

We have added a **Cancellation Reason** column to order reports to give retailers more visibility into the reasons for cancellations requested by customers.

## What has changed?

The order report (exported in the **Order Management** module or via the Orders API) did not show details about the cancellation of orders. Only the **Cancellation Data** column was displayed, and always with null values. The information in this column corresponds to the `cancelReason` field in the Orders API.

The report now contains a **Cancellation Reason** column that displays the reason given by the end customer for canceling the order. Previously, this information was only displayed in the interactions section of the order details page in the Admin and in the `Reason` field of the `cancellationData` object in the Orders API.

If the user does not provide a reason when canceling the order, the new column will be empty in the report.

## Why did we make this change?

We have included the reasons for cancellation in order reports to make it easier for retailers to extract this data and analyze it.

## What needs to be done?

No action is needed. The change will be automatically implemented in all VTEX stores. From now on, all order reports will be generated in the new format.

Learn how to export orders in our tutorial [Exporting orders in Orders management](https://help.vtex.com/en/tutorial/exporting-orders-in-orders-managment--tutorials_6417) and learn more about the report structure in our article[Order report](https://help.vtex.com/en/tutorial/order-report--31m1ewsmsEe0WS4So2aGMY).
