---
title: 'PlaceOrder generating wrong discount and shipping values between items that appear more than once'
id: 01ipdei4r6juYcXD3xFz4b
status: PUBLISHED
createdAt: 2023-01-12T19:13:16.232Z
updatedAt: 2023-02-13T20:27:56.279Z
publishedAt: 2023-02-13T20:27:56.279Z
firstPublishedAt: 2023-01-12T19:13:16.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: placeorder-generating-wrong-discount-and-shipping-values-between-items-that-appear-more-than-once
locale: en
kiStatus: Backlog
internalReference: 732529
---

## Summary


When the order creation request declares the same item more than once, required to declare different prices or discount values between the multiple units of the item, the checkout service will sum up all the quantities in a single item and apply only the conditions from the first item in all of them. It'll generate a wrong total price/discount and even shipping.

A quick example of this scenario is while applying a "more for less" promotion in an external place order request, or even when this condition happens at the marketplace level for a Multilevel Omnichannel inventory (MOI) scenario.


##

## Simulation



- Access a marketplace account that has regular sellers using the multi-level relationship (MOI)
- Add a product that has a "more for less" promotion and places the order
- Check the total price (discounts and shipping) at the seller

This is just an easier way to simulate, but you can also use the Place Order API


##

## Workaround


N/A




