---
title: "GeoCoordinates data can't be informed for some cultureInfo"
id: 4MjLbyrniWsPKpFBHgn8sG
status: PUBLISHED
createdAt: 2022-05-19T16:19:45.245Z
updatedAt: 2024-07-01T18:48:21.888Z
publishedAt: 2024-07-01T18:48:21.888Z
firstPublishedAt: 2022-05-19T16:19:45.749Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: geocoordinates-data-cant-be-informed-for-some-cultureinfo
locale: en
kiStatus: No Fix
internalReference: 582065
---

## Summary



Some "cultureInfo" options, like "en-ZA" (South Africa) are generating issues along with the "geoCoordinates" property from the checkout service.
This information is used from calculating shipping options to defining a "regionId" (the sellers that covers an address).
The sent information will be refused, generating errors or simply being ignored deppending on the API.
It seems to be related with the decimal and thousands separator for certain "cultureInfo" – for "en-ZA" it seems related to the thousands separator being a blank space, although their decimal separator is a comma, as used in other countries.



## Simulation


- to have a store configured with "en-ZA" as "cultureInfo" (defined on the trade policy)
- to try calculating a regionId on its API or even retreving SLAs (shipping options) on a simulation request



## Workaround


There's no direct workaround to use the correct "cultureInfo", but you can try to find alternative options that behave as the expected option.
Note that the "cultureInfo" mainly defines the language, but also the formatting for numbers, dates, and curency, including the curency symbol position.

