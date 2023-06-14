---
title: "Timeout API Get Account's Approval Settings"
id: 5dalpuBbuRYXj5WSal8UqR
status: PUBLISHED
createdAt: 2023-03-16T19:26:12.430Z
updatedAt: 2023-03-21T17:28:51.737Z
publishedAt: 2023-03-21T17:28:51.737Z
firstPublishedAt: 2023-03-16T19:26:12.826Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: timeout-api-get-accounts-approval-settings
kiStatus: Fixed
internalReference: 772840
---

## Summary



This route returns "Maximum response size reached" when the JSON response has more than 100MB.


##

## Simulation



For accounts with a lot of information on the matcher or on the specifications mapping object, this response will happen on this API
GET https://api.vtex.com//suggestions/configuration


##

## Workaround



N/A





