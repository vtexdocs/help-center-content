---
title: 'B2B impersonated data is not removed after logging out'
id: bHYLV4reDQl4epmPbYwmJ
status: PUBLISHED
createdAt: 2024-07-18T21:56:41.780Z
updatedAt: 2024-07-18T21:56:42.802Z
publishedAt: 2024-07-18T21:56:42.802Z
firstPublishedAt: 2024-07-18T21:56:42.802Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: b2b-impersonated-data-is-not-removed-after-logging-out
locale: en
kiStatus: Backlog
internalReference: 1067969
---

## Summary


Logging out after impersonating a user in B2B Suite doesn't remove the storefront-permissions from the session.

This allows the user to navigate the website and even place orders if the impersonated user has access to checkout.


##

## Simulation



- Login with a user with impersonating roles;
- Impersonate another user;
- Logout.


##

## Workaround


Click "Stop Impersonation" to remove the impersonated data from the session.




