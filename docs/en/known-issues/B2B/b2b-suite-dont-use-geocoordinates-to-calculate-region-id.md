---
title: "B2B Suite don't use geocoordinates to calculate region Id"
id: 7ITcf4hiOD1k6XBIhaCclj
status: PUBLISHED
createdAt: 2024-06-24T21:48:19.921Z
updatedAt: 2024-06-27T20:58:12.541Z
publishedAt: 2024-06-27T20:58:12.541Z
firstPublishedAt: 2024-06-24T21:48:20.731Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-suite-dont-use-geocoordinates-to-calculate-region-id
locale: en
kiStatus: Backlog
internalReference: 1055033
---

## Summary


It's possible to use shipping rates using postal codes or geocoordinates, but B2B Organizations use only postal codes to calculate region IDs. If an account has geolocation (polygons) registered in its shipping rates, products will be shown as unavailable on the storefront.


##

## Simulation



- Register shipping rates with polygons;
- Create an organization;
- Log in in the store;
- No product is shown.


##

## Workaround


N/A




