---
title: "Config decimal digits ignored"
id: 4YPKxykUfDk8I3iove5NFq
status: PUBLISHED
createdAt: 2025-03-10T18:07:48.419Z
updatedAt: 2025-03-10T18:08:12.749Z
publishedAt: 2025-03-10T18:08:12.749Z
firstPublishedAt: 2025-03-10T18:08:12.749Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: config-decimal-digits-ignored
locale: en
kiStatus: Backlog
internalReference: 1191382
---

## Summary


When configuring zero as decimal digits in orderForm Config and in the trade policies `Currency decimal places` field, the sales app ignores this configuration and displays the decimal digits.


##

## Simulation


In a store with the sales app, set the decimal digits in orderForm Config and the trade policy as zero.

Wait for indexing and check the sales app UI. There will be no change in PLP, PDP, or checkout.


##

## Workaround


N/A




