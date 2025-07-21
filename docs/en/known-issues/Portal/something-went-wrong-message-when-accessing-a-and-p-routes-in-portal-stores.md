---
title: "Something went wrong message when accessing /a and /p routes in Portal stores"
id: 2XGAGH8xpNqjJpAir6DKzz
status: PUBLISHED
createdAt: 2023-11-30T16:31:45.428Z
updatedAt: 2023-11-30T16:31:45.990Z
publishedAt: 2023-11-30T16:31:45.990Z
firstPublishedAt: 2023-11-30T16:31:45.990Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: something-went-wrong-message-when-accessing-a-and-p-routes-in-portal-stores
locale: en
kiStatus: Backlog
internalReference: 945226
---

## Summary


It is expected to search for any term in the Portal's stores; however, the letters "A" and "P" are not directly searchable via the URL.
So, a "Something went wrong" message will appear when accessing `/a` and `/p` routes in Portal stores


##

## Simulation



1. Go to a portal store
2. Go to the link `site.com/a` or `site.com/p`
3. See a "Something went wrong" on the front


##

## Workaround


N/A to `/a` path
Register a redirect in the legacy CMS from `/p` to `/?ft=p`





