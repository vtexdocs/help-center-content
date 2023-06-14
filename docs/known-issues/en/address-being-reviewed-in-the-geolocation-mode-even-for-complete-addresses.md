---
title: 'Address being reviewed in the geolocation mode even for complete addresses'
id: 6eHvTDvNlIiBGmlUJAAsNU
status: PUBLISHED
createdAt: 2022-08-11T18:40:54.009Z
updatedAt: 2022-11-25T21:50:49.555Z
publishedAt: 2022-11-25T21:50:49.555Z
firstPublishedAt: 2022-08-11T18:40:54.667Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: address-being-reviewed-in-the-geolocation-mode-even-for-complete-addresses
locale: en
kiStatus: Backlog
internalReference: 618724
---

## Summary


The "calculate shipping" button, used for address validation in the geolocation mode (address inserted via Google Maps), is being shown even for complete addresses. It should be shown only for edited addresses – due to changed information or addresses that were incomplete at the first moment – to ensure that they are valid, but not for complete addresses.



## Simulation


In a store that is using the geolocation mode, insert an address. Be sure to be a complete address that will return the street, neighborhood, and especially the number. The "calculate shipping" button shouldn't be shown.

It may not happen for every country.



## Workaround


N/A

