---
title: 'You can now accept marketplace order with price differences'
id: 2hbmlBKFeU0OsECukOcw4w
status: PUBLISHED
createdAt: 2018-11-12T17:52:20.888Z
updatedAt: 2020-09-04T21:12:19.603Z
publishedAt: 2020-09-04T21:12:19.603Z
contentType: updates
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slug: boost-your-marketplace-sales
locale: en
legacySlug: boost-your-marketplace-sales
announcementImageID: ''
announcementSynopsisEN: 'The new feature makes it easier to identify orders with price difference and allows your store to recover sales.'
---

<div class ="alert alert-warning">
Since this announcement was originally published, it's no longer necessary to contact VTEX support in order to integrate orders with price divergence. You do <strong>not</strong> need to open a ticket anymore to use this feature. Instead, access it through your Admin panel, in <b>Orders management</b> > <b>Orders Authorization</b>.

Now you have the option to accept orders from marketplaces which have price variations. To allow that, we introduced the new `waiting-for-manual-authorization` status in the order flow, giving you the chance to do it manually.

Price changes may take a while to appear in the marketplace. When someone purchased a product in the meantime, that order would get lost in the flow. The new feature makes it easier to identify such orders, allowing you to evaluate and accept them. This lets you __recover sales and profit even more in seasons like Black Friday__ when such changes occur more often and in short periods of time.

## What has changed
The new feature is optional and depends on a simple setup (described below). __If you decide not to do it, the order flow will remain just as it is today__.

## What you need to do to use it
If your store has __an external marketplace integration__ (and you want to use the new feature) follow the instructions:

1. The marketplace integration (it's the marketplace's entire responsibily) will need to activate the `isCreatedAsync` flag in the PlaceOrder (in the body).]
2. [Open a ticket](https://support.vtex.com/hc/en-us/requests) within our support team, informing: the __Account__, the __email list of the people authorized to accept orders with divergent prices__, and the __variation range (%) that can be approved__.
3. After fulfilling the previous steps, use the filters in the __Orders Management__ module (formerly known as OMS) to identify orders with the new `waiting-for-manual-authorization` status. Only authorized users will be able to approve or deny these orders, following your store's criteria. 

If your store is integrated with __VTEX's certified marketplaces__ (using the Bridge module), the flag will be activated automatically. You'll only need to fulfill the instructions described on items `2` and `3`.

>ℹ️ Remember that order integrations need to be done using the [Get Order](https://developers.vtex.com/reference/orders#getorder) and [Get Feed Order Status](https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus) APIs.
