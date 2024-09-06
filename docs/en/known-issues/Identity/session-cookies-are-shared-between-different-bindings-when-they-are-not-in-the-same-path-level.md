---
title: 'Session cookies are shared between different bindings when they are not in the same path level'
id: 4pKeUI7qtdByaQowYs19Et
status: PUBLISHED
createdAt: 2023-10-25T01:06:04.190Z
updatedAt: 2023-10-25T01:06:04.707Z
publishedAt: 2023-10-25T01:06:04.707Z
firstPublishedAt: 2023-10-25T01:06:04.707Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: session-cookies-are-shared-between-different-bindings-when-they-are-not-in-the-same-path-level
locale: en
kiStatus: No Fix
internalReference: 925071
---

## Summary


Cookies for Session information are exclusive to the specific account binding, but bindings that are not under the same path level may receive cookies from lower levels, leading to issues.

If they are from the same account, Session information will be mixed and override critical parameters. If they are from different accounts, it may block requests, generating errors like "cross-account requests are not allowed".


##

## Simulation


An example of a scenario is a store that uses the root path `/` for its default language (English) and `/fr` for a second language (French). Information from the store in English may affect the French store and vice-versa.

Another example is a B2C store under `/us` for the specific country and the B2B store under `/us/corporate`.


##

## Workaround


Stores that share the same host/domain may keep the same pattern for their path without mixing different levels. Ideas of alternatives for the presented examples would be `/en` versus `/fr` (both using a single-level path) and `/us/personal` versus `/us/corporate` (two-level path).




