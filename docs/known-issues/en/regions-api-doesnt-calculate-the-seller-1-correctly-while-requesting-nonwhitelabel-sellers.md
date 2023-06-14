---
title: "Regions API doesn't calculate the "seller 1" correctly while requesting non-whitelabel sellers"
id: 20sT9AMMi7Ob5IZc7FeiCB
status: PUBLISHED
createdAt: 2022-03-28T20:45:27.687Z
updatedAt: 2022-11-25T21:53:57.112Z
publishedAt: 2022-11-25T21:53:57.112Z
firstPublishedAt: 2022-03-28T20:45:28.144Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: regions-api-doesnt-calculate-the-seller-1-correctly-while-requesting-nonwhitelabel-sellers
locale: en
kiStatus: Backlog
internalReference: 551402
---

## Summary



The API to retrieve the regionId for a given address isn't doing the shipping estimate internal request correctly for the "seller 1", which is included while declaring "desiredSellerType" for non-whitelabel sellers.

As result, the "seller 1" may appear as it doesn't have shipping coverage for the given address.



## Simulation



- to query a valid address on the API "GET /api/checkout/pub/regions?country=XXX&postalCode=YYYYY&sc=1&desiredSellerType=Default"
- note that the "seller 1" may not be returned



## Workaround



N/A

