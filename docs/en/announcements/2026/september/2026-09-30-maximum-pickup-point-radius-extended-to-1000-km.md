---
title: 'Pickup points: Maximum radius extended to 1,000 km'
createdAt: '2026-09-30T00:00:00.000Z'
updatedAt: '2026-09-30T00:00:00.000Z'
contentType: updates
productTeam: Post-purchase
slugEN: 2026-09-30-maximum-pickup-point-radius-extended-to-1000-km
locale: en
announcementSynopsisPT: 'The maximum radius between the pickup point and the customer''s address has increased from 50 km to 1,000 km and can now be configured directly in the VTEX Admin, without opening a ticket.'
tags:
  - Improvement
  - Logistics
---

The maximum search radius for pickup points has been extended from 50 km to 1,000 km. With this change, stores can adjust the radius themselves directly in the VTEX Admin, without opening a ticket with VTEX Support.

## What has changed?

Previously, the maximum radius between the pickup point and the customer's address was limited to 50 km. To use a different value, you had to open a ticket for review by the VTEX Support team.

Now, you can set a radius of up to 1,000 km directly in the store's shipping settings.

This change doesn't affect the store's day-to-day operations. The change only affects the maximum value allowed for this setting.

## What needs to be done?

You don't need to open a ticket. To change the pickup point radius, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Shipping > Settings**, or type **Settings** in the search bar at the top of the page. You can also go directly to `https://{accountName}.myvtex.com/admin/logistics#/config`, replacing `{accountName}` with your account name.
2. Set the pickup point radius to the desired value, up to 1,000 km. Values above 1,000 km aren't applied, even if the interface allows you to enter them.
   > ℹ️ We recommend setting the smallest radius that covers the area served by your operation and increasing it only if necessary. A larger radius increases the pickup point search time, which can affect checkout response time.
3. Save changes.

> ⚠️ This setting is applied at the **account** level. If you have franchise accounts, you must change the settings in each of them.

## Learn more

- [Pickup points](https://help.vtex.com/en/docs/tutorials/pickup-points)
