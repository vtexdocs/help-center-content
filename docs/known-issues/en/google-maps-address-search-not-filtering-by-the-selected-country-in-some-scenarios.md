---
title: Google Maps address search not filtering by the selected country in some scenarios
id: 4zv3tvCMRBiZEWrQZnLViA
status: PUBLISHED
createdAt: 2023-01-04T21:02:55.874Z
updatedAt: 2023-01-04T21:02:56.479Z
publishedAt: 2023-01-04T21:02:56.479Z
firstPublishedAt: 2023-01-04T21:02:56.479Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: google-maps-address-search-not-filtering-by-the-selected-country-in-some-scenarios
kiStatus: Backlog
internalReference: 727408
---

## Summary


Google Maps address searches for countries without specific internal rules aren't filtered to return only this selected country.


##

## Simulation


Considering Panama as a country that fits this internal condition, while in the geolocation mode and searching for "calle", the component brings addresses from Spain instead of strictly filtering to Panama addresses.


##

## Workaround


N/A




