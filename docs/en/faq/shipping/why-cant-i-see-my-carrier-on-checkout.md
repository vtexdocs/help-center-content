---
title: "Why can't I see my carrier on checkout?"
excerpt: "Checkout hides a carrier when docks, sales channels, delivery type, or freight tables are misconfigured. Check those Shipping settings first."
id: frequentlyAskedQuestions_165
status: PUBLISHED
createdAt: 2017-04-27T22:39:09.470Z
updatedAt: 2023-08-25T15:13:42.026Z
publishedAt: 2023-08-25T15:13:42.026Z
firstPublishedAt: 2017-04-27T23:01:43.444Z
contentType: frequentlyAskedQuestion
productTeam: Shipping
author: authors_84
slugEN: why-cant-i-see-my-carrier-on-checkout
locale: en
legacySlug: why-cant-i-see-my-carrier-on-checkout
---

Choosing a carrier is a required step at checkout.

Sometimes a carrier does not appear. The six cases below are the most common. Before you continue, confirm that [carriers are registered](/en/docs/tutorials/carriers-on-vtex). All of these checks are in [Shipping](/en/docs/tutorials/fulfillment-logistics-vtex).

## Carrier type conflict

When you register carriers, you assign a [delivery type](/en/docs/tutorials/shipping-policy). Checkout shows delivery types, not each carrier name.

Checkout highlights the cheapest or fastest carrier of the same delivery type. A carrier does not appear when another carrier of the same type has a better cost or delivery time.

> ⚠️ If two carriers tie, the one with the lower shipping cost wins.

### Solution

To show all carriers, register them in **Store Settings > Shipping > Settings** with *different delivery types*.

## Carrier does not serve the address

When you register a carrier, add the ZIP code range or geolocation polygon it serves in the [shipping rate template](/en/docs/tutorials/shipping-rate-template). The location fields are `country`, `ZIPCodeStart`, `ZIPCodeEnd`, and `PolygonName`.

If the customer's address is outside those ranges, that carrier is not offered.

### Solution

Check the [shipping rate template](/en/docs/tutorials/shipping-rate-template) and confirm that the ZIP code range or polygon covers the delivery address.

## Volume exceeds the maximum

If an item exceeds the *maximum volume* in the shipping rate spreadsheet, the carrier does not take the order.

### Solution

In **Store Settings > Shipping > Settings**, confirm that the max volume matches the carrier.

Download the shipping rate spreadsheet, update the `MaxVolume` column, and import it again.

## Shipment weight exceeds the maximum

If an item exceeds the *maximum weight* in the shipping rate spreadsheet, the carrier does not take the order.

### Solution

In **Store Settings > Shipping > Settings**, confirm that the weight range matches the carrier.

Update `weightStart` and `weightEnd` in the spreadsheet, then import it again.

## Shipment splitting not allowed

An order can be split into two shipments. For example, if the order is 40 kg and the carrier allows 30 kg per shipment, two 20 kg shipments can be used. If shipment splitting is off and the order exceeds the carrier limit, that carrier is not shown at checkout.

### Solution

Enable [split shipment](/en/docs/tutorials/configuring-cargo-splitting) in **Store Settings > Shipping > Settings**.

## Optimization of shipping options at checkout

**Optimization of shipping options** (Lean Shipping) hides slower or more expensive options so they are not shown at checkout. Some carriers may be omitted in those cases.

### Solution

Turn off [Optimization of shipping options at checkout](/en/docs/tutorials/optimization-of-shipping-options-at-checkout).

> ⚠️ After you turn it off, all available shipping options appear at checkout. If [Multiple Deliveries](/en/docs/tutorials/order-split-and-delivery-split) is on and items in the cart have different delivery options, optimized options still apply so the store can handle multiple packages.
