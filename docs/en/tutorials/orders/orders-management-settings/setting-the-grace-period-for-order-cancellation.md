---
title: 'Setting the grace period for order cancellation'
id: jYFdnPDtNm4WCEkYWqqC
status: PUBLISHED
createdAt: 2019-01-24T20:45:41.819Z
updatedAt: 2023-03-29T20:04:52.622Z
publishedAt: 2023-03-29T20:04:52.622Z
firstPublishedAt: 2019-01-24T22:01:02.686Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: setting-the-grace-period-for-order-cancellation
legacySlug: setting-the-grace-period-for-order-cancellation
locale: en
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

The grace period for order cancellation is the time window in which the order can be automatically canceled by the client. It starts at the payment approval and ends after the time determined by the store.

That is, if the customer requests cancellation before or during the grace period for cancellation, the order is canceled without the store having to approve the cancellation.

If the customer requests cancellation after the grace period has ended, the store receives the request, but cancellation is only made if the store approves it at the Orders management.

> ℹ️ By default, the grace period for order cancellation is set to 30 minutes, but you can change it to better meet your business' demands.

For example, if your store sells food or pharmaceuticals that need to be delivered in a short time, it probably makes sense to have a lower cancellation tolerance.

To configure this time window, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Orders > Settings**, or type *Orders* in the search bar at the top of the page and select *Store Settings / Orders*.
2. On the **General** tab, on the **Orders** section, set the grace period in minutes in the field `Cancellation grace period`.
3. Click `Save`.

### Related articles

- [Setting the grace period for order cancellation](/en/docs/tutorials/order-cancellation-requested-by-the-customer)
- [Why was my order cancelled?](/en/troubleshooting/my-store-order-was-canceled)
