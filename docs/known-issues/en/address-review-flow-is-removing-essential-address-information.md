---
title: 'Address review flow is removing essential address information'
id: 416pFRk6KsWIfgPr8pzWii
status: PUBLISHED
createdAt: 2022-08-11T18:33:49.548Z
updatedAt: 2022-11-25T21:50:56.733Z
publishedAt: 2022-11-25T21:50:56.733Z
firstPublishedAt: 2022-08-11T18:33:50.049Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: address-review-flow-is-removing-essential-address-information
kiStatus: Backlog
internalReference: 618756
---

## Summary


The address validation in the geolocation mode (address inserted via Google Maps) is removing essential information, like the street and number, from valid addresses, affecting the purchase flow.

The "calculate shipping" button, used for address validation in the geolocation mode (address inserted via Google Maps), is being shown even for complete addresses. It should be shown only for edited addresses – due to changed information or addresses that were incomplete at the first moment – to ensure that they are valid, but not for complete addresses.



## Simulation



- In a store that is using the geolocation mode, insert an incomplete address (without the number, as example)
- Fulfill the missing fields (number)
- It'll show the "calculate shipping" button, which will validate the edited address along Google Maps to ensure geocoordinates.

At this moment, the checkout may go to the shipping selection step, but the address may lose information.

It may not happen for every country or address.



## Workaround


N/A

