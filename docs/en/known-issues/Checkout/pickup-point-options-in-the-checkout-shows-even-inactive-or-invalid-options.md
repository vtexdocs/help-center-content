---
title: "Pickup point options in the checkout shows even inactive or invalid options"
id: 4LF45BWQxDh6r7Bk7chu4P
status: PUBLISHED
createdAt: 2022-05-31T18:07:23.568Z
updatedAt: 2022-11-25T21:52:19.067Z
publishedAt: 2022-11-25T21:52:19.067Z
firstPublishedAt: 2022-05-31T18:07:24.033Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-point-options-in-the-checkout-shows-even-inactive-or-invalid-options
locale: en
kiStatus: Backlog
internalReference: 328464
---

## Summary


The pickup points modal, from the checkout, shows in blue the options valid as calculated SLA for the cart and in gray other options that weren't previously calculated as SLA, so the shopper can know about these options and even check their availability on demand. These options come from the `/api/checkout/pub/pickup-points` API (which is just a proxy to the Logistics service), which will list every pickup point from the store.

The problem is that this API doesn't filter out:
- deactivated pickups
- their relationship between loading docks and shipping policies
- and if they are valid for the current sales channel/trade policy

In this way, it'll list invalid options for the shopper.



## Simulation


To have a store with some pickups deactivated and/or unrelated to the current sales channel.



## Workaround


There's no known workaround.

