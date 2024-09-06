---
title: 'Cookie broken the API/Sessions'
id: 5knDMVZabZRYaEtITjkDbE
status: PUBLISHED
createdAt: 2023-03-27T19:54:42.696Z
updatedAt: 2024-03-20T20:34:36.743Z
publishedAt: 2024-03-20T20:34:36.743Z
firstPublishedAt: 2023-03-27T19:54:43.232Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: cookie-broken-the-apisessions
locale: en
kiStatus: Backlog
internalReference: 779014
---

## Summary


When there is a script that generates a cookie to tracking the users and its cookie broken the call to /api/sessions, e.g. because it have a special charter in the value cookie. Then we need to discard that malformed cookies from our side and keep all others, so that it does not affect the behavior.


##

## Simulation



The scenario was mapped on Facebook:

When you enter the page from a Facebook ad, automatically loads the page in the native META browser and when you get to the checkout page does not load correctly, therefore it is not possible to finalize the purchase.

Facebook used to redirect to browsers but they don't do it anymore because they integrated their browser into their application.


##

## Workaround


N/A





