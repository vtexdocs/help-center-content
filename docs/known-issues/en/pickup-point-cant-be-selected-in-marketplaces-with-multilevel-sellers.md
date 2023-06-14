---
title: "Pick-up point can't be selected in marketplaces with multi-level sellers"
id: 1DGiyBrbw9qXGVMhX3k5gs
status: PUBLISHED
createdAt: 2023-01-11T19:57:54.964Z
updatedAt: 2023-01-11T19:57:55.883Z
publishedAt: 2023-01-11T19:57:55.883Z
firstPublishedAt: 2023-01-11T19:57:55.883Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pickup-point-cant-be-selected-in-marketplaces-with-multilevel-sellers
locale: en
kiStatus: Backlog
internalReference: 524073
---

## Summary


In a marketplace with a multi-level relationship (MOI), when a pick-up point is selected, the marketplace returns a communication error with the seller, preventing the use of pick-up-points in the marketplace along with those sellers.

At the 2nd level (Direct Seller), the internal error is "The address cannot be used for the given delivery channel (status code: 400)".

This behavior happens because the UI sends the request with a combination of `"selectedDeliveryChannel": null` and `"addressType": "search"`.


##

## Simulation



- Access a marketplace account that has regular sellers using the multi-level relationship (MOI)
- Look for an address that has pick-ups that cover the location
- A seller communication error message will appear


##

## Workaround


N/A




